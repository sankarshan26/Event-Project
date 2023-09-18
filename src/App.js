import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router,Route,Link,Routes,} from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home"
import LuxeView from "./components/Luxeview"
import Dashboard from "./components/Dashboard"
import Venue from "./components/Venue"
import Categories  from './components/Categories';
import Events from "./components/Events"
import Booking from "./components/Bookings"
import Commission from "./components/Commission"
import Tax from "./components/Tax"
import ManageBooking from "./components/ManageBookings"
import Users from "./components/Users"
import Banner from "./components/Banner"
import Blogs from "./components/Blogs"
import Contacts from "./components/Contact"
import Venues from "./components/Venues"
import Detailssection from "./components/Details/Details_Section";
import AdminProfile from "./components/Profile/AdminProfile";
import View_tax from "./components/View_tax";
import Edit_tax from "./components/Edit_Tax";
import MenuBuilderHeader from "./components/MenuBuilderHeader"

import MenuBuilderFooter from "./components/MenuBuilderFooter"

import { atom } from 'jotai'

export const admin_dropdown = atom(false)
export const small_header_open = atom(false)

function App() {

  // const [admin_dropdown, setAdmin_dropdown] = useState(false)
  // function handleAdmin_dropdown(){
  //   setAdmin_dropdown(!admin_dropdown);
  // }
  // const [small_header_open, setSmall_header_open] = useState(false) 
  // function handlesmall_header_open(){
  //   setSmall_header_open(!small_header_open);
  // }

  return (
    <div className=''>
    {/* <Login /> */}
    {/* <Home admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/*  */}
     {/*  */}

    {/*  */}

    {/*  */}
    {/* */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/* <ManageBooking /> */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/* <Venues /> */}
    {/* <Detailssection admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/* <Topbar /> */}
    {/*  */}
    {/*  */}

    {/*  */}
    {/*  */}
    <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/venue" element={<Venue/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/admindashboard" element={<Dashboard />} /> 
        <Route path="/luxeview" element={<LuxeView />} /> 
        <Route path="/adminprofile" element={<AdminProfile />} /> 
        <Route path="/details" element={<Detailssection />} /> 
        <Route path="/categories" element={<Categories />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/taxes" element={<Tax />} />
        <Route path="/view-tax" element={<View_tax />} />
        <Route path="/edit-tax" element={<Edit_tax />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/header-menu" element={<MenuBuilderFooter/>} />
        <Route path="/footer-menu" element={<MenuBuilderHeader/>} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;
 