import { useState, useEffect } from "react";

function Countdown() {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const [time, setTime] = useState<string[]>(["00", "00", "00", "00"]);
  useEffect(() => {
    const finalTime = new Date("2025-09-25T00:00:00");
    const timeStamp = finalTime.getTime();
    const calculateTime = () => {
      const currentTime = Date.now();
      const timeLeft = (timeStamp - currentTime) / 1000;
      const seconds = (Math.floor(timeLeft) % 60).toString();
      const min = (Math.floor(timeLeft / 60) % 60).toString();
      const hours = (Math.floor(timeLeft / 3600) % 24).toString();
      const days = Math.floor(timeLeft / (3600 * 24)).toString();
      setTime([days, hours, min, seconds]);
    };
    const interval = setInterval(() => {
      if (Date.now() === timeStamp) clearInterval(interval);
      calculateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <ul className="flex text-rose-500 gap-x-5 text-sm md:gap-x-8 md:text-base justify-evenly items-center uppercase font-montserrat font-bold">
        {labels.map((label, i) => (
          <li key={label}>
            <div>{time[i].length === 1 ? "0" + time[i] : time[i]}</div>
            <div>{label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countdown;
