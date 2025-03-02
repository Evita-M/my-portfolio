import { PageHeader } from '@/components/page-header';
import { IconExternalLink } from '@tabler/icons-react';
import { Button } from '@/components/button';
import { docsLinks } from '@/data/docs-links';

export interface DocsLink {
  url: string;
  label: string;
}

export default function DocsPageContent() {
  const { cv, uxCzechitas, reactReactGirls, reactCzechitas } = docsLinks;
  return (
    <div className='relative mx-auto lg:container'>
      <PageHeader title='Docs' subtitle='Check out my CV and certificates' />
      <ul className='mt-8 flex flex-col gap-12 sm:max-w-[340px]'>
        <Button href={cv.url} postfixIcon={<IconExternalLink size={20} />}>
          {cv.label}
        </Button>
        <li>
          <Button
            href={uxCzechitas.url}
            postfixIcon={<IconExternalLink size={20} />}
          >
            {uxCzechitas.label}
          </Button>
        </li>
        <li>
          <Button
            href={reactReactGirls.url}
            postfixIcon={<IconExternalLink size={20} />}
          >
            {reactReactGirls.label}
          </Button>
        </li>
        <li>
          <Button
            href={reactCzechitas.url}
            postfixIcon={<IconExternalLink size={20} />}
          >
            {reactCzechitas.label}
          </Button>
        </li>
      </ul>
    </div>
  );
}
