export const siteConfig = {
  clinicName: "Lotus Aesthetics & Wellness",
  legacyClinicName: "Lotus Aesthetics & The Urgent Care",
  tagline: "Physician-led medical and wellness care",
  siteUrl: "https://lotusurgentcare.com",
  phone: "(843) 888-8828",
  phoneHref: "+18438888828",
  email: "lotusskinflorence@gmail.com",
  bookingHref: "/contact#consultation-form",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=505+West+Palmetto+St+Florence+SC+29501",
  address: {
    street: "505 West Palmetto St",
    city: "Florence",
    state: "SC",
    zip: "29501",
  },
  officeHoursNote:
    "Appointments and select same-day availability are offered throughout the week. Call the office for the most current schedule.",
  seo: {
    marketName: "Florence, SC",
    medicalSpecialty: "Aesthetics and Wellness Clinic",
    serviceAreaSummary:
      "Lotus Aesthetics & Wellness provides physician-led Botox, fillers, PRP, IV therapy, weight-loss support, and select same-day medical visits for Florence, SC and the surrounding communities.",
  },
  intakeForms: {
    contact: import.meta.env.JOT_CONTACT_FORM,
    newPatient: import.meta.env.JOT_NEW_PATIENT_FORM,
    infant: import.meta.env.JOT_INFANT_FORM,
    uhc: import.meta.env.JOT_UHC_FORM,
    vz8: import.meta.env.JOT_VZ8_FORM,
  },
};
