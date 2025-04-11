// pages/mens-clothing.js
'use client'
import React from 'react';
import ProductCard from '../components/product_card';

const MensClothingPage = () => {
  const products = [
    
    {
      id: 1,
      title: "бузлак шелковая ",
      price: 120,
      discount: 25,
      rating: 4.6,
      img: "https://mig.pics/uploads/posts/2021-11/1636484025_43-mykaleidoscope-ru-p-shelkovaya-bluzka-devushka-krasivo-foto-44.jpg"
    },
    {
        id: 1,
        title: "бузлак шелковая ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://mig.pics/uploads/posts/2021-11/1636484025_43-mykaleidoscope-ru-p-shelkovaya-bluzka-devushka-krasivo-foto-44.jpg"
      },{
        id: 1,
        title: "бузлак шелковая ",
        price: 120,
        discount: 25,
        rating: 4.6,
        img: "https://mig.pics/uploads/posts/2021-11/1636484025_43-mykaleidoscope-ru-p-shelkovaya-bluzka-devushka-krasivo-foto-44.jpg"
      },
    // Добавьте остальные товары с фото
  ];

  return (
    <div className="page-container">
      <h1>Женская одежда </h1>
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