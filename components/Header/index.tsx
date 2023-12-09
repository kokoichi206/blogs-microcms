import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/title-logo.png"
          alt="タイトルロゴ"
          className={styles.logo}
          width={373}
          height={200}
          priority
        />
      </Link>
    </header>
  );
}
