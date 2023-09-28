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

import P1I1 from './assets/CustomerAssests/p1/i1.png'
import P1I2 from './assets/CustomerAssests/p1/i2.png'
import P1I3 from './assets/CustomerAssests/p1/i3.png'
import P1I4 from './assets/CustomerAssests/p1/i4.png'
import P2I1 from './assets/CustomerAssests/p2/i1.png'
import P2I2 from './assets/CustomerAssests/p2/i2.png'
import P2I3 from './assets/CustomerAssests/p2/i3.png'
import P2I4 from './assets/CustomerAssests/p2/i4.png'
import P3I1 from './assets/CustomerAssests/p3/i1.png'
import P3I2 from './assets/CustomerAssests/p3/i2.png'
import P3I3 from './assets/CustomerAssests/p3/i3.png'
import P3I4 from './assets/CustomerAssests/p3/i4.png'
import P4I1 from './assets/CustomerAssests/p4/i1.png'
import P4I2 from './assets/CustomerAssests/p4/i2.png'
import P4I3 from './assets/CustomerAssests/p4/i3.png'
import P4I4 from './assets/CustomerAssests/p4/i4.png'
import P5I1 from './assets/CustomerAssests/p5/i1.png'
import P5I2 from './assets/CustomerAssests/p5/i2.png'
import P5I3 from './assets/CustomerAssests/p5/i3.png'
import P5I4 from './assets/CustomerAssests/p5/i4.png'
import P6I1 from './assets/CustomerAssests/p6/i1.png'
import P6I2 from './assets/CustomerAssests/p6/i2.png'
import P6I3 from './assets/CustomerAssests/p6/i3.png'
import P6I4 from './assets/CustomerAssests/p6/i4.png'
import I1 from './assets/CustomerAssests/i1.png'
import I2 from './assets/CustomerAssests/i2.png'
import I3 from './assets/CustomerAssests/i3.png'
import I4 from './assets/CustomerAssests/i4.png'
import BoilerPlate from './components/Customer/BoilerPlate';
import Education from './components/Customer/Education';
import Business from './components/Customer/Business';

import CheckoutPage from './components/Harshita/Pages/CheckoutPage'
import HLogin from './components/Harshita/Pages/Login'
import Final from './components/Harshita/Pages/Final'
import CBlogs from './components/Harshita/Pages/Blogs'

export const admin_dropdown = atom(false)
export const small_header_open = atom(false)

