"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/News.module.css';

const newsItems = [
    {
        title: '水素エネルギー技術の最新開発',
        date: '2024-05-01',
        summary: 'トライアスエナジーは最新の水素エネルギー技術を発表しました。',
        image: 'https://via.placeholder.com/300x200.png?text=News+1'
    },
    {
        title: '新しいプロジェクト開始',
        date: '2024-04-15',
        summary: 'トライアスエナジーは新しい水素発電プロジェクトを開始しました。',
        image: 'https://via.placeholder.com/300x200.png?text=News+2'
    },
    {
        title: '環境への取り組み',
        date: '2024-03-30',
        summary: 'トライアスエナジーの環境への取り組みについてご紹介します。',
        image: 'https://via.placeholder.com/300x200.png?text=News+3'
    }
];

export default function News() {
    return (
        <section className={styles.newsSection}>
            <h2 className={styles.newsTitle}>
                <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
                最新ニュース
            </h2>
            <div className={styles.newsItems}>
                {newsItems.map((item, index) => (
                    <div key={index} className={styles.newsItem}>
                        <img src={item.image} alt={item.title} className={styles.newsImage} />
                        <div className={styles.newsItemContent}>
                            <h3 className={styles.newsItemTitle}>{item.title}</h3>
                            <p className={styles.date}>{item.date}</p>
                            <p className={styles.summary}>{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
