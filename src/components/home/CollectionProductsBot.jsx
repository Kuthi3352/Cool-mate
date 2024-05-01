import React, { useEffect, useState } from "react";
import "../../styles/home/collectionProductsBot.css";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const APIAllProducts = "https://fakestoreapi.com/products?limit=5";
const CollectionProductsBot = () => {
  const [dataAllProducts, setDataAllProducts] = useState([]);

  useEffect(() => {
    const fetchApiAllProducts = axios.get(APIAllProducts);
    // console.log("====", fetchApiAllProducts);
    fetchApiAllProducts.then((data) => {
      setDataAllProducts(data.data);
    });
    console.log(dataAllProducts);
  }, []);

  return (
    <>
      <div>
        <div className="products-container">
          <div className="products-banner">
            <img src="/images/banchay.png" alt="" />
          </div>
          <Swiper
            spaceBetween={4}
            slidesPerView={1}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide className="products-item">
              {dataAllProducts.map((item) => {
                return (
                  <div key={item.id} className="products-sp">
                    <img
                      className="products-images"
                      src={item.image}
                      alt={item.title}
                    />
                    <h2 className="products-name">{item.title}</h2>
                    <p className="products-price">{item.price}$</p>
                  </div>
                );
              })}
            </SwiperSlide>
          </Swiper>
          <div className="products-button">
            <button>Xem tất cả »</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionProductsBot;
