"use client";

import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { usePlayers } from "@/context/PlayersContext";

import { BackgroundBeams } from "@/components/ui/background-beams";
import StartButton from "./components/start-button";
import Players from "./components/players";
import Input from "./components/input";
import HomeHeader from "./components/header";

export default function Home() {
  const { players, setPlayers, addPlayer } = usePlayers();
  const [playerName, setPlayerName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(e.target.value);

  const handleInputEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && playerName.trim() !== "") {
        addPlayer(playerName.trim());
        setPlayerName("");
      }
    },
    [playerName, players]
  );

  const handleRemovePlayer = useCallback(
    (id: string) => {
      return () => {
        setPlayers((prevPlayers) =>
          prevPlayers.filter((player) => player.id !== id)
        );
      };
    },
    [players]
  );

  return (
    <div className="h-screen w-full bg-neutral-950 relative antialiased">
      <div className="flex justify-center items-center h-full z-50 relative">
        <div className="max-w-lg">
          <div className="">
            <HomeHeader />
            <Input
              value={playerName}
              onKeyUp={handleInputEnter}
              onChange={handleInputChange}
              placeholder="Oyuncu Adı"
            />
          </div>
          <div className="mt-5 space-y-3">
            <Players />
          </div>
          <StartButton />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
