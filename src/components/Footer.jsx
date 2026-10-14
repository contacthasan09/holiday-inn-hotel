import { Link } from 'react-router-dom'
import { LOGO, CONTACT, NAV } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid #dddddd',
        marginTop: 96,
      }}
    >
      <div className="container-max" style={{ padding: '64px 20px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 40,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div className="footer-col-brand" style={{ gridColumn: 'span 4' }}>
            <img
              src={LOGO}
              alt="Holiday Inn Dhaka City Centre"
              style={{ height: 40, width: 'auto', objectFit: 'contain', marginBottom: 20 }}
            />
            <p style={{ fontSize: 14, lineHeight: '22px', color: '#3f3d3d', maxWidth: 360 }}>
              Holiday Inn Dhaka City Centre — modern comfort, warm hospitality and a central
              address in the heart of Dhaka.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {[
                {
                  href: 'https://www.facebook.com/',
                  label: 'Facebook',
                  path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z',
                  fill: true,
                },
                {
                  href: 'https://www.instagram.com/',
                  label: 'Instagram',
                  path: 'M12 8.5A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5zM17 6.5h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z',
                  fill: false,
                },
                {
                  href: 'https://twitter.com/',
                  label: 'Twitter',
                  path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.25 2.25H8.08l4.713 6.231z',
                  fill: true,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid #dddddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a1e14',
                    transition: 'border-color 0.2s, color 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24"
                       fill={s.fill ? 'currentColor' : 'none'}
                       stroke={s.fill ? 'none' : 'currentColor'}
                       strokeWidth="2">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <h4 className="label" style={{ marginBottom: 20, color: '#0a1e14' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {NAV.slice(1, 7).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel */}
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <h4 className="label" style={{ marginBottom: 20, color: '#0a1e14' }}>
              Hotel
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/offers" className="footer-link">Offers</Link></li>
              <li><Link to="/amenities" className="footer-link">Amenities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col" style={{ gridColumn: 'span 4' }}>
            <h4 className="label" style={{ marginBottom: 20, color: '#0a1e14' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16, fontSize: 14 }}>
              <li style={{ display: 'flex', gap: 12 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#216245" strokeWidth="2" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
                <span style={{ color: '#3f3d3d', lineHeight: '22px' }}>{CONTACT.address}</span>
              </li>
              <li style={{ display: 'flex', gap: 12 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#216245" strokeWidth="2" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="footer-link">
                  {CONTACT.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: 12 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#216245" strokeWidth="2" style={{ flexShrink: 0, marginTop: 3 }}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="footer-link" style={{ wordBreak: 'break-all' }}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: '1px solid #dddddd',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            fontSize: 12,
            color: '#707372',
          }}
        >
          <p style={{ margin: 0 }}>© {year} Holiday Inn Dhaka City Centre. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" className="footer-link footer-legal">Privacy Policy</a>
            <a href="#" className="footer-link footer-legal">Terms of Use</a>
            <a href="#" className="footer-link footer-legal">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}