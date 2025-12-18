"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import NiceSelect from "../Header/NiceSelect";
import Link from "next/link";

function Booking() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        destination: "",
        adventureType: "",
        duration: "",
        category: ""
    });

    const [formMessage, setFormMessage] = useState({ text: "", type: "" });

    const adventureOptions = [
        { value: "Heritage Harvest", label: "Heritage Harvest" },
        { value: "Al Andalus Pathways", label: "Al Andalus Pathways" },
        { value: "Leadership Journeys", label: "Leadership Journeys" },
        { value: "Sacred Land", label: "Sacred Land" },
        { value: "The House and Its History", label: "The House and Its History" },
        { value: "Culture and Society", label: "Culture and Society" },
        { value: "Art and Architecture", label: "Art and Architecture" },
    ];
    
    const durationOptions = [
        { value: "1 days", label: "1 days" },
        { value: "2 days", label: "2 days" },
        { value: "3 days", label: "3 days" },
        { value: "4 days", label: "4 days" },
        { value: "5 days", label: "5 days" },
        { value: "6 days", label: "6 days" },
    ];
    
    const categoryOptions = [
        { value: "Couples Retreat", label: "Couples Retreat" },
        { value: "Writers Retreat", label: "Writers Retreat" },
        { value: "Leadership Retreat", label: "Leadership Retreat" },
        { value: "Men Retreat", label: "Men Retreat" },
        { value: "Women Retreat", label: "Women Retreat" },
        { value: "Discovering History", label: "Discovering History" },
    ];

    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.adventureType || !formData.duration || !formData.category) {
            setFormMessage({ text: "Please fill in all fields before searching.", type: "error" });
            return;
        }

        const cat = formData.category;
        if (cat === 'Couples Retreat') {
            router.push('/book-your-stay/couple-retreat-form');
        } else if (cat === 'Discovering History') {
            router.push('/book-your-stay/organize-your-own-retreat');
        } else {
            router.push('/book-your-stay/booking-form');
        }

        setFormMessage({ text: "Redirecting...", type: "success" });
        setFormData({ destination: "", adventureType: "", duration: "", category: "" });
    };

    return (
        <div className="booking-sec">
            <div className="container">
                <div className="booking-form">
                    {/* <div className="input-wrap"> */}

                        {/* Three Booking Buttons */}
                        <div className="booking-buttons-wrapper">
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-4 col-lg-auto mb-3 mb-lg-0">
                                    <Link href="/book-your-stay/booking-form" className="th-btn booking-btn booking-btn-stay">
                                        <i className="fa-light fa-bed me-2" />
                                        Book a Private Stay
                                    </Link>
                                </div>
                                
                                <div className="col-md-4 col-lg-auto mb-3 mb-lg-0">
                                    <Link href="/book-your-stay/organize-your-own-retreat" className="th-btn booking-btn booking-btn-retreat">
                                        <i className="fa-light fa-spa me-2" />
                                        Organise Your Retreat
                                    </Link>
                                </div>
                                
                                <div className="col-md-4 col-lg-auto mb-3 mb-lg-0">
                                    <Link href="/book-and-olive-tree" className="th-btn booking-btn booking-btn-custom">
                                        <i className="fa-light fa-wand-magic-sparkles me-2" />
                                        Book An Olive Tree                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

            <style jsx>{`
                .booking-buttons-wrapper {
                    margin-bottom: 1rem;
                }

                .booking-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px 32px;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    width: 100%;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }

                .booking-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }

                .booking-btn:hover::before {
                    left: 100%;
                }

                .booking-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
                }

                .booking-btn-stay {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border: none;
                }

                .booking-btn-stay:hover {
                    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                }

                .booking-btn-retreat {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    border: none;
                }

                .booking-btn-retreat:hover {
                    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
                }

                .booking-btn-custom {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    border: none;
                }

                .booking-btn-custom:hover {
                    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
                }

                .booking-btn i {
                    font-size: 18px;
                }

                @media (max-width: 991px) {
                    .booking-btn {
                        padding: 14px 24px;
                        font-size: 14px;
                    }
                }

                @media (max-width: 767px) {
                    .booking-buttons-wrapper {
                        margin-top: 1.5rem;
                    }
                    
                    .booking-btn {
                        padding: 12px 20px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Booking;