import { TimelineItemBase } from '@/modules/timeline/item';
import { ICON_SIZE_LG } from '@/utils/variables';
import {
  IconBook,
  IconBriefcase,
  IconCode,
  IconSchool,
} from '@tabler/icons-react';

export const timelineData: TimelineItemBase[] = [
  {
    year: '03/2023 - present',
    title: 'Couch',
    subtitle: 'Czechitas',
    description:
      'Czechitas is a non-profit organization that helped me to start my journey in frontend. I am very happy that I have a chance to give back to the community that helped me so much. Now, as a coach in Czechitas, I am dedicated to empowering women in the tech industry. I am providing hands-on coaching in online HTML/CSS, JS, React and UX/UI courses, helping to develop not only technical skills but also build confidence in beginners and inspire them.',
    icon: <IconBook size={ICON_SIZE_LG} />,
  },
  {
    year: '04/2022 - present',
    title: 'Frontend Engineer',
    subtitle: 'Native',
    description:
      "Found my perfect match at Native, where my language background meets tech. Working on innovative messaging products with real-time translation capabilities has been incredibly fulfilling. I've grown significantly as a developer, mastering React, Next.js, and diving into backend technologies. The role allows me to combine coding with my passion for UX/UI design, contributing to products that break down language barriers.",
    icon: <IconCode size={ICON_SIZE_LG} />,
  },
  {
    year: '03/2021 - 03/2022',
    title: 'Frontend Developer',
    subtitle: 'Superkoders',
    description:
      'After half a year of intensive self-learning and courses, I started my journey in frontend development. This period gave me hands-on experience with semantic HTML, advanced CSS, responsive web design, and accessibility standards. I gained practical knowledge of coding principles and modern development practices.',
    icon: <IconCode size={ICON_SIZE_LG} />,
  },
  {
    year: '02/2017 - 03/2021',
    title: 'Project Coordinator',
    subtitle: 'Enkom a.s.',
    description:
      'Starting as an Office Manager for part-time, I quickly grew into a Project Coordinator role where I discovered my passion for dynamic work in multinational environment. I coordinated international projects in Russian speaking countries, using Russian and English on daily basis in communication with foreign partners. Despite enjoying this kind of work, the challenging job market situation led me to make a risky decision - to pivot my career towards software development.',
    icon: <IconBriefcase size={ICON_SIZE_LG} />,
  },
  {
    year: '2015 - 2017',
    title: 'Master Degree',
    subtitle:
      'Russian-language translation & Interpreting at Masaryk University in Brno',
    description:
      'Those two years were incredibly enriching! I dove deep into the art of translation and interpreting, developing skills that shaped my professional mindset.',
    icon: <IconSchool size={ICON_SIZE_LG} />,
  },
  {
    year: '2012 - 2015',
    title: 'Bachelor Degree',
    subtitle:
      'Russian with Orientation on Commercial Practice at Masaryk University in Brno',
    description:
      'My passion for foreign languages led me to this perfect blend of linguistics and business. The commercial focus opened my eyes to the practical applications of language skills in the professional world.',
    icon: <IconSchool size={ICON_SIZE_LG} />,
  },
];
