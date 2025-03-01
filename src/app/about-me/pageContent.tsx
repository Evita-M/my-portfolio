'use client';

import { PageHeader } from '@/components/page-header';
import { timelineData } from '@/data/timeline';
import { Timeline } from '@/modules/timeline';

export default function AboutPageContent() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mb-12'>
        <PageHeader title='About Me' subtitle='My journey so far' />
      </div>
      <Timeline data={timelineData} />
    </div>
  );
}
