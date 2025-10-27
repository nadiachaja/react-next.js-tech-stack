import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
    <Image src="/next.svg" alt="NextImg" width={100} height={100} />
    <h1>Hello, Next.js!</h1>
    <Link href={`/blog`}>Blog</Link>
    </>
  )

}