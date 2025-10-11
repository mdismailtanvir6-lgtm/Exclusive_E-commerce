import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default RootLayout
