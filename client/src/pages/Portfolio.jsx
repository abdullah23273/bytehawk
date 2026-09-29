import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Urban Blade",
    description:
      "A modern digital experience for a premium barber studio, designed around strong visuals, clear services and easy customer action.",
    tags: ["React", "Vite", "Tailwind CSS"],
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
  },
  {
    number: "02",
    category: "Digital Experience",
    title: "LUMÉ AESTHETICS",
    description:
      "A luxury-focused aesthetic clinic concept combining elegant visual direction with a clean and conversion-focused interface.",
    tags: ["React", "UI/UX", "Responsive"],
    gradient: "from-purple-400/20 via-pink-500/10 to-transparent",
  },
  {
    number: "03",
    category: "Business System",
    title: "Complaint Management",
    description:
      "A structured business application designed to manage customer complaints, records and internal workflows efficiently.",
    tags: ["ASP.NET", "C#", "SQL Server"],
    gradient: "from-blue-400/20 via-cyan-500/10 to-transparent",
  },
  {
    number: "04",
    category: "Management System",
    title: "Attendance System",
    description:
      "A practical attendance management platform built to simplify records, tracking and everyday administrative workflows.",
    tags: ["ASP.NET", "C#", "SQL Server"],
    gradient: "from-emerald-400/20 via-cyan-500/10 to-transparent",
  },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.045] blur-[140px]" />

        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={14} />
              Selected work
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-8xl">
              Work that turns
              <span className="block text-zinc-600">ideas into reality.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
              A selection of digital products, websites and business systems
              built with a focus on design, performance and real-world
              usability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 pb-28 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[#090909]/75 transition duration-700 group-hover:bg-[#090909]/55" />

                  <div className="grid-bg absolute inset-0 opacity-30" />

                  {/* Fake browser */}
                  <div className="absolute inset-x-6 top-6 overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl transition duration-700 group-hover:-translate-y-2 md:inset-x-10 md:top-10">
                    <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    <div className="flex aspect-[16/8] items-center justify-center">
                      <div className="text-center">
                        <Layers3
                          size={34}
                          className="mx-auto text-cyan-400/60"
                        />

                        <p className="mt-4 text-2xl font-semibold tracking-tight text-white/80 md:text-3xl">
                          {project.title}
                        </p>

                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                          Digital Experience
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-400 backdrop-blur-xl transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400 group-hover:text-black md:bottom-7 md:left-7">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-1 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
                      {project.category}
                    </p>

                    <span className="text-xs text-zinc-700">
                      {project.number}
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-400">
                Your project next?
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white md:text-6xl">
                Let&apos;s create something
                <span className="text-zinc-600"> worth remembering.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;