// pages/cart.js
'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
const CartPage = () => {
  // Пример данных корзины 
  const cartItems = [
    {
      id: 1,
      name: "красовки",
      price: 150,
      quantity: 1,
      image: "https://cdn1.ozone.ru/s3/multimedia-x/6706003929.jpg",
      size: "38"
    },
    {
      id: 2,
      name: "Куртки мужские",
      price: 50,
      quantity: 2,
      image: "https://ae04.alicdn.com/kf/S25447f212f3c483a823c17ff52b04933h.jpg",
      size: "L"
    }
  ];

  // Расчет общей суммы
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 10;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-container">
      <Head>
        <title>Корзина покупок</title>
      </Head>
      
      <h1>Ваша корзина</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Размер: {item.size}</p>
                  <div className="quantity-controls">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                  <button className="remove-item">×</button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Ваша корзина пуста</p>
          )}
        </div>
        
        <div className="cart-summary">
          <h2>Итого</h2>
          <div className="summary-row">
            <span>Промежуточный итог</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Доставка</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Общая сумма</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-button">Оформить заказ</button>
        </div>
      </div>

      <style jsx>{`
        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        .cart-content {
          display: flex;
          gap: 30px;
        }
        .cart-items {
          flex: 2;
        }
        .cart-summary {
          flex: 1;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          height: fit-content;
        }
        .cart-item {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
          gap: 20px;
        }
        .item-image {
          width: 100px;
          height: 100px;
        }
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
        .item-details {
          flex: 1;
        }
        .item-details h3 {
          margin: 0 0 10px 0;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        .quantity-controls button {
          width: 25px;
          height: 25px;
          border: 1px solid #ddd;
          background: none;
          cursor: pointer;
          border-radius: 4px;
        }
        .item-price {
          font-weight: bold;
          min-width: 100px;
          text-align: right;
          position: relative;
        }
        .remove-item {
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #999;
        }
        .remove-item:hover {
          color: #ff0000;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        .summary-row.total {
          font-weight: bold;
          font-size: 18px;
          margin-top: 20px;
          border-bottom: none;
        }
        .checkout-button {
          width: 100%;
          padding: 12px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
        }
        .checkout-button:hover {
          background: #005bb5;
        }
        .empty-cart {
          text-align: center;
          padding: 50px 0;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .cart-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;