import React from "react";
import "../styles/login.css"

import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const navigate = useNavigate()
  const loginSchema = yup.object({
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
    resolver: yupResolver(loginSchema),
  }) 
  const handleRegister = (data) => {
    console.log(data);
    const dataRegister = JSON.parse(localStorage.getItem("dataRegister"))
    if(data.email === dataRegister.email && data.password === dataRegister.password){
      toast.success('Đăng nhập thành công', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        setTimeout(() => {
          navigate('/')
        }, 2500)


    }else {
      toast.error('Tài khoản không tồn tại', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
    reset()

  }
  return (
   <>
    <div className="AuthLayout h-full">
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="register-background h-full  object-cover object-center"
            src="/images/shopquanao.jpg"
            alt="backgound"
          />
        </div>
      </div>
      <div className="register-khung">
        <form className="register-form"  onSubmit={handleSubmit(handleRegister)}>
          <input id="email" name="email" placeholder="Email" label="Email"  {...register("email")} />
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
        

          <button className="mt-20 w-full !bg-red-500 rounded p-3 !text-white !h-[48px]">
            Đăng Nhập
          </button>
          <button className="RegisterL" onClick={() => navigate("/register")} >Tạo tài khoản mới</button>
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
  );
};

export default Login;
