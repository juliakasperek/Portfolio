import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { experience } from '../data'
import SectionTitle from './SectionTitle'

const accents = ['bg-pink', 'bg-yellow', 'bg-blue', 'bg-mint']

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="03" label="experience" accent="blue" title={<>Things I've <span className="text-pink">done</span></>} />

      <ul className="space-y-5">
        {experience.map((job, i) => {
          const isOpen = open === i
          const panelId = `job-${i}`
          return (
            <motion.li
              key={`${job.title}-${job.when}`}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 110, damping: 18 }}
              className={`card overflow-hidden transition-colors ${isOpen ? 'bg-paper' : 'bg-paper/70 hover:bg-paper'}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 p-5 text-left sm:gap-6 sm:p-6"
              >
                <span className={`hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border-[3px] border-ink font-display text-xl font-extrabold sm:grid ${accents[i % 4]}`}>
                  {String(experience.length - i).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-2xl font-extrabold">{job.title}</span>
                    {job.current && <span className="pill bg-mint py-0.5 text-xs">Now</span>}
                  </span>
                  <span className="mt-1 block font-semibold text-ink-soft">
                    {job.org} · {job.where}
                  </span>
                </span>
                <span className="hidden shrink-0 font-mono text-sm font-bold md:block">{job.when}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-ink text-2xl font-bold ${isOpen ? 'bg-pink' : 'bg-paper'}`}
                  aria-hidden
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                  >
                    <div className="border-t-[3px] border-dashed border-ink px-5 pt-5 pb-6 sm:px-6 sm:pl-26">
                      <p className="mb-3 font-mono text-sm font-bold md:hidden">{job.when}</p>
                      <ul className="space-y-3">
                        {job.points.map((pt) => (
                          <li key={pt.slice(0, 24)} className="flex gap-3 leading-relaxed text-ink-soft">
                            <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 border-2 border-ink bg-yellow" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
