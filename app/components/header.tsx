import { memo } from "react";
import SparkAnimate from "./spark-animate";

const HomeHeader = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Batak Tabela v1
        </h1>
        <SparkAnimate />
      </div>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Lütfen en az 3 oyuncu ekleyin.
      </p>
    </>
  );
};

export default memo(HomeHeader);
