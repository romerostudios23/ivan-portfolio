"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolio = [
  {
    title: "Eventos",
    cover: "/portfolio/eventos/1.jpg",
    images: [
      "/portfolio/eventos/1.jpg",
      "/portfolio/eventos/2.jpg",
      "/portfolio/eventos/3.jpg",
      "/portfolio/eventos/4.jpg",
    ],
  },

  {
    title: "Retratos",
    cover: "/portfolio/retratos/1.jpg",
    images: [
      "/portfolio/retratos/1.jpg",
      "/portfolio/retratos/2.jpg",
      "/portfolio/retratos/3.jpg",
    ],
  },

  {
    title: "Marcas",
    cover: "/portfolio/marcas/1.jpg",
    images: [
      "/portfolio/marcas/1.jpg",
      "/portfolio/marcas/2.jpg",
      "/portfolio/marcas/3.jpg",
    ],
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
          Portfolio
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.08em] leading-none max-w-4xl">
          Proyectos visuales con estética cinematográfica.
        </h2>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {portfolio.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >

            <div className="relative overflow-hidden rounded-3xl bg-neutral-900">

              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* TEXT */}
              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300">
                  Ver proyecto
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white text-2xl hover:bg-white/20 transition"
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-32">

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-[-0.08em] mb-20"
              >
                {selectedProject.title}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-6">

                {selectedProject.images.map(
                  (image: string, index: number) => (

                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="overflow-hidden rounded-3xl"
                    >

                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition duration-700"
                      />

                    </motion.div>
                  )
                )}

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}
