'use client';
import { PageHeader } from '@/components/page-header';
import { TechCategory } from '@/components/tech-category';
import { techStack } from '@/data/tech-stack';

export default function TechStackPageContent() {
  return (
    <>
      <div className='relative mx-auto xl:container'>
        <PageHeader
          title='Tech Stack'
          subtitle='...and my favorite tools and technologies'
        />
        <section className='flex flex-col gap-12'>
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
