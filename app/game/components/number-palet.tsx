import NumberButton from "./number-button";

import { usePlayers } from "@/context/PlayersContext";

export default function NumberPalet({
  onOpen,
  playerId,
}: {
  onOpen: boolean;
  playerId: string;
}) {
  const { negativeValue, setNegativeValue } = usePlayers();

  return (
    onOpen && (
      <div className="shadow-2xl absolute left-1/2 -translate-x-1/2 bottom-40 border border-gray-500 rounded-xl text-black/80 text-xs p-5 grid grid-cols-3 gap-2 w-[200px]">
        <NumberButton playerId={playerId} value={negativeValue ? -1 : 1} />
        <NumberButton playerId={playerId} value={negativeValue ? -2 : 2} />
        <NumberButton playerId={playerId} value={negativeValue ? -3 : 3} />
        <NumberButton playerId={playerId} value={negativeValue ? -4 : 4} />
        <NumberButton playerId={playerId} value={negativeValue ? -5 : 5} />
        <NumberButton playerId={playerId} value={negativeValue ? -6 : 6} />
        <NumberButton playerId={playerId} value={negativeValue ? -7 : 7} />
        <NumberButton playerId={playerId} value={negativeValue ? -8 : 8} />
        <NumberButton playerId={playerId} value={negativeValue ? -9 : 9} />
        <NumberButton playerId={playerId} value={negativeValue ? -10 : 10} />
        <NumberButton playerId={playerId} value={negativeValue ? -11 : 11} />
        <NumberButton playerId={playerId} value={negativeValue ? -12 : 12} />
        <NumberButton playerId={playerId} value={negativeValue ? -13 : 13} />
        <div
          className="bg-rose-300 px-2 py-1 rounded-full flex items-center justify-center col-span-2 font-bold cursor-pointer"
          onClick={() => setNegativeValue(!negativeValue)}
        >
          Battı
        </div>
      </div>
    )
  );
}
