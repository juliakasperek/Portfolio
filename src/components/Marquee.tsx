import { marquee } from '../data'

export default function Marquee() {
  // Items are rendered twice so the strip can loop seamlessly at -50%.
  const items = [...marquee, ...marquee]
  return (
    <div className="relative -mx-4 my-8 -rotate-2 border-y-[3px] border-ink bg-yellow py-4" aria-hidden>
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <span key={i} className="flex items-center font-display text-3xl font-extrabold whitespace-nowrap sm:text-4xl">
            <span className="px-6">{t}</span>
            <span className="text-pink">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
