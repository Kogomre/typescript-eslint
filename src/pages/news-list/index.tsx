import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Main News Page',
  description: '',
};

const NewsListPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main News Page
    </main>
  );
};

export default NewsListPage;
