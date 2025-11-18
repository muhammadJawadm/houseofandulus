"use client";
import React, { useState } from 'react';

const relationshipDurationOptions = [
	{ value: 'newlyweds', label: 'Newlyweds' },
	{ value: '5_10', label: 'Married for 5–10 years' },
	{ value: '10_20', label: 'Married for 10–20 years' },
	{ value: '25_plus', label: 'Married over 25 years' },
];

const relationshipStageOptions = [
	{ value: 'overall_happy', label: 'Overall happy, just needs some attention' },
	{ value: 'some_challenges', label: 'We have some challenges that make it difficult to enjoy our marriage' },
	{ value: 'more_bad_days', label: 'We have more bad days than good ones' },
	{ value: 'breaking_point', label: 'We are at breaking point' },
	{ value: 'separated_discussing_divorce', label: 'We are separated / discussing divorce' },
];

const seekingOptions = [
	'Resetting our relationship',
	'Rekindling love, romance and intimacy',
	'Work on some challenges we are unable to solve ourselves',
	'Reconnect to each other',
	'Solving communication problems',
	'Re-examine where we are going as a couple',
	'Setting or Re-setting the foundations for our marriage',
	'Iron out minor/major disagreements',
	'Discuss if divorce is a possible way forward in a facilitated environment',
	'Find common ground again',
	'Re-establish our marital life',
	'Work through sexual dysfunction',
  'Discuss family problems (extended family, children, in-laws…) and find solutions'
];

