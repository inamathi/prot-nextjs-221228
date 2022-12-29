import { Inter } from '@next/font/google'
import classes from '../components/Links.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
    {
        href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Docs 👉",
        description: "Find in-depth information about Next.js features and&nbsp;API."
    },
    {
        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Learn 👉",
        description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
    },
    {
        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Templates 👉",
        description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
    },
    {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Deploy 👉",
        description: " Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
    },
]

export function Links() {
  return (
    <div className={classes.grid}>
        {ITEMS.map((item) => {
            return (
                <a key={item.href} href={item.href} className={classes.card}>
                    <h3 className={classes.title}>{item.title}</h3>
                    <p className={classes.descripton}>{item.description}</p>
                </a>
            );
        })}
    </div>
  )
}
