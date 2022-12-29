import { Inter } from '@next/font/google'
import classes from '../components/Footer.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
  return (
    <>
      <footer className={classes.footer}>2022 hogehoge</footer>
    </>
  )
}
