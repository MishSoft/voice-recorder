import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";

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
    <div>
      <button
        onClick={handleToggleVoice}
        className="bg-gray-500 hover:bg-gray-800 border border-gray-500 transition-all duration-200 p-5 rounded-md text-blue-200"
      >
        {activeVoice ? "Stop" : "Start"} Voice Generator
      </button>
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
  );
}
