import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import { InView } from './ui/InView'
import { TextEffect } from './ui/TextEffect'

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <div className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
          <TextEffect per='word' as='h3' preset='blur'>    
            A design conference
            for the dark side.
          </TextEffect>
          </div>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
      
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
           
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Contact us
          </Button>
<InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['All Speakers', '18'],
              ['People Attending', '2,091'],
              ,
              ['Location', 'Los Angeles, Mumbai, Bangalore'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
</InView>
        </div>
      </Container>
    </div>
  )
}
