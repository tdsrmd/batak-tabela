import { usePlayers } from "@/context/PlayersContext";
import React from "react";
import Player from "./player";

export default function Players() {
  const { players } = usePlayers();
  return players.map((player, idx) => <Player data={player} key={idx} />);
}
