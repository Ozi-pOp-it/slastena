// pages/mens-clothing.js
'use client'
import React from 'react';
import ProductCard from '../components/product_card';



export default function Home() {
  const products = [
    {
      id: 1,
      title: "Футболка класическая",
      price: 120,
      discount: 25,
      rating: 4.6,
      img: "https://basket-01.wbbasket.ru/vol37/part3767/3767803/images/big/1.webp"
    },
    {
      id: 1,
      title: "Толстовки",
      price: 120,
      discount: 25,
      rating: 4.6,
      img: "https://art-holding.su/image/cache/catalog/XML4/b9d/IMGb9d353cc5333b71cda78925c755c95a4-orig.jpg"
    },
    // Добавьте остальные товары с фото
  ];

  return (
    <div className="page-container">
      <h1>Мужская одежда</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <style jsx>{`
        .page-container {
          padding: 30px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

