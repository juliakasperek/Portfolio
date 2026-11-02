import { useRef } from 'react'
import { motion } from 'motion/react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'

const tints = ['bg-paper', 'bg-blush', 'bg-paper', 'bg-yellow/60', 'bg-paper', 'bg-mint/50']

// Only let mouse/trackpad users drag tiles; on phones the tiles fill the
// screen, and dragging would block scrolling.
const canDrag = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

export default function Skills() {
  const board = useRef<HTMLDivElement>(null)

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="05" label="skills" title={<>My <span className="text-pink">toolbox</span></>} />

      <div ref={board} className="card relative bg-paper/60 p-6 sm:p-10">
        {canDrag && (
          <p className="absolute -top-4 right-6 rotate-3 rounded-full border-2 border-ink bg-yellow px-3 py-1 font-mono text-xs font-bold">
            go on, drag them ✋
          </p>
        )}
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          {skills.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: (i % 5) * 2 - 4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 260, damping: 14 }}
              drag={canDrag}
              dragConstraints={board}
              dragSnapToOrigin
              dragElastic={0.5}
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileDrag={{ scale: 1.2, zIndex: 20 }}
              className={`flex flex-col ${canDrag ? 'cursor-grab touch-none active:cursor-grabbing' : ''} items-center gap-2 rounded-2xl border-[3px] border-ink p-4 shadow-pop-sm select-none ${tints[i % tints.length]}`}
            >
              <img src={s.icon} alt="" draggable={false} className="h-10 w-10 sm:h-12 sm:w-12" />
              <span className="text-center text-xs font-bold sm:text-sm">{s.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
