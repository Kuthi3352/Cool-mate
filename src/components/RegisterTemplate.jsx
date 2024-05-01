import React, { useState } from 'react'
import "../styles/register.css"
import { useForm } from "react-hook-form"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlApi = "https://648478f7ee799e321626ba3d.mockapi.io/api/v1/register"
const RegisterTemplate = () => {

  const navigate = useNavigate()

  const [dataRegister, setDataRegister] = useState({}) 
  const registerSchema = yup.object({
    name: yup.string().required("Không được để trống"),
    email: yup.string().email("Email không hợp lệ").required(),
    password: yup.string().required("Không được để trống"),
   
  })
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  }) 


  const handleRegister = (data) => {

    
    const postUser = axios.post(urlApi,data)
    postUser.then((data) => setDataRegister(data.data) )
    postUser.catch((error) => console.log(error))
    
    reset()

    toast.success('Đăng kí thành công', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });

     setTimeout(() => {
      navigate("/login")

     }, 2500) 

  }
  localStorage.setItem("dataRegister", JSON.stringify(dataRegister))
  // useEffect(() => {
    
  // })
  
  return (
 <>
    <div className="AuthLayout h-full">
      <div className="h-screen w-screen relative ">
                <div className="absolute top-0 left-0 w-full h-full">
                
                    <img className='register-background h-full  object-cover object-center' src='/images/shopquanao.jpg' alt='backgound'/>
                </div>
               
      </div>
      <div className='register-khung'>
      <form className='register-form' onSubmit={handleSubmit(handleRegister)} >
      <input 
        id="name"
        name="name"
        placeholder="Name"
        label="Họ và tên"
        {...register("name")}
      />
       <p className='registerErr'>{errors?.name?.message}</p>
        <input
        id="email"
        name="email"
        placeholder="Email"
        label="Email"
        {...register("email")}
      />
      <p className='registerErr'>{errors?.email?.message}</p>
      <input
        id="password"
        name="password"
        placeholder="Password"
        label="Mật Khẩu"
        type="password"
        {...register("password")}
      />
      <p className='registerErr'>{errors?.password?.message}</p>
      <p className='RegisterDNN' onClick={() => navigate("/login")} >Đăng nhập ngay</p>
      <button className="mt-20 w-full !bg-red-500 rounded p-3 !text-white !h-[48px]" >
        Đăng ký
      </button>
    </form>
      </div>
    
    </div>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
   
    />
 </>
  )
}

export default RegisterTemplate