"use client";

import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2024 Tryas Energy. All rights reserved.</p>
                <nav className={styles.footerNav}>
                    <Link href="/privacy">プライバシーポリシー</Link>
                    <Link href="/terms">利用規約</Link>
                </nav>
            </div>
        </footer>
    );
}
