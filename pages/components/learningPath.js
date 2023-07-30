import {
  CalculatorIcon,
  CogIcon,
  RefreshIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import { AnnotationIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Title from "./title";

const LearningPath = ({ navRef }) => {
  return (
    <section ref={navRef} id="conocimientos">
      <div className="grid grid-cols-2 py-14">
        <div className="text-center col-span-2 py-10">
          <Title text="Experiencia y desarrollos" />
        </div>
        <div className="m-auto text-center hidden lg:block lg:col-span-1">
          <Image
            alt="step"
            src="/images/iphone.webp"
            width={500}
            height={500}
            objectFit="cover"
            loading="lazy"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>

        <div className="col-span-2 lg:col-span-1 px-10 lg:px-5 xl:px-20">
          <div className="flex relative pb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-primary pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative">
              <AnnotationIcon />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2018
              </h2>
              <p className="leading-relaxed text-white">
                Sistema de encuestas y segmentacion por grupos etareos
              </p>
            </div>
          </div>
          <div className="flex relative pb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-primary pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <CogIcon />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2019
              </h2>
              <p className="leading-relaxed text-white">
                Sistema para el mantenimiento de equipos médicos
              </p>
            </div>
          </div>
          <div className="flex relative pb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-primary pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <RefreshIcon />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2019 - 2020
              </h2>
              <p className="leading-relaxed text-white">
                Servicio de automatización de consultas (crawler)
              </p>
            </div>
          </div>
          <div className="flex relative pb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-primary pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <CalculatorIcon />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2020 - 2021
              </h2>
              <p className="leading-relaxed text-white">
                Sistemas de inventario y facturación para comercialización de
                ropa y accesorios de nuevos emprendedores
              </p>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <TruckIcon />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2021 - 2022
              </h2>
              <p className="leading-relaxed text-white">
                Sistema de logistica, inventario y seguimiento para empresa de
                transporte de carga en tractocamiones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
