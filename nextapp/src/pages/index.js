import Head from 'next/head'
import Content from '@/components/Content'
import Nav from '@/components/Nav'

export default function Home() {

  return (
    <>
      <Head>
        <title>Pic Pick&uuml;r</title>
        <meta name="description" content="Pick your favorite photos! By JeffBRODINE & McKrista" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className='flex-col w-full items-center justify-center'>
        <h1 className='text-7xl font-bold text-center my-20' >Welcome to Pic Pick&uuml;r</h1>
        <Content />
      </main>
    </>
  )
};
