import React from 'react'
import Header from '../components/Header'
import PostPage from './PostPage'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup';
import { usePageState } from '../Context/StateProvider';

const HomePage = () => {
  const {showLogin,showSignup}=usePageState();
  return (
    <>
    <Header/>
    <PostPage/>
   {showLogin&&<Login/>}
   {showSignup&&<Signup/>}
</>
  )
}

export default HomePage
