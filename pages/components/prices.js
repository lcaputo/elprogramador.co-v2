import {
  ShoppingCartIcon,
  ShieldCheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import Title from "./title";

export default function Prices({ navRef }) {
  return (
    <section ref={navRef} id="oferta">
      <div className="container px-5 pt-20 mx-auto">
        <div className="text-center col-span-2 py-10">
          <Title text="Servicios" />
          <p className="text-blue-400 text-center my-3">Impulsa tu negocio en linea y maximisa ventas mediante tu e-commerce.</p>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-primary flex-shrink-0">
            <ShoppingCartIcon className="w-20" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="font-bold text-lg title-font mb-2 px-3 text-justify text-primary">
              Portal de comercio electrónico
            </h3>
            <ol className="list-disc px-6 lg:px-0 lg:pl-6 text-justify">
              <li>
                Página web principal con banners y promociones personalizables
              </li>
              <li>Categorías de productos y temporadas</li>
              <li>
                Sistema de búsqueda avanzado filtro por talla, tipo, color
              </li>
              <li>Productos más vendidos</li>
              <li>
                Detalle de los productos, materiales de fabricación y guías de
                tallas
              </li>
              <li>Sistema de inicio de sesión y perfil de usuario</li>
              <li>Puntaje de productos y comentarios de los clientes</li>
              <li>Carrito de compras con pasarela de pago epayco</li>
              <li>Seguimiento de los envíos, historial de compras</li>
              <li>Soporte y devoluciones</li>
            </ol>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="font-bold text-lg title-font mb-2 px-3 text-justify text-primary">
              Panel de Administración
            </h3>
            <ol className="list-disc px-6 lg:px-0 lg:pl-6 text-justify">
              <li>
                Inicio de sesión para administradores, gestión de usuarios,
                roles y permisos
              </li>
              <li>Opciones para personalizar banners dentro del sitio web </li>
              <li>Subida de imágenes al servidor </li>
              <li>Gestión de inventario</li>
              <li>productos, materiales, descripciones, precios</li>
              <li>
                Promociones por plazo de tiempo, generación de cupones de
                descuento
              </li>
              <li>
                Estadísticas de compras, ganancias, usuarios registrados,
                tráfico del sitio
              </li>
            </ol>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-primary flex-shrink-0">
            <ShieldCheckIcon className="w-20" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-primary flex-shrink-0">
            <PaperAirplaneIcon className="w-20" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="font-bold text-lg title-font mb-2 px-3 text-justify text-primary">
              Página de aterrizaje (Landing page)
            </h3>
            <p className="leading-relaxed text-base mb-2 px-3 text-justify">
              Subdominio del sitio web principal con el propósito de convertir a
              los visitantes en prospectos de venta por medio de una oferta
              determinada.
            </p>
            <ol className="list-disc px-6 lg:px-0 lg:pl-6 text-justify">
              <li>Información acerca de los productos que se ofrecen</li>
              <li>Descuento en forma de cupón que llega vía correo</li>
              <li>
                Registro de correos en base de datos para posterior e-mail
                marketing
              </li>
              <li>
                Plantilla personalizada con logo para los correos publicitarios
                y de ventas
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
