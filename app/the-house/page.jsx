"use client";
import React, { useEffect } from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import FooterOne from '../../src/Components/Footer/FooterOne';
import ScrollToTop from '../../src/Components/ScrollToTop';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';

// Simple room data placeholder; replace with real data source later
const rooms = [
  { id: 1, name: 'Ibn Rushd', image: '/assets/img/the-house/Room 1.png' },
  { id: 2, name: 'Ibn Arabi', image: '/assets/img/the-house/Room 2.png' },
  { id: 3, name: 'Ibn Hazm', image: '/assets/img/the-house/Room 3.png' },
  { id: 4, name: 'Ziryab', image: '/assets/img/the-house/Room 4.png' },
  { id: 5, name: 'Wallada', image: '/assets/img/the-house/Room 5.png' },
  { id: 6, name: 'Ibn Tufayl', image: '/assets/img/the-house/Room 6.png' },
];

export default function TheHousePage() {
  // Auto-play / pause any video with data-autoplay-scroll when it enters/leaves viewport
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('video[data-autoplay-scroll]'));
    if (!videos.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            const p = vid.play();
            if (p && typeof p.then === 'function') {
              p.catch(() => { vid.muted = true; vid.play().catch(()=>{}); });
            }
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    videos.forEach(v => observer.observe(v));
    return () => { videos.forEach(v => observer.unobserve(v)); observer.disconnect(); };
  }, []);

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="House of Andalus" />
      <main className="space-extra-bottom">
        {/* Section 1: Intro */}

        <div className="  " id="the-house-intro">

          <div className="container ">
                  <div className="row gy-4 space-top ">
                  <div className="col-12">
                    <div className="blog-img">
                      <video
                        className="w-100"
                        controls
                        loop
                        playsInline
                        data-autoplay-scroll
                        aria-label="House of Andalus Intro Video"
                      >
                        <source src="/assets/img/homev.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      </div>
                      </div>
                      </div>
            {/* Shapes similar to AboutOne */}
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
        </div>
        {/* Section 2: Vision (Destination-style layout) */}
        <section className="space-top" id="the-house-vision">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Our Vision</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Reconnecting Community</span>
                    </div>
                    <h2 className="box-title">Connecting Past, Present and Future</h2>
                    <p className="blog-text mb-30">The House of Al-Andalus was born out of an essential question: What if we could take people beyond history, restore it with reverence, stone by stone, to preserve the soul of its past? What if we reawakened their senses so they can disconnect yet be reconnected… to themselves, their family, and their immediate and wider communities. </p>
                    <p className="blog-text mb-35">We aim to bring our vision through everything- from the way we have designed the rooms to the way we prepare our food and treat our guests. Our vision rooted in reverence and simplicity, it guided us from a single room to a growing tapestry of spaces in this farmhouse, each echoing the same essence of stillness, beauty, and belonging. This work has made us realize the importance of rest, reconnection and rejuvenation beyond the olive trees and make us work hard to connect to our  guests and hosts to support them as they rest, reflect and reconnect long after they leave from here. We only have one aim for our gusts- to leave lighter, clearer, and more whole than when they arrived.</p>
                    {/* <h3 className="box-title">A passion for heritage, harmony, and heartfelt smiles</h3>
                    <p className="blog-text mb-30">From the moment our guests step onto 14 hectares of natural land and an olive grove of 400 trees for their welcome ritual, through the programming they experience while they’re with us, until the sad time they wave farewell, we do everything we can to ensure they feel the long-lasting and uplifting impact of emotional hospitality. This is wrapped up in meaningful, out-of-the-ordinary moments, whether that means fresh air, waking up to birdsong, pioneering wellness, or a chance to interact with the community around you in a way that feels genuine and authentic.</p>
                    <p className="blog-text mb-30">Over time, we keep enhancing the way we do this, for example, working with scientists, engineers, and specialists in sacred geometry to offer you healing spaces, whether consciously through our rooms named after famous Andalusi historic figures or unconsciously through the energy of the natural environment itself.</p>
                    <blockquote>
                      <p>Although we never joke around when it comes to preserving our Andalusian heritage, nurturing land, and serving with ihsan, there’s always been plenty of time for fun. You’ll find laughter in the courtyard, stories shared under olive trees, and that unmistakable feeling of being home.</p>
                      <cite>The House Team</cite>
                    </blockquote> */}
                  </div>
                </div>
                   <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="blog-img">
                      <video
                        className="w-100"
                        controls
                        loop
                        playsInline
                        data-autoplay-scroll
                        aria-label="House of Andalus Intro Video"
                      >
                        <source src="/assets/img/House%20of%20Andalus%20video%203.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      </div>
                      </div>
                      </div>
              </div>
            </div>
          </div>
        </section>

              {/* Section 3: Rooms (Destination-style gallery/grid) */}
        <section className="space" id="the-house-rooms">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">The Seasons</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Rhythm of Nature</span>
                    </div>
                    <h2 className="box-title">House of Andalus in different seasons</h2>
                    <p className="blog-text ">Every season, like every day, is different at the House of Andalus. We encourage our guests to live by  the natural order of things and find peace and tranquility in the way the sun, the clouds and the moon moves. Being in tune with nature restores our sense of wellbeing and provides our nervous system a rest it needs.  </p>
                    <p className="blog-text ">Each olive tree, each archway carries the memory of Al-Andalus, where scholars once wrote, artists once painted, and hearts once worshipped in beauty. This is a house that holds stories. And now, it holds yours, too.</p>
                    <h5 className=""> Each season blesses us with its gifts</h5>
                    <div className="seasons-grid  mt-20" aria-label="House of Andalus Seasons" role="list">
                      {[
                        {
                          name: 'Spring',
                          accent: 'var(--color-1)',
                          text: 'Spring brings fresh breeze, delicious rain and an invigorating sense of renewal. Almonds are blossoming, the olive trees breathe and show their little flowers. Late spring brings wild flowers of all colours and they carpet this sacred land.'
                        },
                        {
                          name: 'Summer',
                          accent: 'var(--color-1)',
                          text: 'Summer is a deep delight, full of rest, sun‑kissed cheeks and siestas in the afternoon. When you get overwhelmed, the sparkling pool is a refuge where you swim with dragonflies and colourful birds.'
                        },
                        {
                          name: 'Autumn',
                          accent: 'var(--color-1)',
                          text: 'Autumn slithers in gently, bringing cooler but beautiful evening sunsets. The harvest is the highlight, where in the strong sun you collect juicy olives and taste their fresh oil on bread. Joy for life does not get much better than that.'
                        },
                        {
                          name: 'Winter',
                          accent: 'var(--color-1)',
                          text: 'In winter your walks become invigorating. You rejuvenate in the daily sunshine and cozy up around the fireplace with hot chocolate or our lime blossom tea with orange blossom water and honey, drifting into a deep, restful night.'
                        }
                      ].map(season => (
                        <article key={season.name} className="season-card" role="listitem" aria-labelledby={`season-${season.name}`}> 
                          <div className="season-accent" style={{ background: season.accent }} />
                          <h4 id={`season-${season.name}`} className="season-name">{season.name}</h4>
                          <p className="season-text">{season.text}</p>
                        </article>
                      ))}
                    </div>
                    <style jsx>{`
                      .seasons-heading {
                        position: relative;
                        font-size: 30px;
                        line-height: 1.18;
                        font-weight: 600;
                        letter-spacing: .035em;
                        display:inline-block;
                        background: linear-gradient(90deg,var(--color-1) 0%, var(--color-1) 35%, var(--color-2) 65%, var(--color-2) 100%);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: var(--title-color); /* fallback */
                        -webkit-text-fill-color: transparent; /* ensure gradient shows */
                        padding: 6px 14px 10px 14px;
                        border-radius: 18px;
                        text-shadow: 0 1px 2px rgba(0,0,0,.06); /* subtle contrast */
                      }
                      .seasons-heading__inner {
                        position: relative;
                        z-index: 2;
                      }
                      .seasons-heading:before, .seasons-heading:after {
                        content: "";
                        position: absolute;
                        left: 0; right: 0;
                        height: 100%;
                        border-radius: inherit;
                        opacity: .22;
                        pointer-events: none;
                      }
                      .seasons-heading:before {
                        top:0;
                        background: linear-gradient(140deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 70%);
                        backdrop-filter: blur(8px);
                      }
                      // .seasons-heading:after {
                      //   top:0;
                      //   background:
                      //     radial-gradient(circle at 12% 18%, rgba(223,165,133,0.55) 0%, transparent 60%),
                      //     radial-gradient(circle at 88% 70%, rgba(255,250,243,0.6) 0%, transparent 65%);
                      //   mix-blend-mode: overlay;
                      // }
                      .seasons-heading span:after {
                        content: "";
                        position: absolute;
                        left: 8px; right: 8px; bottom: -4px;
                        height: 3px;
                        background: linear-gradient(90deg,var(--color-1) 0%, var(--color-2) 40%, var(--color-3) 70%, var(--color-4) 100%);
                        border-radius: 3px;
                        box-shadow: 0 2px 10px -2px rgba(0,0,0,0.25);
                      }
                      @media (max-width:991px){ .seasons-heading { font-size:32px; } }
                      @media (max-width:575px){ .seasons-heading { font-size:26px; letter-spacing:.02em; } }
                      @media (prefers-reduced-motion:reduce){ .seasons-heading { transition:none; } }
                      .seasons-grid { 
                        display: grid; 
                        gap: 26px; 
                        grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
                      }
                      .season-card { 
                        position: relative; 
                        background: #ffffff; 
                        border: 1px solid #e6ece8; 
                        padding: 20px 22px 26px; 
                        border-radius: 18px; 
                        box-shadow: 0 4px 16px -4px rgba(30,40,60,0.12); 
                        transition: box-shadow .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1);
                      }
                      .season-card:hover, .season-card:focus-within { 
                        box-shadow: 0 10px 34px -10px rgba(30,40,60,0.25); 
                        transform: translateY(-4px); 
                      }
                      .season-accent { 
                        height: 6px; 
                        width: calc(100% + 44px); 
                        margin: -20px -22px 18px; 
                        border-radius: 0 0 14px 14px; 
                      }
                      .season-name { 
                        font-size: 22px; 
                        line-height: 1.3; 
                        margin: 0 0 10px; 
                        letter-spacing: .02em; 
                        color: var(--title-color); 
                      }
                      .season-text { 
                        font-size: 15px; 
                        line-height: 1.55; 
                        margin: 0; 
                        color: var(--body-color); 
                      }
                      @media (max-width: 575px) { 
                        .season-name { font-size: 18px; } 
                        .season-text { font-size: 14px; } 
                      }
                      @media (prefers-reduced-motion: reduce) { 
                        .season-card { transition: none; } 
                        .season-card:hover { transform: none; box-shadow:0 4px 16px -4px rgba(30,40,60,0.12);} 
                      }
                    `}</style>
                    {/* <div className="text-center mt-40">
                      <Link href="/rooms" className="th-btn style3 th-icon">View All Rooms</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


                      {/* Section 3: Rooms (Destination-style gallery/grid) */}
        <section className="" id="the-house-rooms">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">The Rooms</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Heritage Alive</span>
                    </div>
                    <h2 className="box-title">History in every corner of each room</h2>
                    <p className="blog-text ">Each room is named after a historic Andalusi figure, chosen for their unique character, achievements, leadership styles, and the legacy they left behind. Every fabric, tile, and scent was chosen to honour heritage and harmony. The interiors blend local Andalusian craft with modern restraint, resulting in a space that feels both timeless and intimate. </p>
                    <p className="blog-text ">Each olive tree, each archway carries the memory of Al-Andalus, where scholars once wrote, artists once painted, and hearts once worshipped in beauty. This is a house that holds stories. And now, it holds yours, too.</p>
                    {/* <h3 className="page-title mt-10 mb-25">Room Showcase</h3> */}
                    <div className="row g-4">
                      {rooms.map(room => (
                        <div key={room.id} className="col-md-6 col-lg-4">
                          <div className="destination-box th-ani room-equal-height" aria-label={`Room: ${room.name}`}>
                            <div className="destination-img position-relative room-img-equal-height">
                              <img src={room.image} alt={room.name} loading="lazy" className="room-img-equal-height-img" />
                              <div className="" style={{ position: 'absolute', inset: 0 }} />
                              <div className="room-name-overlay" style={{ position: 'absolute', left: '0', right: '0', bottom: '12px', padding: '0 16px', textAlign: 'left' }}>
                                <h5 style={{ color: '#fff', margin: 0, fontSize: '18px', fontWeight: 600 }}>{room.name}</h5>
                              </div>
                              <div className="hover-actions d-flex align-items-center justify-content-center" style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity .4s ease' }}>
                                <Link href="/rooms" className="th-btn style3 th-icon" aria-label={`View details for ${room.name}`}>View</Link>
                              </div>
                            </div>
                            <div className="destination-content pt-15">
                              <h5 className="box-title mb-5">{room.name}</h5>
                              <div className="destination-subtitle mb-10">Heritage & Harmony</div>
                              <p className="mb-15" style={{ fontSize: '14px' }}>A tranquil space inspired by the legacy of {room.name}, blending Andalusian craft with restorative simplicity.</p>
                              <Link href="/rooms" className="th-btn style1" aria-label={`Navigate to all rooms`}>Explore</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <style jsx>{`
                      #the-house-rooms .room-equal-height {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fff;
                        // box-shadow: 0 4px 18px -6px rgba(30,40,60,0.10);
                        transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
                      }
                      #the-house-rooms .room-equal-height:hover {
                        box-shadow: 0 8px 32px -8px rgba(30,40,60,0.16);
                      }
                      #the-house-rooms .room-img-equal-height {
                        width: 100%;
                        height: 270px;
                        max-height: 300px;
                        min-height: 200px;
                        overflow: hidden;
                        border-radius: 16px 16px 0 0;
                        position: relative;
                        background: #fafdff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                      #the-house-rooms .room-img-equal-height-img {
                        width: 100%;
                        height: 100%;
                        max-height: 300px;
                        object-fit: cover;
                        border-radius: 16px 16px 0 0;
                        transition: transform .5s cubic-bezier(.4,0,.2,1);
                        background: #fafdff;
                      }
                      #the-house-rooms .room-equal-height:hover .room-img-equal-height-img {
                        transform: scale(1.06);
                      }
                      #the-house-rooms .destination-box .destination-content {
                        background: #fff;
                        border: 1px solid #eee;
                        border-top: none;
                        padding: 18px 20px;
                        flex: 1 1 auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                      }
                      @media (max-width: 991px) {
                        #the-house-rooms .room-img-equal-height { height: 170px; }
                      }
                      @media (max-width: 575px) {
                        #the-house-rooms .room-img-equal-height { height: 100px; }
                      }
                      @media (prefers-reduced-motion: reduce) {
                        #the-house-rooms .room-equal-height:hover .room-img-equal-height-img { transform: none; }
                        #the-house-rooms .room-equal-height:hover .hover-actions { opacity: 1; }
                      }
                    `}</style>
                    {/* <div className="text-center mt-40">
                      <Link href="/rooms" className="th-btn style3 th-icon">View All Rooms</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


                {/* Section 3: Description of the House (Destination-style layout) */}
        <section className="space" id="the-house-vision">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Description of the House</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>The Mountains and Surrounding Land</span>
                    </div>
                    <h2 className="box-title">A passion for heritage, harmony, and heartfelt connections</h2>
                    <p className="blog-text mb-30">From the moment our guests step onto 14 hectares of natural land and the grooves of 400 olive trees for their welcome ritual, through the programming they experience while they’re with us, until the time they wave farewell, we do our utmost to ensure they feel the long-lasting and uplifting experience here. This is nurtured  through meaningful, out-of-the-ordinary moments, whether that might mean waking in fresh mountain air, listening to birdsongs, pioneering wellness, or a chance to interact with the community around them in a way that feels genuine and authentic. </p>
                    <p className="blog-text mb-35">Over time, we will keep enhancing the way we do this. This will mean working with scientists, engineers, and specialists in sacred arts to offer intentional healing spaces, whether consciously through our rooms named after famous Andalusi historic figures or unconsciously through the energy of the natural environment itself. We are always looking for artists and specialists for collaborative projects where our visions are aligned and we create a unique atmosphere for our new visitors and regular guests. </p>
                    <blockquote>
                      <p>The House of Andalus is an evolving space where ideas, collaboration and strategic movement is always welcome!</p>
                      <cite>The House Team</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 4: Values (Destination-style checklist) */}
        <section className="" id="the-house-values">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mb-20">
                      <span className="subr-title" style={{ color:'#92512B'}}>Our Values</span>
                    </div>
                    <h2 className="box-title mb-20">Rooted In Reverence</h2>
                    <p className="blog-text mb-40">We intend to create a way of life here that is rooted in reverence. We bring this to you through the way we inhabit the space or how we help you reawaken your senses with offerings and experiences that are quietly transformative, gently restorative, and intentionally out of the ordinary. Each olive tree is tended with reverence as well as every living creature on the land.</p>
                    <div className="row gy-4 gx-4 mb-10">
                      {[
                        {title:'Excellence',image:'/assets/img/the-house/Ihsan with Heart.png',backText:'No work is worth doing if it is not done with excellence. Our intention guides the design & stillness of the space and every experience you will embark on here.'},
                        {title:'Local Integrity, Global Vision',image:'/assets/img/the-house/Local Integrity.png',backText:'As a local enterprise with deep roots in Andalucia, the impact of the House of Andalus reaches beyond the borders of the mountains of Spain.'},
                        {title:'Sacred Simplicity',image:'/assets/img/the-house/Sustainability.png',backText:'Our main principle of sustainability is deeply connected to our spirituality as a practice. We tend the land as the Creator looks after its creations- with loving attention.'},
                        {title:'Emotional Hospitality',image:'/assets/img/the-house/Emotional.png',backText:'Our Hospitality is part of adab culture, where we aim to serve with humility, grace and love.'}
                      ].map(v => (
                        <div key={v.title} className="col-md-6 col-lg-3">
                          <div className="value-flip" aria-label={v.title}>
                            <div className="flip-inner">
                              <div className="flip-face flip-front">
                                <div className="destination-item_img global-img">
                                  <img src={v.image} alt={v.title} />
                                </div>
                                <div className="destination-content text-center pt-2 px-2">
                                  <h6 className="destination-subtitle mb-0"><span>{v.title}</span></h6>
                                </div>
                              </div>
                              <div className="flip-face flip-back">
                                <div className="flip-back-content px-2">
                                  <h6 className="destination-subtitle mb-10"><span>{v.title}</span></h6>
                                  <p className="flip-text mb-0">{v.backText}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row gy-4 gx-4 mb-40">
                      {[
                        {title:'Legacy of Light',image:'/assets/img/the-house/Legacy.png',backText:'Our Legacy of Light is guided by our light touch and is rooted in our faith.'},
                        {title:'Andalusian Roots',image:'/assets/img/the-house/Andalusian.png',backText:'Andalusian Roots is important to us as part of our identity in Europe and in the world. The Heritage we aim to keep has resonance beyond individuals and communities it nurtures from within.'},
                        {title:'Gratitude in Care',image:'/assets/img/the-house/Gratitude.png',backText:'In every detail—from the curve of an arch to the scent of our gardens—we honour the beauty of simplicity. It is through the quiet, the unadorned, and the intentional that the spirit of Andalus truly breathes.'},
                        {title:'A History Archive',image:'/assets/img/the-house/Adab.png',backText:'At the House of Andalus, history is being archived in every manner visible. The house will stand the test of time as a museum honouring our ancestors.'}
                      ].map(v => (
                        <div key={v.title} className="col-md-6 col-lg-3">
                          <div className="value-flip" aria-label={v.title}>
                            <div className="flip-inner">
                              <div className="flip-face flip-front">
                                <div className="destination-item_img global-img">
                                  <img src={v.image} alt={v.title} />
                                </div>
                                <div className="destination-content text-center pt-2 px-2">
                                  <h6 className="destination-subtitle mb-0"><span>{v.title}</span></h6>
                                </div>
                              </div>
                              <div className="flip-face flip-back">
                                <div className="flip-back-content px-2">
                                  <h6 className="destination-subtitle mb-10"><span>{v.title}</span></h6>
                                  <p className="flip-text mb-0">{v.backText}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            #the-house-values .value-flip { perspective:1200px; position:relative; }
            #the-house-values .value-flip .flip-inner { position:relative; width:100%; transform-style:preserve-3d; transition:transform .85s cubic-bezier(.68,-0.35,.27,1.3); }
            #the-house-values .value-flip:hover .flip-inner { transform:rotateY(180deg); }
            /* Front face should define natural height; make it relative */
            #the-house-values .flip-front { position:relative; backface-visibility:hidden; -webkit-backface-visibility:hidden; border:1px solid #e6eeea; border-radius:14px; overflow:hidden; background:#ffffff; box-shadow:0 6px 18px -6px rgba(0,0,0,0.15); }
            #the-house-values .flip-front img { width:100%; display:block; }
            #the-house-values .flip-front .destination-content { background:rgba(0,0,0,0.55); position:absolute; left:0; right:0; bottom:0; padding:6px 10px; }
            #the-house-values .flip-front .destination-subtitle span { color:#ffffff; font-weight:600; letter-spacing:.03em; font-size:20px; }
            /* Back face overlays full area */
            #the-house-values .flip-back { position:absolute; inset:0; padding:0px 18px 30px 18px; transform:rotateY(180deg); backface-visibility:hidden; -webkit-backface-visibility:hidden; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; border:1px solid #e6eeea; border-radius:14px; background:linear-gradient(225deg,var(--color-1) 0%, var(--color-2) 50%, var(--color-3) 100%); color:#ffffff; }
            #the-house-values .flip-back-content { width:100%; max-width:90%; }
            #the-house-values .flip-back-content .destination-subtitle span { color:#f4f8f6; font-weight:600; letter-spacing:.02em; font-size:23px; }
            #the-house-values .flip-text { font-size:18px; line-height:1.55; letter-spacing:.02em; color:#eef7f3; }
            /* Ensure inner takes height from front */
            #the-house-values .value-flip .flip-inner { min-height:100%; }
            @media (max-width:575px){ #the-house-values .flip-text { font-size:12px; } }
            @media (prefers-reduced-motion:reduce){ #the-house-values .value-flip .flip-inner { transition:none; } #the-house-values .value-flip:hover .flip-inner { transform:none; } }
          `}</style>
        </section>
  
                {/* Section 3: Description of the House (Destination-style layout) */}
        <section className="space" id="the-house-vision">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                      <div className="page-meta mb-20">
                      <span className="subr-title" style={{ color:'#92512B'}}>Guardians of Stillness</span>
                    </div>
                    <h2 className="box-title mb-20">The Mountains</h2>
                    <blockquote>
                      <p>Great things are done when men and mountains meet</p>
                      <cite>William Blake</cite>
                    </blockquote>
                    <p className="blog-text mb-30">Wherever you look, you see power, stability, strength, resilience and a deep sense of humility that waves through the landscape.  Mountains speak a secret language men must decipher with care and intention. They hold themselves in grace and dignity, a state we humans must embody yet we approach these creased earth pieces with a deliberate focus on conquering, as if it was ever possible. We never conquer the mountains, they conquer us; or rather we conquer something within us, as we embrace our follies and wobbliness. There is beauty and vulnerability in being in the mountains. </p>
                    <p className="blog-text mb-35">Here at the House of Andalus you will be reminded that our lives are like mountains- a presence that is solemn, dignified and hold a certain pose. The curvature of our life is often unpredictable; the ways we expand or stretch is commanded by the environment we find ourselves in. The way we stand depends on how deeply rooted and pegged we are into our own sense of self. We might appear scary from far, yet we welcome all walkers of life to stand with us. Mountains have been a fascination for authors, artists of all forms, and sensitives who can see beyond the obvious and while mountain living carries its own challenges, nothing compares to a few days in altitude that elevates our thinking and spiritual level. Mountains hold the view graciously and elegantly; an aspiration all humans have as we face our own challenges. </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




           {/* Section 5: Intro */}

        <div className="about-area position-relative overflow-hidden space" id="the-house-intro">

          <div className="container ">
            <div className="row">
              <div className="col-xl-6 mb-40 mb-xl-0">
                <div className="img-box1">
                  <div className="img1">
                    <img src="/assets/img/the-house/Olive 1.png" alt="The House" />
                  </div>
                  <div className="img2">
                    <img src="/assets/img/the-house/Olive 2.png" alt="The House" />
                  </div>
                  <div className="img3">
                    <img src="/assets/img/the-house/Olive 3.png" alt="The House" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="ps-xl-4 ms-xl-2">
                  <div className="title-area mb-20 pe-xl-5 me-xl-5">
                    <span className="sub-title style1">The Olive Garden of Andalus</span>
                    <h1 className="sec-title mb-2 pe-xl-5 me-xl-5 heading">Why the Olive Tree</h1>
                  </div>
                <p className="sec-text mb-2">
                  In the timeless valleys of Andalusia—where endless olive trees reach toward heaven—the spirit of legacy whispers through every grove. Here, The House of Andalus stands as a living monument to serenity, sincerity, and sacred connection, born from a longing to restore what modern life has taken away. It envisions an Olive Garden of Renewal—a sanctuary of learning and giving that revives the art and spirituality of olive cultivation, the ancient symbol of peace, faith, and sustenance.
                </p>
                <p className="sec-text mb-2">
                  Each tree planted nourishes both land and soul, carrying forward the mission of wellness, knowledge, and community—the same values upon which Andalusia was built. Experience the extraordinary, restore the balance, and let your roots grow here in the Garden of Andalus—where faith meets earth, and giving becomes eternal.
                </p>
                <div className="mt-30 d-flex flex-wrap align-items-center" style={{ gap: '16px' }}>
                  <Link href="/contact" className="th-btn style3 th-icon" aria-label="Donate for a tree">
                    Donate For A Tree
                  </Link>
                  <Link href="/contact" className="th-btn style1 th-icon" aria-label="Plant a tree">
                    Plant A Tree
                  </Link>
                </div>
                </div>
              </div>
            </div>
  
            {/* Shapes similar to AboutOne */}
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
        </div>


                        {/* Section 3: Description of the House (Destination-style layout) */}
        <section className="" id="the-house-vision">
          <div className="container ">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                                                            <div className="page-meta mb-20">
                      <span className="subr-title" style={{ color:'#92512B'}}>A Stream of Renewal</span>
                    </div>
                    <h2 className="box-title mb-20">The River</h2>
                    <p className="blog-text mb-30">At the bottom of the land runs a river we cherish in the neighbourhood. The riverbed is dry half of the year; the other half fills it with swooshing water running from the mountains. We never know how much of it, though, and this is one of its mysteries. During the dry months it is a pleasure to go for a walk in the riverbed, collect stones and connect to an eternal silence you become part of when you spend a few days here. </p>
                    <p className="blog-text mb-35">
As the rainier season arrives, we are hopeful for the rainwater to gather and flow leisurely, bringing freshness, new life and hope for the plants. At times, the river swells into an rush; those are the times when it is best to sit above, on the terrace and listen to the frogs’ night choir. With the stars above you, in the melodious chants of the frog, you will experience life like never before- your whole being is invited to participate in the world.</p>
                    {/* <p className="blog-text mb-35">We honour this river not merely as part of our land, but as part of our soul. It invites every traveller to let go—to release what burdens them and flow forward lighter, clearer, and more whole. In its current, the spirit finds cleansing; in its song, a prayer without words.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
