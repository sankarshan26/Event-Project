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
// import Users from "./components/Users"
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
    {/*  <Dashboard /> */}

    {/* <Categories /> */}

    {/* <Venue admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} /> */}
    {/* <Events /> */}
    {/* <Booking /> */}
    {/* <Commission /> */}
    {/* <Tax /> */}
    {/* <Users /> */}
    </div>
  );
}

export default App;
 