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
    launch_pages: 1,
    signups: 250
  },

  plans: [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for validating your next idea',
      price: { monthly: 0 },
      limits: {
        launch_pages: 1,
        signups: 250
      },
      features: [
        '1 launch page',
        'Up to 250 email signups',
        'Basic referral tracking with unique links',
        'Countdown timer',
        '3 modern templates',
        'Subdomain hosting (you.imwaiting.io)',
        'Basic analytics (total signups, daily chart)',
        'Subtle \'Powered by ImWaiting\' badge'
      ],
      cta: 'Get Started Free',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For serious launches — no limits, no contact caps',
      price: { monthly: 12, yearly: 96 },
      priceId: process.env.STRIPE_PRICE_PRO,
      limits: {
        launch_pages: -1,
        signups: -1
      },
      features: [
        'Unlimited launch pages',
        'Unlimited email signups — no contact caps',
        'Custom domain support',
        'Remove ImWaiting badge',
        'Full analytics dashboard (sources, geography, referral chains)',
        'All templates + custom CSS',
        'Referral leaderboard & milestone rewards',
        'Integrations (Zapier, Discord, Slack, ConvertKit)',
        'Embeddable waitlist widget',
        'CSV/JSON data export',
        'Priority email support'
      ],
      highlighted: true,
      cta: 'Start Pro — $12/mo',
    },
    {
      id: 'team',
      name: 'Team',
      description: 'For studios and teams launching multiple products',
      price: { monthly: 29, yearly: 240 },
      priceId: process.env.STRIPE_PRICE_TEAM,
      limits: {
        launch_pages: -1,
        signups: -1
      },
      features: [
        'Everything in Pro',
        '3 team member seats',
        'A/B testing for landing pages',
        'Custom email sequences',
        'Full API access',
        'White-label option',
        'Stripe pre-launch payment integration',
        'Dedicated support'
      ],
      cta: 'Contact Us',
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
