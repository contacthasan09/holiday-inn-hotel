import { IMAGES, DINING } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function Dining() {
  return (
    <>
      <PageHero
        title="Restaurants Near Holiday Inn"
        subtitle="Six venues, one address"
        image={IMAGES.dining1}
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Dining"
              title="From breakfast to last call"
              subtitle="Whether it's a quick coffee, a full buffet or a rooftop cocktail — we've got a venue for every moment."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {DINING.map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <article className="card overflow-hidden group h-full flex flex-col">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="tag mb-3" style={{ background: '#eef4f0' }}>{d.cuisine}</span>
                    <h3 className="text-lg font-semibold text-ink mb-2">{d.name}</h3>
                    <p className="body-text text-sm flex-1" style={{ color: '#707372' }}>{d.desc}</p>
                    <p className="text-xs text-muted mt-4 pt-4 border-t border-line"><strong className="text-ihg-green">{d.hours}</strong></p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}