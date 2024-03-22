import { CancelIcon } from "@/assets/icons";
import { usePlayers } from "@/context/PlayersContext";

export default function Players() {
  const { players, handleRemovePlayer } = usePlayers();

  return players.map((player, idx) => (
    <div key={idx} className="grid grid-cols-2 gap-x-4">
      <p className="text-sm font-semibold capitalize">{player.name}</p>
      <div
        onClick={handleRemovePlayer(player.id)}
        className="cursor-pointer justify-self-end"
      >
        <div className="rounded-full ring-2 p-1">
          <CancelIcon className="w-3 h-3 text-blue-300" />
        </div>
      </div>
    </div>
  ));
}
