import { TechCategoryType } from '@/components/tech-category';
import { ICON_SIZE_MD } from '@/utils/variables';
import {
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandJavascript,
  IconTestPipe,
  IconBrandNextjs,
  IconDatabase,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBug,
  IconCode,
  IconApps,
  IconApi,
  IconForms,
  IconPalette,
  IconTools,
  IconUserSearch,
  IconClock,
  IconBrain,
} from '@tabler/icons-react';

export const techStack: TechCategoryType[] = [
  {
    title: 'FE',
    items: [
      {
        name: 'RWD',
        icon: <IconCode size={ICON_SIZE_MD} aria-label='Code icon' />,
      },
      {
        name: 'JS',
        icon: (
          <IconBrandJavascript
            size={ICON_SIZE_MD}
            aria-label='JavaScript icon'
          />
        ),
      },
      {
        name: 'TS, ES6+',
        icon: (
          <IconBrandTypescript
            size={ICON_SIZE_MD}
            aria-label='TypeScript icon'
          />
        ),
      },
      {
        name: 'React',
        icon: <IconBrandReact size={ICON_SIZE_MD} aria-label='React icon' />,
      },
      {
        name: 'RTK Query',
        icon: <IconDatabase size={ICON_SIZE_MD} aria-label='Database icon' />,
      },
      {
        name: 'NextJS',
        icon: <IconBrandNextjs size={ICON_SIZE_MD} aria-label='NextJS icon' />,
      },
      {
        name: 'BEM',
        icon: <IconCode size={ICON_SIZE_MD} aria-label='Code icon' />,
      },
    ],
  },
  {
    title: 'UX/UI',
    items: [
      {
        name: 'Tailwind CSS',
        icon: (
          <IconBrandTailwind
            size={ICON_SIZE_MD}
            aria-label='Tailwind CSS icon'
          />
        ),
      },
      {
        name: 'Figma & Tools',
        icon: <IconBrandFigma size={ICON_SIZE_MD} aria-label='Figma icon' />,
      },
      {
        name: 'Design Process',
        icon: <IconPalette size={ICON_SIZE_MD} aria-label='Palette icon' />,
      },
      {
        name: 'User Research',
        icon: (
          <IconUserSearch size={ICON_SIZE_MD} aria-label='User Research icon' />
        ),
      },
      {
        name: 'UI Libraries (Chakra UI, MUI, Next UI...)',
        icon: <IconApps size={ICON_SIZE_MD} aria-label='Apps icon' />,
      },
      {
        name: 'CSS-in-JS (Emotion, styled-components...)',
        icon: <IconBrandCss3 size={ICON_SIZE_MD} aria-label='CSS3 icon' />,
      },
    ],
  },
  {
    title: 'Form & Validation',
    items: [
      {
        name: 'React Hook Form',
        icon: <IconForms size={ICON_SIZE_MD} aria-label='Form icon' />,
      },
      {
        name: 'Formik',
        icon: <IconForms size={ICON_SIZE_MD} aria-label='Form icon' />,
      },
      {
        name: 'Yup',
        icon: <IconForms size={ICON_SIZE_MD} aria-label='Form icon' />,
      },
      {
        name: 'Zod',
        icon: <IconForms size={ICON_SIZE_MD} aria-label='Form icon' />,
      },
    ],
  },
  {
    title: 'Testing & Debugging',
    items: [
      {
        name: 'Jest',
        icon: <IconTestPipe size={ICON_SIZE_MD} aria-label='Test Pipe icon' />,
      },
      {
        name: 'Postman',
        icon: <IconBug size={ICON_SIZE_MD} aria-label='Bug icon' />,
      },
      {
        name: 'Swagger',
        icon: <IconBug size={ICON_SIZE_MD} aria-label='Bug icon' />,
      },
    ],
  },
  {
    title: 'BE Integration',
    items: [
      {
        name: 'REST API',
        icon: <IconApi size={ICON_SIZE_MD} aria-label='API icon' />,
      },
      {
        name: 'Prisma',
        icon: <IconApi size={ICON_SIZE_MD} aria-label='API icon' />,
      },
      {
        name: 'WebSockets',
        icon: <IconApi size={ICON_SIZE_MD} aria-label='API icon' />,
      },
    ],
  },
  {
    title: 'AI',
    items: [
      {
        name: 'ChatGPT',
        icon: <IconBrain size={ICON_SIZE_MD} aria-label='Brain icon' />,
      },
      {
        name: 'Cursor AI',
        icon: <IconBrain size={ICON_SIZE_MD} aria-label='Brain icon' />,
      },
      {
        name: 'Groq AI',
        icon: <IconBrain size={ICON_SIZE_MD} aria-label='Brain icon' />,
      },
      {
        name: 'Microsoft Copilot',
        icon: <IconBrain size={ICON_SIZE_MD} aria-label='Brain icon' />,
      },
      {
        name: 'Gemini',
        icon: <IconBrain size={ICON_SIZE_MD} aria-label='Brain icon' />,
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Git',
        icon: <IconBrandGit size={ICON_SIZE_MD} aria-label='Git icon' />,
      },
      {
        name: 'Confluence',
        icon: <IconTools size={ICON_SIZE_MD} aria-label='Tools icon' />,
      },
      {
        name: 'Jira',
        icon: <IconTools size={ICON_SIZE_MD} aria-label='Tools icon' />,
      },
      {
        name: 'Slack',
        icon: <IconTools size={ICON_SIZE_MD} aria-label='Tools icon' />,
      },
      {
        name: 'Notion',
        icon: <IconTools size={ICON_SIZE_MD} aria-label='Tools icon' />,
      },
      {
        name: 'Clockify',
        icon: <IconClock size={ICON_SIZE_MD} aria-label='Clock icon' />,
      },
      {
        name: 'Miro',
        icon: <IconTools size={ICON_SIZE_MD} aria-label='Tools icon' />,
      },
    ],
  },
];
