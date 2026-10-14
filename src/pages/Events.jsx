import { IMAGES, MEETING_ROOMS } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function Events() {
  return (
    <>
      <PageHero
        title="Meeting Rooms in Dhaka"
        subtitle="Events · Meetings · Banquets"
        image={IMAGES.events1}
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              eyebrow="Event Spaces"
              title="Rooms built for every occasion"
              subtitle="Flexible meeting and banquet facilities with on-site catering and full AV support."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {MEETING_ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <article className="card-flat p-8 h-full">
                  <span className="tag mb-4">Up to {r.capacity} guests</span>
                  <h3 className="text-xl font-semibold text-ink mb-3">{r.name}</h3>
                  <p className="body-text text-sm mb-2">{r.size}</p>
                  <p className="body-text text-sm mb-6" style={{ color: '#707372' }}>{r.setup}</p>
                  <Button to="/contact" variant="outline">Enquire</Button>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={IMAGES.events1} alt="Meeting room" className="w-full h-72 object-cover rounded-lg" />
              <img src={IMAGES.events2} alt="Banquet hall" className="w-full h-72 object-cover rounded-lg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}