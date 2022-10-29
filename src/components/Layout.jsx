import Head from 'next/head';

export default function Layout({ children, title }) {
  // Title has to be concatenated into a string before being set
  const titleName = `${title} | Next.js Starter!`;

  return (
    <div>
      <Head>
        <title>{ titleName }</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      { children }
    </div>
  );
}
