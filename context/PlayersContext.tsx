"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import useLocalStorage from "@/hooks/useLocalStorage";

const Context = createContext<PlayersContextProps | null>(null);

export const PlayersContext = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [playersLocalStorage, setPlayersLocalStorage] = useLocalStorage<
    PlayerProps[]
  >("players", [])!;
  const [negativeValue, setNegativeValue] = useState<boolean>(false);

  const addPlayer = (name: string) => {
    const newPlayer = { id: uuid(), name, score: [] };
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    setPlayersLocalStorage((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const handleRemovePlayer = (id: string) => () => {
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
    setPlayersLocalStorage(newPlayers);
  };

  const handleFinishGame = () => {
    setPlayers([]);
    localStorage.removeItem("players");
  };

  const handleResetScores = () => {
    const updateScores = players.map((player) => ({ ...player, score: [] }));
    setPlayers(updateScores);
    setPlayersLocalStorage(updateScores);
  };

  const addScore = (value: number, playerId: string) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return {
          ...player,
          score: [...player.score, value],
        };
      }
      return player;
    });

    setPlayers(updatedPlayers);
    setPlayersLocalStorage(updatedPlayers);
  };

  useLayoutEffect(() => {
    const isPlayers = playersLocalStorage.length;
    if (isPlayers) {
      setPlayers(playersLocalStorage);
    }
  }, [playersLocalStorage]);

  const value = {
    players,
    setPlayers,
    negativeValue,
    setNegativeValue,
    addPlayer,
    handleRemovePlayer,
    handleFinishGame,
    handleResetScores,
    addScore,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const usePlayers = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("usePlayers must be used within a PlayersProvider");
  }
  return context;
};
