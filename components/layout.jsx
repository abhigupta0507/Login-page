import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="Welcome" content="Login and Signup" />
        <title>Welcome</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
