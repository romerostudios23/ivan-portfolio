"use client";

import PortfolioSection from "../components/PortfolioSection";
import Reveal from "../components/Reveal";

export default function PortfolioWebsite() {
  const portfolioItems = [
    {
      title: "Sesión Editorial",
      category: "Fotografía Profesional",
      image: "/portfolio/foto-1.jpg",
    },
    {
      title: "Producción Cinemática",
      category: "Contenido Visual",
      image: "/portfolio/foto-2.jpg",
    },
    {
      title: "Fashion Portrait",
      category: "Fotografía Creativa",
      image: "/portfolio/foto-3.jpg",
    },
    {
      title: "Behind The Scenes",
      category: "Producción Audiovisual",
      image: "/portfolio/foto-4.jpg",
    },
    {
      title: "Branding Session",
      category: "Contenido Comercial",
      image: "/portfolio/foto-5.jpg",
    },
    {
      title: "Visual Storytelling",
      category: "Cinematic Content",
      image: "/portfolio/foto-6.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/reel.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
            Foto • Video • Motion Graphics
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            IVAN ROMERO
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Fotografía, producción audiovisual y contenido cinematográfico para
            marcas, eventos y redes sociales.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition inline-block"
            >
              Ver Portafolio
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition inline-block"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Reveal>
        <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/portfolio/perfil.jpg"
                alt="perfil"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
                Sobre mí
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creo contenido visual con estilo cinematográfico.
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Especializado en fotografía, video, edición profesional y motion
                graphics para redes sociales, eventos, marcas personales y
                negocios.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Cada proyecto está enfocado en crear una experiencia visual
                moderna, emocional y profesional con una estética cinematográfica.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Servicios
            </p>
            <h2 className="text-4xl font-bold">
              Lo que puedo hacer por tu marca
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Producción Audiovisual",
                desc: "Grabación y edición de contenido profesional para redes sociales y campañas.",
              },
              {
                title: "Fotografía Profesional",
                desc: "Sesiones fotográficas para eventos, negocios y marcas personales.",
              },
              {
                title: "Motion Graphics",
                desc: "Animaciones en After Effects, reels dinámicos y contenido visual moderno.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            Portafolio
          </p>
          <h2 className="text-4xl font-bold">
            Algunos de mis trabajos recientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM PORTFOLIO */}
      <PortfolioSection />

      {/* VIDEO */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            Reel Cinemático
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Videos que generan impacto visual
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
              title="video"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 md:px-16 max-w-5xl mx-auto text-center"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para trabajar juntos?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Disponible para proyectos audiovisuales, contenido para redes sociales
          y fotografía profesional.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/18294303405"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition inline-block"
          >
            Hablar por WhatsApp
          </a>

          <button
            onClick={() => {
              alert("Descubre más proyectos en Instagram.");
              window.open("https://instagram.com/romero_gstudio/", "_blank");
            }}
            className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
          >
            Ver Instagram
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Ivan Romero — Portfolio Visual
      </footer>
    </div>
  );
}
