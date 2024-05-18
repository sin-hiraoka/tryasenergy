"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="Tryas Energy" width={150} height={50} />
                </Link>
            </div>
            <nav className={`${styles.nav} ${styles.desktopOnly}`}>
                <Link href="/">ホーム</Link>
                <Link href="/news">ニュース</Link>
                <Link href="/projects">プロジェクト</Link>
                <Link href="/products">製品</Link>
                <Link href="/contact">お問い合わせ</Link>
            </nav>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <button className={`${styles.menuButton} ${styles.mobileOnly}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>
            <div className={`${styles.mobileNav} ${isOpen ? styles.show : ''} ${styles.mobileOnly}`}>
                <Link href="/">ホーム</Link>
                <Link href="/news">ニュース</Link>
                <Link href="/projects">プロジェクト</Link>
                <Link href="/products">製品</Link>
                <Link href="/contact">お問い合わせ</Link>
            </div>
        </header>
    );
}