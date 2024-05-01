import React from "react";
import Header from "../components/home/Header";
import SimpleSlider from "../components/home/SimpleSlider";
import CollectionNewProducts from "../components/home/CollectionNewProducts";
import CollectionProductsBot from "../components/home/CollectionProductsBot";
import BannerContent from "../components/home/BannerContent";
import ColectionCategories from "../components/home/ColectionCategories";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <SimpleSlider />
        <BannerContent />
        <CollectionNewProducts />
        <ColectionCategories />
        <CollectionProductsBot />
        <Footer />
      </div>
    </>
  );
};

export default Home;
