import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Blogs from "./Blogs";
import HomeCustomers from "./HomeCustomers";
import Login from "./Login";
import ManageEventsPage from "./ManageEventsPage";
import Tickets from "./Tickets";
import YogaNhealth from "./YogaNhealth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ManageEarningsPage from './MangeEarningsPage'
import CheckoutPage from './CheckoutPage';
const Final = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/home-customers" element={<HomeCustomers />} />
        <Route path="/yoga-n-health" element={<YogaNhealth />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/manage-events" element={<ManageEventsPage />} />
        <Route path="/manage-earnings" element={<ManageEarningsPage />} />
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/hlogin' element={<Login/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default Final
