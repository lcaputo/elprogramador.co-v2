import Image from "next/image";

const About = ({navRef}) => {
  return (
    <section ref={navRef}>
      <div className="container mx-auto flex xl:px-20 pt-10 py-8 lg:pt-28 lg:pb-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:px-2 lg:px-14 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium px-10 md:px-0 text-left">
              Bienvenidos
          </h1>
          <h2 className="mb-8 leading-relaxed px-10 md:px-0 text-justify">
          Te ayudare a crecer tu modelo de negocio y mejorar la experiencia de tus clientes.
          </h2>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="hero"
            src="/images/develop2.webp"
            width={810}
            height={470}
            loading="lazy"
            data-aos="fade-up"
            data-aos-duration="2000"
            />
        </div>
      </div>
    </section>
  );
};

export default About;
