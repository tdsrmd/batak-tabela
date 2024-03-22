import React from "react";

import { usePlayers } from "@/context/PlayersContext";

export default function NumberButton({
  value,
  playerId,
}: {
  value: number;
  playerId: string;
}) {
  const { addScore, setNegativeValue } = usePlayers();

  const handleAddScore = (value: number) => {
    addScore(value, playerId);
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
