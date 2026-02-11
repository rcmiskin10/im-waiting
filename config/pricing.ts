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
    signups: 200
  },

  plans: [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for validating your first idea',
      price: { monthly: 0 },
      limits: {
        launch_pages: 1,
        signups: 200
      },
      features: [
        '1 launch page',
        'Up to 200 signups',
        'Email capture & subscriber list',
        'Countdown timer',
        'Basic referral tracking',
        'Basic analytics (visits, signups, conversion rate)',
        'CSV export of subscribers',
        'ImWaiting badge on page'
      ],
      cta: 'Get Started Free',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For serial builders who ship fast',
      price: { monthly: 12, yearly: 99 },
      priceId: process.env.STRIPE_PRICE_PRO,
      limits: {
        launch_pages: -1,
        signups: -1
      },
      features: [
        'Unlimited launch pages',
        'Unlimited signups',
        'Custom domain support',
        'Remove ImWaiting branding',
        'Advanced analytics & referral leaderboard',
        'Referral milestone rewards',
        'Custom welcome & launch emails',
        'A/B testing for page variants',
        'Integrations (Mailchimp, ConvertKit, Resend)',
        'Priority email support'
      ],
      highlighted: true,
      cta: 'Start Pro — $12/mo',
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
