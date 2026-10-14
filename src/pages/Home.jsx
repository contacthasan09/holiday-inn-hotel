import { Link } from 'react-router-dom'
import { IMAGES, HIGHLIGHTS, ROOMS, OFFERS } from '../data/content'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <img src={IMAGES.hero} alt="Holiday Inn Dhaka" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-max text-center px-4">
          <Reveal>
            <p className="eyebrow text-white mb-4" style={{ color: '#ffffff' }}>Holiday Inn Dhaka City Centre</p>
            <h1 className="display display-upper text-white text-4xl md:text-6xl mb-6">
              A warm welcome in Dhaka
            </h1>
            <p className="body-text text-white/85 max-w-xl mx-auto">
              Modern rooms, central location and effortless hospitality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/offers" variant="green">Book Your Stay</Button>
              <Button to="/rooms" variant="outline" className="!text-white !border-white">Explore Rooms</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="The Highlights"
              title="What makes us different"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="card p-6 h-full">
                  <div className="w-10 h-[3px] mb-4" style={{ background: '#216245' }} />
                  <h3 className="text-lg font-semibold text-ink mb-2">{h.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f6f6f6' }}>
        <div className="container-max">
          <Reveal>
            <SectionTitle eyebrow="Rooms" title="Rest easy" subtitle="A room for every traveller — from standard kings to presidential suites." />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {ROOMS.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
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
                      <Link to="/rooms" className="btn-primary text-xs">View</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/rooms" variant="outline">All Rooms</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle eyebrow="Offers" title="Book direct and save" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 100}>
                <article className="card overflow-hidden relative group">
                  <img
                    src={o.img}
                    alt={o.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 tag" style={{ background: '#216245', color: '#ffffff' }}>
                    {o.badge}
                  </span>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-ink mb-2">{o.title}</h3>
                    <p className="body-text text-sm">{o.desc}</p>
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