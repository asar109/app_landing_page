import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import FunFacts from "./components/FunFacts/FunFacts";
import Download from "./components/Download/Download";
import Screenshots from "./components/Screenshoots/ScreenShots";

const OfflineError = () => {
  return (
    <div style={{ color: "red", textAlign: "center" }}>
      Oops! You are currently offline. Please check your internet connection.
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isOnline ? (
            <>
              <Hero />
              <Features />
              <FunFacts />
              <Screenshots />
              <Download />
            </>
          ) : (
            <>
              <OfflineError />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
