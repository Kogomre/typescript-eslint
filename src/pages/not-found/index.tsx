import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: '404 | Not Found',
  description: '',
};

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      404 | Not Found
    </main>
  );
};

export default NotFound;
