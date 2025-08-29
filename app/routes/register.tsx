import { FilloutStandardEmbed } from "@fillout/react";

function register() {
  return (
    <div className="w-screen flex items-center">
      <div className="bg-[#13171A] absolute inset-0 z-0" />
      <div className="pt-[10vh] relative z-10 flex-1 -translate-y-15">
        <FilloutStandardEmbed filloutId="mzPdn9juiXus" dynamicResize />
      </div>
    </div>
  );
}

export default register;
