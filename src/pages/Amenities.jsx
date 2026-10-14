import { IMAGES, AMENITIES } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function Amenities() {
  return (
    <>
      <PageHero
        title="Hotel Amenities"
        subtitle="Free internet and more"
        image={IMAGES.amenity2}
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Facilities"
              title="Everything you need"
              subtitle="From a rooftop pool to a 24-hour fitness centre — designed for both work and rest."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <article className="card overflow-hidden group grid grid-cols-2 items-center">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full min-h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-ink mb-2">{a.title}</h3>
                    <p className="body-text text-sm">{a.desc}</p>
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