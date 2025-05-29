import { useEffect, useState } from "react";

const WiseChatsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.wisechats.ai/js/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.WiseChats) {
        window.WiseChats.init({ id: "route-investimentos" });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WiseChatsWidget;