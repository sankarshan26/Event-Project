import React from "react";
import EventCategoryCard from "./EventCategoryCard";

const EventCategories = () => {
  const events = [
    {
      img: "/HomeCustomers/ec1.png",
      category: "yoga & health",
      title: "Daily Meditation",
      motive: "calmness & relaxation",
    },
    {
      img: "/HomeCustomers/ec2.png",

      category: "Business & seminars",
      title: "global marketing conference",
      motive: "Unleashing Boundless Horizons",
    },
    {
      img: "/HomeCustomers/ec3.png",

      category: "Food & drink",
      title: "Italian Cooking Classes",
      motive: "Unlocks the flavor of Italy",
    },
    {
      img: "/HomeCustomers/ec4.png",

      category: "travel & treking",
      title: "Mountaineering Classes",
      motive: "Embark on Epic Adventures",
    },
    {
      img: "/HomeCustomers/ec1.png",
      category: "yoga & health",
      title: "Daily Meditation",
      motive: "calmness & relaxation",
    },
    {
      img: "/HomeCustomers/ec2.png",

      category: "Business & seminars",
      title: "global marketing conference",
      motive: "Unleashing Boundless Horizons",
    },
    {
      img: "/HomeCustomers/ec3.png",

      category: "Food & drink",
      title: "Italian Cooking Classes",
      motive: "Unlocks the flavor of Italy",
    },
    {
      img: "/HomeCustomers/ec4.png",

      category: "travel & treking",
      title: "Mountaineering Classes",
      motive: "Embark on Epic Adventures",
    },
    {
      img: "/HomeCustomers/ec1.png",
      category: "yoga & health",
      title: "Daily Meditation",
      motive: "calmness & relaxation",
    },
    {
      img: "/HomeCustomers/ec2.png",

      category: "Business & seminars",
      title: "global marketing conference",
      motive: "Unleashing Boundless Horizons",
    },
    {
      img: "/HomeCustomers/ec3.png",

      category: "Food & drink",
      title: "Italian Cooking Classes",
      motive: "Unlocks the flavor of Italy",
    },
    {
      img: "/HomeCustomers/ec4.png",

      category: "travel & treking",
      title: "Mountaineering Classes",
      motive: "Embark on Epic Adventures",
    },

  ];
  const midIndex = Math.floor(events.length / 2);
  const firstGroup = events.slice(0, midIndex);
  const secondGroup = events.slice(midIndex);
  return (
    <div className="font-cinzel mt-24">
      <p className="text-white text-xl md:text-2xl lg:text-4xl text-center font-medium">Our event categories</p>
      <div className="container mt-5 flex flex-grow px-5 overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-5">
          {firstGroup.map((event) => (
            <EventCategoryCard
              img={event.img}
              title={event.title}
              motive={event.motive}
              category={event.category}
            />
          ))}
        </div>
      </div>
      <div className="container mt-5 flex flex-grow px-5 overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-5">
          {secondGroup.map((event) => (
            <EventCategoryCard
              img={event.img}
              title={event.title}
              motive={event.motive}
              category={event.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
