import { GradientTitle } from '@/components/gradient-title';
import { Typewriter } from '@/components/typewriter';
import { LinkList } from '@/modules/link-list';
import Image from 'next/image';

const links = [
  {
    comment: 'get in touch with me by e-mail',
    variables: [{ name: 'email', value: 'eva.matova6@gmail.com' }],
  },
  {
    comment: 'check out my Github page',
    variables: [
      { name: 'githubLink1', value: 'https://github.com/Evita-M' },
      { name: 'githubLink2', value: 'https://github.com/EvaMatova' },
    ],
  },
  {
    comment: 'read my articles and follow me on social media',
    variables: [
      { name: 'mediumLink', value: 'https://medium.com/@eva.matova6' },
    ],
  },
  {
    comment: 'get in touch on Linkedin',
    variables: [
      {
        name: 'linkedinPage',
        value: 'https://linkedin.com/in/eva-matova-772a2a14b',
      },
    ],
  },
];

export default function Home() {
  return (
    <section className='flex h-full w-full flex-col justify-center pl-[10%]'>
      <div className='flex flex-col gap-20'>
        <div>
          <p className='mb-8 text-4xl text-white'>Hi, I'm Eva</p>
          <Typewriter>
            <GradientTitle text='Frontend Engineer' />
          </Typewriter>
        </div>
        <LinkList hiddenTitle='Contact links' links={links} />
      </div>
    </section>
  );
}
