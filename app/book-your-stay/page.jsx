"use client";
import React, { useEffect } from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';

// REPLACED placeholder upcomingRetreats with structured 2026 data
const events2026 = [
  {
    month: 'March',
    icon: '🌸',
    items: [
      {
        title: 'New Blossom – Spring Writer’s Retreat',
        description: 'Nurture creativity and peace among the olive groves. Write, reflect, and rediscover inspiration.',
        dates: 'March (exact dates to be announced)',
        register: true
      }
    ]
  },
  {
    month: 'April',
    icon: '🌿',
    items: [
      {
        title: 'Alchemy of Leadership Programme',
        description: 'Transform your understanding of leadership with a soulful, purpose-driven framework.',
        dates: '23–27 April',
        viewDetails: true,
        register: true
      }
    ]
  },
  {
    month: 'May',
    icon: '❀',
    items: [
      {
        title: 'Muslim Women Leadership Retreat',
        description: 'A sacred space for women to grow, connect, and empower each other through spiritual and personal development.',
        dates: '14–17 May',
        register: true
      }
    ]
  },
  {
    month: 'June',
    icon: '♥︎',
    items: [
      {
        title: 'Connecting Couples Retreat',
        description: 'Reignite love, improve communication, and renew your relationship in a serene Andalusian setting.',
        dates: 'June (exact dates to be announced)',
        register: true
      }
    ]
  },
  {
    month: 'July & August',
    icon: '☀️',
    items: [
      {
        title: 'Family & Friends Open Retreats',
        description: 'Spend precious days with loved ones. Reconnect through laughter, food, and shared memories.',
        dates: 'July–August (flexible bookings)',
        register: true
      }
    ]
  },
  {
    month: 'September',
    icon: '🍁',
    items: [
      {
        title: 'Women’s Retreat with Asma Ahmad',
        description: 'A rejuvenating retreat to restore balance, strength, and inner peace.',
        dates: '24–28 September',
        register: true
      },
      {
        title: 'Couples Retreat',
        description: 'A nurturing space to reconnect hearts and heal together through guided reflection.',
        dates: 'September (exact dates to be announced)',
        register: true
      },
      {
        title: 'Alchemy of Leadership (Encore)',
        description: 'An extended opportunity for those who missed the April programme.',
        dates: 'September (TBC)',
        viewDetails: true,
        register: true
      }
    ]
  },
  {
    month: 'October',
    icon: '🫒',
    items: [
      {
        title: 'Writer’s Retreat',
        description: 'Find your muse in the Andalusian calm. A peaceful space to write, think, and grow.',
        dates: 'October (exact dates to be announced)',
        register: true
      },
      {
        title: 'Olive Harvest Retreat',
        description: 'Experience the sacred tradition of olive harvesting — reconnecting body, earth, and spirit.',
        dates: 'October (exact dates to be announced)',
        register: true
      }
    ]
  }
];
// ADD: helper for Register Interest button destination
const getInterestHref = (title = '') => {
  const lower = title.toLowerCase();
  if (lower.includes('couples')) return '/book-your-stay/couple-retreat-form';
  if (lower.includes('custom')) return '/book-your-stay/organize-your-own-retreat';
  return '/book-your-stay/booking-form';
};

