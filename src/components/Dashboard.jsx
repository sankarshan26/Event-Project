import React from "react";
import notification from "../assets/Dashboard/notification.png";
import customer from "../assets/Dashboard/customer.png";
import events from "../assets/Dashboard/events.png";
import bookings from "../assets/Dashboard/bookings.png";
import organizer from "../assets/Dashboard/organizer.png";
import revenue from "../assets/Dashboard/revenue.png";
import Sidebar from "./Sidebar";
import Footer from "./Footer"
import stats from "../assets/Dashboard/stats_.png";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Dashboard() {
  const data = [
    {
      name: "MEDITATION CLASSES",
      value: 280,
    },
    {
      name: "COOKING CLASSES",
      value: 230,
    },
    {
      name: "BUSINESS CLASSES",
      value: 320,
    },
    {
      name: "PIANO CLASSES",
      value: 320,
    },
    {
      name: "SUNDAY SWIMMING",
      value: 320,
    },
    {
      name: "YOGA",
      value: 200,
    },
    {
      name: "WINE NIGHTS",
      value: 320,
    },
    {
      name: "CONCERTS",
      value: 260,
    },
    {
      name: "TREKKING CLASSES",
      value: 320,
    },
  ];
  return (
    <div className="bg-black" style={{ "text-transform": "none" }}>
      <div className="flex flex-row gap-8 sm:gap-10">
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1 text-white pt-8 mr-2 gap-5">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="text-white font-cinzel font-bold text-lg md:text-xl">
              YOUR DASHBOARD
            </div>
            <div
              className="text-black font-semibold font-cinzel px-2 rounded-3xl text-center"
              style={{
                background:
                  "linear-gradient(181deg, rgba(190, 7, 254, 0.74) 0.86%, rgba(246, 19, 210, 0.78) 160.18%)",
              }}
            >
              <img
                src={notification}
                alt="notification-icon"
                className="w-[20px] inline sm:w-[40px]"
              />
              NOTIFICATION
            </div>
          </div>

          <div className="flex justify-evenly flex-wrap mt-4 sm:mt-10 gap-x-2 gap-y-5 sm:gap-10 ">
            <div
              className="relative px-[2px] py-[2px] sm:px-4 sm:py-4  rounded-xl flex justify-center items-center sm:w-[143px]"
              style={{
                background:
                  "linear-gradient(180deg, #FE9AEE 0%, rgba(173, 5, 253, 0.8) 123.79%)",
              }}
            >
              <span className="text-black text-center font-cinzel font-bold text-xs sm:text-base">
                4 <br /> CUSTOMERS
              </span>
              <img
                src={customer}
                alt="customer"
                className="inline absolute top-[-75%] w-[30px] sm:w-[55px]"
              />
            </div>

            <div
              className="relative px-[2px] py-[2px] sm:px-4 sm:py-4  rounded-xl flex justify-center items-center sm:w-[143px]"
              style={{
                background:
                  "linear-gradient(180deg, #FE9AEE 0%, rgba(173, 5, 253, 0.8) 123.79%)",
              }}
            >
              <span className="text-black text-center font-cinzel font-bold text-xs sm:text-base">
                4 <br />
                ORGANIZERS
              </span>
              <img
                src={organizer}
                alt="customer"
                className="inline absolute top-[-36%] w-[30px] sm:w-[55px]"
              />
            </div>

            <div
              className="relative px-[2px] py-[2px] sm:px-4 sm:py-4  rounded-xl flex justify-center items-center sm:w-[143px]"
              style={{
                background:
                  "linear-gradient(180deg, #FE9AEE 0%, rgba(173, 5, 253, 0.8) 123.79%)",
              }}
            >
              <span className="text-black text-center font-cinzel font-bold text-xs sm:text-base">
                16
                <br />
                EVENTS
              </span>
              <img
                src={events}
                alt="customer"
                className="inline absolute top-[-70%] sm:top-[-50%] w-[30px] sm:w-[55px]"
              />
            </div>
            <div
              className="relative px-[2px] py-[2px] sm:px-4 sm:py-4 rounded-xl flex justify-center items-center sm:w-[143px]"
              style={{
                background:
                  "linear-gradient(180deg, #FE9AEE 0%, rgba(173, 5, 253, 0.8) 123.79%)",
              }}
            >
              <span className="text-black text-center text-xs sm:text-base font-cinzel font-bold">
                337
                <br />
                BOOKINGS
              </span>
              <img
                src={bookings}
                alt="customer"
                className="inline absolute top-[-50%] sm:top-[-30%] w-[30px] sm:w-[55px]"
              />
            </div>
            <div
              className="relative px-[2px] py-[2px] sm:px-4 sm:py-4  rounded-xl flex justify-center items-center flex-1 max-w-[350px]"
              style={{
                background:
                  "linear-gradient(180deg, #FE9AEE 0%, rgba(173, 5, 253, 0.8) 123.79%)",
              }}
            >
              <span className="text-black text-center font-cinzel font-bold text-xs sm:text-base">
                28789.89 USD
                <br /> REVENUE
              </span>
              <img
                src={revenue}
                alt="customer"
                className="inline absolute top-[-60%] sm:top-[-40%]  w-[30px] sm:w-[55px]"
              />
            </div>
          </div>

          <div className="bg-white mt-10 p-2 rounded-2xl">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                width="100%"
                height="80%"
                style={{ padding: "0px" }}
              >
                <XAxis
                  dataKey="name"
                  scaleToFit={true}
                  style={{ fontSize: "9px" }}
                />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#D807FA"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-white font-cinzel font-bold text-lg md:text-xl mt-7 ">
            TOP EVENT STATISTICS
          </div>

          <div className="flex justify-center items-center gap-[10vw] flex-wrap">
            <div className="relative">
              <img src={stats} alt="" className="w-[450px] " />
            </div>
            <div className="bg-white rounded-xl flex flex-col uppercase font-cinzel p-5 gap-4 text-xs">
              <div className="text-black font-bold flex justify-center items-center gap-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#FFB6B6" />
                </svg>{" "}
                <span className="text-center">Caribbean karaoke <br /> nights</span>
              </div>
              <div className="flex gap-3 pb-5" style={{"border-bottom":"1px solid black"}}>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">QUANTITY</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#FFB6B67D"}}>116</span>
                </div>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">TOTAL ORDER</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#FFB6B67D"}}>2755.65</span>
                </div>
              </div>

              <div className="text-black font-bold flex justify-center items-center gap-3 mt-4">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#2D9CDB"/>
