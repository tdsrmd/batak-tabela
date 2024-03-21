"use client";
import { createContext, useContext, useState } from "react";
import { PlayersContext } from "./page";

const Context = createContext<{
  data: { name: string; score: number[] };
} | null>(null);

export default function Player({
  data,
}: {
  data: { name: string; score: number[] };
}) {
  const { players, setPlayers } = useContext(PlayersContext)!;
  const [showPalet, setShowPalet] = useState<boolean>(false);
  const totalScore = data.score.reduce((acc, curr) => acc + curr, 0);
  const handleRemoveScore = () => {
    const updatedPlayers = players.map((player) => {
      if (player.name === data.name) {
        return {
          ...player,
          score: player.score.slice(0, -1),
        };
      }
      return player;
    });
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };
  return (
    <Context.Provider value={{ data }}>
      <div
        className="h-[calc(100vh_-_5rem)] flex flex-col justify-between"
        onMouseEnter={() => setShowPalet(true)}
        onMouseLeave={() => setShowPalet(false)}
      >
        <div className="flex flex-col items-center">
          <p className="capitalize text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-5">
            {data.name}
          </p>
          <div className="space-y-2">
            {data.score.map((score, index) => (
              <div key={index} className="relative">
                <div className="bg-white/20 w-28 p-1 rounded-[5px] text-center">
                  <p className="text-white text-xs font-bold">{score}</p>
                </div>
                <p
                  className="absolute top-1/2 -translate-y-1/2 -right-5 cursor-pointer"
                  onClick={handleRemoveScore}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative text-center">
          <p className="text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {totalScore}
          </p>
          {(data.name === "sedat" || data.name === "Sedat") && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <p>👑</p>
            </div>
          )}
          {showPalet && <NumberPalet />}
        </div>
      </div>
    </Context.Provider>
  );
}

function NumberPalet() {
  const [negativeValue, setNegativeValue] = useState<boolean>(false);
  return (
    <div className="shadow-2xl absolute left-1/2 -translate-x-1/2 bottom-40 border border-gray-500 rounded-xl text-black/80 text-xs p-5 grid grid-cols-3 gap-2 w-[200px]">
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -1 : 1}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -2 : 2}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -3 : 3}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -4 : 4}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -5 : 5}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -6 : 6}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -7 : 7}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -8 : 8}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -9 : 9}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -10 : 10}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -11 : 11}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -12 : 12}
      />
      <NumberButton
        setNegativeValue={setNegativeValue}
        value={negativeValue ? -13 : 13}
      />
      <div
        className="bg-rose-300 px-2 py-1 rounded-full flex items-center justify-center col-span-2 font-bold"
        onClick={() => setNegativeValue(!negativeValue)}
      >
        Battı
      </div>
    </div>
  );
}

function NumberButton({
  value,
  setNegativeValue,
}: {
  value: number;
  setNegativeValue: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data } = useContext(Context)!;
  const { players, setPlayers } = useContext(PlayersContext)!;

  const handleAddScore = (value: number) => {
    const updatedPlayers = players.map((player) => {
      if (player.name === data!.name) {
        return {
          ...player,
          score: [...player.score, value],
        };
      }
      return player;
    });

    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
    setNegativeValue(false);
  };

  return (
    <div>
      <div
        onClick={() => handleAddScore(value)}
        className="bg-white px-2 py-1 rounded-full w-10 h-10 flex justify-center items-center font-bold shadow-xl cursor-pointer hover:scale-125 transition-all"
      >
        {value}
      </div>
    </div>
  );
}
