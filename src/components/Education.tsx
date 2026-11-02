import { motion } from 'motion/react'
import { education } from '../data'
import SectionTitle from './SectionTitle'

const dotColors = ['bg-pink', 'bg-yellow', 'bg-mint']
const icons = ['🎓', '📚', '🌱']

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="02" label="education" accent="yellow" title={<>Where I've <span className="text-blue">learned</span></>} />

      <ol className="relative grid gap-8 md:grid-cols-3">
        {/* connecting line on wide screens */}
        <span aria-hidden className="absolute top-8 right-[16%] left-[16%] hidden border-t-[3px] border-dashed border-ink md:block" />
        {education.map((e, i) => (
          <motion.li
            key={e.school}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 110, damping: 16 }}
            className="relative flex flex-col items-center text-center"
          >
            <span className={`relative z-10 grid h-16 w-16 place-items-center rounded-full border-[3px] border-ink text-2xl shadow-pop-sm ${dotColors[i % 3]}`}>
              {icons[i % 3]}
            </span>
            <motion.div whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }} className="card mt-6 w-full flex-1 p-6 text-left">
              <p className="font-mono text-xs font-bold tracking-wider text-ink-soft uppercase">
                {e.when} · {e.where}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight font-extrabold">{e.school}</h3>
              <p className="mt-2 font-semibold">{e.detail}</p>
              {e.note && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{i === 0 ? <><strong className="text-ink">Coursework:</strong> {e.note}</> : e.note}</p>}
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
