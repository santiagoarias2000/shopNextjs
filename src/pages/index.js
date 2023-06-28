import ProductList from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop Next</title>
      </Head>
      <ProductList />
    </>
  );
}
