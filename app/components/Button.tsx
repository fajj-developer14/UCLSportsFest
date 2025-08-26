import { useState, useRef } from "react";

interface rippleType {
  id: number;
  x: number;
  y: number;
}

interface ClickEvent extends React.MouseEvent<HTMLButtonElement> {}

function Button({
  children,
  textColor = "#fff",
  bgColor = "var(--color-rose-950)",
}: {
  children: React.ReactNode;
  textColor: string;
  bgColor: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const handleClick = (e: ClickEvent) => {
    if (!buttonRef.current) return;
    const { left, top } = buttonRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = clientX - left - 50;
    const y = clientY - top - 50;
    const id: number = Date.now();
    setRipples((prev: rippleType[]) => [...prev, { id, x, y }]);
    buttonRef.current.style.setProperty("--x", `${x}px`);
    buttonRef.current.style.setProperty("--y", `${y}px`);
    setTimeout(() => {
      setRipples((prev: rippleType[]) =>
        prev.filter((ripple: rippleType) => ripple.id !== id)
      );
    }, 500);
  };

  return (
    <button
      className={`my-4 px-7 py-2 text-sm md:px-10 md:py-3 md:text-base uppercase font-montserrat font-medium tracking-wider border-1 border-white/50 rounded-sm cursor-pointer relative overflow-hidden active:scale-95 transition-transform duration-75 ease-in-out`}
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      ref={buttonRef}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute bg-white/20 z-5 rounded-full animate-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: 100,
            height: 100,
          }}
        ></div>
      ))}
    </button>
  );
}

export default Button;
