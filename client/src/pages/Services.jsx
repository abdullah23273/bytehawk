import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  Database,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    description:
      "Fast, scalable and modern websites built around your business objectives.",
    features: ["Business Websites", "Web Applications", "Custom Platforms"],
  },
  {
    icon: Palette,
    number: "02",
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces that combine strong visual identity with intuitive user experiences.",
    features: ["Wireframes", "UI Design", "Design Systems"],
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Responsive Development",
    description:
      "Seamless digital experiences across desktop, tablet and mobile devices.",
    features: ["Mobile First", "Responsive UI", "Performance"],
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "E-Commerce",
    description:
      "Conversion-focused online stores designed to help businesses sell more effectively.",
    features: ["Online Stores", "Product Systems", "Checkout"],
  },
  {
    icon: Database,
    number: "05",
    title: "Backend & APIs",
    description:
      "Reliable server-side systems and APIs that power your digital products.",
    features: ["REST APIs", "MongoDB", "Authentication"],
  },
  {
    icon: Cloud,
    number: "06",
    title: "Deployment & Support",
    description:
      "From launch to ongoing improvements, we keep your digital product reliable.",
    features: ["Deployment", "Optimization", "Maintenance"],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-5 pb-24 pt-40 md:px-8 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-cyan-400">
              Our services
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
              Digital solutions
              <span className="text-zinc-500"> built to grow.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">
              From strategy and design to development and deployment, we build
              the digital foundation your business needs.
            </p>
          </motion.div>

          <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group border-b border-white/10 p-7 transition hover:bg-white/[0.025] md:p-9 lg:border-r"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h2 className="mt-14 text-2xl font-semibold">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center justify-between border-b border-white/5 pb-3 text-sm text-zinc-400"
                      >
                        {feature}
                        <ArrowUpRight size={14} />
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-7 rounded-3xl border border-white/10 bg-zinc-950 p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl font-semibold">
                Have something specific in mind?
              </h2>
              <p className="mt-2 text-zinc-500">
                Tell us what you want to build.
              </p>
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;