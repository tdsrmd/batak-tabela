import { SparklesCore } from "@/components/ui/sparkles";

export default function SparkAnimate() {
  return (
    <div className="w-[40rem] h-10 relative">
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
  );
}
