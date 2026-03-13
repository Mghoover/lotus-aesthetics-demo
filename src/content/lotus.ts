import type {
  ContactCard,
  CtaBandData,
  FaqItem,
  HeroData,
  Link,
  PageHeroData,
  SectionIntro,
  SeoMeta,
  ServiceCard,
  SpotlightSection,
  Testimonial,
  ValueItem,
} from "../types/lotus";

const consultationLink = "/contact#consultation-form";
const servicesLink = "/aesthetic-treatments";
const phoneLink = "tel:+18438888828";

const sharedCtas: Link[] = [
  { label: "Book Aesthetic Consultation", href: consultationLink, variant: "primary" },
  { label: "Explore Services", href: servicesLink, variant: "secondary" },
];

export const lotusContent = {
  business: {
    name: "Lotus Aesthetics & Wellness",
    legacyName: "Lotus Aesthetics & The Urgent Care",
    tagline: "Physician-led medical and wellness care",
    phone: "(843) 888-8828",
    phoneLink,
    email: "lotusskinflorence@gmail.com",
    addressLine: "505 West Palmetto St",
    cityStateZip: "Florence, SC 29501",
    market: "Florence, SC",
    bookingHref: consultationLink,
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=505+West+Palmetto+St+Florence+SC+29501",
    hoursNote:
      "Appointments and select same-day availability are offered throughout the week. Call the office for the most current schedule.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Aesthetic Treatments", href: "/aesthetic-treatments" },
    { label: "Wellness Services", href: "/wellness-services" },
    { label: "Medical Visits", href: "/medical-visits" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies Array<{ label: string; href: string }>,
  navigationCta: {
    label: "Book Now",
    href: consultationLink,
  },
  home: {
    seo: {
      title: "Physician-Led Aesthetics & Wellness in Florence, SC",
      description:
        "Lotus Aesthetics & Wellness offers Botox, fillers, PRP, hair restoration, IV hydration, weight-loss support, and select same-day medical visits in Florence, SC.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Lotus Aesthetics & Wellness | Florence, South Carolina",
      title: "Physician-Led Aesthetics & Wellness in Florence",
      description:
        "Lotus pairs refined aesthetic treatments, restorative wellness services, and select same-day medical visits in one calming practice. Patients come for natural-looking results, medically grounded planning, and a more personal standard of care.",
      highlights: [
        "Botox, fillers, PRP, and hair restoration",
        "IV hydration, vitamin support, and weight-loss care",
        "Select same-day medical visits when you need added support",
      ],
      ctas: sharedCtas,
      image: "/images/lotus/hero-serenity.svg",
      imageAlt: "Elegant Lotus Aesthetics & Wellness hero placeholder",
    } satisfies HeroData,
    featuredServicesIntro: {
      eyebrow: "Featured Services",
      title: "Aesthetic and wellness services designed around your goals",
      description:
        "Each treatment plan starts with a physician-led conversation about what you want to improve, how you want to feel, and what will make sense for your timeline.",
      align: "center",
    } satisfies SectionIntro,
    featuredServices: [
      {
        eyebrow: "Aesthetics",
        title: "Botox & Wrinkle Relaxers",
        summary:
          "Smooth expression lines with a refreshed look that stays polished, subtle, and appropriate for your features.",
        idealFor: "Ideal for softening forehead lines, crow's feet, and frown lines with a natural finish.",
        href: "/aesthetic-treatments",
        linkLabel: "Request a Botox consultation",
      },
      {
        eyebrow: "Aesthetics",
        title: "Dermal Fillers",
        summary:
          "Restore facial balance, refine lip shape, and add gentle volume where age or genetics have left you feeling less like yourself.",
        idealFor: "Ideal for patients seeking fuller lips, softer folds, or improved contour with a physician-led plan.",
        href: "/aesthetic-treatments",
        linkLabel: "Explore filler options",
      },
      {
        eyebrow: "Regenerative",
        title: "PRP Facial Rejuvenation",
        summary:
          "Use platelet-rich plasma to support glow, tone, and texture with a restorative approach to skin quality.",
        idealFor: "Ideal for patients who want a brighter, healthier-looking complexion with minimal disruption.",
        href: "/aesthetic-treatments",
        linkLabel: "Learn about PRP facials",
      },
      {
        eyebrow: "Regenerative",
        title: "Hair Restoration",
        summary:
          "Support fuller-looking hair with physician-guided PRP hair restoration plans tailored to early thinning and ongoing maintenance.",
        idealFor: "Ideal for patients noticing shedding, reduced density, or thinning around the hairline or crown.",
        href: "/aesthetic-treatments",
        linkLabel: "Discuss hair restoration",
      },
      {
        eyebrow: "Wellness",
        title: "IV Hydration Therapy",
        summary:
          "Replenish fluids and essential nutrients with restorative IV support designed for recovery, travel, fatigue, and busy schedules.",
        idealFor: "Ideal for adults wanting hydration, recovery support, or a simple wellness reset.",
        href: "/wellness-services",
        linkLabel: "View IV therapy services",
      },
      {
        eyebrow: "Wellness",
        title: "Weight Loss Support",
        summary:
          "Receive medically grounded guidance for sustainable weight management, including medication-based support when clinically appropriate.",
        idealFor: "Ideal for adults seeking structured, physician-led help with appetite, metabolic health, and accountability.",
        href: "/wellness-services",
        linkLabel: "Start a weight-loss consultation",
      },
    ] satisfies ServiceCard[],
    whyChooseIntro: {
      eyebrow: "Why Choose Lotus",
      title: "Elegant, local, and guided by medical judgment",
      description:
        "Lotus is designed for patients who want more than a transactional treatment visit. The experience is elevated, but the care stays personal, careful, and grounded in clinical decision-making.",
      align: "center",
    } satisfies SectionIntro,
    whyChoose: [
      {
        title: "Physician-led planning",
        description:
          "Every recommendation is shaped by medical oversight, thoughtful assessment, and realistic treatment pacing.",
      },
      {
        title: "Personalized treatment paths",
        description:
          "Plans are built around your goals, comfort level, timeline, and the look or outcome you actually want.",
      },
      {
        title: "Calming clinical environment",
        description:
          "The atmosphere is warm and polished, blending boutique med spa comfort with the reassurance of a physician-led office.",
      },
      {
        title: "Wellness plus aesthetics",
        description:
          "Patients can support appearance, recovery, and overall well-being without bouncing between disconnected providers.",
      },
      {
        title: "Local Florence access",
        description:
          "Lotus offers a sophisticated experience close to home for patients across Florence and the surrounding area.",
      },
      {
        title: "Supportive medical visits",
        description:
          "When appropriate, select same-day medical visits are available as a secondary layer of care within the practice.",
      },
    ] satisfies ValueItem[],
    aboutPreview: {
      eyebrow: "About The Practice",
      title: "A more personal model of physician-led care",
      paragraphs: [
        "Lotus Aesthetics & Wellness brings together aesthetic medicine, restorative wellness services, and supportive medical visits under one roof. The goal is not to feel like a walk-in clinic. It is to offer a calmer, more considered experience where patients feel seen, guided, and cared for.",
        "Dr. Hamidi leads the practice with an emphasis on individualized planning, subtle results, and clear communication. Patients can come in for Botox, PRP, IV hydration, weight-loss support, or a same-day office visit and still feel the same consistent standard of care.",
      ],
      bullets: [
        "Natural-looking aesthetic outcomes",
        "Wellness services grounded in clinical judgment",
        "A more approachable physician experience for Florence patients",
      ],
      ctas: [
        { label: "Meet Dr. Hamidi", href: "/about", variant: "primary" },
        { label: "Call The Office", href: phoneLink, variant: "secondary" },
      ],
      image: "/images/lotus/physician-care.svg",
      imageAlt: "Physician-led care placeholder illustration",
    } satisfies SpotlightSection,
    medicalPreview: {
      eyebrow: "Supportive Medical Care",
      title: "Select same-day medical visits remain available",
      paragraphs: [
        "Lotus still provides supportive office-based medical care for patients who need a same-day visit, a telehealth consultation, or evaluation for a minor acute concern. That care is available, but it is intentionally presented as a supporting service rather than the entire identity of the practice.",
      ],
      bullets: [
        "Sick visits and basic in-person evaluations",
        "Minor injuries and pain-related visits",
        "Telehealth consultations and follow-up care",
      ],
      ctas: [{ label: "Explore Medical Visits", href: "/medical-visits", variant: "secondary" }],
      image: "/images/lotus/medical-placeholder.svg",
      imageAlt: "Supportive medical care placeholder illustration",
    } satisfies SpotlightSection,
    testimonialsIntro: {
      eyebrow: "Patient Experience",
      title: "Care that feels polished, calm, and personal",
      description:
        "These placeholder testimonials are written to demonstrate the tone and positioning of the final website without overstating results.",
      align: "center",
    } satisfies SectionIntro,
    testimonials: [
      {
        quote:
          "I wanted a natural result and a physician who would actually explain what made sense for my face. Lotus felt thoughtful from the consultation through the treatment.",
        author: "Aesthetic patient",
        role: "Botox and filler consultation",
      },
      {
        quote:
          "The office has a calming, elevated feel, but it still feels approachable. My IV appointment was easy, on time, and exactly the kind of wellness support I was looking for.",
        author: "Wellness patient",
        role: "IV hydration visit",
      },
      {
        quote:
          "I appreciate that Lotus offers aesthetic services and same-day medical support in one place. It feels more personal than a typical urgent care experience.",
        author: "Established patient",
        role: "Wellness and medical visits",
      },
    ] satisfies Testimonial[],
    faqIntro: {
      eyebrow: "Frequently Asked Questions",
      title: "Questions new patients often ask",
      description:
        "The answers below help frame the demo experience and can be adjusted later to match the practice's final operating preferences.",
      align: "center",
    } satisfies SectionIntro,
    faq: [
      {
        question: "Do I need a consultation before aesthetic treatment?",
        answer:
          "For most new aesthetic patients, the process starts with a consultation so Dr. Hamidi can understand your goals, review your history, and recommend a treatment plan that fits your features and comfort level.",
      },
      {
        question: "Does Lotus still offer medical visits?",
        answer:
          "Yes. Lotus offers select same-day medical visits, telehealth consultations, and supportive office-based care for minor acute concerns, but the primary focus of the practice is aesthetics and wellness.",
      },
      {
        question: "What wellness services are available?",
        answer:
          "Current demo services include IV hydration and vitamin therapy, weight-loss support, and restorative wellness visits designed to feel medically grounded and approachable.",
      },
      {
        question: "Is Lotus a good fit if I want subtle results?",
        answer:
          "Yes. The tone of the practice is refined and personalized, which makes Lotus especially appropriate for patients who want a fresher, more rested look rather than an overdone result.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "Ready to plan your next visit?",
      description:
        "Schedule an aesthetic consultation, ask about IV therapy or weight-loss support, or call for current same-day availability in Florence.",
      ctas: [
        { label: "Book A Consultation", href: consultationLink, variant: "primary" },
        { label: "Call (843) 888-8828", href: phoneLink, variant: "secondary" },
      ],
    } satisfies CtaBandData,
  },
  aestheticPage: {
    seo: {
      title: "Aesthetic Treatments in Florence, SC",
      description:
        "Explore physician-led Botox, dermal fillers, PRP facial rejuvenation, hair restoration, and body contouring options at Lotus Aesthetics & Wellness in Florence, SC.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Aesthetic Treatments",
      title: "Refined aesthetic treatments with a physician-led standard",
      description:
        "Lotus offers aesthetic services for patients who want natural-looking results, honest recommendations, and a treatment experience that feels calm, polished, and medically informed.",
    } satisfies PageHeroData,
    intro: {
      eyebrow: "Treatment Overview",
      title: "Designed for confidence, balance, and healthy-looking skin",
      description:
        "Our approach to aesthetics is individualized. Rather than pushing a standard package, Lotus focuses on what fits your features, your goals, and the pace that feels right to you.",
    } satisfies SectionIntro,
    services: [
      {
        eyebrow: "Injectables",
        title: "Botox / Wrinkle Relaxers",
        summary:
          "Relax expression lines with a customized plan designed to preserve movement while creating a softer, more rested appearance.",
        idealFor:
          "Ideal for adults concerned with forehead lines, crow's feet, frown lines, or early prevention with subtle intention.",
        bullets: [
          "Consultation-first treatment planning",
          "Natural-looking dosing strategy",
          "Touch-up and maintenance planning available",
        ],
        href: consultationLink,
        linkLabel: "Request Botox consultation",
      },
      {
        eyebrow: "Injectables",
        title: "Dermal Fillers",
        summary:
          "Restore softness, structure, and balance with thoughtfully placed filler for lips, facial contour, or age-related volume loss.",
        idealFor:
          "Ideal for patients who want refined enhancement rather than an overfilled look.",
        bullets: [
          "Lip filler and facial filler consultations",
          "Balanced approach to contour and proportion",
          "Physician-led discussion of options and expectations",
        ],
        href: consultationLink,
        linkLabel: "Book filler consultation",
      },
      {
        eyebrow: "Regenerative Aesthetics",
        title: "PRP Facial Rejuvenation",
        summary:
          "Support brighter, healthier-looking skin with PRP-based rejuvenation that focuses on texture, tone, and an overall refreshed appearance.",
        idealFor:
          "Ideal for patients looking for a restorative skin treatment that complements a natural aesthetic plan.",
        bullets: [
          "Glow and texture support",
          "Pairs well with broader skin-quality planning",
          "Minimal-downtime aesthetic option",
        ],
        href: consultationLink,
        linkLabel: "Ask about PRP facials",
      },
      {
        eyebrow: "Regenerative Aesthetics",
        title: "PRP Hair Restoration",
        summary:
          "Use PRP to support healthier-looking hair density with treatment planning tailored to early thinning, shedding, and long-term maintenance.",
        idealFor:
          "Ideal for men and women who want proactive support for thinning hair without a rushed, one-size-fits-all recommendation.",
        bullets: [
          "Scalp-focused consultation",
          "Treatment series planning available",
          "Maintenance guidance based on response",
        ],
        href: consultationLink,
        linkLabel: "Discuss hair restoration",
      },
      {
        eyebrow: "Body Treatments",
        title: "Body Contouring & Sculpting",
        summary:
          "Reserve space in the demo for a future body contouring service line that complements Lotus' premium aesthetic positioning.",
        idealFor:
          "Ideal as a placeholder offering if the practice expands into non-surgical sculpting or tightening services.",
        bullets: [
          "Easy to swap with a final treatment offering",
          "Supports premium med spa positioning",
          "Can be replaced with a specific device or protocol later",
        ],
        href: consultationLink,
        linkLabel: "Request consultation",
      },
    ] satisfies ServiceCard[],
    spotlight: {
      eyebrow: "Consultation Experience",
      title: "The goal is refreshed, not overdone",
      paragraphs: [
        "Aesthetic care at Lotus is built around subtle improvement, not trend chasing. Consultations are meant to feel thoughtful and collaborative so patients understand what is possible, what is not necessary, and how to move forward with confidence.",
      ],
      bullets: [
        "Honest guidance on what fits your goals",
        "Physician-led treatment planning",
        "A calm setting that feels more boutique than clinical",
      ],
      ctas: sharedCtas,
      image: "/images/lotus/aesthetic-room.svg",
      imageAlt: "Aesthetic treatment room placeholder illustration",
    } satisfies SpotlightSection,
    cta: {
      title: "Schedule a personalized aesthetic consultation",
      description:
        "Whether you are new to injectables or refining an established routine, Lotus offers a more tailored path forward in Florence, SC.",
      ctas: sharedCtas,
    } satisfies CtaBandData,
  },
  wellnessPage: {
    seo: {
      title: "Wellness Services in Florence, SC",
      description:
        "Lotus Aesthetics & Wellness offers physician-led IV hydration, vitamin therapy, weight-loss support, and restorative wellness services in Florence, SC.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Wellness Services",
      title: "Restorative wellness support with medical perspective",
      description:
        "Lotus wellness services are designed for adults who want to feel better with a plan that is supportive, local, and clinically grounded rather than trend-driven.",
    } satisfies PageHeroData,
    intro: {
      eyebrow: "Wellness Overview",
      title: "Support your energy, recovery, and long-term goals",
      description:
        "Our wellness menu focuses on straightforward services patients already ask for: IV hydration, vitamin support, weight-loss planning, and restorative care that fits everyday life.",
    } satisfies SectionIntro,
    services: [
      {
        eyebrow: "IV Therapy",
        title: "IV Hydration / Vitamins / Minerals",
        summary:
          "Recover, rehydrate, and support day-to-day well-being with IV therapy options that can be tailored to fatigue, travel, recovery, and busy schedules.",
        idealFor:
          "Ideal for adults seeking hydration, nutrient support, or a restorative boost after illness, travel, or demanding weeks.",
        bullets: [
          "Hydration-centered wellness visits",
          "Vitamin and mineral support options",
          "Designed to feel restorative, not rushed",
        ],
        href: consultationLink,
        linkLabel: "Book IV therapy consultation",
      },
      {
        eyebrow: "Weight Management",
        title: "Weight Loss Support",
        summary:
          "Work with Lotus on realistic, physician-led weight management that can include medication support, goal tracking, and sustainable lifestyle planning.",
        idealFor:
          "Ideal for adults who want more structure, accountability, and medical guidance than a generic weight-loss program can offer.",
        bullets: [
          "Medication-based support when appropriate",
          "Goal setting and progress planning",
          "Designed around health, confidence, and sustainability",
        ],
        href: consultationLink,
        linkLabel: "Start weight-loss support",
      },
      {
        eyebrow: "Restorative Care",
        title: "Restorative Wellness Visits",
        summary:
          "Reserve space for broader wellness consultations focused on fatigue, recovery, and feeling more like yourself with practical physician-guided support.",
        idealFor:
          "Ideal for patients who want a more personalized wellness conversation that goes beyond a quick retail-style treatment menu.",
        bullets: [
          "Great placeholder for future wellness expansion",
          "Supports a physician wellness identity",
          "Easy to adapt to final services later",
        ],
        href: consultationLink,
        linkLabel: "Request wellness consultation",
      },
      {
        eyebrow: "Recovery Add-On",
        title: "Recovery Lounge / Salt Room Placeholder",
        summary:
          "Use this space if the practice later introduces a calming recovery room, salt room, or other supportive add-on experience for wellness appointments.",
        idealFor:
          "Ideal as a premium placeholder that reinforces the local boutique wellness atmosphere.",
        bullets: [
          "Optional future expansion area",
          "Adds a premium wellness layer to the brand",
          "Easy to swap for final service language",
        ],
        href: consultationLink,
        linkLabel: "Ask about wellness offerings",
      },
    ] satisfies ServiceCard[],
    valuesIntro: {
      eyebrow: "Why Patients Choose Lotus Wellness",
      title: "Supportive, restorative, and medically grounded",
      description:
        "Lotus wellness services are meant to complement how patients want to live and feel, with the benefit of medical oversight and a more elevated office experience.",
      align: "center",
    } satisfies SectionIntro,
    values: [
      {
        title: "Approachable physician guidance",
        description:
          "Patients receive recommendations with medical context, not a generic upsell script.",
      },
      {
        title: "Flexible wellness support",
        description:
          "Visits can fit into ongoing self-care, recovery, or goal-oriented lifestyle planning.",
      },
      {
        title: "Premium local atmosphere",
        description:
          "The setting feels elegant and calm while remaining accessible for Florence-area patients.",
      },
    ] satisfies ValueItem[],
    cta: {
      title: "Build a wellness plan that feels realistic",
      description:
        "Ask about IV hydration, vitamin support, or a weight-loss consultation with Lotus Aesthetics & Wellness.",
      ctas: [
        { label: "Book Wellness Visit", href: consultationLink, variant: "primary" },
        { label: "Call The Office", href: phoneLink, variant: "secondary" },
      ],
    } satisfies CtaBandData,
  },
  medicalPage: {
    seo: {
      title: "Same-Day Medical Visits in Florence, SC",
      description:
        "Lotus Aesthetics & Wellness offers select same-day medical visits, telehealth consultations, pain-related visits, and office-based supportive care in Florence, SC.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Medical Visits",
      title: "Supportive office-based medical care when you need it",
      description:
        "Medical visits remain part of the Lotus model, but they are intentionally presented as a supporting service alongside aesthetics and wellness rather than the primary identity of the practice.",
    } satisfies PageHeroData,
    intro: {
      eyebrow: "Visit Types",
      title: "Select same-day care for common office-based needs",
      description:
        "Lotus is not positioned like a high-volume urgent care center. Instead, it offers a more personal approach for adults who need timely evaluation for minor concerns or follow-up support.",
    } satisfies SectionIntro,
    services: [
      {
        eyebrow: "Same-Day Care",
        title: "Sick Visits",
        summary:
          "Schedule a same-day visit for select acute symptoms that can be evaluated in an office setting with clear next steps and supportive treatment planning.",
        idealFor:
          "Ideal for minor illnesses, common symptom concerns, and patients seeking a more personal alternative to a fast-paced walk-in experience.",
        href: consultationLink,
        linkLabel: "Request a same-day visit",
      },
      {
        eyebrow: "Office-Based Care",
        title: "Minor Injuries",
        summary:
          "Lotus can evaluate select minor injuries and help patients understand the next best step for office-based care, follow-up, or outside referral when needed.",
        idealFor:
          "Ideal for patients with non-emergency concerns who want timely guidance and a calm office environment.",
        href: consultationLink,
        linkLabel: "Ask about availability",
      },
      {
        eyebrow: "Telehealth",
        title: "Telehealth Consultations",
        summary:
          "Use telehealth for appropriate follow-up conversations, medical check-ins, and select issues that do not require an in-person exam.",
        idealFor:
          "Ideal for established patients, follow-up care, or concerns that can be addressed remotely.",
        href: consultationLink,
        linkLabel: "Book telehealth consultation",
      },
      {
        eyebrow: "Pain Support",
        title: "Pain-Related Visits",
        summary:
          "Discuss select pain-related concerns with a focus on evaluation, symptom review, and an office-based plan for the next step in care.",
        idealFor:
          "Ideal for patients who need supportive evaluation rather than emergency-level care.",
        href: consultationLink,
        linkLabel: "Request pain-related visit",
      },
      {
        eyebrow: "Evaluation",
        title: "Basic In-Person Evaluations",
        summary:
          "Lotus offers straightforward, supportive evaluations for concerns that benefit from a physician-led office visit and clear communication.",
        idealFor:
          "Ideal for adults who want a measured, relationship-based medical visit in Florence.",
        href: consultationLink,
        linkLabel: "Book in-person evaluation",
      },
    ] satisfies ServiceCard[],
    valuesIntro: {
      eyebrow: "What To Expect",
      title: "Medical care that stays secondary to the Lotus brand",
      description:
        "This page intentionally reframes the medical side of the practice around access, judgment, and appropriateness rather than an urgent-care-first identity.",
      align: "center",
    } satisfies SectionIntro,
    values: [
      {
        title: "Same-day availability as offered",
        description:
          "Patients can call for current openings and telehealth options based on the day's schedule.",
      },
      {
        title: "Office-based scope",
        description:
          "Care is focused on concerns that can be appropriately managed in a physician office environment.",
      },
      {
        title: "Clear escalation guidance",
        description:
          "Lotus can help patients understand when they need outside specialty care, imaging, or emergency evaluation.",
      },
    ] satisfies ValueItem[],
    faq: [
      {
        question: "Is Lotus an emergency room or hospital-level urgent care?",
        answer:
          "No. Lotus offers select same-day medical visits and supportive office-based care, but it is not a substitute for emergency services. Patients with severe symptoms should call 911 or go to the nearest emergency department.",
      },
      {
        question: "Can I book telehealth instead of coming in?",
        answer:
          "For appropriate concerns, yes. Telehealth can be a convenient option for follow-up questions, medication discussions, or issues that do not require an in-person exam.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "Need a same-day visit or telehealth appointment?",
      description:
        "Call Lotus for current availability and office-based guidance on whether your concern is a fit for the practice.",
      ctas: [
        { label: "Call (843) 888-8828", href: phoneLink, variant: "primary" },
        { label: "Contact The Office", href: "/contact", variant: "secondary" },
      ],
    } satisfies CtaBandData,
  },
  aboutPage: {
    seo: {
      title: "About Dr. Hamidi",
      description:
        "Learn about Lotus Aesthetics & Wellness in Florence, SC and the physician-led approach Dr. Hamidi brings to aesthetic treatments, wellness care, and select same-day medical visits.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "About Lotus",
      title: "A local practice built around confidence, well-being, and personal care",
      description:
        "Lotus is designed for patients who want physician-led aesthetics and wellness in an environment that feels elegant, calm, and more personal than a traditional clinic.",
    } satisfies PageHeroData,
    spotlight: {
      eyebrow: "Practice Story",
      title: "Where aesthetics, wellness, and healing meet",
      paragraphs: [
        "The Lotus name reflects both restoration and refinement. The practice is designed to support how patients look, feel, and move through everyday life with more confidence.",
        "That means aesthetic treatments are approached with restraint and clinical judgment, wellness services feel restorative rather than transactional, and medical visits remain available as a useful supporting layer when patients need them.",
        "Dr. Hamidi leads the practice with individualized attention and a physician's perspective, helping patients feel comfortable asking questions, choosing a thoughtful plan, and returning to a practice that feels consistent every time.",
      ],
      bullets: [
        "Beauty and confidence without flashiness",
        "Wellness support that feels grounded and approachable",
        "Local physician-led care for Florence patients",
      ],
      ctas: [
        { label: "Book A Consultation", href: consultationLink, variant: "primary" },
        { label: "Contact Lotus", href: "/contact", variant: "secondary" },
      ],
      image: "/images/lotus/physician-care.svg",
      imageAlt: "Lotus practice story placeholder illustration",
    } satisfies SpotlightSection,
    valuesIntro: {
      eyebrow: "Practice Pillars",
      title: "What patients can expect from Lotus",
      description:
        "The website positions Lotus as a premium local med spa and wellness practice while preserving the credibility of physician-led care.",
      align: "center",
    } satisfies SectionIntro,
    values: [
      {
        title: "Individualized attention",
        description:
          "Visits are planned around the patient in front of us rather than a rigid, one-size-fits-all service menu.",
      },
      {
        title: "Trusted medical oversight",
        description:
          "Recommendations are shaped by clinical judgment, patient comfort, and what genuinely fits the situation.",
      },
      {
        title: "Warm, premium experience",
        description:
          "The atmosphere balances boutique med spa polish with the reassurance of a physician-led practice.",
      },
      {
        title: "Local relationships",
        description:
          "Lotus is built for Florence-area patients who want excellent care close to home and a team that remembers them.",
      },
    ] satisfies ValueItem[],
    cta: {
      title: "Experience Lotus for yourself",
      description:
        "Book an aesthetic consultation, ask about wellness services, or contact the office for the right next step.",
      ctas: sharedCtas,
    } satisfies CtaBandData,
  },
  contactPage: {
    seo: {
      title: "Contact & Booking",
      description:
        "Contact Lotus Aesthetics & Wellness in Florence, SC to book an aesthetic consultation, request a wellness visit, or ask about select same-day medical care.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Contact & Booking",
      title: "Book a consultation or speak with the Lotus team",
      description:
        "Whether you are planning aesthetic treatment, looking for wellness support, or asking about a same-day medical visit, the office can help you find the right next step.",
    } satisfies PageHeroData,
    cards: [
      {
        title: "Call The Office",
        body:
          "Speak with the team about aesthetic consultations, IV therapy, weight-loss support, and current same-day medical availability.",
        href: phoneLink,
        linkLabel: "(843) 888-8828",
      },
      {
        title: "Email Lotus",
        body:
          "Use email for general questions, scheduling follow-up, or sharing non-urgent appointment requests.",
        href: "mailto:lotusskinflorence@gmail.com",
        linkLabel: "lotusskinflorence@gmail.com",
      },
      {
        title: "Visit The Office",
        body:
          "Lotus Aesthetics & Wellness is located at 505 West Palmetto St in Florence, South Carolina.",
        href:
          "https://www.google.com/maps/search/?api=1&query=505+West+Palmetto+St+Florence+SC+29501",
        linkLabel: "Get directions",
      },
    ] satisfies ContactCard[],
    formIntro: {
      eyebrow: "Request Appointment",
      title: "Send a booking request",
      description:
        "This demo form is designed as a booking-ready contact experience. It can be connected later to the practice's preferred CRM, scheduling platform, or embedded form provider.",
    } satisfies SectionIntro,
    mapIntro: {
      eyebrow: "Location",
      title: "Conveniently located in Florence, SC",
      description:
        "Use the address card and placeholder map slot below as the handoff point for a live Google Maps embed or scheduling widget later.",
    } satisfies SectionIntro,
    cta: {
      title: "Prefer to speak with someone directly?",
      description:
        "Call the office for current openings, treatment questions, or guidance on whether a same-day visit is appropriate.",
      ctas: [
        { label: "Call The Office", href: phoneLink, variant: "primary" },
        { label: "Email Lotus", href: "mailto:lotusskinflorence@gmail.com", variant: "secondary" },
      ],
    } satisfies CtaBandData,
  },
  servicesHub: {
    seo: {
      title: "Services Overview",
      description:
        "Explore the aesthetic treatments, wellness services, and select same-day medical visits available through Lotus Aesthetics & Wellness in Florence, SC.",
    } satisfies SeoMeta,
    hero: {
      eyebrow: "Services Overview",
      title: "Aesthetics first, with wellness and medical support built in",
      description:
        "Use this page as a secondary services hub for the demo. It groups the practice into the three primary service categories reflected in the new information architecture.",
    } satisfies PageHeroData,
    cards: [
      {
        eyebrow: "Primary",
        title: "Aesthetic Treatments",
        summary:
          "Botox, fillers, facial PRP, hair restoration, and future body contouring services presented with premium med spa positioning.",
        href: "/aesthetic-treatments",
        linkLabel: "View aesthetic treatments",
      },
      {
        eyebrow: "Primary",
        title: "Wellness Services",
        summary:
          "IV hydration, vitamins, weight-loss support, and restorative wellness visits presented with a physician-led but approachable tone.",
        href: "/wellness-services",
        linkLabel: "View wellness services",
      },
      {
        eyebrow: "Secondary",
        title: "Medical Visits",
        summary:
          "Select same-day office visits, telehealth consultations, and supportive medical care positioned as an added layer of convenience rather than the main identity.",
        href: "/medical-visits",
        linkLabel: "View medical visits",
      },
    ] satisfies ServiceCard[],
  },
} as const;
