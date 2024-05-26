"use client";
import { useEffect, useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Home() {
  const [activeVoice, setActiveVoice] = useState<boolean>(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggleVoice = () => {
    if (activeVoice) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
    setActiveVoice(!activeVoice);
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div>
        Your browser does not support speech recognition software! Try Chrome
        desktop, maybe?
      </div>
    );
  }

  return (
    <main className="flex min-h-screen bg-gray-800 flex-col items-center justify-around p-24">
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
    </main>
  );
}
