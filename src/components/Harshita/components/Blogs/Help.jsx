import React from "react";
import HelpCardComponent from "./HelpCardComponent";

const Help = () => {
  const info = [
    {
      img: "/Blogs/HelpSection/help1.png",
      title: "Why You Need an Event Ticketing Platform",
      content:
        "Modern event ticketing systems enable you to manage events efficiently and directly sell your event tickets online to boost sales and make the event successful.",
    },
    {
      img: "/Blogs/HelpSection/help2.png",
      title: "How to Sell Tickets Online",
      content:
        "Now that events are starting again, learn how to sell tickets online to boost attendance and make events successful while maintaining distance.",
    },
    {
      img: "/Blogs/HelpSection/help1.png",
      title: "Why You Need an Event Ticketing Platform",
      content:
        "Modern event ticketing systems enable you to manage events efficiently and directly sell your event tickets online to boost sales and make the event successful.",
    },
    {
      img: "/Blogs/HelpSection/help2.png",
      title: "How to Sell Tickets Online",
      content:
        "Now that events are starting again, learn how to sell tickets online to boost attendance and make events successful while maintaining distance.",
    },
  ];

  return (
    <div className="text-white w-full">
      <p className="font-cinzel text-xl sm:text-2xl lg:text-3xl text-center font-semibold">
        HOW WE HELP YOU
      </p>
      <div className="px-5 mt-5 flex flex-grow  overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-3 ">
          {info.map((data, index) => (
            <HelpCardComponent
            index={index}
            img={data.img}
            title={data.title}
            content={data.content}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
