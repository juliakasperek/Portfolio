import { motion } from 'motion/react'
import { projects, type Project } from '../data'
import SectionTitle from './SectionTitle'

const bg: Record<Project['color'], string> = {
  pink: 'bg-pink',
  yellow: 'bg-yellow',
  blue: 'bg-blue',
  mint: 'bg-mint',
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="04" label="projects" accent="mint" title={<>Stuff I've <span className="text-blue">built</span></>} />

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 50, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (i % 2) * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
            whileHover={{ y: -8, rotate: i % 2 ? 1.2 : -1.2 }}
            className="card group flex flex-col overflow-hidden"
          >
            <div className={`relative flex h-40 items-center justify-between overflow-hidden border-b-[3px] border-ink px-6 ${bg[p.color]}`}>
              <span className="font-mono text-sm font-bold">{p.when}</span>
              <span aria-hidden className="text-7xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">
                {p.emoji}
              </span>
              {/* decorative rings */}
              <span aria-hidden className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border-[3px] border-ink/20" />
              <span aria-hidden className="absolute -top-12 left-1/3 h-24 w-24 rounded-full border-[3px] border-ink/20" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-3xl font-extrabold">{p.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t} className="pill bg-cream py-0.5 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 self-start font-display text-lg font-bold underline decoration-pink decoration-4 underline-offset-4 hover:decoration-ink">
                  View on GitHub <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              ) : (
                <p className="mt-6 font-mono text-sm text-ink-soft">Team project · code not public</p>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-12 text-center font-display text-xl font-bold">
        More in the oven <span className="inline-block animate-wiggle">🧁</span>
      </p>
    </section>
  )
}