export const gtitle = atom("")
export const gsubtitle = atom("")
export const gbackground = atom("1")
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
        <Route path="/" element={<Home/>} />
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
        
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/hlogin' element={<HLogin/>}/>
        <Route exact path="/final/*" element={<Final/>} />
        <Route exact path="/blog-customer" element={<CBlogs/>} />
        
        <Route path="/marketing" element={<BoilerPlate
          title="Global Marketing Conference"
          subtitle="Sample text!"
          event="Join us at the Global Marketing Conference from [Conference Dates] in [Conference Location]. Explore the power of global marketing through engaging keynotes, interactive sessions, and valuable networking opportunities. Discover the latest strategies, trends, and success stories that will give you a competitive edge in the global marketplace. Submit your research papers and connect with industry leaders shaping the future of global marketing. Be part of this exceptional gathering of global marketing professionals. Don't miss out!"
          learn="During our strategic planning seminars, participants will gain valuable insights and practical knowledge to enhance their strategic thinking and decision-making abilities. They will learn to develop a clear vision and mission for their organization, conduct a thorough SWOT analysis to identify strengths, weaknesses, opportunities, and threats, and set SMART goals and objectives aligned with their strategic direction."
          audience="This workshop is designed for both seasoned product marketers and individuals new to the field. It is open to anyone interested in learning effective product marketing strategies, regardless of their experience or industry background."
          instructor="Introducing Linda Thomas, our esteemed instructor for the strategic planning seminars. With a wealth of experience as a successful CEO and a proven track record in strategic leadership, Linda brings invaluable expertise to the table. Her dynamic and engaging teaching style ensures that participants not only grasp the theoretical concepts of strategic planning but also gain practical insights from her real-world experiences."
          events={ [
            { e: "Mission development", i: P1I1 },
            { e: "swot analysis", i: P1I2 },
            { e: "environmental analysis", i: P1I3 },
            { e: "resource allocation", i: P1I4 }
          ]
          }
          photo="1"
          i={ I1 }
        /> } />
        <Route path="/vr" element={<BoilerPlate
          title="VR Assistant Workshop"
          subtitle="Sample text!"
          event="Join our VR Assistant Workshop on [Workshop Date] at [Workshop Location]. Explore the potential of virtual reality in assistant technology through hands-on demos, expert insights, and networking. Learn the latest VR tools, design techniques, and real-world use cases for creating immersive virtual assistants. Limited seats available. Register now at [Workshop Registration Website] and unlock the future of assistant technology."
          learn="During our strategic planning seminars, participants will gain valuable insights and practical knowledge to enhance their strategic thinking and decision-making abilities. They will learn to develop a clear vision and mission for their organization, conduct a thorough SWOT analysis to identify strengths, weaknesses, opportunities, and threats, and set SMART goals and objectives aligned with their strategic direction."
          audience="This workshop is designed for both seasoned product marketers and individuals new to the field. It is open to anyone interested in learning effective product marketing strategies, regardless of their experience or industry background."
          instructor="Introducing Linda Thomas, our esteemed instructor for the strategic planning seminars. With a wealth of experience as a successful CEO and a proven track record in strategic leadership, Linda brings invaluable expertise to the table. Her dynamic and engaging teaching style ensures that participants not only grasp the theoretical concepts of strategic planning but also gain practical insights from her real-world experiences."
          events={ [
            { e: "Mission development", i: P2I1 },
            { e: "swot analysis", i: P2I2 },
            { e: "environmental analysis", i: P2I3 },
            { e: "resource allocation", i: P2I4 }
          ] }
          photo="2"
          i={ I1 }
        />} />
        <Route path="/yoga" element={ <BoilerPlate
          title="Yoga & Mental Health"
          subtitle="Managing Anxiety & Depression"
          event="Welcome to our yoga event facilities! We provide a serene and welcoming space for all yoga enthusiasts to come together and explore the path of well-being and self-discovery. Our state-of-the-art facilities are designed with your comfort in mind, offering a tranquil atmosphere that allows you to immerse yourself fully in your yoga practice."
          learn="Transformational Yoga Practice: Our events offer an opportunity to engage in transformative yoga practices led by experienced instructors. You'll learn various yoga techniques, explore different styles, and deepen your understanding of the mind-body connection."
          audience="We target those individuals who already have experience or freshers who wants to learn yoga and are looking to deepen their practice, explore different yoga styles, and participate in advanced workshops or retreats."
          instructor="Introducing our esteemed yoga instructor for the upcoming yoga event: Bella Swan. With their wealth of knowledge, passion for yoga, and nurturing approach, Bella is committed to guiding participants on a transformative journey of self-discovery and well-being."
          events={ [
            { e: "Stress reducing yoga", i: P3I1 },
            { e: "Restorative Yoga", i: P3I2 },
            { e: "Promoting Relaxation Yoga", i: P3I3 },
            { e: "Calming The Mind", i: P3I4 }
          ] }
          photo="3"
          i={ I2 }
        />} />
        <Route path="/piano" element={<BoilerPlate
          title="piano classes"
          subtitle="Unlock Your Musical Brilliance with Piano Mastery"
          event="Our piano classes offer a comprehensive and engaging curriculum designed to take students of all levels on a musical journey. From the very basics of piano technique and music theory to advanced concepts of improvisation and composition, our classes cover a wide range of topics. Students will learn proper hand positioning, develop finger dexterity through exercises, and explore the intricacies of melody and chord progressions. Sight-reading skills will be honed, and expressive playing techniques will be mastered to bring out the true essence of the music."
          learn="With an emphasis on performance techniques, students will gain confidence in showcasing their skills in recitals and public performances. Ultimately, our classes foster a deep appreciation for music, unlocking creativity and musical brilliance in every student."
          audience="We target those individuals who already have experience or freshers who wants to learn piano and are looking to deepen their practice, explore different piano styles, and participate in advanced workshops or retreats."
          instructor="Meet Sarah Mitchell, our passionate and experienced piano instructor. With over 15 years of teaching expertise, Sarah brings a wealth of knowledge and a contagious enthusiasm for music to every lesson. Her patient and personalized approach ensures that each student receives individual attention and guidance tailored to their unique learning style and goals."
          events={ [
            { e: "intro to piano", i: P4I1 },
            { e: "musical theory fundamentals", i: P4I2 },
            { e: "expressive playing", i: P4I3 },
            { e: "performance technique", i: P4I4 }
          ] }
          photo="4"
          i={ I3 }
        />} />
        <Route path="/strategic" element={<BoilerPlate
          title="startegic planning"
          subtitle=""
          event="Empower your organization with effective strategic planning techniques, from goal-setting to execution, for sustained success and growth. Unlock the potential of your business with comprehensive strategic planning topics, including SWOT analysis, resource allocation, and performance measurement, to drive impactful decision-making."
          learn="During our strategic planning seminars, participants will gain valuable insights and practical knowledge to enhance their strategic thinking and decision-making abilities. They will learn to develop a clear vision and mission for their organization, conduct a thorough SWOT analysis to identify strengths, weaknesses, opportunities, and threats, and set SMART goals and objectives aligned with their strategic direction."
          audience="Executives and Senior Management: CEOs, CFOs, CMOs, and other C-suite executives responsible for setting organizational strategy and driving business growth.Business Owners and Entrepreneurs: Individuals leading their own businesses or start-ups, seeking to develop effective strategic plans for sustainable success."
          instructor="Introducing Linda Thomas, our esteemed instructor for the strategic planning seminars. With a wealth of experience as a successful CEO and a proven track record in strategic leadership, Linda brings invaluable expertise to the table. Her dynamic and engaging teaching style ensures that participants not only grasp the theoretical concepts of strategic planning but also gain practical insights from her real-world experiences."
          events={ [
            { e: "Mission development", i: P5I1 },
            { e: "swot analysis", i: P5I2 },
            { e: "environmental analysis", i: P5I3 },
            { e: "resource allocation", i: P5I4 }
          ] }
          photo="5"
          i={ I1 }
        />} />
        <Route path="/wine" element={<BoilerPlate
          title="Winter Wine Night"
          subtitle="Toast to the Cozy Delights of Winter: Join us for a Spectacular Wine Night Underneath the Snowfall!"
          event="Experience the ultimate fusion of wine, music, and winter delights at our sensational Winter Wine Night event. Get ready for an evening of enchantment, where exquisite wines harmonize with live singers and DJs, creating an atmosphere of pure bliss. Sip and savor an exceptional selection of wines from renowned vineyards, carefully chosen to complement the winter season. From velvety reds to crisp whites, each sip will transport you to a world of refined flavors. As you revel in the joys of wine, our lineup of talented singers will serenade you with soulful melodies, creating an ambiance that captures the essence of the season. Feel the warmth as their captivating voices fill the air, adding an extra touch of magic to your wine experience. When the night is young, our talented DJs will take over, spinning an eclectic mix of tunes that will keep you on your feet. Dance to your heart's content as the music weaves seamlessly through various genres, ensuring a night of non-stop entertainment. Indulge in delectable culinary delights specially crafted to complement the wine offerings. From elegant canapés to artisanal cheese platters, our menu is designed to heighten your tasting experience and delight your palate."
          learn=""
          audience="
          1. Wine Enthusiasts 
          2. Music Aficionados 
          3. Socializers 
          4. Celebration Seekers 
          5. Professionals and Urban Dwellers 
          6. Adventurous Tastemakers"
          instructor="Introducing Linda Thomas, our esteemed instructor for the strategic planning seminars. With a wealth of experience as a successful CEO and a proven track record in strategic leadership, Linda brings invaluable expertise to the table. Her dynamic and engaging teaching style ensures that participants not only grasp the theoretical concepts of strategic planning but also gain practical insights from her real-world experiences."
          events={ [
            { e: "cocktail party", i: P6I1 },
            { e: "a day to know how wine is made", i: P6I2 },
            { e: "sunny side up", i: P6I3 },
            { e: "group nights", i: P6I4 }
          ] }
          photo="6"
          i={ I4 }
        />} />
        <Route path="/education" element={  <Education />} />
        <Route path="/business" element={<Business />} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;
 
