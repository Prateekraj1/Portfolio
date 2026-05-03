"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO, METRICS, EXPERIENCE_PREVIEW, SKILLS, CTA } from "./constant";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  }),
};

const MainHome = () => {
  return (
    <section className="max-w-6xl mx-auto sm:px-16 px-6 pt-[120px] pb-20">
      {/* HERO */}
      <div className="grid lg:grid-cols-[1.7fr_1fr] gap-12 items-start">
        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-sm font-semibold uppercase tracking-wider text-blue-600"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl font-semibold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Prateek Raj
            </span>
            <br />
            {HERO.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="text-slate-600 text-lg leading-relaxed max-w-xl"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2"
          >
            {HERO.chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1.5 text-sm rounded-full bg-blue-50 text-blue-600"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="flex gap-3 flex-wrap"
          >
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg border border-slate-300 hover:border-black"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.aside
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate="show"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Current Focus
          </p>

          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            <li>
              <p className="font-medium text-black">Frontend systems</p>
              <p>React, Next.js, TypeScript, scalable UI architecture</p>
            </li>
            <li>
              <p className="font-medium text-black">Product impact</p>
              <p>Driving conversions & performance improvements</p>
            </li>
            <li>
              <p className="font-medium text-black">0 → 1 builds</p>
              <p>Shipping fast with strong system design thinking</p>
            </li>
          </ul>
        </motion.aside>
      </div>

      {/* METRICS */}
      <div className="mt-20 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {METRICS.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i * 0.1}
            initial="hidden"
            animate="show"
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition"
          >
            <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-100 opacity-60 group-hover:scale-125 transition"></span>

            <p className="text-3xl font-semibold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              {item.value}
            </p>

            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="mt-28">
        <h2 className="text-2xl font-semibold mb-8">Recent Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE_PREVIEW.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              animate="show"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* subtle accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] opacity-0 group-hover:opacity-100 transition" />

              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-slate-500">{exp.role}</p>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                  {exp.tag}
                </span>
              </div>

              {/* divider */}
              <div className="h-px bg-slate-100 my-4" />

              {/* points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      {/* SKILLS */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="
          px-4 py-2 text-sm font-medium
          rounded-xl
          border border-slate-200
          bg-white/70 backdrop-blur
          text-slate-700
          transition-all duration-200
          hover:-translate-y-0.5
          hover:shadow-md
          hover:border-blue-400
          hover:text-blue-600
        "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mt-20 rounded-2xl border border-slate-200 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-6 py-10 text-white shadow-md">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <p className="text-2xl font-semibold">{CTA.title}</p>
            <p className="mt-2 text-white/90 text-sm max-w-md">
              {CTA.description}
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-white text-[#0072ff] px-6 py-2.5 rounded-full"
          >
            Contact →
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MainHome;
