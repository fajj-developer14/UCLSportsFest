import ContactCard from "~/components/ContactCard";
import data from "~/contactInfo.json";

function contact() {
  return (
    <article className="px-5 pt-8 flex flex-col text-center mx-auto w-full">
      <h1 className="uppercase text-slate-50 text-4xl md:text-5xl xl:text-6xl tracking-wide font-medium">
        contact us
      </h1>
      <div className="flex flex-col justify-evenly items-center mt-6 gap-y-4 sm:gap-y-8">
        {data.map((d) => (
          <ContactCard
            name={d.name}
            position={d.position}
            phone={d.phone}
            mail={d.mail}
          />
        ))}
      </div>
    </article>
  );
}

export default contact;
