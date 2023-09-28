import React from 'react';
import Form from '../components/Login/Form';

const Login = () => {
  return (
  <div className=' relative flex justify-center items-center w-screen h-screen  bg-center bg-contain bg-no-repeat ' style={{ backgroundImage: "url(/LoginForm/bg.png)" }}>
    <div className=' w-[55vw] flex flex-col self-center items-center relative'>
    <img src="/LoginForm/loginImage1.svg" className=' w-20 md:w-24 lg:w-28 absolute z-40 -top-16 lg:-top-20' alt="" />
    <Form />
    <img src="/LoginForm/loginImage2.svg" className='w-32 sm:w-48 md:w-52 lg:w-64 absolute z-40 bottom-0 transform translate-x-full lg:translate-x-3/4 translate-y-1/2' alt="" />
    </div>
   
  </div>

  );
}

export default Login;
