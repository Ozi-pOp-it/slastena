
import ProductCard from "./components/product_card";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Nike Air Max ",
      price: 120,
      discount: 25,
      rating: 4.6,
      img: "https://www.pandashop.md/i/products/205/2056383.jpg",
    },
    {
      id: 2,
      title: "Fleece ",
      price: 180,
      discount: 15,
      rating: 4.8,
      img: "https://i.pinimg.com/originals/79/b6/5b/79b65b2d5821f783ac273d738ceea5b5.jpg",
    },
    {
      id: 3,
      title: "Куртки мужские ",
      price: 90,
      discount: 10,
      rating: 4.3,
      img: "https://avatars.mds.yandex.net/i?id=16f129d4ec9d94d08e4562d00ae9e825_l-8819226-images-thumbs&n=13",
    },
    {
      id: 4,
      title: "Женские куртки ",
      price: 75,
      discount: 20,
      rating: 4.5,
      img: "https://ae03.alicdn.com/kf/S4a238bfb90b34f8a80ab29f298c254beG.jpg",
    },
    {
      id: 5,
      title: "Пальто класические",
      price: 65,
      discount: 5,
      rating: 4.7,
      img: "https://sheily.ru/wp-content/uploads/2023/10/kapuch-2-2-800x1080.jpg",
    },
    {
      id: 6,
      title: "Юбка миди",
      price: 50,
      discount: 10,
      rating: 4.6,
      img: "https://i.pinimg.com/736x/4e/8b/f2/4e8bf247ea2d12e56b2759a7d3990af8.jpg",
    },
    {
      id: 7,
      title: "Рубашка полосатая",
      price: 110,
      discount: 12,
      rating: 4.4,
      img: "https://ae04.alicdn.com/kf/H06c83ccb125248ff8df96db29355738ft.jpg",
    },
    {
      id: 8,
      title: "Блузка шелковая",
      price: 140,
      discount: 0,
      rating: 4.2,
      img: "https://avatars.mds.yandex.net/i?id=dd2493ead34426e41a59a63b1a64101a_l-12202401-images-thumbs&n=13",
    },
    {
      id: 9,
      title: "Asics Gel-Kayano",
      price: 130,
      discount: 18,
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/61DYVIoNFnL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      title: "Костюм ",
      price: 150,
      discount: 10,
      rating: 4.9,
      img: "https://ae04.alicdn.com/kf/A01b6ed1b088b4431aa060e8e0881c716j.jpg",
    },
  ];
  return (
    <div>
      <div className="container p-12 mx-auto">
        <div className="grid grid-cols-4 gap-x-0.5 gap-y-1">
          {products.map((e) => (
            <ProductCard
              key={e.id}
              title={e.title}
              price={e.price}
              discount={e.discount}
              img={e.img}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}