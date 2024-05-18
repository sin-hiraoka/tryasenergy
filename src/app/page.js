import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import News from '@/components/News';
import Products from '@/components/Products';
import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Slider />
        <News />
        <Products />
        {/* ここにメインコンテンツを追加 */}
      </main>
      <Footer />
    </div>
  );
}
