"use client";
import { useState } from "react";

import { CancelIcon } from "@/assets/icons";
import { usePlayers } from "@/context/PlayersContext";

import NumberPalet from "./number-palet";

export default function Player({ data: player }: { data: PlayerProps }) {
  const { players, setPlayers, setPlayersLocalStorage } = usePlayers();
  const [showPalet, setShowPalet] = useState<boolean>(false);
  const totalScore = player.score.reduce((acc, curr) => acc + curr, 0);

  const handleRemoveScore = (index) => {
    return () => {
      const updatedPlayers = players.map((p) => {
        if (p.id === player.id) {
          return {
            ...p,
            score: p.score.filter((_, i) => i !== index),
          };
        }
        return p;
      });

      setPlayers(updatedPlayers);
      setPlayersLocalStorage(updatedPlayers);
    };
  };

  return (
    <div
      className="h-[calc(100vh_-_5rem)] flex flex-col justify-between"
      onMouseEnter={() => setShowPalet(true)}
      onMouseLeave={() => setShowPalet(false)}
    >
      <div className="flex flex-col items-center">
        <p className="capitalize text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-5">
          {player.name}
        </p>
        <div className="space-y-2">
          {player.score.map((score, index) => (
            <div key={index} className="relative">
              <div className="bg-white/20 w-28 p-1 rounded-[5px] text-center">
                <p className="text-white text-xs font-bold">{score}</p>
              </div>
              <p
                className="absolute top-1/2 -translate-y-1/2 -right-5 cursor-pointer"
                onClick={handleRemoveScore(index)}
              >
                <CancelIcon className="w-4 h-4 text-blue-400" />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative text-center">
        <p className="text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          {totalScore}
        </p>
        {(player.name === "sedat" || player.name === "Sedat") && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <p>👑</p>
          </div>
        )}
        <NumberPalet onOpen={showPalet} playerId={player.id} />
      </div>
    </div>
  );
}
