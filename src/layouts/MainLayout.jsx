import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLayout