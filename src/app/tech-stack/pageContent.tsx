'use client';
import { PageHeader } from '@/components/page-header';
import { TechCategory } from '@/components/tech-category';
import { techStack } from '@/data/tech-stack';

export default function TechStackPageContent() {
  return (
    <>
      <div className='relative container mx-auto max-w-[5xl] px-4'>
        <PageHeader
          title='Tech Stack'
          subtitle='...and my favorite tools and technologies'
        />
        <section className='mt-12'>
          {techStack.map(({ title, items }, index) => (
            <TechCategory
              key={title}
              title={title}
              items={items}
              index={index}
            />
          ))}
        </section>
      </div>
    </>
  );
}
