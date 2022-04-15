import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='px-14'>
        <section className='hero flex flex-col h-screen justify-center px-14'>
          <h2 className='font-bold text-4xl'>Hi there 👋</h2>
          <h1 className='font-black tracking-wide text-8xl mt-4'>
            I&apos;m Kevin Aminzadeh
          </h1>
          <p className='text-2xl mt-8'>
            I&apos;m a software Engineer with a background in media production,
            based in Adelaide, South Australia.
          </p>
          <div className='cta flex w-100 mt-14'>
            <Link href='/projects' passHref>
              <a
                href='/projects'
                className='px-6 py-4 border-2 border-red-500 outline-red-500 bg-red-500 text-white relative'
              >
                View Portfolio
              </a>
            </Link>
            <Link href='/contact' passHref>
              <a
                href='/contact'
                className='px-6 py-4 border-2 border-black relative ml-10'
              >
                Let&apos;s Talk!
              </a>
            </Link>
          </div>
        </section>

        <section className='blurb flex flex-col h-screen justify-center px-14'>
          <div className='flex'>
            <div className='w-1/2 flex flex-col justify-center'>
              <h2 className='font-extrabold text-4xl'>
                I love creating innovative solutions that empower businesses
              </h2>
            </div>

            <div className='w-1/2'>
              <p className='text-xl mt-8'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit!!
              </p>
              <div className='cta flex w-100 mt-14'>
                <Link href='/projects' passHref>
                  <a
                    href='/projects'
                    className='font-extrabold text-2xl  border-b-4 border-red-500 relative'
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer />
    </div>
  )
}

export default Home
