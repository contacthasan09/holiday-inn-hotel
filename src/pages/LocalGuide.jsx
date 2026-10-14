import { IMAGES, LOCAL_GUIDE } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function LocalGuide() {
  return (
    <>
      <PageHero
        title="Things to Do in Dhaka"
        subtitle="Explore the city near our hotel"
        image={IMAGES.local1}
        height="h-64 md:h-80"
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Nearby"
              title="Local attractions"
              subtitle="From historic sites to modern shopping — here's what's worth seeing in Dhaka."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {LOCAL_GUIDE.map((l, i) => (
              <Reveal key={l.name} delay={i * 90}>
                <article className="card overflow-hidden group h-full flex flex-col">
                  <img
                    src={l.img}
                    alt={l.name}
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-ink mb-1">{l.name}</h3>
                    <p className="text-sm text-ihg-green font-medium mt-auto">{l.distance} from hotel</p>
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