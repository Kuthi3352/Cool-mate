import React, { useEffect, useState } from "react";

import "../../styles/home/header.css";
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { BsExclamationCircleFill } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { GiTrousers } from "react-icons/gi";
import { GiUnderwear } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { FaRedhat } from "react-icons/fa";
import { GiBelt } from "react-icons/gi";
const Header = () => {
  const [userName, setUserName] = useState({});
  const dataRegister = JSON.parse(localStorage.getItem("dataRegister"));
  console.log(dataRegister);
  // useEffect(() => {
  //   setUserName(dataRegister.)
  // })
  return (
    <>
      <div className="header-altd fix-altd">
        <div className="header-topbar">
          <div className="marquee-topbar">
            <div className="topbar-item animation">
              <p>
                <strong>🚛 FREESHIP mọi đơn hàng</strong>
              </p>
            </div>
            <div className="topbar-item">
              <p>
                <strong>
                  🔥 ước mơ trước năm 30 sẽ trở thành BRAND nhỏ lẻ Thành phố 🔥
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="header-top">
          <div className="header-in">
            <div className="header-inner">
              <div className="header-navbar">
                <HiMenuAlt1 className="header-navbar-menu" />
                <CiSearch className="header-navbar-search" />
              </div>
              <div className="header-logo">
                <img
                  className="logoHome"
                  src="/images/logo3.png"
                  alt="logoHome"
                />
              </div>

              <div className="header-actionUser">
                <div className="header-actionUser-search">
                  <div>
                    <a href="." className="header-actionUser-icon">
                      <CiSearch />
                    </a>

                    <input type="text " placeholder="Tìm kiếm sản phẩm..." />
                  </div>
                </div>
                <div className="header-muc">
                  <BsExclamationCircleFill className="header-actionUser-user" />
                  <p className="header-p">Giới thiệu</p>
                </div>
                <div className="header-muc">
                  <IoDocumentTextOutline className="header-actionUser-user" />
                  <p className="header-p">Thông tin hay</p>
                </div>

                <div className="header-muc">
                  <IoIosCart className="header-actionUser-user" />
                  <p className="header-p">Giỏ hàng</p>
                </div>

                <div className="header-muc">
                  <FaUserCircle className="header-actionUser-user" />
                  <div className="header-sigup">
                    <Link to="/login" className="link">
                      <p className="header-p">Đăng nhập |</p>
                    </Link>
                    <Link to="/register" className="link">
                      <p className="header-p" style={{ marginLeft: 5 }}>
                        Đăng kí
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bot">
          <div className="header-in">
            <div className="header-inner">
              <ul className="header-ul">
                <li>
                  <div>
                    <FaTshirt className="icon-nav" />
                    <span>Áo</span>
                  </div>
                </li>
                <li>
                  <div>
                    <GiTrousers className="icon-nav" />
                    <span>Quần</span>
                  </div>
                </li>
                <li>
                  <div>
                    <GiUnderwear className="icon-nav" />
                    <span>Quần xì</span>
                  </div>
                </li>
                <li>
                  <div>
                    <GiGymBag className="icon-nav" />
                    <span>Đồ thể thao</span>
                  </div>
                </li>

                <li>
                  <div>
                    <TbPerfume className="icon-nav" />
                    <span>Nước hoa</span>
                  </div>
                </li>
                <li>
                  <div>
                    <FaRedhat className="icon-nav" />
                    <span>Nón</span>
                  </div>
                </li>
                <li>
                  <div>
                    <GiBelt className="icon-nav" />
                    <span>Dây nịt</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
