// pages/mens-clothing.js
'use client'
import React from 'react';
import ProductCard from '../components/product_card';

const MensClothingPage = () => {
  const products = [
    
    
    {
        id: 1,
        title: "Туфли ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/176/787/191/471/317/20/100056739552b7.jpg"
      },{
        id: 1,
        title: "Красовки ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://basket-10.wbbasket.ru/vol1453/part145366/145366035/images/big/1.webp"
      },
    // Добавьте остальные товары с фото
  ];

  return (
    <div className="page-container">
      <h1>Женские красовки </h1>
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