import { IMAGES, CONTACT } from '../data/content'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image={IMAGES.gallery1}
        height="h-64 md:h-80"
      />

      <section className="py-16">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <form
              className="card-flat p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <SectionTitle eyebrow="Message" title="Send us a note" />
              <div className="mt-8 space-y-5">
                <div>
                  <label className="label block mb-2">Full Name</label>
                  <input className="input" type="text" required />
                </div>
                <div>
                  <label className="label block mb-2">Email</label>
                  <input className="input" type="email" required />
                </div>
                <div>
                  <label className="label block mb-2">Phone</label>
                  <input className="input" type="tel" />
                </div>
                <div>
                  <label className="label block mb-2">Message</label>
                  <textarea className="input min-h-[120px]" required />
                </div>
                <button type="submit" className="btn-green w-full">Send Message</button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <SectionTitle eyebrow="Reach Us" title="Holiday Inn Dhaka" />
            <ul className="mt-8 space-y-5 body-text">
              <li>
                <p className="label mb-1">Address</p>
                <p>{CONTACT.address}</p>
              </li>
              <li>
                <p className="label mb-1">Phone</p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-ihg-green no-underline">{CONTACT.phone}</a>
              </li>
              <li>
                <p className="label mb-1">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-ihg-green no-underline">{CONTACT.email}</a>
              </li>
              <li>
                <p className="label mb-1">Reception</p>
                <p>Open 24 hours</p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}