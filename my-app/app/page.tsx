'use client'
import { NextPage } from "next";
import Link from 'next/link';
import React, { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Hiragana',
    link: 'hiragana',
    bgImage: "/hiraganacard5.png",
  }, 
  {
    id: 2,
    title: 'Katakana',
    link: 'katakana',
    bgImage: "/katakanacard2.png"
  },
  {
    id: 3,
    title: 'Kanji',
    link: 'kanji',
    bgImage: "/kanjicard3.png"
  }
];

const GameCard = ({ title, link, bgImage }: {
  title: string,
  link: string,
  bgImage: string
}) => {
  const difficultyText = title === 'Hiragana' ? 'Beginner' :
                         title === 'Katakana' ? 'Intermediate' :
                         title === 'Kanji' ? 'Advanced' :
                         '';

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${link}`} passHref>
      <div 
        className="relative bg-gray-200 p-4 m-2 hover:z-10 h-96 w-96 text-white rounded-lg shadow-lg flex items-center justify-center text-6xl font-bold transform transition duration-500 hover:scale-110 cursor-pointer"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textDecoration: 'none', 
          textShadow: '2px 2px 4px #000000',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={{ marginBottom: '200px' }}>{title}</span>
        <div className={`absolute text-2xl bottom-0 -translate-x-1/2 translate-y-8 left-1/2 mt-96 text-center w-full transition-opacity duration-1000 ${isHovered ? 'opacity-8' : 'opacity-0'}`}>
          <p className="text-white text-lg">{difficultyText}</p>
        </div>
      </div>
    </Link>
  );
};

const LandingPage: NextPage = () => {
  return (
    <main>
      <div className="text-center mt-20">
      <h2 className="text-5xl font-bold mb-6 text-yellow-700">Pick an alphabet to get started!</h2>        <h2 className="mt-6">The Japanese language consists of three alphabets, and you'll need to master them all!</h2>
        <h2>We recommend starting with Hiragana, then moving on to Katakana, and finally Kanji!</h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        {items.map(item => (
          <GameCard 
            key={item.id} 
            title={item.title} 
            link={item.link} 
            bgImage={item.bgImage}
          />
        ))}
      </div>
    </main>
  );
};

export default LandingPage;