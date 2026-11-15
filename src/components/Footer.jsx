import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }),
      );
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className=" pt-16 pb-8 border-t border-gray-200 dark:border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 text-center md:text-left">
          <div>
            <span className="font-display text-4xl text-gray-900 dark:text-white block mb-3">
              Carles Marvin.
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
              Fokus membangun sistem backend yang tangguh dan antarmuka frontend yang modern.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-white/10 font-mono text-xs uppercase tracking-widest text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Carles Marvin. All rights reserved.
          </div>

          <div className="flex gap-4 items-center">
            <span>Tangerang Selatan, ID</span>
            <span className="hidden md:block w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <span className="hidden md:block w-32 text-right">
              {time ? `${time} WIB` : "..."}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}