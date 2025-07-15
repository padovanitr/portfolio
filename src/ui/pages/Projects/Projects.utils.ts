import BabyMensiIcon from '../../../assets/img/babymensi-icon.png'
import OwnPaletteIcon from '../../../assets/img/palette-icon.png'

export type ProjectInfoType = {
  id: number
  title: string
  stack: {
    title: string
  }[]
  url: string
  image: string
  imageAlt: string
}

export const projectsInfo: ProjectInfoType[] = [
  {
    id: 1,
    title: 'BabyMensi',
    stack: [
      { title: 'Next.js' },
      { title: 'TypeScript' },
      { title: 'Tailwind CSS' },
      { title: 'Prisma' },
      { title: 'PostgreSQL' },
      { title: 'Supabase' },
      { title: 'Vercel' },
      { title: 'Stripe' },
      { title: 'NextAuth' },
      { title: 'Mixpanel' },
    ],
    url: 'https://www.babymensi.com/',
    image: BabyMensiIcon,
    imageAlt: 'Babymensi project details',
  },
  {
    id: 2,
    title: 'Own Palette',
    stack: [
      { title: 'Next.js' },
      { title: 'TypeScript' },
      { title: 'Tailwind CSS' },
      { title: 'PostgreSQL' },
      { title: 'Supabase' },
      { title: 'Inngest' },
      { title: 'OpenAI' },
      { title: 'Vercel' },
      { title: 'Stripe' },
      { title: 'Mixpanel' },
    ],
    url: 'https://www.ownpalette.com/',
    image: OwnPaletteIcon,
    imageAlt: 'Own Palette project details',
  },
]
