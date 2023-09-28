import React from 'react';

const EmbeddedVideo = () => {
  return (
    <div className="video-container ">
      <iframe className='w-full h-[60vh]' src="https://www.youtube.com/embed/t_Kd_G7p6ZQ?si=mFvruBj5Nha86UDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default EmbeddedVideo;
