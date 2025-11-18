"use client";
import React from 'react';

// Data: first four retreat images reused with new headings & text
const valueItems = [
	{
		id: 1,
		title: "History is a Legacy for Everyone",
		image: "/assets/img/Home/Most Popular Tour/1 Most Popular Tour Couple Retreat.png",
		body: "Honouring the past and carrying its messages into the present and the future is a noble task all humans can carry out. We take pride in following the footsteps of our ancestors in the way we farm, work, live and think about others."
	},
	{
		id: 2,
		title: "Authentic Approach",
		image: "/assets/img/Home/Most Popular Tour/2 Most Popular Tour Writer Retreat.png",
		body: "We honour the legacy of Al Andalus in every corner, every plate of food and every programme we design. We honour our faith and spirituality to deliver everything, be it a collaborative project, a piece of art on the wall or an event we organize."
	},
	{
		id: 3,
		title: "We All Need a Sanctuary",
		image: "/assets/img/Home/Most Popular Tour/3 Most Popular Tour Leadership Retreat.png",
		body: "The world has become busy and the need for seclusion and introspection has become ever so important. The House of Andalus is a real refuge for the soul where you can hear your own heartbeat as you begin to shape your life from an authentic, truthful place."
	},
	{
		id: 4,
		title: "Slowness is Transformative",
		image: "/assets/img/Home/Most Popular Tour/4 Most Popular Tour Men Retreat.png",
		body: "In an increasingly demanding world, we honour the principles of slow and intentional living. Here we wake up with the sun and go to bed with the sun and by following the natural rhythms of life we re-learn how to live in the most natural ways."
	}
];

function TourValues() {
	return (
		<section className="tour-values-area space position-relative">
			<div className="container">
				<div className="title-area text-center mb-40">
					<span className="sub-title">House of Andalus</span>
					<h2 className="sec-title">Our Living Principles</h2>
				</div>
				<div className="row g-4">
					{valueItems.map(item => (
						<div key={item.id} className="col-12 col-md-6">
							<div className="value-card d-flex align-items-stretch h-100">
								<div className="value-card-img flex-shrink-0">
									<img src={item.image} alt={item.title} loading="lazy" />
								</div>
								<div className="value-card-content d-flex flex-column justify-content-center">
									<h3 className="value-card-title h5 mb-0">{item.title}</h3>
									<p className="value-card-text mb-0">{item.body}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<style jsx>{`
					.value-card { background:#FFFAF3; border-radius:16px; box-shadow:0 8px 30px -8px rgba(0,0,0,0.25); padding:18px 20px; gap:20px; position:relative; overflow:hidden; }
					.value-card-img img { width:130px; height:130px; object-fit:cover; border-radius:12px; display:block; }
					.value-card-title { color:var(--primary-color); letter-spacing:.02em; font-weight:600; }
					.value-card-text { font-size:1rem; letter-spacing:.02em; line-height:1.55; color:#000; }
					.value-card::before { content:""; position:absolute; inset:0; background:linear-gradient(135deg, rgba(35,66,55,0.08) 0%, rgba(71,121,103,0.10) 70%); opacity:0; transition:opacity .4s ease; }
					.value-card:hover::before { opacity:1; }
					.value-card:hover { box-shadow:0 12px 40px -10px rgba(0,0,0,0.30); }
					@media (max-width: 575px){ .value-card { flex-direction:column; text-align:center; } .value-card-img img { width:100%; height:180px; } .value-card { padding:16px 16px; } }
				`}</style>
			</div>
		</section>
	);
}

export default TourValues;
