import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/home/colectionCategories.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const APISpecific = "https://fakestoreapi.com/products/categories";
const APIGetProductsSpecific = "https://fakestoreapi.com/products/category";
const ColectionCategories = () => {
  const [specific, setSpecific] = useState([]);
  const [dataProductSpecific, setDataAllProductsSpecific] = useState([]);
  useEffect(() => {
    const fetchApiSpecific = axios.get(APISpecific);
    fetchApiSpecific.then((data) => {
      setSpecific(data.data);
    });
    fetchApiSpecific.catch((error) => {
      console.log(error);
    });
    const handleGetProductSpecific = axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    handleGetProductSpecific.then((data) => {
      setDataAllProductsSpecific(data.data);
    });
  }, []);

  const handleChangData = (param) => {
    const newParam = param.split(" ").join("%20");

    const handleGetProductSpecific = axios.get(
      `${APIGetProductsSpecific}/${newParam}`
    );
    handleGetProductSpecific.then((data) => {
      setDataAllProductsSpecific(data.data);
    });
  };

  return (
    <div>
      <div className="specific-banner">
        <img src="/images/flasale.png" alt="" />
      </div>
      <div className="specific-item">
        {specific.map((item) => {
          return <button onClick={() => handleChangData(item)}>{item}</button>;
        })}
      </div>
      <div className="products-contaner">
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
          <SwiperSlide className="products-item products-bg">
            {dataProductSpecific.map((item) => {
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
      </div>
    </div>
  );
};

export default ColectionCategories;
