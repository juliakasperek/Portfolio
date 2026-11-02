import { useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'motion/react'
import { funFacts, img, photos, profile } from '../data'
import SectionTitle from './SectionTitle'

const tilts = [-4, 3, -2, 5]

// A stack of polaroids: swipe/drag the top one away (or use the buttons)
// to send it to the back of the pile.
function PhotoDeck() {
  const [order, setOrder] = useState(photos.map((_, i) => i))

  const next = () => setOrder((o) => [...o.slice(1), o[0]])
  const prev = () => setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 500) next()
  }

  const top = photos[order[0]]

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative aspect-[4/3.6]">
        <AnimatePresence initial={false}>
          {order
            .slice(0, 3)
            .reverse()
            .map((photoIndex) => {
              const depth = order.indexOf(photoIndex)
              const p = photos[photoIndex]
              const isTop = depth === 0
              return (
                <motion.figure
                  key={p.src}
                  className={`card absolute inset-0 bg-paper p-3 pb-14 select-none ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  style={{ zIndex: 10 - depth }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: 1 - depth * 0.05,
                    y: depth * 14,
                    rotate: tilts[photoIndex % tilts.length] * (depth === 0 ? 0.5 : 1),
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  drag={isTop ? 'x' : false}
                  dragSnapToOrigin
                  onDragEnd={isTop ? onDragEnd : undefined}
                  whileDrag={{ rotate: 0, scale: 1.03 }}
                >
                  <img src={p.src} alt={p.alt} draggable={false} className="h-full w-full rounded-2xl border-2 border-ink object-cover" />
                </motion.figure>
              )
            })}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button onClick={prev} aria-label="Previous photo" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-paper text-xl shadow-pop-sm transition-transform hover:-translate-y-0.5 active:translate-y-0.5">
          ←
        </button>
        <p className="flex-1 text-center text-sm font-medium text-ink-soft" aria-live="polite">
          {top.caption}
        </p>
        <button onClick={next} aria-label="Next photo" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-pink text-xl shadow-pop-sm transition-transform hover:-translate-y-0.5 active:translate-y-0.5">
          →
        </button>
      </div>
      <p className="mt-2 text-center font-mono text-xs text-ink-soft">psst — you can swipe the photos</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="01" label="about" title={<>A little <span className="text-pink">about me</span></>} />

      <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 40 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* tape */}
          <span aria-hidden className="absolute -top-4 left-1/2 z-10 h-8 w-28 -translate-x-1/2 rotate-3 bg-yellow/80 shadow-sm" />
          <div className="card relative p-3 pb-12 shadow-pop-lg">
            <img
              src={img('rome.jpg')}
              alt="Julia in Rome with the Colosseum behind her"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_45%]"
            />
            <p className="absolute bottom-3 left-0 w-full text-center font-display text-lg font-bold">Rome, Italy 🇮🇹</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 100, damping: 18 }}
        >
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {funFacts.map((f, i) => (
              <motion.li
                key={f.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300, damping: 15 }}
                whileHover={{ rotate: i % 2 ? 4 : -4, scale: 1.06 }}
                className={`pill px-4 py-2 text-base shadow-pop-sm ${['bg-blush', 'bg-yellow', 'bg-mint', 'bg-paper'][i % 4]}`}
              >
                <span aria-hidden>{f.emoji}</span> {f.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="mb-10 text-center font-display text-3xl font-extrabold sm:text-4xl">
          When I'm not coding <span className="inline-block animate-wiggle">📸</span>
        </h3>
        <PhotoDeck />
      </div>
    </section>
  )
}