</svg>

                <span className="text-center">daily meditation <br /> classes</span>
              </div>
              <div className="flex gap-3 pb-5" style={{"border-bottom":"1px solid black"}}>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">QUANTITY</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#2D9CDB66"}}>116</span>
                </div>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">TOTAL ORDER</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#2D9CDB66"}}>2755.65</span>
                </div>
              </div>

              <div className="text-black font-bold flex justify-center items-center gap-3 mt-4">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#65DB2D"/>
</svg>


                <span className="text-center">ITALIAN COOKING <br /> classes</span>
              </div>
              <div className="flex gap-3 pb-5" style={{"border-bottom":"1px solid black"}}>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">QUANTITY</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#65DB2D78"}}>116</span>
                </div>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">TOTAL ORDER</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#65DB2D78"}}>2755.65</span>
                </div>
              </div>

              <div className="text-black font-bold flex justify-center items-center gap-3 mt-4">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#E908B7"/>
</svg>



                <span className="text-center">ITALIAN COOKING <br /> classes</span>
              </div>
              <div className="flex gap-3 pb-5" style={{"border-bottom":"1px solid black"}}>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">QUANTITY</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#E908B769"}}>116</span>
                </div>
                <div className="flex flex-col gap-3 font-bold font-cinzel text-black">
                    <span className="text-center">TOTAL ORDER</span>
                    <span className="flex-1 text-center px-2 py-1 rounded-lg" style={{"background": "#E908B769"}}>2755.65</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white font-cinzel font-bold text-lg md:text-xl mt-7 ml-[82px] sm:ml-[112px] mr-2">
        EVENT SALES REPORT
      </div>
              <div style={{"border-bottom":"2px solid white"}} className="pb-10">
      <div className="bg-white mt-5 p-2 rounded-2xl relative overflow-x-auto  ml-[82px] sm:ml-[112px] flex flex-col mr-2 mb-4" >
        <table className="text-black w-full font-cinzel">
          <thead
            className="uppercase "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 28, 232, 0.37) 0%, rgba(213, 10, 245, 0.00) 278.47%)",
              "border-radius": "20px",
            }}
          >
            <tr>
              <th className="px-2 py-2">Order Number</th>
              <th className="px-2 py-2">Event</th>
              <th className="px-2 py-2">Timing</th>
              <th className="px-2 py-2">Customer</th>
              <th className="px-2 py-2">Booking Date</th>
              <th className="px-2 py-2">Ticket</th>
              <th className="px-2 py-2">ORDER TOTAL</th>
              <th className="px-2 py-2" colSpan={2}>
                Earnings
              </th>
            </tr>
          </thead>

          <tbody
            className="font-medium text-sm"
            style={{ background: "rgba(244, 14, 138, 0.17)" }}
          >
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center">14227839397029</td>
              <td className="px-2 py-2 text-center">LEADERSHIP SEMINAR</td>
              <td className="px-2 py-2 text-center">11 JUNE 2023</td>
              <td className="px-2 py-2 text-center">DAVID</td>
              <td className="px-2 py-2 text-center">1 JULY 2023</td>
              <td className="px-2 py-2 text-center">
                $5.00 EARLY BIRD DISCOUNT
              </td>
              <td className="px-2 py-2 text-center">$5 USD</td>
              <td className="px-2 py-2 text-center">
                ADMIN <br />
                $250
              </td>
              <td className="px-2 py-2 text-center">
                ORGANIZER <br />
                $100
              </td>
            </tr>
          </tbody>
        </table>
      </div></div>
      <Footer />
    </div>
  );
}

export default Dashboard;
