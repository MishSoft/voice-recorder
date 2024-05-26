import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";

interface VoiceProps {
  handleToggleVoice: () => void;
  activeVoice: boolean;
  transcript: any;
}

export default function Recording({
  handleToggleVoice,
  activeVoice,
  transcript,
}: VoiceProps) {
  return (
    <div className="w-full h-screen  flex flex-col justify-between items-center">
      <div className="w-full gap-5 p-5 flex items-center justify-end">
        <button className="text-white bg-blue-700 mt-[10px] sm:mt-0 sm:ml-[20px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[50%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign Out
        </button>
        <button className="text-white bg-pink-700 mt-[10px] sm:mt-0 sm:ml-[20px] hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-[50%] sm:w-auto px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
          My Office
        </button>
      </div>
      <div className=" w-full h-full flex flex-col gap-10 items-center justify-center">
        <div className="flex items-center gap-5">
          <button
            onClick={handleToggleVoice}
            className="bg-gray-500 hover:bg-gray-800 border border-gray-500 transition-all duration-200 p-5 rounded-md text-blue-200"
          >
            {activeVoice ? "Stop" : "Start"} Voice Generator
          </button>
          <button
            // onClick={handleToggleVoice}
            className="bg-gray-500 flex items-center gap-5 hover:bg-gray-800 border border-gray-500 transition-all duration-200 p-5 rounded-md text-blue-200"
          >
            Save Voice
            <CiSaveDown1 size={25} />
          </button>
        </div>
        <div
          className={`w-[200px] h-[200px] flex items-center justify-center rounded-[100%] bg-gray-500 ${
            activeVoice ? "animate-pulse" : ""
          }`}
        >
          <FaMicrophoneAlt className="text-blue-100 z-10" size={50} />
        </div>
        <div className="text-white mt-4 p-4 bg-gray-700 rounded-md w-full max-w-md">
          {transcript}
        </div>
      </div>
    </div>
  );
}
