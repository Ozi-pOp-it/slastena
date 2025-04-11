// pages/mens-clothing.js
'use client'
import React from 'react';
import ProductCard from '../components/product_card';

const MensClothingPage = () => {
  const products = [
    
    {
      id: 1,
      title: "Футбольные",
      price: 120,
      discount: 25,
      rating: 4.6,
      img: "https://cdn1.ozone.ru/s3/multimedia-5/6665413541.jpg"
    },
    {
        id: 1,
        title: "Туфли ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://m.media-amazon.com/images/I/71Orr+u-fVL._AC_UY1000_.jpg"
      },{
        id: 1,
        title: "Красовки ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://cdn1.ozone.ru/s3/multimedia-x/6706003929.jpg"
      },
    // Добавьте остальные товары с фото
  ];

  return (
    <div className="page-container">
      <h1>Мужские красовки </h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <style jsx>{`
        .page-container {
          padding: 20px;
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

export default MensClothingPage;