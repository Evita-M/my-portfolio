import { Metadata } from 'next';
import TechStackPageContent from './pageContent';

export const metadata: Metadata = {
  title: 'Tech Stack',
  description: 'My favourite tools and technologies',
};

export default function TechStackPage() {
  return <TechStackPageContent />;
}
