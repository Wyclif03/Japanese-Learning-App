//random background is called for each 'game'

'use client'
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';

const BackgroundImages = [
  '/gameBackgrounds/park.png',
  '/gameBackgrounds/garden.png',
  '/gameBackgrounds/fuji.png',
  '/gameBackgrounds/trees6.png'
];

// 'children' prop is a special one (apparently), allows you to use the component as a parent component and pass in other components.
const Background = ({ children }: { children: ReactNode }) =>{
  const [background, setBackground] = useState('');

  useEffect(() => {
    const randomBackgroundIndex = Math.floor(Math.random() * BackgroundImages.length);
    setBackground(BackgroundImages[randomBackgroundIndex]);
  }, []);

  return (
    <div style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }}
      className="h-screen"
    >
      {children}
    </div>
  );
}

export default Background;