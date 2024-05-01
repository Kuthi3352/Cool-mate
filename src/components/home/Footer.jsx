import React from "react";

import { SiZalo } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import "../../styles/home/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div>
      <div className="footer__bg">
        <div className="footer__inner py-5">
          <div className="container footer-container py-4">
            <div className="row">
              <div className="footer-gioithieu col-12 col-sm-7 col-md-6 col-lg-4 pr-lg-5">
                <div className="footer__logo mb-3">
                  <h2>
                    <a href="#">GIỚI THIỆU</a>
                  </h2>
                </div>
                <p>ALTDstore-chuỗi phân phối mua đi bán lại</p>
                <p>
                  {" "}
                  <MdOutlinePhoneIphone /> 0397772923
                </p>
                <p>
                  <MdOutlineEmail /> anhthidola@gmail.com
                </p>
                <p>
                  <CiShop /> Giờ Mở cửa: 09:00 - 22:00
                </p>
                <div className="footer__social mt-4">
                  <a
                    href="https://www.facebook.com/AnhThiGa.com.vn/"
                    className="footer-facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.facebook.com/AnhThiGa.com.vn/"
                    className="footer-instagram"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/AnhThiGa.com.vn/"
                    className="footer-zalo"
                  >
                    <SiZalo />
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-5 col-md-6 col-lg-2 mt-5 mt-sm-0">
                <div>
                  <h6 className="title">CHÍNH SÁCH</h6>
                  <ul className="px-0">
                    <li>
                      <a href="#">Hướng dẫn đặt hàng</a>
                    </li>
                    <li>
                      <a href="#">Thông tin chuyển khoản</a>
                    </li>
                    <li>
                      <a href="#">Chính sách</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-5 col-md-6 col-lg-2 mt-5 mt-lg-0">
                <div>
                  <h6 className="title">HỆ THỐNG CỬA HÀNG</h6>
                  <ul className="px-0">
                    <li>
                      <a href="#">
                        <FaMapMarkedAlt /> 105 Vườn lài, An phú đông, Q12, TPHCM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-7 col-md-6 col-lg-4 mt-5 mt-lg-0">
                <h6 className="title">PHƯƠNG THỨC THANH TOÁN</h6>
                <span className="footer-cod">
                  <SiVisa />
                </span>
                <span className="footer-cod">
                  <FaCcMastercard />{" "}
                </span>
                <span className="footer-cod">
                  <BsPaypal />
                </span>
                <span className="footer-cod">COD</span>
                {/* <form action="" className="mt-4">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email Address"
                  />

                  <button
                    type="button"
                    className="btn-primary btn-style w-100 mt-3"
                  >
                    Subscribe Now
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <p className="col-lg-8">
              © 2023 Diner. All Rights Reserved | WordPress Theme by{" "}
              <a href="">W3Layouts.</a>
            </p>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
