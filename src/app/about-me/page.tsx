import { Metadata } from 'next';
import AboutPageContent from './pageContent';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'View my journey so far',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
