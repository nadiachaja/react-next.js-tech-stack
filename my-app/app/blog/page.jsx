import Link from 'next/link'

export default function Page() {
  return (
    <>
    <h1>Hello, Blog</h1>
    <Link href={`/blog/post`}>Post</Link>
    </>
  )

}