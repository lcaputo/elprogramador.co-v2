import Head from "next/head";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LearningPath from "./components/learningPath";
import Technologies from "./components/technologies";
import About from "./components/about";
import Prices from "./components/prices";
import Profile from "./components/profile";
import { useRef } from "react";


export default function Home() {
  const inicio = useRef();
  const perfil = useRef();
  const conocimientos = useRef();
  const tecnologias = useRef();
  const oferta = useRef();
  const contacto = useRef();
  const navigation = [
    { name: "Inicio", href: "#", headerRef: inicio, width: '10' },
    { name: "Oferta", href: "#oferta", headerRef: oferta },
    {
      name: "Tecnologias",
      href: "#tecnologias",
      headerRef: tecnologias,
    },
    { name: "Perfil", href: "#perfil", headerRef: perfil },
    {
      name: "Conocimientos",
      href: "#conocimientos",
      headerRef: conocimientos,
    },
    {
      name: "Contacto",
      href: "#contacto",
      headerRef: contacto,
    },
  ];

  return (
    <div>
      <Head>
        <title>Laszlo Caputo Programador FullStack</title>
        <meta name="description" content="Programador freelance especialista en creación de paginas web ecommerce, landing page, aplicaciones móviles, sistemas de inventario, facturación y más." />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#201E1E" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#201E1E"></meta>
      </Head>

      <header className="sticky top-0 z-50">
        <Navbar navigation={navigation} />
      </header>

      <main className="relative text-white body-font bg-gradient-to-r from-[#353232] via-secondary to-black">
          <About navRef={inicio}/>
          <Prices navRef={oferta}/>
          <Technologies navRef={tecnologias}/>
          <Profile navRef={perfil}/>
          <LearningPath navRef={conocimientos}/>
          <Contact navRef={contacto}/>
      </main>

      <Footer />
    </div>
  );
}
