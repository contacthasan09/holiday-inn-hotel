import Reveal from './Reveal'

export default function PageHero({ title, subtitle, image, height = 'h-72 md:h-96' }) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <Reveal>
          {subtitle && <p className="eyebrow text-white mb-3" style={{ color: '#ffffff' }}>{subtitle}</p>}
          <h1 className="display text-white text-3xl md:text-5xl">{title}</h1>
          <div className="mx-auto h-[3px] w-16 mt-4" style={{ background: '#216245' }} />
        </Reveal>
      </div>
    </section>
  )
}