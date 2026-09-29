import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Something went wrong. Please try again.");
}

      setStatus({
        type: "success",
        message: "Your inquiry has been sent successfully.",
      });

      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

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
              Contact us
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
              Let&apos;s talk about
              <span className="text-zinc-500"> your project.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">
              Have an idea, a business challenge or a project you want to bring
              to life? Tell us about it and we&apos;ll get back to you.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
                <Mail className="text-cyan-400" size={21} />
                <p className="mt-8 text-sm text-zinc-500">Email</p>
                <p className="mt-2 text-white">hello@yourcompany.com</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
                <Phone className="text-cyan-400" size={21} />
                <p className="mt-8 text-sm text-zinc-500">Phone</p>
                <p className="mt-2 text-white">+92 XXX XXXXXXX</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
                <MapPin className="text-cyan-400" size={21} />
                <p className="mt-8 text-sm text-zinc-500">Location</p>
                <p className="mt-2 text-white">Karachi, Pakistan</p>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-9"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Your name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email address *
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+92..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Service *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-400 outline-none focus:border-cyan-400/50"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Backend & APIs">Backend & APIs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-400 outline-none focus:border-cyan-400/50"
                  >
                    <option value="">Select budget</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000+">$3,000+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-zinc-400">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe your project, goals and requirements..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50"
                  />
                </div>
              </div>

              {status.message && (
                <div
                  className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                      : "border-red-400/20 bg-red-400/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send inquiry"}
                {!loading && <ArrowUpRight size={17} />}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;