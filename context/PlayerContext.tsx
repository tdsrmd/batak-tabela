import { createContext } from "react";

const PlayersContext = createContext<{
  players: { name: string; score: number[] }[];
  setPlayers: React.Dispatch<
    React.SetStateAction<{ name: string; score: number[] }[]>
  >;
} | null>(null);

export default PlayersContext;
