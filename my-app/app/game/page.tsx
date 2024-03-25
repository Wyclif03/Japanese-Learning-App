"use client";
import { useSearchParams } from "next/navigation"
import { katakanaDummyData } from "@/constants/KatakanaDummyData"
import {useFetchHiraganaData} from "@/constants/HiraganaDummyData"
import { kanjiDummyData } from "@/constants/KanjiDummyData"
import Background from "@/components/Backgrounds"
import GameBird from "@/components/gameBird"
import { useState, useEffect } from "react"
import Question from "@/components/Question"
import GameGrid from "@/components/GameGrid"


const identifyAndReturnAlphabet = (alphabet: string) => {
    if (alphabet === "hiragana") {
        return 
    } else if (alphabet === "katakana") {
        return katakanaDummyData
    } else if (alphabet === "kanji") {
        return kanjiDummyData
    }
}

const Page = () => {
    const originParams = useSearchParams();
    const alphabet = originParams!.get("alphabet");
    const capitalizedAlphabet = alphabet.charAt(0).toUpperCase() + alphabet.slice(1);
    const [onlyEnglish, setOnlyEnglish] = useState<string[]>([])
    const [birdState, setBirdState] = useState<"happy" | "neutral" | "sad">("neutral")
    const [questionCharacter, setQuestionCharacter] = useState<string | undefined | null>("")
    const [remainingCharacters, setRemainingCharacters] = useState<string[]>(); //copy of main array, used to keep track of which characters have not been shown yet
    const [japaneseOnly, setJapaneseOnly] = useState<string[]>([])
    const [combined, setCombined] = useState<{ english: string, japanese: string }[]>([])
    const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]); //sets a variable for answers

    const { data , loading, error } = useFetchHiraganaData(`http://localhost:8080/generate-${alphabet}?size=20`) 

    console.log(data)

    useEffect(() => {
        if (!alphabet) return;
        if (!data) return;
        let arr = [] as { english: string, japanese: string }[];
        const arrayOfObjects = Object.entries(data).forEach(([key, value]) => {
            console.log(key, value);
            arr.push({
                english: value,
                japanese: key
            })
        });

        setCombined(arr);
        const japaneseData = arr.map((character) => character.japanese);
        const englishData = arr.map((character) => character.english);
        setOnlyEnglish(englishData);
        setJapaneseOnly(japaneseData);
        setRemainingCharacters(englishData);
    }, [alphabet, data]);


    useEffect(() => {
        console.log(remainingCharacters)
        if (remainingCharacters && remainingCharacters.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
            const newCharacter = remainingCharacters[randomIndex];
            setQuestionCharacter(newCharacter);
        }
    }, [remainingCharacters]);

    const cycleToNextCharacter = (prevCharacter: string) => {
        if (remainingCharacters === undefined) return;
        if (remainingCharacters.length === 0) return;
        const eliminatePrevCharacter = remainingCharacters?.filter((character) => character !== prevCharacter);
        setRemainingCharacters(eliminatePrevCharacter);
    }

    useEffect(() => {
        // console.log("Remaining characters", remainingCharacters);      
    }, [remainingCharacters]);

const handleButtonClick = (characterClicked: string) => {
    console.log("Question character", questionCharacter);
    console.log("Character clicked", characterClicked);

    const pairing = combined?.find((character) => character.english === questionCharacter) as { [key: string]: string };

    console.log("Pairing", pairing)

    if (characterClicked === pairing?.japanese!) {
        setBirdState("happy");
        setTimeout(() => {
            setBirdState("neutral");
        }, 1000);
        cycleToNextCharacter(pairing?.english!);
    } else {
        setBirdState("sad");
        setTimeout(() => {
            setBirdState("neutral");
        }, 1000);
        setIncorrectAnswers(prevIncorrectAnswers => {
            const newIncorrectAnswers = [...prevIncorrectAnswers, characterClicked];
            return Array.from(new Set(newIncorrectAnswers)); // remove duplicates
        });
    }
}
// end game screen for the birdy boy to be well pleased and shit
if (remainingCharacters?.length === 0) {
    const chunks = [];
    for (let i = 0; i < incorrectAnswers.length; i += 10) {
      chunks.push(incorrectAnswers.slice(i, i + 10));
    }

    return (
      <Background>
        <h1 className="h-screen flex justify-center items-center flex-col font-bold text-white">
          <GameBird state="happy" className="absolute animate animate-bounce mb-60"/>
          <img src="gridempty.png" className="mt-80 h-1/2"/>
          <div className="absolute mt-80  text-center">
            <h2 className="text-green-600 text-3xl">Congratulations!</h2>
            <br/>
            <h2 className="text-black text-lg">You have completed the game!</h2>
            <br/>
            {incorrectAnswers.length > 0 ? (
              <div>
                <h2 className="text-black text-lg">Keep working on these:</h2>
                {chunks.map((chunk, index) => (
                  <h2 className="text-red-500 text-center gap-4 p-2 flex flex-row" key={index}>
                    {chunk.map((answer, idx) => (
                      <div className="mx-auto text-2xl" key={idx}>{answer}</div>
                    ))}
                  </h2>
                ))}
              </div>
            ) : (
              <h2 className="text-green-600 text-lg">You made no mistakes!</h2>
            )}
            <button className="mt-2 text-white bg-yellow-700 hover:bg-white hover:border-yellow-700 hover:text-yellow-700 border-2 border-white p-2 rounded-lg" onClick={() => window.location.reload()}>Play Again!</button>
          </div>
        </h1>
      </Background>
    );
  }
    if (!alphabet) return null;

    return (
  <Background>
     
    <div className="">
      <div className=" rounded-lg p-4">
      <h1 className="text-4xl font-bold bg-yellow-50 w-1/4 mx-auto rounded-lg px-4 py-2 border-4 border-yellow-700 text-black text-center">{capitalizedAlphabet} Challenge!</h1>
        </div>
        <br/><br/><br/><br/><br/>
        
            <div className="flex gap-10 items-center justify-center">
            <GameBird state={birdState} className="absolute mr-72 mt-36 drop-shadow-2xl z-10"/>
            <Question character={questionCharacter} className="absolute top-36 ml-60 mx-auto mt-28"/>            </div>
            <GameGrid currentAlphabet={japaneseOnly} onButtonClick={handleButtonClick} className="mt-40 drop-shadow-2xl"/>
            </div>
            <img src="tree grid 3.png" className="h-1/2 mx-auto"/>

        </Background>
        
    )
}

export default Page;
