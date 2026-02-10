export interface PlanLimit {
  [key: string]: number
}

export interface Plan {
  id: string
  name: string
  description: string
  price: { monthly: number; yearly?: number }
  priceId?: string
  yearlyPriceId?: string
  limits: PlanLimit
  features: string[]
  highlighted?: boolean
  cta: string
}

export const pricingConfig: {
  model: 'freemium' | 'free-trial' | 'paid-only'
  trialDays?: number
  defaultLimits: PlanLimit
  plans: Plan[]
} = {
  model: 'freemium',

  defaultLimits: {
    entities: 1,
    signups: 200
  },

  plans: [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for testing your first idea',
      price: { monthly: 0 },
      limits: {
        entities: 1,
        signups: 200
      },
      features: [
        '1 active waitlist page',
        'Up to 200 email signups',
        'Basic referral tracking',
        'Countdown timer',
        '3 starter templates',
        'Basic analytics (signups & trends)',
        'ImWaiting badge on page'
      ],
      cta: 'Get Started Free',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Everything you need to launch like a pro',
      price: { monthly: 12, yearly: 96 },
      priceId: process.env.STRIPE_PRICE_PRO,
      limits: {
        entities: -1,
        signups: -1
      },
      features: [
        'Unlimited waitlist pages',
        'Unlimited email signups',
        'Advanced referral tracking & leaderboard',
        'Custom domain support',
        'Remove ImWaiting branding',
        'Full template library (15+ designs)',
        'Advanced analytics & viral coefficient',
        'Social proof widgets',
        'A/B testing for headlines & CTAs',
        'CSV export of subscribers',
        'Integrations (Zapier, webhooks, ConvertKit, Mailchimp)',
        'Launch day automation',
        'Priority email support'
      ],
      highlighted: true,
      cta: 'Start Pro — $12/mo',
    },
    {
      id: 'agency',
      name: 'Agency',
      description: 'For serial launchers and agencies',
      price: { monthly: 29, yearly: 290 },
      priceId: process.env.STRIPE_PRICE_AGENCY,
      limits: {
        entities: -1,
        signups: -1
      },
      features: [
        'Everything in Pro',
        'Team collaboration (3 seats)',
        'White-label pages',
        'API access & JavaScript SDK',
        'Custom CSS/JS injection',
        'Multiple custom domains per page',
        'Pre-order / Stripe integration',
        'Priority support with 24h response'
      ],
      cta: 'Go Agency',
    }
  ],
}

const planMap = new Map<string, Plan>()
for (const plan of pricingConfig.plans) {
  planMap.set(plan.id, plan)
}

export function getPlan(tier: string): Plan {
  return planMap.get(tier) || pricingConfig.plans[0]
}

export function getPlanByPriceId(priceId: string): string | null {
  for (const plan of pricingConfig.plans) {
    if (plan.priceId === priceId || plan.yearlyPriceId === priceId) {
      return plan.id
    }
  }
  return null
}

export function getLimits(tier: string | null): PlanLimit {
  if (!tier) return pricingConfig.defaultLimits
  const plan = planMap.get(tier)
  return plan?.limits || pricingConfig.defaultLimits
}

export function checkLimit(tier: string | null, limitKey: string, currentUsage: number): boolean {
  const limits = getLimits(tier)
  const limit = limits[limitKey]
  if (limit === undefined) return false
  if (limit === -1) return true
  return currentUsage < limit
}

export function isPaidTier(tier: string | null): boolean {
  if (!tier) return false
  const plan = planMap.get(tier)
  return plan ? plan.price.monthly > 0 : false
}

export function getFreePlan(): Plan | undefined {
  return pricingConfig.plans.find((p) => p.price.monthly === 0)
}

export function getPaidPlans(): Plan[] {
  return pricingConfig.plans.filter((p) => p.price.monthly > 0)
}

export function getHighlightedPlan(): Plan | undefined {
  return pricingConfig.plans.find((p) => p.highlighted)
}

export function getPlanPrice(tier: string | null): number {
  if (!tier) return 0
  const plan = planMap.get(tier)
  return plan?.price.monthly || 0
}
