import { TFunction } from 'i18next'

export const pages = (t: TFunction<'translation', undefined>) => [
  {
    title: 'Home',
    path: '#home',
  },
  {
    title: t('navbarAbout'),
    path: '#about',
  },
  {
    title: t('navbarExperience'),
    path: '#experience',
  },
  {
    title: t('navbarArticles'),
    path: '#articles',
  },
  {
    title: t('navbarContact'),
    path: '#contact',
  },
]

export const NavbarTexts = (t?: TFunction<'translation', undefined>) => {
  return {
    ThemeIconButtonTitle: (mode: string) => `Active ${mode === 'dark' ? 'light' : 'dark'} theme`,
    ResumeButtonLabel: t?.('resume'),
  }
}
