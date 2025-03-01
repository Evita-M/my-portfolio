import { Metadata } from 'next';
import DocsPageContent from './pageContent';

export const metadata: Metadata = {
  title: 'Docs',
  description: 'View my CV and certificates',
};

export default function DocsPage() {
  return <DocsPageContent />;
}
