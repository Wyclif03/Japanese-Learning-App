import { NextPage } from "next";
import Link from "next/link";
import { KatakanaLevelData } from "@/constants/KatakanaLevelData";

const katakanaIndex: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-5">
      <div className="space-y-4 ">
      <h1 className="text-4xl font-bold text-center text-yellow-700">Katakana Alphabet</h1>
        <div className="items-center text-center">
        <h2 className="text-2xl font-bold text-center">Start learning by choosing a group of Katakana!</h2>
        <br/>
        <h3 >We recommend starting from level 1 first, and then making your way down the list!</h3>
        <p>The Katakana characters are grouped based on their consonant sounds in Japanese alphabetical order. </p>
        <p>For example, all of the 'd' sounds are grouped together. </p>
       
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {KatakanaLevelData.map((level, index) => (
            <Link
            href={`/katakana/Levels?alphabet=katakana&level=${level.level}`}
            key={index}
          >
            <button className="w-72 bg-yellow-50 hover:bg-yellow-100 border-4 border-yellow-700 text-black text-2xl drop-shadow-lg rounded-xl px-4 py-4 font-bold">
              <span className="mr-1 font-normal text-yellow-700 ">{index + 1})</span>
              {level.katakana.map((char) => char.katakana).join(" ")}
            </button>
          </Link>
          ))}
        </div>
      </div>
      <p className="text-2xl">When you're ready, practice what you've learnt:</p>
      <Link href="/game?alphabet=katakana">
      <button className= "bg-yellow-50 hover:bg-yellow-100 border-4 shadow-lg border-yellow-700  mb-12 text-black text-4xl font-bold  rounded-xl drop-shadow-lg px-5 py-3">Play the Game!</button>
      </Link>
    </main>
  );
};

export default katakanaIndex;