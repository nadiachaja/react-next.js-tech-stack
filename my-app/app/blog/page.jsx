import Link from 'next/link'
import styles from './blog.module.css';

export default function Page() {
  return (
    <>
    <h1 className={styles.title}>Hello, Blog</h1>
    <Link href={`/blog/post`}>Post</Link>
    </>
  )

}