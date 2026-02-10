import { Mail, Users, Clock, BarChart, Globe, Zap } from 'lucide-react'
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
  tagline: 'Launch pages that build hype before you ship',
  description: 'A waitlist and launch page builder with email capture, referral tracking, and countdown timers for indie hackers.',
  url: process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'http://localhost:3000',
  company: 'ImWaiting',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Examples', href: '/examples' }
  ],

  dashboardNav: [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Launch Pages', href: '/dashboard/launch_pages' },
    { title: 'Analytics', href: '/dashboard/analytics' },
    { title: 'Settings', href: '/dashboard/settings' }
  ],

  hero: {
    badge: 'Built for indie hackers',
    headline: 'Ship your waitlist page in minutes,',
    headlineHighlight: 'not hours of duct-taping tools together',
    subheadline: 'ImWaiting gives you a beautiful launch page with built-in email capture, viral referral tracking, and a countdown timer — all for a flat $12/mo with no contact caps. Stop cobbling together Carrd, Mailchimp, and spreadsheets.',
    primaryCta: { text: 'Create Your Launch Page', href: '/register' },
    secondaryCta: { text: 'See Examples', href: '/examples' },
    socialProof: { text: '500+ launch pages created by indie hackers', rating: '4.9/5' },
  },

  features: [
    {
      icon: Mail,
      title: 'Email Capture Built In',
      description: 'Collect emails with a conversion-optimized signup form — no Mailchimp or ConvertKit integration required to get started.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Viral Referral Tracking',
      description: 'Every subscriber gets a unique referral link. Track who\'s sharing, build leaderboards, and reward your biggest advocates.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Countdown Timer',
      description: 'Set your launch date and display a live countdown that creates urgency and keeps your audience coming back.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart,
      title: 'Founder-Friendly Analytics',
      description: 'See signups by source, referral chains, daily growth velocity, and geographic data — not just a vanity total number.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain in one click on Pro. Free users get a clean yourproject.imwaiting.io subdomain.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'No Contact Caps, Ever',
      description: 'Your waitlist went viral? Celebrate, don\'t panic. Pro is a flat $12/mo whether you have 100 or 100,000 signups.',
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
        { title: 'Examples', href: '/examples' },
        { title: 'Changelog', href: '/changelog' }
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
    discord: 'https://discord.gg/imwaiting',
    twitter: 'https://twitter.com/imwaiting_io'
  },
}
