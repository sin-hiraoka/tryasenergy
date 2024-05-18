"use client";

import styles from '@/styles/Products.module.css';

const products = [
    {
        name: '高品質カーボン',
        description: 'トライアスエナジーは高品質のカーボンを提供しています。カーボン素材は高強度で軽量、そして環境に優しい特性を持っています。',
        image: 'https://via.placeholder.com/300x200.png?text=Carbon+Product'
    },
    {
        name: '水素発電技術',
        description: '新しい技術を使った水素発電は、クリーンで持続可能なエネルギーソリューションです。ゼロエミッションで高効率な水素発電は未来のエネルギーインフラを支えます。',
        image: 'https://via.placeholder.com/300x200.png?text=Hydrogen+Power'
    }
];

export default function Products() {
    return (
        <section className={styles.productsSection}>
            <h2 className={styles.productsTitle}>製品紹介</h2>
            <div className={styles.productsItems}>
                {products.map((product, index) => (
                    <div key={index} className={styles.productItem}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <div className={styles.productContent}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productDescription}>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
