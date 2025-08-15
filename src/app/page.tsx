import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-bold text-center">
        i <span className="inline-block animate-heartbeat">❤️</span> traffic
      </h1>
    </div>
  );
}
