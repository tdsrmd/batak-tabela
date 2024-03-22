import Link from "next/link";

import { usePlayers } from "@/context/PlayersContext";

export default function StartButton() {
  const { players } = usePlayers();
  return (
    players.length > 2 && (
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
    )
  );
}
