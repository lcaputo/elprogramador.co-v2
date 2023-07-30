import Image from "next/image";
import Title from "./title";

export default function Profile({ navRef }) {
  return (
    <section ref={navRef} id="perfil">
      <div className="container py-24 mx-auto flex flex-col">
        <div className="text-center col-span-2 py-10">
          <Title text="Acerca de mi" />
        </div>
        <div className="mx-auto lg:px-16">
          <div className="flex flex-col md:flex-row mt-10">
            <div className="md:w-1/3 text-center md:pr-8 md:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  className="rounded-full"
                  src="/foto_perfil.webp"
                  alt="Foto de perfil"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-100 text-lg">
                  Laszlo Caputo
                </h2>
                <div className="w-36 h-1 bg-primary rounded mt-2 mb-4"></div>
                <p className="text-base">Desarrollador de Software</p>
                <p>
                  Barranquilla - Colombia &nbsp;{" "}
                  <Image
                    src="/colombia.svg"
                    alt="bandera colombia"
                    width="20em"
                    height="13em"
                  />
                </p>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 md:py-8 md:border-l border-gray-200 md:border-t-0 mt-4 pt-4 md:mt-0 text-center md:text-left px-10">
              <p className="leading-relaxed text-lg mb-4 text-justify">
                Soy una persona apasionada por los sistemas, autodidacta,
                comprometido, servicial y responsable, me gusta solucionar
                problemas.
              </p>
              <h2 className="text-primary font-bold">Certificado en:</h2>
              <div className="grid grid-cols-6 text-center mt-10">
                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/curso_python.webp"
                    alt="Curso de Python"
                    width={50}
                    height={50}
                    loading="lazy"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  />
                  <p>Python</p>
                </div>
                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/curso_sql.webp"
                    alt="Curso de SQL"
                    width={50}
                    height={50}
                  />
                  <p>SQL</p>
                </div>
                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/escuela_javascript.webp"
                    alt="Escuela de Javascript"
                    width={50}
                    height={50}
                  />
                  <p>Javascript</p>
                </div>

                <span className="col-span-6 lg:hidden my-4" />

                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/curso_angular.webp"
                    alt="Curso Angular"
                    width={50}
                    height={50}
                  />
                  <p>Angular</p>
                </div>
                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/curso_linux.webp"
                    alt="Curso Linux"
                    width={50}
                    height={50}
                  />
                  <p>Linux</p>
                </div>
                <div className="px-3 col-span-2 lg:col-auto">
                  <Image
                    src="/curso_aws.webp"
                    alt="Curso AWS"
                    width={50}
                    height={50}
                  />
                  <p>AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
