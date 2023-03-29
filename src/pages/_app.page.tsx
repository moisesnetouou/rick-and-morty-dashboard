import { Layout } from '@/Layout';

import '@/styles/globals.css';
import { defaultTheme } from '@/styles/theme/default';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/services/queryClient';
import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </ThemeProvider>
  );
}
