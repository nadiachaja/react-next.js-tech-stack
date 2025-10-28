import Link from 'next/link'
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li><Link href={`/`}>Home</Link></li>
                    <li><Link href={`/blog`}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}