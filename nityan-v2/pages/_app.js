import Layout from '../components/Layout';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handle = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handle);
    return () => router.events.off('routeChangeComplete', handle);
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