const CouplesRetreatForm = () => {
	const [formData, setFormData] = useState({
		wifeName: '',
		husbandName: '',
		occupations: '',
		ageGroup: '',
		phone: '',
		email: '',
		preferredDateTime: '',
		relationshipDuration: '',
		relationshipStage: '',
		seeking: [],
	});
	const [status, setStatus] = useState({ type: '', message: '' });
	const [submitting, setSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleRadio = (name, value) => {
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const toggleSeeking = (value) => {
		setFormData(prev => {
			const exists = prev.seeking.includes(value);
			return { ...prev, seeking: exists ? prev.seeking.filter(v => v !== value) : [...prev.seeking, value] };
		});
	};

	const validate = () => {
		if (!formData.wifeName || !formData.husbandName || !formData.email) {
			return { ok:false, msg:'Please enter wife name, husband name and email.' };
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			return { ok:false, msg:'Enter a valid email address.' };
		}
		return { ok:true };
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const v = validate();
		if (!v.ok) { setStatus({ type:'error', message:v.msg }); return; }
		setSubmitting(true);
		try {
			const res = await fetch('/api/couples-retreat', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(formData) });
			const data = await res.json();
			if (!res.ok) {
				setStatus({ type:'error', message:data.message || 'Submission failed.' });
			} else {
				setStatus({ type:'success', message:'Thank you. Your expression of interest has been received.' });
				setFormData({ wifeName:'', husbandName:'', occupations:'', ageGroup:'', phone:'', email:'', preferredDateTime:'', relationshipDuration:'', relationshipStage:'', seeking:[] });
			}
		} catch(err){
			setStatus({ type:'error', message:'Network error. Please try again.' });
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="couples-retreat-form space" id="couples-retreat-form">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-9">
						<div className="title-area text-center mb-40">
							{/* <span className="sub-title style1">Couples’ Retreat – Expression of Interest Form</span> */}
							<h2 className="sec-title">Couples’ Retreat – Expression of Interest</h2>
							<p className="sec-text">Share where you are and what you seek—so we can help curate a retreat that nurtures reconnection, mercy and renewal.</p>
						</div>
						<form onSubmit={handleSubmit} className="retreat-interest-form" noValidate>
							<div className="form-section card-plate">
								<h5 className="section-heading">Names</h5>
								<div className="row g-4">
									<div className="col-md-6">
										<label className="form-label">Wife *</label>
										<input type="text" name="wifeName" value={formData.wifeName} onChange={handleChange} required className="form-control" placeholder="Wife's name" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Husband *</label>
										<input type="text" name="husbandName" value={formData.husbandName} onChange={handleChange} required className="form-control" placeholder="Husband's name" />
									</div>
									<div className="col-12">
										<label className="form-label">Your Occupations</label>
										<input type="text" name="occupations" value={formData.occupations} onChange={handleChange} className="form-control" placeholder="e.g. Teacher / Engineer" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Age Group</label>
										<input type="text" name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="form-control" placeholder="e.g. Early 30s" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Phone Number</label>
										<input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+44 7000 000000" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Email Address *</label>
										<input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="you@example.com" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Preferred Date and Time</label>
										<input type="text" name="preferredDateTime" value={formData.preferredDateTime} onChange={handleChange} className="form-control" placeholder="e.g. 14–18 June (flexible evenings)" />
									</div>
								</div>
							</div>

							<div className="form-section card-plate">
								<h5 className="section-heading">Where Are You In Your Relationship?</h5>
								<div className="row g-3">
									{relationshipDurationOptions.map(opt => (
										<div className="col-md-6" key={opt.value}>
											<label className={`radio-pill w-100 ${formData.relationshipDuration===opt.value?'active':''}`}>
												<input type="radio" name="relationshipDuration" value={opt.value} checked={formData.relationshipDuration===opt.value} onChange={(e)=>handleRadio('relationshipDuration', e.target.value)} />
												<span className="radio-indicator" aria-hidden="true"></span>
												<span className="label-text">{opt.label}</span>
											</label>
										</div>
									))}
								</div>
							</div>

							<div className="form-section card-plate">
								<h5 className="section-heading">What Stage Is Your Relationship At?</h5>
								<div className="row g-3">
									{relationshipStageOptions.map(opt => (
										<div className="col-md-12" key={opt.value}>
											<label className={`radio-pill w-100 ${formData.relationshipStage===opt.value?'active':''}`}>
												<input type="radio" name="relationshipStage" value={opt.value} checked={formData.relationshipStage===opt.value} onChange={(e)=>handleRadio('relationshipStage', e.target.value)} />
												<span className="radio-indicator" aria-hidden="true"></span>
												<span className="label-text">{opt.label}</span>
											</label>
										</div>
									))}
								</div>
							</div>

							<div className="form-section card-plate">
								<h5 className="section-heading">What Are You Seeking?</h5>
								<div className="row g-2">
									{seekingOptions.map(item => (
										<div className="col-md-6" key={item}>
											<label className={`checkbox-line ${formData.seeking.includes(item)?'active':''}`}>
												<input type="checkbox" value={item} checked={formData.seeking.includes(item)} onChange={()=>toggleSeeking(item)} /> {item}
											</label>
										</div>
									))}
								</div>
							</div>

							<div className="text-center mt-30">
								<button type="submit" className="th-btn style1" disabled={submitting}>{submitting? 'Sending...' : 'Submit Expression of Interest'}</button>
								{status.message && <p className={`form-status mt-15 ${status.type==='error'?'text-danger':'text-success'}`}>{status.message}</p>}
							</div>
						</form>
					</div>
				</div>
			</div>
			<style jsx>{`
				.retreat-interest-form .form-label { font-weight:600; font-size:14px; letter-spacing:.02em; }
				.retreat-interest-form .form-control { background:#fff; border:1px solid #d9e6e0; border-radius:8px; min-height:46px; }
				.retreat-interest-form textarea.form-control { min-height:110px; resize:vertical; }
				.checkbox-line { display:block; padding:10px 14px; border:1px solid #d9e6e0; border-radius:10px; font-size:13px; background:#fff; cursor:pointer; position:relative; transition:.18s ease; }
				.checkbox-line input { margin-right:8px; }
				.checkbox-line.active { border-color:var(--theme-color); background:rgba(189,105,56,0.08); }
				.form-section { margin-bottom:34px; }
				// .card-plate { background:linear-gradient(145deg,#ffffff,#f5f9f7); border:1px solid #dbe7e1; border-radius:18px; padding:28px 28px 14px; box-shadow:0 8px 22px -8px rgba(189,105,56,0.12); }
				.section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:var(--theme-color); }
				.form-status { font-size:14px; }
				.radio-pill { position:relative; display:flex; align-items:center; gap:10px; padding:12px 18px 12px 46px; border:1px solid #cfdcd6; background:#ffffff; border-radius:14px; font-size:13px; font-weight:500; color:var(--theme-color); cursor:pointer; transition:.18s ease; min-height:48px; }
				.radio-pill:hover { background:rgba(189,105,56,0.06); border-color:rgba(189,105,56,0.45); }
				.radio-pill.active { background:rgba(189,105,56,0.14); border-color:var(--theme-color); box-shadow:0 0 0 3px rgba(189,105,56,0.22); }
				.radio-pill input { position:absolute; inset:0; opacity:0; cursor:pointer; margin:0; }
				.radio-indicator { position:absolute; left:16px; width:20px; height:20px; border:2px solid var(--theme-color); border-radius:50%; display:flex; align-items:center; justify-content:center; background:#ffffff; transition:.22s ease; }
				.radio-pill.active .radio-indicator { background:var(--theme-color); }
				.radio-pill.active .radio-indicator::after { content:""; width:8px; height:8px; background:#ffffff; border-radius:50%; }
				@media (max-width: 767px){ .card-plate { padding:22px 20px 10px; } .checkbox-line { font-size:12px; } .radio-pill { padding:10px 16px 10px 44px; } }
			`}</style>
		</section>
	);
};

export default CouplesRetreatForm;
