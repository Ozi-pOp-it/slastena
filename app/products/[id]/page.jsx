'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const ProductDetailedPage = () =>{    
    const { id } = useParams();
    const [products, setProducts] = useState([])

    
  useEffect(() => {
    if (!id) return
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [id])

  if (!id) return <p>Loading category...</p>
  if (products.length === 0) return <p>Loading ... </p>


    return (
        <div className="page-container">
          {console.log(products)}
          <h1>{id} красовки </h1>
          <div className="products-grid">
          {products[`${id}`].map((item) => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.title}</h3>
          <img src={item.img} alt={item.title} width={200} />
          <p>Price: ${item.price}</p>
          <p>Discount: {item.discount}%</p>
          <p>Rating: {item.rating}</p>
        </div>
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


export default ProductDetailedPage
