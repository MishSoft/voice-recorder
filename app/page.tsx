"use client";
import { useEffect, useState } from "react";

import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Recording from "./components/Recording";
import Login from "./components/login/Login";
import Auth from "./Auth/Auth";

export default function Home() {
  const [activeVoice, setActiveVoice] = useState<boolean>(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isClient, setIsClient] = useState(false);
  const [isUserValid, setIsUserValid] = useState<boolean>(false);

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
    return null;
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
      {isUserValid ? (
        <Recording
          handleToggleVoice={handleToggleVoice}
          activeVoice={activeVoice}
          transcript={transcript}
        />
      ) : (
        <Auth />
      )}
    </main>
  );
}
