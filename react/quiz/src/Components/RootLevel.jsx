import React from 'react'
import Header from './Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer'

export default function RootLevel() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
