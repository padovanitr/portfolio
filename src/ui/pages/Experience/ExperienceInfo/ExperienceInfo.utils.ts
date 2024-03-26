import { TFunction } from 'i18next'

export const experienceInfo = (t: TFunction<'translation', undefined>) => [
  {
    id: 1,
    position: t('role'),
    company: 'Loka',
    location: t('USAlocation'),
    startDate: t('lokaStartDate'),
    endDate: t('current'),
    description: [
      t('lokaExpecience1'),
      t('lokaExperience2'),
      t('lokaExperience3'),
      t('lokaExperience4'),
      t('lokaExperience5'),
    ],
    website: 'https://loka.com/',
  },
  /* {
    id: 2,
    position: 'Frontend Developer',
    company: 'Bridge351',
    location: 'Portugal (remote)',
    startDate: 'may 2022',
    endDate: 'nov 2022',
    description: [
      'I performed to develop web applications for customers using technologies such as HTML, CSS, Styled Components, Material UI, Reactjs, JavaScript and TypeScript.',
      'Had the opportunity to learn more about Redux Tool Kit, Jest, React Testing Library and Cypress',
    ],
    website: 'https://www.bridge351.com/',
  }, */
  {
    id: 3,
    position: t('role'),
    company: 'Supernosso',
    location: t('BRlocation'),
    startDate: t('supernossoStartDate'),
    endDate: t('supernossoEndDate'),
    description: [t('supernossoExp1'), t('supernossoExp2'), t('supernossoExp3')],
    website: 'https://www.supernosso.com/',
  },
  {
    id: 4,
    position: t('role1'),
    company: 'Obrazul',
    location: t('brazil'),
    startDate: t('obrazulStartDate'),
    endDate: t('obrazulEndDate'),
    description: [t('obrazulExp1'), t('obrazulExp2'), t('obrazulExp3')],
    website: 'https://www.obrazul.com.br/',
  },
]
