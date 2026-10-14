import { Link } from 'react-router-dom'
import { IMAGES, ROOMS } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Rooms() {
  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="A room for every traveller"
        image={IMAGES.hero}
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Accommodation"
              title="Comfort, crafted"
              subtitle="Every room is designed with the same care — plush bedding, modern amenities and quiet comfort."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <article className="card overflow-hidden group h-full flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="tag mb-3" style={{ background: '#eef4f0' }}>{r.size}</span>
                    <h3 className="text-lg font-semibold text-ink mb-2">{r.name}</h3>
                    <p className="body-text text-sm flex-1" style={{ color: '#707372' }}>{r.desc}</p>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-line">
                      <span className="text-ihg-green font-bold">{r.price}</span>
                      <Link to="/contact" className="btn-primary text-xs">Book</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/offers" variant="green">See Current Offers</Button>
          </div>
        </div>
      </section>
    </>
  )
}