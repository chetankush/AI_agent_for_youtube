import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">YouTube Agent</h1>
        <p className="text-gray-500 font-bold">
          A YouTube agent that can helps to summarize the youtube videos and helps you get the specific information you need from the video and dataset.
          anything you like to see in that video.
        </p>
      </div>
    </div>
  );
}
