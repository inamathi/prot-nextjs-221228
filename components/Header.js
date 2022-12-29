import Link from 'next/link'
import { Inter } from '@next/font/google'
import classes from '../components/Header.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Header() {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.link}>
            Index
        </Link>
        <Link href="/about" className={classes.link}>
            About
        </Link>
    </header>
  )
}
