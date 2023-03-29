import { queryClient } from '@/services/queryClient';
import '@/styles/globals.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
