import React from 'react'

import "../../styles/home/header.css"
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <div className='header'>
      <div className='header-inner'>
        <div className='header-navbar'>
        <HiMenuAlt1 className='header-navbar-menu'/>
        <CiSearch className='header-navbar-search' />
        </div>
      <div className='header-logo'>
      <img className='logoHome' src="https://www.coolmate.me/images/logo-coolmate-new.svg?v=1" alt='logoHome'/>
      </div>
       
        <ul className='header-ul'>
            <li>Sale</li>
            <li>Sản phẩm</li>
            <li>Đồ lót</li>
            <li>Đồ thể thao</li>
            <li>Mặc hằng ngày</li>
            <li>Nước hoa</li>
            <li>Sản xuất riêng</li>
            <li>Care&share</li>
           
        </ul>
        <div className='header-actionUser'>
            <div className='header-actionUser-search'>
              <div>
                <a href="."  className='header-actionUser-icon' >
                <CiSearch />
                </a>
         
               
             
             
                <input type="text " placeholder='Tìm kiếm sản phẩm...'/>
              </div>
               
            </div>
            <FaUserAlt className='header-actionUser-user' />
            <FaBagShopping className="header-actionUser-shopping" />
           
        </div>

      </div>
    
    </div>
    
  )
}

export default Header