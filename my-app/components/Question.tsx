import React from 'react';

interface QuestionProps {
    character?: string | null | undefined;
    className?: string; // Define the className prop here
}

const Question: React.FC<QuestionProps> = ({ character, className }) => {
    console.log(character);
    return (
        <div className={`${className} font-bold p-4 bg-white shadow h-48 w-80 text-center text-black flex flex-col justify-center items-center  border-4 drop-shadow-2xl rounded-md border-black`}>
           <div className="text-md pb-4">Find the character for:</div>
           <div className="flex-grow text-5xl text-bold mt-5">{character}</div>
        </div>
    );
}

export default Question;
