"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Player from "./player";
import PlayersContext from "@/context/PlayerContext";

export default function Game() {
  const [players, setPlayers] = useState<{ name: string; score: number[] }[]>(
    []
  );

  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  const handleFinishGame = () => {
    localStorage.removeItem("players");
    setPlayers([]);
  };

  const handleResetScores = () => {
    const updateScores = players.map((player) => ({ ...player, score: [] }));
    setPlayers(updateScores);
    localStorage.setItem("players", JSON.stringify(updateScores));
  };

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      <div className="p-10 h-screen ">
        <div className="flex justify-between">
          <button
            onClick={handleResetScores}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block h-10"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Puanları Sıfırla</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
          <Link href="/" passHref>
            <button
              onClick={handleFinishGame}
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block h-10"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Oyunu Bitir</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
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
            {players.map((player, idx) => (
              <Player data={player} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </PlayersContext.Provider>
  );
}
