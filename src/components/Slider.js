"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Slider.module.css';

const slides = [
    {
        pcImage: '/images/product2.webp',
        mobileImage: '/images/product2.webp',
        text: 'トライアスエナジーへようこそ。私たちは持続可能なエネルギーソリューションを提供します。'
    },
    {
        pcImage: '/images/products.jpg',
        mobileImage: '/images/products_mobile.jpg', // モバイル用の画像を用意
        text: '革新的なエネルギー製品。環境に優しいソリューションで未来を築きます。'
    },
    {
        pcImage: '/images/projects.jpg',
        mobileImage: '/images/projects_mobile.jpg', // モバイル用の画像を用意
        text: '成功事例。トライアスエナジーのプロジェクトが世界中で実現されています。'
    }
];

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

export default function Slider() {
    const [current, setCurrent] = useState(0);
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 10000); // 3秒ごとにスライドを変更
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slider}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === current ? styles.active : ''}`}
                >
                    {index === current && (
                        <>
                            <Image
                                src={isMobile ? slide.mobileImage : slide.pcImage}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className={styles.text}>{slide.text}</div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
