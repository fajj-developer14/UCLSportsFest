function ContactCard({
  name,
  position,
  phone,
  mail,
}: {
  name: string;
  position: string;
  phone: string;
  mail: string;
}) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl text-rose-700 font-bold capitalize">
        {position}
      </h3>
      <h2 className="text-slate-50 text-lg  sm:text-xl font-medium tracking-wide mb-1">
        {name}
      </h2>
      <div className="flex justify-center items-center relative gap-x-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 fill-slate-50"
        >
          <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
        </svg>
        <p className="text-base sm:text-lg font-medium text-slate-50 my-0.5">
          {phone}
        </p>
      </div>
      <div className="flex justify-center items-center relative gap-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 sm:w-5.5 fill-slate-50"
        >
          <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
        </svg>
        <p className="text-base sm:text-lg font-medium text-slate-50 my-0.5">
          {mail}
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
