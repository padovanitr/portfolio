import { FunctionComponent, SVGProps } from 'react'
import BrainIcon from '../../../assets/img/brain.png'
import {
  MixpanelIcon,
  NextjsIcon,
  PostgresqlIcon,
  StripeIcon,
  SupabaseIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VercelIcon,
} from '../../../assets/icons'

export type ProjectInfoType = {
  id: number
  title: string
  description: string
  stack: {
    title: string
    icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  }[]
  url: string
  image: string
  imageAlt: string
}

export const projectsInfo: ProjectInfoType[] = [
  /* {
    id: 1,
    title: 'BabyMensi',
    stack: [
      { title: 'Next.js', icon: NextjsIcon },
      { title: 'TypeScript', icon: TypescriptIcon },
      { title: 'Tailwind CSS', icon: TailwindcssIcon },
      { title: 'Prisma', icon: PrismaIcon },
      { title: 'PostgreSQL', icon: PostgresqlIcon },
      { title: 'Supabase', icon: SupabaseIcon },
      { title: 'Vercel', icon: VercelIcon },
      { title: 'Stripe', icon: StripeIcon },
      { title: 'Mixpanel', icon: MixpanelIcon },
    ],
    url: 'https://www.babymensi.com/',
    image: BabyMensiIcon,
    imageAlt: 'Babymensi project details',
  },
  {
    id: 2,
    title: 'Own Palette',
    stack: [
      { title: 'Next.js', icon: NextjsIcon },
      { title: 'TypeScript', icon: TypescriptIcon },
      { title: 'Tailwind CSS', icon: TailwindcssIcon },
      { title: 'PostgreSQL', icon: PostgresqlIcon },
      { title: 'Supabase', icon: SupabaseIcon },
      { title: 'Inngest', icon: InngestIcon },
      { title: 'OpenAI', icon: OpenaiIcon },
      { title: 'Vercel', icon: VercelIcon },
      { title: 'Stripe', icon: StripeIcon },
      { title: 'Mixpanel', icon: MixpanelIcon },
    ],
    url: 'https://www.ownpalette.com/',
    image: OwnPaletteIcon,
    imageAlt: 'Own Palette project details',
  }, */
  {
    id: 1,
    title: 'GuessWho',
    description: 'A fun and interactive guessing game built with Next.js and TypeScript.',
    stack: [
      { title: 'Next.js', icon: NextjsIcon },
      { title: 'TypeScript', icon: TypescriptIcon },
      { title: 'Tailwind CSS', icon: TailwindcssIcon },
      { title: 'PostgreSQL', icon: PostgresqlIcon },
      { title: 'Supabase', icon: SupabaseIcon },
      { title: 'Vercel', icon: VercelIcon },
      { title: 'Stripe', icon: StripeIcon },
      { title: 'Mixpanel', icon: MixpanelIcon },
    ],
    url: 'https://guess-who-ashen.vercel.app/',
    image: BrainIcon,
    imageAlt: 'GuessWho project details',
  },
]
