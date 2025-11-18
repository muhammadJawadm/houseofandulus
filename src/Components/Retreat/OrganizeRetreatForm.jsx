"use client";
import React, { useState } from 'react';

const retreatTypeOptions = [
  { value: 'women', label: 'Women-Only Retreats' },
  { value: 'men', label: 'Men-Only Retreats' },
  { value: 'mixed', label: 'Mixed Retreats' },
];
const serviceOptions = [
  { value: 'accom_breakfast', label: 'Accommodation with Breakfast Only' },
  { value: 'accom_full_meals', label: 'Accommodation with Full Meals' },
  { value: 'transfers', label: 'Transfers To/From Airport' },
  { value: 'historic_tours', label: 'Guided Historic Tours' },
  { value: 'outdoor_activities', label: 'Organized Outdoor Activities' },
];

const OrganizeRetreatForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',            // renamed from name
    phone: '',
    email: '',
    retreatType: '',
    groupSize: '',
    themeIntentions: '',
    services: [],
    provideSpeakers: '',
    speakersTopics: '',
    notes: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (value) => {
    setFormData(prev => {
      const exists = prev.services.includes(value);
      return { ...prev, services: exists ? prev.services.filter(v => v !== value) : [...prev.services, value] };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'themeIntentions') {
      const words = value.trim().split(/\s+/).filter(Boolean);
      const limited = words.length > 100 ? words.slice(0, 100).join(' ') : value;
      setFormData(prev => ({ ...prev, [name]: limited }));
      return;
    }
    if (name === 'provideSpeakers') {
      // Reset speakersTopics if switching to "no"
      setFormData(prev => ({ ...prev, provideSpeakers: value, speakersTopics: value === 'yes' ? prev.speakersTopics : '' }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.fullName || !formData.email || !formData.retreatType) return { ok:false, msg:'Full Name, Email and Retreat Type are required.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return { ok:false, msg:'Enter a valid email.' };
    const wordCount = formData.themeIntentions.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > 100) return { ok:false, msg:'Theme & Intentions exceeds 100 words.' };
    return { ok:true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) { setStatus({ type:'error', message:v.msg }); return; }
    setSubmitting(true);
    // Build payload with legacy field aliases for backend/email
    const servicesReadable = formData.services.map(s => {
      const opt = serviceOptions.find(o => o.value === s);
      return opt ? opt.label : s;
    });
    const retreatTypeLabel = retreatTypeOptions.find(o => o.value === formData.retreatType)?.label || '';
    const payload = {
      fullName: formData.fullName,
      name: formData.fullName,            // legacy alias
      phone: formData.phone,
      email: formData.email,
      retreatType: formData.retreatType,
      retreatTypeLabel,
      groupSize: formData.groupSize,
      participants: formData.groupSize,   // legacy alias
      themeIntentions: formData.themeIntentions,
      theme: formData.themeIntentions,    // alias
      services: formData.services,        // raw values
      servicesReadable,                   // human-readable list
      servicesRequestedArray: servicesReadable,
      servicesRequestedString: servicesReadable.join(', '),
      requirements: servicesReadable.join(', '), // single string fallback
      provideSpeakers: formData.provideSpeakers,
      speakersNeeded: formData.provideSpeakers === 'yes' ? 'Yes' : (formData.provideSpeakers === 'no' ? 'No' : ''),
      speakersTopics: formData.speakersTopics,
      speakerTopics: formData.speakersTopics, // alias
      notes: formData.notes,
      additionalNotes: formData.notes,    // alias
      interests: formData.retreatType ? [formData.retreatType] : [],
      interestsReadable: retreatTypeLabel ? [retreatTypeLabel] : []
    };
    try {
      const res = await fetch('/api/retreat-interest', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type:'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type:'success', message: 'Your interest has been recorded. We will be in touch.' });
        setFormData({
          fullName:'', phone:'', email:'', retreatType:'', groupSize:'', themeIntentions:'',
          services:[], provideSpeakers:'', speakersTopics:'', notes:''
        });
      }
    } catch(err) {
      setStatus({ type:'error', message:'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="organize-retreat-form space" id="organize-retreat-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Interest / Custom Retreat Form – House of Andalus</span>
              <h2 className="sec-title">Organise Your Own Retreat</h2>
              <p className="sec-text">Tell us the heart of your gathering and we’ll help you shape it with care, presence and purpose.</p>
            </div>
            <form onSubmit={handleSubmit} className="retreat-interest-form" noValidate>
              {/* Contact Section */}
              <div className="form-section card-plate">
                <h5 className="section-heading">Contact Details</h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"                 // updated name attribute
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+44 7000 000000" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              {/* Retreat Details */}
              <div className="form-section card-plate">
                <h5 className="section-heading">Retreat Details</h5>
                <div className="row g-3">
                  <fieldset className="col-12 option-group">
                    <legend className="form-label mb-2">What type of retreat or activity would you like to run?</legend>
                    <div className="row g-2">
                      {retreatTypeOptions.map(opt => (
                        <div className="col-md-4 col-sm-6" key={opt.value}>
                          <label className={`checkbox-line ${formData.retreatType === opt.value ? 'active' : ''}`}>
                            <input
                              type="radio"
                              name="retreatType"
                              value={opt.value}
                              checked={formData.retreatType === opt.value}
                              onChange={handleChange}
                            /> {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <div className="col-md-6">
                    <label className="form-label">Expected Group Size</label>
                    <input type="number" min="1" name="groupSize" value={formData.groupSize} onChange={handleChange} className="form-control" placeholder="e.g. 14" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Retreat Theme & Intentions (max 100 words)</label>
                    <textarea
                      name="themeIntentions"
                      value={formData.themeIntentions}
                      onChange={handleChange}
                      className="form-control"
                      rows={4}
                      placeholder="Please describe the focus, purpose, and vision of your retreat."
                    />
                    <small className="text-muted d-block mt-1">
                      {formData.themeIntentions.trim().split(/\s+/).filter(Boolean).length}/100 words
                    </small>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="form-section card-plate">
                <fieldset className="option-group">
                  <legend className="section-heading">Requirements from the House of Andalus</legend>
                  <div className="row g-2">
                    {serviceOptions.map(opt => (
                      <div className="col-md-6" key={opt.value}>
                        <label className={`checkbox-line ${formData.services.includes(opt.value) ? 'active' : ''}`}>
                          <input
                            type="checkbox"
                            name="services"
                            value={opt.value}
                            checked={formData.services.includes(opt.value)}
                            onChange={() => toggleService(opt.value)}
                          /> {opt.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <div className="row g-4 mt-2">
                  <div className="col-md-6">
                    <label className="form-label d-block mb-2">Would you like us to provide Speakers or Lecturers?</label>
                    <div className="d-flex gap-3">
                      <label className={`checkbox-line ${formData.provideSpeakers === 'yes' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="provideSpeakers"
                          value="yes"
                          checked={formData.provideSpeakers === 'yes'}
                          onChange={handleChange}
                        /> Yes
                      </label>
                      <label className={`checkbox-line ${formData.provideSpeakers === 'no' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="provideSpeakers"
                          value="no"
                          checked={formData.provideSpeakers === 'no'}
                          onChange={handleChange}
                        /> No
                      </label>
                    </div>
                  </div>
                  {formData.provideSpeakers === 'yes' && (
                    <div className="col-12">
                      <label className="form-label">If yes, please specify the topics or subjects</label>
                      <textarea
                        name="speakersTopics"
                        value={formData.speakersTopics}
                        onChange={handleChange}
                        className="form-control"
                        rows={3}
                        placeholder="Topics, subjects, areas of interest"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="form-section card-plate">
                <h5 className="section-heading">Additional Notes</h5>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-control"
                  rows={3}
                  placeholder="Any other details or requests"
                />
              </div>

              <div className="text-center mt-30">
                <button type="submit" className="th-btn style1" disabled={submitting}>{submitting? 'Sending...' : 'Submit Interest'}</button>
                {status.message && <p className={`form-status mt-15 ${status.type === 'error' ? 'text-danger':'text-success'}`}>{status.message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .retreat-interest-form .form-label { font-weight:600; font-size:14px; letter-spacing:.02em; }
        fieldset { border:0; margin:0; padding:0; min-width:0; }
        legend { margin:0; padding:0; }
        .option-group legend.form-label,
        .option-group legend.section-heading { display:block; }
        .retreat-interest-form .form-control { background:#fff; border:1px solid #d9e6e0; border-radius:8px; min-height:46px; }
        .retreat-interest-form textarea.form-control { min-height:110px; resize:vertical; }
        .checkbox-line { display:block; padding:10px 14px; border:1px solid #d9e6e0; border-radius:10px; font-size:13px; background:#fff; cursor:pointer; position:relative; user-select:none; transition:.18s ease; }
        .checkbox-line input { margin-right:8px; }
        .checkbox-line.active { border-color:var(--theme-color); background:rgba(189,105,56,0.08); }
        .form-section { margin-bottom:34px; }
        .section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:var(--theme-color); }
        .form-status { font-size:14px; }
        @media (max-width: 767px){ .card-plate { padding:22px 20px 10px; } .checkbox-line { font-size:12px; } }
      `}</style>
    </section>
  );
};

export default OrganizeRetreatForm;
