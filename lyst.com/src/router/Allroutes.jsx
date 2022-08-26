import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Mens from '../components/Mens'
import SearchData from '../components/SearchData'
import Womens from '../components/Womens'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/women" element={<Womens/>}/>
        <Route path="/search" element={<SearchData/>}/>
    </Routes>
  )
}

export default Allroutes