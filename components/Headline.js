import Image from 'next/image'
import { Inter } from '@next/font/google'
import classes from '../components/Headline.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <>
        <div className={classes.description}>
          <p>
            Get started by editing&nbsp;
            {props.children}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={classes.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <h1 className={classes.title}>{ props.page } page</h1>
        <div className={classes.center}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={classes.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
  </>
  )
}
