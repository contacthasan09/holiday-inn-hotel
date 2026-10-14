import { IMAGES, OFFERS } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Offers() {
  return (
    <>
      <PageHero
        title="Dhaka Hotel Deals & Packages"
        subtitle="Save more when you book direct"
        image={IMAGES.offer1}
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Current Offers"
              title="Exclusive online savings"
              subtitle="From early-bird discounts to complimentary nights — there's always a reason to book direct."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 100}>
                <article className="card overflow-hidden relative group">
                  <img
                    src={o.img}
                    alt={o.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 tag" style={{ background: '#216245', color: '#ffffff' }}>
                    {o.badge}
                  </span>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-ink mb-2">{o.title}</h3>
                    <p className="body-text text-sm mb-6">{o.desc}</p>
                    <Button to="/contact" variant="green">Book This Offer</Button>
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