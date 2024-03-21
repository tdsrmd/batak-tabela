"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState<{ name: string; score: number[] }[]>(
    []
  );
  const [playerName, setPlayerName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(e.target.value);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newPlayers = [...players, { name: playerName, score: [] }];
      localStorage.setItem("players", JSON.stringify(newPlayers));
      setPlayers(newPlayers);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (name: any) => {
    return () => {
      const newPlayers = players.filter((player) => player.name !== name);
      localStorage.setItem("players", JSON.stringify(newPlayers));
      setPlayers(newPlayers);
    };
  };

  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  return (
    <div className="h-screen w-full bg-neutral-950 relative antialiased">
      <div className="flex justify-center items-center h-full z-50 relative">
        <div className="max-w-2xl">
          <div className="">
            <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Batak v1
              </h1>
              <div className="w-[40rem] h-10 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <div className="flex items-center justify-center">
                  <SparklesCore
                    background="transparent"
                    minSize={0.1}
                    maxSize={0.5}
                    particleDensity={2000}
                    className="w-[20rem] h-full"
                    particleColor="#FFFFFF"
                  />
                </div>

                <div className="absolute inset-0 w-full h-full bg-transparent"></div>
              </div>
            </div>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Lütfen Oyuncuları Ekleyiniz.
            </p>
            <input
              value={playerName}
              onKeyUp={handleEnter}
              onChange={handleChange}
              type="text"
              placeholder="Oyuncu Adı"
              className="p-5 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
          </div>
          <div className="mt-5 space-y-3">
            {players.map((player, index) => (
              <div key={index} className="grid grid-cols-2 gap-x-4">
                <p className="text-sm font-semibold capitalize">
                  {player.name}
                </p>
                <div
                  onClick={handleRemovePlayer(player.name)}
                  className="cursor-pointer justify-self-end"
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
                </div>
              </div>
            ))}
          </div>
          {players.length > 2 && (
            <div className="flex justify-center mt-5">
              <Link href="/game">
                <div className="w-80 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Oyunu Başlat
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
