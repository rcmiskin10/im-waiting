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
      description: 'Everything you need to validate your first idea',
      price: { monthly: 0 },
      limits: {
        launch_pages: 1,
        signups: 200
      },
      features: [
        '1 waitlist page',
        'Up to 200 signups',
        'Email capture form',
        'Basic referral link tracking',
        'Launch countdown timer',
        'Mobile-responsive templates',
        'Branded subdomain (you.imwaiting.io)',
        'ImWaiting badge on page'
      ],
      cta: 'Start Building Free',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For serial launchers who ship fast and ship often',
      price: { monthly: 12, yearly: 99 },
      priceId: process.env.STRIPE_PRICE_PRO,
      limits: {
        launch_pages: -1,
        signups: -1
      },
      features: [
        'Unlimited waitlist pages',
        'Unlimited signups',
        'Custom domain support',
        'Remove ImWaiting branding',
        'Advanced referral analytics & leaderboard',
        'Custom email notifications',
        'A/B test headlines',
        'Custom thank-you pages',
        'CSV export of subscribers',
        'Zapier & webhook integrations',
        'Priority support'
      ],
      highlighted: true,
      cta: 'Upgrade to Pro',
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
