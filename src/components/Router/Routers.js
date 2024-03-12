import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Tours from '../Pages/Tours'
import TourDetails from '../Pages/TourDetails'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ThankYou from '../Pages/ThankYou'
import SearchResultList from '../Pages/SearchResultList'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to ='/home' />} />
        <Route path= '/home' element={<Home />} />
        <Route path= '/about' element={<About />} />
        <Route path= '/tour' element={<Tours />} />
        <Route path= '/tour/:id' element={<TourDetails />} />
        <Route path= '/login' element={<Login />} />
        <Route path= '/register' element={<Register />} />
        <Route path= '/thank-you' element={<ThankYou />} />
        <Route path= '/tours/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Router
