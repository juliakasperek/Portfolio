import { useState } from 'react'
import { motion } from 'motion/react'
import { profile } from '../data'

const year = new Date().getFullYear()

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { label: 'LinkedIn', handle: profile.linkedinHandle, href: profile.linkedin, color: 'bg-blue text-paper' },
    { label: 'GitHub', handle: profile.githubHandle, href: profile.github, color: 'bg-yellow' },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pt-24 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 90, damping: 15 }}
        className="card relative overflow-hidden bg-pink p-8 shadow-pop-lg sm:p-14"
      >
        <span aria-hidden className="absolute -top-28 -right-28 h-48 w-48 rounded-full border-[3px] border-ink bg-yellow sm:-top-20 sm:-right-20 sm:h-64 sm:w-64" />
        <span aria-hidden className="absolute -right-16 -bottom-32 h-40 w-40 rounded-full border-[3px] border-ink bg-blush sm:-right-6 sm:-bottom-24 sm:h-48 sm:w-48" />

        <div className="relative max-w-2xl">
          <span className="pill bg-paper font-mono text-xs tracking-wider uppercase shadow-pop-sm">06 / contact</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl">
            Let's build something together.
          </h2>
          <p className="mt-6 text-lg font-medium">
            I'm open to internship and co-op opportunities. Whether you have a role in mind, a question, or just want to say hi — my inbox is open.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={`mailto:${profile.email}`} className="btn bg-ink text-cream">
              ✉️ Email me
            </a>
            <button onClick={copy} className="btn bg-paper font-mono text-base">
              {copied ? '✓ Copied!' : profile.email}
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`pill px-4 py-2 text-base shadow-pop-sm transition-transform hover:-translate-y-1 hover:-rotate-2 ${l.color}`}
                >
                  {l.label} <span className="font-mono text-sm opacity-80">@{l.handle}</span> ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 font-mono text-sm text-ink-soft sm:flex-row">
        <p>© {year} Julia Kasperek</p>
        <p>Built with React, TypeScript & a lot of pink 💖</p>
        <a href="#home" className="font-bold text-ink underline decoration-pink decoration-2 underline-offset-4">
          Back to top ↑
        </a>
      </footer>
    </section>
  )
}
