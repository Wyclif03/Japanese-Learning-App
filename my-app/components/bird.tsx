

import { useState } from 'react';
import Image from 'next/image';

export default function Bird() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '/enaga-happy.png',
    '/enaga-neutral.png',
    '/enaga-sad.png',
  ];

  const handleClick = () => {
    setImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img
        src={images[imageIndex]} 
        alt="Picture of Enaga-Chan" 
        className="h-96 "
      />
    </div>
  );



}