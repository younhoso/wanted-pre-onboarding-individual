import { useState } from 'react';
import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
