'use client'
// Файл: pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../public/styles.module.css';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Футболка базовая',
      price: '1 990',
      image: 'https://basket-01.wbbasket.ru/vol37/part3767/3767803/images/big/1.webp',
      category: 'men',
      popularity: 8,
    },
    {
      id: 2,
      name: 'Джинсы классические',
      price: '3 990',
      image: 'https://image01.bonprix.de/assets/1400x1960/1466612369/16066922-ax7vaTMt.jpg',
      category: 'men',
      popularity: 7,
    },
    {
      id: 3,
      name: 'Платье летнее',
      price: '4 590',
      image: 'https://www.be-in.ru/media/beingallery/uploads/shipovnik.jpg',
      category: 'women',
      popularity: 9,
    },
    {
      id: 4,
      name: 'Блузка шелковая',
      price: '2 990',
      image: 'https://ae04.alicdn.com/kf/Hfb1b8f4e3e194fae845cc63051885eab7.jpg',
      category: 'women',
      popularity: 6,
    },
    {
      id: 5,
      name: 'Куртка демисезонная',
      price: '7 990',
      image: 'https://basket-10.wbbasket.ru/vol1454/part145491/145491634/images/big/1.webp',
      category: 'men',
      popularity: 10,
    },
    {
      id: 6,
      name: 'Юбка миди',
      price: '3 590',
      image: 'https://i.pinimg.com/736x/4e/8b/f2/4e8bf247ea2d12e56b2759a7d3990af8.jpg',
      category: 'women',
      popularity: 5,
    },
    {
      id: 7,
      name: 'Рубашка полосатая',
      price: '2 790',
      image: 'https://ae04.alicdn.com/kf/S2f9c9a406cb244a6bdb6b9fbc6808583k.jpg',
      category: 'men',
      popularity: 7,
    },
    {
      id: 8,
      name: 'Пальто классическое',
      price: '9 990',
      image: 'https://sheily.ru/wp-content/uploads/2023/10/kapuch-2-2-800x1080.jpg',
      category: 'women',
      popularity: 8,
    },
  ];

  const categories = [
    { label: 'Мужская одежда', value: 'men' },
    { label: 'Женская одежда', value: 'women' },
    { label: 'Аксессуары', value: 'accessories' },
  ];
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Этно гардероб | Интернет-магазин одежды</title>
        <meta name="description" content="Интернет-магазин стильной одежды" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>этно гардероб</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/catalog">Каталог</Link>
          <Link href="/cart">Корзина (0)</Link>
          <Link href="/account">Аккаунт</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h2>Новая коллекция сезона</h2>
          <p>Откройте для себя последние тренды в мире моды</p>
          <Link href="/catalog" className={styles.button}>
            Смотреть коллекцию
          </Link>
        </div>

        <section className={styles.featured}>
          <h2>Популярные товары</h2>
          
          <div className={styles.filters}>
            <button 
              className={filter === 'all' ? styles.activeFilter : ''} 
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button 
              className={filter === 'men' ? styles.activeFilter : ''} 
              onClick={() => setFilter('men')}
            >
              Мужское
            </button>
            <button 
              className={filter === 'women' ? styles.activeFilter : ''} 
              onClick={() => setFilter('women')}
            >
              Женское
            </button>
          </div>

          <div className={styles.products}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.product}>
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price} ₽</p>
                <Link href={`/product/${product.id}`} className={styles.viewButton}>
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <div>
            <h3>Информация</h3>
            <Link href="/about">О нас</Link>
            <Link href="/delivery">Доставка</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
          <div>
            <h3>Клиентам</h3>
            <Link href="/faq">Вопрос-ответ</Link>
            <Link href="/returns">Возврат товара</Link>
            <Link href="/loyalty">Программа лояльности</Link>
          </div>
          <div>
            <h3>Контакты</h3>
            <p>Телефон: +996 559 004 993</p>
            <p>Email: info@modniy-garderob.ru</p>
            <p>Адрес: г. Токмок  1</p>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 Модный гардероб. Все права защищены.
        </div>
      </footer>
    </div>
  );
}

