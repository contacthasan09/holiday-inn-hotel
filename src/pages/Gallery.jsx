import { IMAGES, GALLERY } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A look inside our hotel"
        image={IMAGES.galleryHero}
        height="h-64 md:h-80"
      />

      <section className="py-16">
        <div className="container-max">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="In Pictures"
              title="Moments from the hotel"
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {GALLERY.map((src, i) => (
              <Reveal key={i} delay={i * 50}>
                <figure className="relative overflow-hidden group rounded-lg">
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    loading="lazy"
                    className="w-full h-52 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: 'linear-gradient(to top, rgba(33,98,69,0.5), transparent)' }} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}