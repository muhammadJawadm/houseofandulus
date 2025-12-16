"use client";
import React, { Suspense } from "react";
import HeaderOne from "../../../src/Components/Header/HeaderOne";
import FooterFour from "../../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../../src/Components/ScrollToTop";
import Breadcrumb from "../../../src/Components/BreadCrumb/Breadcrumb";
import OliveTreeBookingForm from "../../../src/Components/OliveTree/OliveTreeBookingForm";

export default function OliveTreeBookingFormPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Book & Olive Tree – Form" />
      <main>
        <Suspense fallback={null}>
          <OliveTreeBookingForm />
        </Suspense>
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

