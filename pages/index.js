import { useConversation } from "@11labs/react";
import { useEffect } from "react";

export default function Home() {
  const conversation = useConversation();

  useEffect(() => {
    // Ask for mic access
    navigator.mediaDevices.getUserMedia({ audio: true });
  }, []);

  const start = async () => {
    await conversation.startSession({
      agentId: "umLp6vHuyXELNpgEY3MF" // Your ElevenLabs Agent ID
    });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20vh",
      fontFamily: "Arial"
    }}>
      <h1>👋 Hi, I'm Aditya's Voice Clone</h1>
      <p>Click below to talk to me!</p>
      <button
        onClick={start}
        style={{
          padding: "16px 32px",
          fontSize: "18px",
          background: "black",
          color: "white",
          borderRadius: "12px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        🎙️ Start Talking
      </button>
    </div>
  );
}