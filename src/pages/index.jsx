import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Why from '@/components/Why'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zep Research - A community-driven design conference</title>
        <meta
          name="description"
          content="At Zep Research you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Why/>
        <Sponsors />
        <Testimonial/>  
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
