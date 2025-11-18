"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import NiceSelect from '../Header/NiceSelect';
import Modal from 'react-modal';
// In Next.js there is no '#root'; use '#__next' or fallback to document.body
function useModalAccessibility() {
    useEffect(() => {
        const appElem = document.getElementById('__next') || document.body;
        if (appElem) {
            Modal.setAppElement(appElem);
        }
    }, []);
}
function BookATour() {
    useModalAccessibility();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const videoRef = useRef(null);
    const countryOptions = [
        { value: "country", label: "Select Retreat Type" },
        { value: "Couple Retreat", label: "Couple Retreat" },
        { value: "Writers Retreat", label: "Writers Retreat" },
        { value: "Leaders Retreat", label: "Leaders Retreat" },
        { value: "Men Retreat", label: "Men Retreat" },
        { value: "Women Retreat", label: "Women Retreat" },
        { value: "Discovering History", label: "Discovering History" },
    ];
    // Auto-play video when modal opens (muted first to satisfy browser policies)
    useEffect(() => {
        if (modalIsOpen && videoRef.current) {
            const v = videoRef.current;
            // Attempt play; if rejected due to audio policy, mute then retry
            const tryPlay = () => {
                const p = v.play();
                if (p && typeof p.then === 'function') {
                    p.catch(() => {
                        v.muted = true;
                        v.play().catch(() => {/* give up silently */});
                    });
                }
            };
            tryPlay();
        } else if (!modalIsOpen && videoRef.current) {
            // Pause when modal closes
            videoRef.current.pause();
        }
    }, [modalIsOpen]);

    return (
        <div
            className="space-extra2-top space-extra2-bottom"
            style={{ background: "url(/assets/img/bg/!.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className="container">
                <div className="row flex-row-reverse justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="video-box1">
                            <button className="play-btn style2 popup-video" onClick={() => setModalIsOpen(true)}>
                                <i className="fa-sharp fa-solid fa-play" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <form
                                
                                className="contact-form style2 ajax-contact"
                            >
                                <h3 className="sec-title mb-30 text-capitalize">Book your retreat</h3>

                                <div className="row">
                                    <div className="col-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name3"
                                            placeholder="First Name"
                                            required
                                        />
                                        <img src="assets/img/icon/user.svg" alt="" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email3"
                                            id="email3"
                                            placeholder="Your Mail"
                                            required
                                        />
                                        <img src="assets/img/icon/mail.svg" alt="" />
                                    </div>
                                    <div className="form-group col-12">
                                        <NiceSelect options={countryOptions} defaultValue="Select Retreat Type" />

                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={3}
                                            className="form-control"
                                            placeholder="Your Message"
                                            defaultValue={""}
                                        />
                                        <img src="assets/img/icon/chat.svg" alt="" />
                                    </div>
                                    <div className="form-btn col-12 mt-24">
                                        <button type="submit" className="th-btn style3">
                                            Send message
                                            <img src="assets/img/icon/plane.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
                className="video-modal large"
                overlayClassName="video-modal-overlay"
                style={{
                    content: {
                        maxWidth: '1100px',
                        width: '100%',
                        inset: '50% auto auto 50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#000',
                        // padding: '28px 32px',
                        borderRadius: '14px',
                        // border: '1px solid #1a1a1a'
                    }
                }}
            >
                <button className="close-btn" onClick={() => setModalIsOpen(false)}>&times;</button>
                <video
                    ref={videoRef}
                    width="100%"
                    height="700"
                    autoPlay
                    controls
                    playsInline
                    poster=""
                    aria-label="Retreat Introduction Video"
                    style={{ borderRadius: '10px', boxShadow: '0 6px 30px rgba(106, 104, 104, 0.4)' }}
                >
                    <source src="/assets/img/House%20of%20Andalus%20video%202.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Modal>
                        {/* Adjust input field appearance: now pure white background */}
                        <style jsx>{`
                            .contact-form.style2 .form-control {
                                background:#ffffff !important;
                                border:1px solid #e9e2d9 !important;
                                color:#000 !important;
                                box-shadow:0 2px 6px -3px rgba(0,0,0,0.06);
                                transition:border-color .25s ease, background .25s ease;
                            }
                            .contact-form.style2 .form-group img { filter:brightness(.9); }
                            .contact-form.style2 .form-control::placeholder { color:#7d6f63; opacity:.75; }
                            .contact-form.style2 textarea.form-control { min-height:120px; }
                            .contact-form.style2 .form-control:focus {
                                background:#ffffff !important;
                                border-color:var(--theme-color) !important;
                                box-shadow:0 0 0 3px rgba(189,105,56,0.18);
                            }
                            @media (max-width:640px){
                                .contact-form.style2 .form-control { font-size:14px; }
                            }
                        `}</style>
        </div>
    )
}

export default BookATour
