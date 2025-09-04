import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    WiseChats?: {
      init: (options: { id: string }) => void;
    };
  }
}

const WiseChatsWidget = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://widget.wisechats.ai/js/widget.js";
  //   script.async = true;

  //   script.onload = () => {
  //     if (window.WiseChats) {
  //       window.WiseChats.init({ id: "route-investimentos" });
  //     }
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // return null;






  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!




  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      
      {isVisible && (
        <div
   onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5521964410629"}
          aria-label="scroll to top"
          className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-lg bg-[#0dc143] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
           <FaWhatsapp size={54} />
        
        </div>
      )}
    </div>
  );}

export default WiseChatsWidget;