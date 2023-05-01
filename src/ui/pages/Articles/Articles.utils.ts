import NextjsBg from '../../../assets/img/nextjs13bg.webp'
import GitRebaseBg from '../../../assets/img/gitRebaseBg.webp'
import RtkBeginnersBg from '../../../assets/img/rtkBeginnersBg.webp'
import RtkOpenApiBg from '../../../assets/img/rtkOpenApiBg.webp'
import UseMemoUseCallbackBg from '../../../assets/img/useMemoUseCallbackBg.webp'
import UseReducerBg from '../../../assets/img/useReducerBg.webp'

export enum ArticlesTexts {
  Title = 'My Articles',
  Description = 'These are some of the article I wrote in Medium, you may find something interesting to read.',
}

export const articlesInfo = [
  {
    id: 1,
    title: 'Nextjs 13 new features',
    preview:
      'Nextjs is proving that is a very complete framework, mainly because we’re talking about a full-stack tool, it uses React under the hood…',
    url: 'https://medium.com/@padovanitr/nextjs-13-new-features-5c304b6ae516',
    image: NextjsBg,
  },
  {
    id: 2,
    title: 'How to apply useReducer',
    preview:
      'One of the most important things that every React developer must know is how to handle the state. And when we talk about this, the main…',
    url: 'https://medium.com/@padovanitr/how-to-apply-usereducer-336b782608a1',
    image: UseReducerBg,
  },
  {
    id: 3,
    title: 'Git rebase, how it works',
    preview:
      'Git is one of the tool that developers most frequently use, specially if we’re talking about a professional environment when you’re working…',
    url: 'https://medium.com/@padovanitr/git-rebase-how-it-works-e4b395d97718',
    image: GitRebaseBg,
  },
  {
    id: 4,
    title: 'How to setup RTK Query and OpenAPI',
    preview:
      'Nowadays one the of the keywords for success in web development is productivity and in the community we can find lots of tool to improve…',
    url: 'https://medium.com/@padovanitr/how-to-setup-rtk-query-and-openapi-16816e9e7098',
    image: RtkOpenApiBg,
  },
  {
    id: 5,
    title: 'RTK Query beginners tutorial',
    preview:
      'Even the most novice front-end developers have already had to fetch data from some API and built something with that. And sometimes we…',
    url: 'https://medium.com/@padovanitr/rtk-query-beginners-tutorial-473705824246',
    image: RtkBeginnersBg,
  },
  {
    id: 6,
    title: 'How to apply useMemo and useCallback wisely',
    preview:
      'We can say for sure that one of the most used tools in React are the hooks. They’re a new addition in the version 16.8 and came to simplify…',
    url: 'https://medium.com/@padovanitr/how-to-apply-usememo-and-usecallback-wisely-78487454a985',
    image: UseMemoUseCallbackBg,
  },
]
