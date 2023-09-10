import './App.css';
import {useState} from 'react'
// import Login from "./components/login"
import Home from "./components/home"
// import LuxeView from "./components/Luxeview"
// import Dashboard from "./components/Dashboard"
// import Venue from "./components/Venue"
// import Categories  from './components/Categories';
// import Events from "./components/Events"
// import Booking from "./components/Bookings"
// import Commission from "./components/Commission"
// import Tax from "./components/Tax"
// import ManageBooking from "./components/ManageBookings"
// import Users from "./components/Users"
// import Banner from "./components/Banner"
// import Blogs from "./components/Blogs"
// import Contacts from "./components/Contact"
// import Venues from "./components/Venues"
// import Detailssection from "./components/Details/Details_Section";
// import AdminProfile from "./components/Profile/AdminProfile";
// import View_tax from "./components/View_tax";
// import Edit_tax from "./components/Edit_Tax";
// import MenuBuilder from "./components/MenuBuilderHeader"

import MenuBuilderFooter from "./components/MenuBuilderFooter"


function App() {

  const [admin_dropdown, setAdmin_dropdown] = useState(false)
  function handleAdmin_dropdown(){
    setAdmin_dropdown(!admin_dropdown);
  }
  const [small_header_open, setSmall_header_open] = useState(false) 
  function handlesmall_header_open(){
    setSmall_header_open(!small_header_open);
  }

  return (
    <div className=''>
    {/* <Login /> */}
    <Home admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} />
    {/* <LuxeView admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
     {/* <Dashboard /> */}

    {/* <Categories /> */}

    {/* <Venue admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/* <Events /> */}
    {/* <Booking /> */}
    {/* <Commission /> */}
    {/* <Tax /> */}
    {/* <Users /> */}
    {/* <ManageBooking /> */}
    {/* <Banner /> */}
    {/* <Blogs /> */}
    {/* <Contacts /> */}
    {/* <Venues /> */}
    {/* <Detailssection admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/* <Topbar /> */}
    {/* <AdminProfile admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/* <View_tax /> */}

    {/* <Edit_tax /> */}
    {/* <MenuBuilderFooter /> */}

    </div>
  );
}

export default App;
 