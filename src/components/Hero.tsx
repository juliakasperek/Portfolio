import { useRef } from 'react'
import { motion } from 'motion/react'
import { img, profile } from '../data'

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, type: 'spring' as const, stiffness: 110, damping: 16 },
  }),
}

// Little stickers visitors can grab and toss around the hero.
const stickers = [
  { text: '</> code', className: 'bg-blue text-paper -top-6 -left-2 sm:-left-10 -rotate-12' },
  { text: '🇵🇱 → 🇨🇦', className: 'bg-yellow -bottom-5 -left-2 sm:-left-14 rotate-6' },
  { text: '4th year CS', className: 'bg-mint top-1/3 -right-2 sm:-right-12 rotate-12' },
]

export default function Hero() {
  const area = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-5 pt-32 pb-20 md:grid-cols-[1.15fr_1fr] md:pt-28">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-10 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blush blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 -z-10 h-80 w-80 rounded-full bg-yellow/40 blur-3xl" />

      <motion.div initial="hidden" animate="show">
        <motion.span custom={0} variants={rise} className="pill bg-paper shadow-pop-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          {profile.status}
        </motion.span>

        <motion.h1 custom={1} variants={rise} className="mt-6 font-display text-6xl leading-[0.9] font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Julia</span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.38em] origin-left -rotate-2 rounded-md bg-pink"
            />
          </span>
          <motion.span
            aria-hidden
            className="ml-3 inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 18, -8, 18, 0] }}
            transition={{ delay: 1.1, duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p custom={2} variants={rise} className="mt-6 font-display text-2xl font-bold text-ink-soft sm:text-3xl">
          {profile.role} @ Western University
        </motion.p>

        <motion.p custom={3} variants={rise} className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          {profile.bio}
        </motion.p>

        <motion.div custom={4} variants={rise} className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="btn bg-pink">
            See my work <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn bg-paper">
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        ref={area}
        initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 90, damping: 14 }}
        className="relative mx-auto w-full max-w-sm"
      >
        {/* spinning badge */}
        <div className="absolute -top-12 -right-1 z-20 h-24 w-24 sm:-right-10 sm:h-28 sm:w-28" aria-hidden>
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
            <defs>
              <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <circle cx="50" cy="50" r="48" fill="#FFD23F" stroke="#1A1027" strokeWidth="3" />
            <text fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="700" fill="#1A1027" letterSpacing="1.5">
              <textPath href="#circle">OPEN TO WORK ✦ OPEN TO WORK ✦</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 grid place-items-center text-3xl">✨</span>
        </div>

        <div className="card overflow-hidden p-3 shadow-pop-lg">
          <img
            src={img('profile.jpg')}
            alt="Portrait of Julia Kasperek"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_30%]"
            width={800}
            height={1000}
          />
          <p className="px-1 pt-3 pb-1 font-mono text-sm">📍 {profile.location}</p>
        </div>

        {stickers.map((s) => (
          <motion.span
            key={s.text}
            drag
            dragConstraints={area}
            dragElastic={0.4}
            whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
            whileHover={{ scale: 1.08 }}
            className={`pill absolute z-10 cursor-grab touch-none px-4 py-2 font-mono text-sm font-bold shadow-pop-sm select-none ${s.className}`}
          >
            {s.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.6 } }}
        className="absolute bottom-6 left-1/2 hidden h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-[3px] border-ink bg-paper text-xl md:grid"
      >
        ↓
      </motion.a>
    </section>
  )
}
