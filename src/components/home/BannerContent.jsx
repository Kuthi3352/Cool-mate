import React from "react";
import "../../styles/home/bannerContent.css";
const BannerContent = () => {
  return (
    <div className="bannerContent-container">
      <div className="bannerContent-body">
        <div className="bannerContent-item ">
          <img src="/images/dohe.png" alt="" />
        </div>
        <div className="bannerContent-item">
          <img src="/images/dongay.png" alt="" />
        </div>
        <div className="bannerContent-item">
          <img src="/images/dolam.png" alt="" />
        </div>
        <div className="bannerContent-item banner-end">
          <img src="/images/dodaopho.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
