import React, { ReactNode } from 'react';
import type { Viewport, Metadata } from 'next';

import { QueryProvider } from './providers/react-query';
import './globals.css';

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Enderium | моды, текстуры, карты, гайды, скины, база знаний',
  description:
    'Исследуйте безграничные возможности майнкрафта с огромным каталогом модов, текстурпаков, карт, ' +
    'гайдов, скинов и базой знаний. Отправляйтесь в увлекательное приключение и раскройте свой творческий потенциал.',
  other: {
    ['format-detection']: 'telephone=no',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
