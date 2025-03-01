import { DocsLink } from '@/app/read-me/pageContent';

interface DocsLinks {
  cv: DocsLink;
  uxCzechitas: DocsLink;
  reactReactGirls: DocsLink;
  reactCzechitas: DocsLink;
}

export const docsLinks: DocsLinks = {
  cv: {
    url: 'https://drive.google.com/file/d/16dssUK65fbVtjhSuPRGNx6LTSLoQ3HXl/view?usp=sharing',
    label: 'CV',
  },
  uxCzechitas: {
    url: 'https://drive.google.com/file/d/1BVZIy7XIZO0kedQDkig0yj8Hfb1025Ra/view?usp=sharing',
    label: 'UX Certificate - Czechitas ',
  },
  reactReactGirls: {
    url: 'https://drive.google.com/file/d/1bx091IPwSZckWWXbHNDyJp_6iaiCyIWu/view?usp=sharing',
    label: 'React Certificate - ReactGirls ',
  },
  reactCzechitas: {
    url: 'https://drive.google.com/file/d/12bTmq1w37EqU1clG-ENRu7yUKG2uj-vJ/view?usp=sharing',
    label: 'React Certificate - Czechitas ',
  },
};
