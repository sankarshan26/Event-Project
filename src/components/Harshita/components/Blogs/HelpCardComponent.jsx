import React from "react";

const HelpCardComponent = ({ index, img, title, content }) => {
  return (
    <div key={index} className="card text-black w-64 md:w-96 border-0">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <p className="font-bold font-cinzel  text-base md:text-lg">{title}</p>
        <p className="card-text text-sm sm:text-base">{content}</p>
      </div>
    </div>
  );
};

export default HelpCardComponent;
