import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
