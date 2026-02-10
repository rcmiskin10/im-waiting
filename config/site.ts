import { Mail, Users, Clock, BarChart, Globe, Sparkles } from 'lucide-react'
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
  tagline: 'The waitlist builder made for indie hackers',
  description: 'Build beautiful launch pages with email capture, referral tracking, and countdown timers for just $12/mo.',
  url: process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'http://localhost:3000',
  company: 'ImWaiting',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Blog', href: '/blog' }
  ],

  dashboardNav: [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Waitlist Pages', href: '/dashboard/entities' },
    { title: 'Subscribers', href: '/dashboard/subscribers' },
    { title: 'Analytics', href: '/dashboard/analytics' },
    { title: 'Settings', href: '/dashboard/settings' }
  ],

  hero: {
    badge: 'Built for Indie Hackers',
    headline: 'Launch Your Next Big Idea',
    headlineHighlight: 'With a Waitlist That Converts',
    subheadline: 'Stop stitching together Carrd, Mailchimp, and referral tools. ImWaiting gives you a beautiful coming-soon page with built-in email capture, referral tracking, countdown timer, and analytics — all in one place for just $12/mo.',
    primaryCta: { text: 'Start Building Free', href: '/register' },
    secondaryCta: { text: 'See Live Examples', href: '/gallery' },
    socialProof: { text: 'Trusted by 1,200+ indie hackers', rating: '4.9/5' },
  },

  features: [
    {
      icon: Mail,
      title: 'Built-In Email Capture',
      description: 'Collect subscriber emails directly on your page with no third-party forms required — manage everything from one dashboard.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Viral Referral Tracking',
      description: 'Every subscriber gets a unique referral link. Track shares, reward top referrers, and watch your waitlist grow organically — even on the free tier.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Clock,
      title: 'Countdown Timer',
      description: 'Build anticipation with a customizable countdown timer that supports timezones and auto-redirects when your launch day arrives.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: BarChart,
      title: 'Conversion Analytics',
      description: 'See signups by source, track your viral coefficient, and understand which channels drive the most engaged subscribers.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain so your waitlist page lives at launch.yourproduct.com — no ImWaiting branding required on Pro.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Social Proof Widgets',
      description: 'Show a live signup counter and recent signups ticker to boost conversions by up to 30% with real-time social proof.',
      gradient: 'from-indigo-500 to-violet-500',
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
        { title: 'Gallery', href: '/gallery' },
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
    github: 'https://github.com/imwaiting',
    twitter: 'https://twitter.com/imwaiting_app'
  },
}
