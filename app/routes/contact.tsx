import ContactCard from "~/components/ContactCard";
import data from "~/contactInfo.json";

function contact() {
  return (
    <article className="px-5 pt-8 pb-10 flex flex-col text-center mx-auto w-full min-h-[100vh] max-h-[1000px]">
      <div>
        <h1 className="uppercase text-slate-50 text-4xl md:text-5xl xl:text-6xl tracking-wide font-medium lg:mt-[8vh]">
          contact us
        </h1>
        <div className="flex flex-col justify-evenly md:flex-row md:flex-wrap items-center mt-6 ms:mt-8 lg:mt-11 gap-y-4 sm:gap-y-8 md:gap-y-15 lg-gap-y-20 md:w-full md:content-center flex-1">
          {data.map((d) => (
            <div className="md:w-1/2 text-center">
              <ContactCard
                name={d.name}
                position={d.position}
                phone={d.phone}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default contact;
