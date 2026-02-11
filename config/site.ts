import { Rocket, Mail, Users, Timer, BarChart, Globe } from 'lucide-react'
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
  tagline: 'Beautiful waitlist pages for indie hackers',
  description: 'Create stunning waitlist pages with email capture, referral tracking, and countdown timers in minutes.',
  url: process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'http://localhost:3000',
  company: 'ImWaiting',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Blog', href: '/blog' }
  ],

  dashboardNav: [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Launch Pages', href: '/dashboard/launch_pages' },
    { title: 'Analytics', href: '/dashboard/analytics' },
    { title: 'Settings', href: '/dashboard/settings' }
  ],

  hero: {
    badge: 'Built for Indie Hackers',
    headline: 'Launch Your Next Product with',
    headlineHighlight: 'A Waitlist That Converts',
    subheadline: 'Stop stitching together Carrd, Mailchimp, and SparkLoop. ImWaiting gives you a beautiful coming-soon page with built-in email capture, referral tracking, countdown timer, and analytics — all in under 5 minutes.',
    primaryCta: { text: 'Create Your Waitlist Free', href: '/register' },
    secondaryCta: { text: 'See How It Works', href: '/features' },
    socialProof: { text: 'Trusted by 2,000+ indie hackers', rating: '4.9/5' },
  },

  features: [
    {
      icon: Rocket,
      title: 'Launch-Ready Templates',
      description: 'Choose from stunning, mobile-responsive coming-soon templates designed to convert visitors into waitlist subscribers.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Mail,
      title: 'Built-in Email Capture',
      description: 'Collect and manage subscriber emails directly — no Mailchimp or ConvertKit setup required. Export anytime as CSV.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Viral Referral Tracking',
      description: 'Every subscriber gets a unique referral link. Track who\'s sharing, see your leaderboard, and reward your biggest advocates.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Timer,
      title: 'Countdown Timer',
      description: 'Build anticipation with a beautiful countdown timer that ticks down to your launch date and creates urgency.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Track visits, signups, conversion rates, referral sources, and daily trends — all from a clean, actionable dashboard.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain with a guided DNS setup wizard. Make your waitlist page look professional from day one.',
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
    twitter: 'https://twitter.com/imwaiting_app'
  },
}
