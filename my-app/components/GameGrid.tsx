import React from 'react';

interface GameGridProps {
  onButtonClick: (selectedItem: string) => void;
  currentAlphabet: [] | string [];
  className?: string; // Define the className prop here
}

const GameGrid: React.FC<GameGridProps> = ({ onButtonClick, currentAlphabet, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="grid absolute mt-4 grid-cols-4 gap-3 inset-16 mx-auto h-1/2 w-1/5" style={{ position: 'absolute', zIndex: '2' }}>
        {currentAlphabet.map((characterClicked, index) => (
          <button
            key={index}
            className={`font-bold rounded py-2 px-4 m-0.5 text-lg  text-black hover:font-bold transition-transform hover:transform hover:scale-150 items-center`}
            onClick={() => onButtonClick(characterClicked)}
          >
            {characterClicked}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
