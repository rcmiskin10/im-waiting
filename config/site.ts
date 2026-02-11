import { Rocket, Users, Mail, Timer, BarChart, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface FooterLink {
  title: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export interface HeroContent {
  badge: string
  headline: string
  headlineHighlight: string
  subheadline: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  socialProof?: { text: string; rating: string }
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  company: string
  mainNav: NavItem[]
  dashboardNav: NavItem[]
  hero: HeroContent
  features: Feature[]
  techStack: Array<{ name: string; color: string }>
  footerSections: FooterSection[]
  footerCopyright: string
  social: {
    twitter?: string
    github?: string
    discord?: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'ImWaiting',
  tagline: 'Launch pages that build hype before you build the product',
  description: 'All-in-one waitlist and launch page builder with referral tracking for indie hackers and solo founders.',
  url: process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'http://localhost:3000',
  company: 'ImWaiting',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Templates', href: '/features#templates' },
    { title: 'Blog', href: '/blog' }
  ],

  dashboardNav: [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Launch Pages', href: '/dashboard/launch_pages' },
    { title: 'Subscribers', href: '/dashboard/subscribers' },
    { title: 'Analytics', href: '/dashboard/analytics' },
    { title: 'Settings', href: '/dashboard/settings' }
  ],

  hero: {
    badge: 'Built for indie hackers 🚀',
    headline: 'Build Waitlist Pages That',
    headlineHighlight: 'Turn Visitors Into Superfans',
    subheadline: 'Create stunning coming-soon pages with built-in email capture, viral referral tracking, and launch countdown timers — all for 1/4 the price of alternatives. Go from idea to live waitlist in under 10 minutes.',
    primaryCta: { text: 'Start Building Free', href: '/register' },
    secondaryCta: { text: 'See Live Examples', href: '/features' },
    socialProof: { text: 'Trusted by 1,200+ indie hackers', rating: '4.9/5' },
  },

  features: [
    {
      icon: Rocket,
      title: 'Launch-Ready in Minutes',
      description: 'Pick from modern, opinionated templates designed for the indie hacker aesthetic and publish your waitlist page in under 10 minutes.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Viral Referral Tracking',
      description: 'Every subscriber gets a unique referral link. They share to move up the waitlist, turning your signups into a growth engine.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Mail,
      title: 'Built-In Email Capture',
      description: 'Collect, manage, search, and export your subscriber list from one dashboard — no Mailchimp duct-taping required.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Timer,
      title: 'Launch Countdown Timer',
      description: 'Build urgency with a beautiful countdown timer that syncs to your launch date and keeps visitors coming back.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: BarChart,
      title: 'Pre-Launch Analytics',
      description: 'Track signup velocity, referral performance, top sources, and conversion rates — purpose-built for pre-launch metrics.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain for a professional look, or use a free yourproject.imwaiting.io subdomain to get started instantly.',
      gradient: 'from-amber-500 to-yellow-500',
    }
  ],

  techStack: [
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'Supabase', color: 'bg-emerald-600 text-white' },
    { name: 'Stripe', color: 'bg-purple-600 text-white' },
    { name: 'Tailwind CSS', color: 'bg-sky-500 text-white' },
    { name: 'Vercel', color: 'bg-gray-900 text-white' }
  ],

  footerSections: [
    {
      title: 'Product',
      links: [
        { title: 'Features', href: '/features' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Templates', href: '/features#templates' },
        { title: 'Changelog', href: '/blog' }
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Blog', href: '/blog' },
        { title: 'Contact', href: '/contact' }
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' }
      ],
    }
  ],

  footerCopyright: '2026 ImWaiting. All rights reserved.',

  social: {
    github: 'https://github.com/imwaiting',
    twitter: 'https://twitter.com/imwaitingio'
  },
}
