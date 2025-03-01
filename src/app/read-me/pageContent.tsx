import { PageHeader } from '@/components/page-header';
import { IconExternalLink } from '@tabler/icons-react';
import { Button } from '@/components/button';
import { docsLinks } from '@/data/docs-links';

export interface DocsLink {
  url: string;
  label: string;
}

export default function DocsPageContent() {
  // Replace this URL with your actual Google Drive CV sharing link
  const { cv, uxCzechitas, reactReactGirls, reactCzechitas } = docsLinks;
  return (
    <div className='relative container mx-auto max-w-[5xl] px-4'>
      <PageHeader title='Docs' subtitle='Check out my CV and certificates' />
      <div className='mt-8 flex flex-col gap-12'>
        <Button href={cv.url} postfixIcon={<IconExternalLink size={20} />}>
          {cv.label}
        </Button>
        <Button
          href={uxCzechitas.url}
          postfixIcon={<IconExternalLink size={20} />}
        >
          {uxCzechitas.label}{' '}
        </Button>
        <Button
          href={reactReactGirls.url}
          postfixIcon={<IconExternalLink size={20} />}
        >
          {reactReactGirls.label}
        </Button>
        <Button
          href={reactCzechitas.url}
          postfixIcon={<IconExternalLink size={20} />}
        >
          {reactCzechitas.label}
        </Button>
      </div>
    </div>
  );
}
