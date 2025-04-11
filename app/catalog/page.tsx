// Файл: pages/catalog.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../public/styles.module.css';

export default function Catalog() {
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  // Фильтрация товаров по категории
  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  // Сортировка товаров
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\s/g, ''));
    const priceB = parseInt(b.price.replace(/\s/g, ''));
    
    if (sortBy === 'price-asc') return priceA - priceB;
    if (sortBy === 'price-desc') return priceB - priceA;
    if (sortBy === 'popular') return b.popularity - a.popularity;
    return 0; // default
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Каталог | Модный гардероб</title>
        <meta name="description" content="Каталог интернет-магазина Модный гардероб" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>Модный гардероб</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/catalog">Каталог</Link>
          <Link href="/cart">Корзина (0)</Link>
          <Link href="/account">Аккаунт</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Каталог товаров</h1>

        <div className={styles.catalogContent}>
          <aside className={styles.filters}>
            <div className={styles.filterSection}>
              <h2>Категории</h2>
              <ul>
                <li>
                  <button 
                    className={selectedCategory === 'all' ? styles.active : ''}
                    onClick={() => setSelectedCategory('all')}
                  >
                    Все категории
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category.value}>
                    <button 
                      className={selectedCategory === category.value ? styles.active : ''}
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h2>Цена</h2>
              <div className={styles.priceRange}>
                <input 
                  type="range" 
                  min="0" 
                  max="10000" 
                  step="100"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                />
                <div className={styles.priceInputs}>
                  <input 
                    type="number" 
                    placeholder="От" 
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value)})}
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="До" 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className={styles.productList}>
            <div className={styles.productListHeader}>
              <div className={styles.productCount}>
                {sortedProducts.length} товаров
              </div>
              <div className={styles.sorting}>
                <label>Сортировать по:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">По умолчанию</option>
                  <option value="price-asc">Цена: по возрастанию</option>
                  <option value="price-desc">Цена: по убыванию</option>
                  <option value="popular">Популярности</option>
                </select>
              </div>
            </div>

            <div className={styles.products}>
              {sortedProducts.map(product => (
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
          </div>
        </div>
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
            <p>Телефон: +996 (999) 123-45-67</p>
            <p>Email: info@modniy-garderob.ru</p>
            <p>Адрес: г. Токмок 1</p>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 Модный гардероб. Все права защищены.
        </div>
      </footer>
    </div>
  );
}

