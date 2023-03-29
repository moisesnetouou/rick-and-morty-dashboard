import { client } from '@/config/apollo/apollo';
import { Layout } from '@/Layout';
import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.css';
import { defaultTheme } from '@/styles/theme/default';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </ThemeProvider>
  );
}