export default function BookYourStayPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.hoa-event-card');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Book Your Stay" />
      <main className="space-top space-extra-bottom">
        {/* Hero / Intro */}
        <section className="about-area position-relative overflow-hidden space" id="stay-intro">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 mb-40 mb-xl-0">
                {/* Adopt AboutFour image composition */}
                <div className="img-box3" aria-label="Retreat Atmosphere Images">
                  <div className="img1">
                    <img src="/assets/img/Book your stay/Retreat 1.png" alt="Olive Grove Morning" />
                  </div>
                  <div className="img2">
                    <img src="/assets/img/Book your stay/Retreat 2.png" alt="Courtyard Reflection" />
                  </div>
                  <div className="img3 movingX">
                    <img src="/assets/img/Book your stay/Retreat 3.png" alt="Stillness & Light" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="ps-xl-4">
                  <div className="title-area mb-20">
                    <span className="sub-title style1">Book Your Stay</span>
                    <h1 className="sec-title mb-15 heading" style={{fontSize:'46px',lineHeight:'1.15'}}>A House That Holds Your Retreat</h1>
                  </div>
                  <p className="sec-text mb-20">In the heart of Andalusia, far from hurry and habit, a house waits to hold your retreat. Here the call to prayer drifts across terraces, olive leaves shimmer in morning light, and interiors invite a slower rhythm. We curate spaces where couples rediscover tenderness, writers honour voice, leaders cultivate inner alignment, and seekers return to stillness. If it matters to your heart—faith, family, creativity, renewal—it matters here.</p>
                  <p className="sec-text mb-25">Choose from signature experiences already lovingly designed, or craft a bespoke gathering shaped around your own intention. Every retreat is woven from reflection, nature, communion and the quiet joy of remembering Allah together. Let House of Andalus answer the lingering question, “Which retreat shall we choose?”—with one that feels like it was always waiting for you.</p>
                  <div className="d-flex flex-wrap gap-3">
                    <Link href="#retreats" className="th-btn style1">House of Andalus Retreats</Link>
                    <Link href="#craft-your-own" className="th-btn style3 th-icon">Organise Your Own Retreat</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes retained */}
            <div className="shape-mockup shape1 d-none d-xl-block" style={{ top: '12%', left: '-16%' }}>
              <img src="/assets/img/shape/shape_1.png" alt="shape" />
            </div>
            <div className="shape-mockup shape2 d-none d-xl-block" style={{ top: '20%', left: '-16%' }}>
              <img src="/assets/img/shape/shape_2.png" alt="shape" />
            </div>
            <div className="shape-mockup shape3 d-none d-xl-block" style={{ top: '14%', left: '-10%' }}>
              <img src="/assets/img/shape/shape_3.png" alt="shape" />
            </div>
          </div>
        </section>

   

        {/* NEW: 2026 Upcoming Retreats & Events (Redesigned) */}
        <section className="space hoa-events-2026 position-relative overflow-hidden" id="upcoming-2026" aria-labelledby="hoa-events-2026-title">
          <div className="container">
            {/* Decorative Shapes (reuse existing assets) */}
            <div className="shape-mockup d-none d-xl-block hoa-shape-left" style={{ top: '4%', left: '-6%' }}>
              <img src="/assets/img/shape/shape_2.png" alt="decor shape" />
            </div>
            <div className="shape-mockup d-none d-xl-block hoa-shape-right" style={{ bottom: '6%', right: '-4%' }}>
              <img src="/assets/img/shape/shape_3.png" alt="decor shape" />
            </div>

            {/* Intro */}
            <div className="row justify-content-center mb-50">
              <div className="col-xl-9">
                <div className="title-area text-center">
                  <span className="sub-title style1">2026 Schedule</span>
                  <h2 id="hoa-events-2026-title" className="sec-title mb-20 heading">House of Andalus Retreats & Events – 2026</h2>
                  <p className="sec-text mx-auto" style={{maxWidth:'760px'}}>
                    We welcome you to a year of reflection, growth, and renewal under the Andalusian sky.
                    Whether you seek peace, connection, or inspiration — there’s a retreat waiting for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Month Groups */}
            {events2026.map(group => (
              <div key={group.month} className="hoa-month-wrapper mb-60">
                <div className="hoa-month-bar">
                  {/* <span className="hoa-month-icon" aria-hidden="true">{group.icon}</span> */}
                  <span className="hoa-month-label">{group.month}</span>
                  <span className="hoa-month-line" />
                </div>
                <div className="row gy-4 gx-4">
                  {group.items.map((ev, i) => (
                    <div key={i} className="col-sm-6 col-lg-4">
                      <div className="hoa-event-card destination-item th-ani" role="article" aria-label={ev.title}>
                        <div className="hoa-event-accent" aria-hidden="true">
                          {/* <span className="hoa-event-icon">{group.icon}</span> */}
                          {/* <span className="hoa-event-month" aria-label={`Month: ${group.month}`}>{group.month}</span> */}
                        </div>
                        <div className="hoa-event-inner">
                          <h4 className="box-title hoa-event-title">{ev.title}</h4>
                          <p className="destination-text hoa-event-desc">{ev.description}</p>
                          <p className="destination-text hoa-event-dates-pill">{ev.dates}</p>

                          <div className="hoa-actions d-flex flex-wrap gap-2">
                            {ev.viewDetails && (
                              <Link
                                href="/book-your-stay/booking-form"
                                className="th-btn style1 th-icon"
                                aria-label={`View details for ${ev.title}`}
                              >
                                View Details
                              </Link>
                            )}
                            {ev.register && (
                              <Link
                                href={getInterestHref(ev.title)}
                                className="th-btn style3 th-icon"
                                aria-label={`Register interest for ${ev.title}`}
                              >
                                Register Interest
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <style jsx>{`
        /* Improve contrast of hosting enquiry button on dark bg */
        .hosting-btn { background:#fff !important; color:#1a2a21 !important; border:1px solid #ffffff !important; box-shadow:0 4px 14px rgba(0,0,0,0.25); }
        .hosting-btn:hover { background:#fff !important; color:#0f221b !important; box-shadow:0 6px 20px rgba(0,0,0,0.28); }
        /* Redesigned 2026 Events Section */
        .hoa-events-2026 { background:linear-gradient(140deg,#f9f7f3 0%, #ffffff 55%, #eef3ef 100%); }
        .hoa-events-2026:before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 12% 18%, rgba(197,161,91,0.12) 0%, transparent 55%), radial-gradient(circle at 88% 82%, rgba(122,139,115,0.12) 0%, transparent 60%); pointer-events:none; }
        .hoa-month-wrapper:last-of-type { margin-bottom:0; }
        .hoa-month-bar { display:flex; align-items:center; gap:14px; margin-bottom:28px; position:relative; }
        .hoa-month-icon { font-size:22px; line-height:1; }
        .hoa-month-label { font-size:18px; font-weight:600; letter-spacing:.05em; text-transform:uppercase; padding:6px 16px; background:#ffffff; border:1px solid #e1ece8; border-radius:30px; color:#2a332c; }
        .hoa-month-line { flex:1; height:1px; background:linear-gradient(90deg,#5a6d52 0%, rgba(90,109,82,0) 80%); opacity:.35; }
        .hoa-event-card { position:relative; background:#fff; border:1px solid #e1e8ecff; border-radius:18px; box-shadow:0 6px 20px -8px rgba(32,42,36,0.12); overflow:hidden; padding:0; opacity:0; transform:translateY(26px); transition:transform .45s cubic-bezier(.19,1,.22,1), box-shadow .45s ease; }
        .hoa-event-card:focus-within { box-shadow:0 0 0 3px rgba(189,105,56,0.25),0 8px 28px -10px rgba(32,42,36,0.3); }
        .hoa-event-card.in-view { animation:hoaCardIn .75s ease forwards; }
        .hoa-event-card:hover { transform:translateY(-6px); box-shadow:0 16px 34px -14px rgba(32,42,36,0.28); }
        .hoa-event-accent { display:flex; align-items:center; gap:10px; padding:10px 14px 9px; background:linear-gradient(95deg,var(--color-1) 0%, var(--color-2) 55%, var(--color-3) 100%); color:#fff; position:relative; }
        .hoa-event-accent:after { content:''; position:absolute; inset:0; background:linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0)); mix-blend-mode:overlay; pointer-events:none; }
        .hoa-event-icon { font-size:20px; line-height:1; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25)); }
        .hoa-event-month { font-size:12px; letter-spacing:.12em; font-weight:600; text-transform:uppercase; }
        .hoa-event-inner { padding:16px 18px 20px; display:flex; flex-direction:column; min-height:240px; }
        .hoa-event-title { font-size:18px; margin-bottom:10px; line-height:1.25; }
        .hoa-event-dates-pill { display:inline-block; background:#ffffff; border:1px solid #d9e2dd; padding:4px 10px 5px; border-radius:20px; font-size:11px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:#000; margin:0 0 12px; }
        .hoa-event-desc { font-size:15px; line-height:1.55; margin:0 0 14px; color:#000; flex-grow:1; display:-webkit-box; -webkit-line-clamp:5; -webkit-box-orient:vertical; overflow:hidden; }
        .hoa-actions { margin-top:auto; }
        .hoa-actions .hoa-register-btn { padding:8px 18px; border-radius:28px; font-size:13px; letter-spacing:.04em; }
        /* UPDATED: View Details button refinement */
        .hoa-details-btn { position:relative; display:inline-flex; align-items:center; gap:6px; font-size:12px; margin-top:10px; padding:6px 16px 10px; border-radius:26px; background:#ffffff; border:1px solid #c9d5ce; color:#4e5f49; font-weight:500; letter-spacing:.05em; line-height:1.2; transition:background .3s ease, color .3s ease, box-shadow .3s ease, border-color .3s ease, transform .3s ease; }
        .hoa-details-btn:hover { background:#f1f6f3; color:#2a332c; border-color:#5a6d52; box-shadow:0 6px 16px -8px rgba(74,90,69,.35); transform:translateY(-2px); }
        .hoa-details-btn:active { transform:translateY(0); box-shadow:0 3px 10px -6px rgba(74,90,69,.3); }
        .hoa-details-btn:focus, .hoa-register-btn:focus { outline:2px solid #c5a15b; outline-offset:2px; }
        @keyframes hoaCardIn { 0% { opacity:0; transform:translateY(26px); } 100% { opacity:1; transform:translateY(0); } }
        @media (max-width:640px) { .hoa-month-label { font-size:14px; padding:6px 14px; } .hoa-event-inner { padding:14px 16px 18px; } .hoa-event-title { font-size:17px; } .hoa-event-desc { -webkit-line-clamp:6; } .hoa-event-accent { padding:9px 12px 8px; } .hoa-event-month { letter-spacing:.1em; } .hoa-details-btn { padding:6px 15px 9px; } }
      `}</style>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
