"use client";

import Link from "next/link";

import { usePlayers } from "@/context/PlayersContext";

import Button from "./components/button";
import Players from "./components/players";

export default function Game() {
  const { players, handleFinishGame, handleResetScores } = usePlayers();

  return (
    <div className="p-10 h-screen ">
      <div className="flex justify-between">
        <Button onClick={handleResetScores}>Puanları Sıfırla</Button>
        <Link href="/" passHref>
          <Button onClick={handleFinishGame}>Oyunu Bitir</Button>
        </Link>
      </div>
      <div className="h-full w-full bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div
          style={{
            gridTemplateColumns: `repeat(${players.length}, 1fr)`,
          }}
          className="grid place-items-center"
        >
          <Players />
        </div>
      </div>
    </div>
  );
}
