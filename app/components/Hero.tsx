import logo from "../assets/logo.jpeg";
import Button from "./Button";
import Countdown from "./Countdown";

function Hero() {
  return (
    <article className="flex flex-col justify-center items-center pt-10 px-5 gap-y-8">
      <div className="max-w-[350px] w-[40vh] min-w-[200px] lg:max-w-[420px] rounded-sm overflow-hidden animate-shadowGlow">
        <img src={logo} alt="UCL SportsFest" />
      </div>
      <div className="text-center">
        <h1
          className="text-slate-50 text-4xl md:text-5xl font-montserrat uppercase animate-textGlow tracking-wide"
          style={{ WebkitTextStroke: "0.5px var(--color-rose-700)" }}
        >
          SEPTEMBER
          <div>
            25 <span className="">•</span> 26 <span className="">•</span> 27
          </div>
        </h1>
        <div className="mt-3 mb-5">
          <Countdown />
        </div>
        <div className="my-4">
          <Button>Register</Button>
        </div>
      </div>
    </article>
  );
}

export default Hero;
