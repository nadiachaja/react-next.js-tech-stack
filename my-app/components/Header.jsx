import Link from 'next/link'

export default function Header() {
    return (
        <nav>
        <ul>
            <li><Link href={`/`}>Home</Link></li>
            <li><Link href={`/blog`}>Blog</Link></li>
            <li><Link href={`/blog/post`}>Post</Link></li>
        </ul>
        </nav>
    );
  }