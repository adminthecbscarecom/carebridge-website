import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const company = {
  name: "CareBridge Solutions LLC",
  shortName: "CareBridge Solutions",
  website: "https://www.thecbscare.com/",
  phone: "(214) 400-8755",
  phoneHref: "+12144008755",
  fax: "(817) 305-8994",
  email: "admin@thecbscare.com",
  addressLine1: "4200 South Fwy, Ste 2350",
  addressLine2: "Fort Worth, TX 76115",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=4200+South+Freeway+Suite+2350+Fort+Worth+TX+76115",
  npi: "1144015751",
  license: "#024033 — Personal Assistance Services",
  serviceType: "Non-medical Personal Assistance Services",
  evvVendor: "HHAeXchange",
};

const languageOptions = {
  en: {
    code: "en",
    label: "English",
    shortLabel: "EN",
    dir: "ltr",
  },
  es: {
    code: "es",
    label: "Español",
    shortLabel: "ES",
    dir: "ltr",
  },
  ar: {
    code: "ar",
    label: "العربية",
    shortLabel: "عربي",
    dir: "rtl",
  },
};

const content = {
  "en": {
    "company": {
      "tagline": "Reliable Texas Medicaid personal assistance services at home.",
      "hours": "Monday – Friday, 8:00 AM – 5:00 PM",
      "hoursLine1": "Monday – Friday",
      "hoursLine2": "8:00 AM – 5:00 PM"
    },
    "skipLink": "Skip to content",
    "languageToggleLabel": "Website language",
    "switchToEnglish": "English",
    "switchToArabic": "العربية",
    "navLinks": [
      {
        "href": "#services",
        "label": "Services"
      },
      {
        "href": "#medicaid-support",
        "label": "Medicaid Support"
      },
      {
        "href": "#how-it-works",
        "label": "How It Works"
      },
      {
        "href": "#about",
        "label": "About"
      },
      {
        "href": "#referrals",
        "label": "Referrals"
      },
      {
        "href": "#careers",
        "label": "Careers"
      },
      {
        "href": "#contact",
        "label": "Contact"
      }
    ],
    "buttons": {
      "requestCareServices": "Request Care Services",
      "callNow": "Call Now",
      "call": "Call",
      "requestServices": "Request Services",
      "emailCareBridge": "Email CareBridge",
      "applyByEmail": "Apply by Email",
      "requestContact": "Request Contact"
    },
    "hero": {
      "eyebrow": "Texas Medicaid Personal Assistance Services",
      "headline": "Warm, dependable in-home support for eligible Texas Medicaid members.",
      "lead": "CareBridge Solutions LLC provides non-medical Personal Assistance Services to help with approved daily living needs at home.",
      "trust": "Licensed Texas HCSSA Personal Assistance Services · Medicaid-focused support · EVV-supported documentation",
      "disclaimer": "Eligibility, authorization, health plan participation, credentialing status, and service availability must be verified before services begin."
    },
    "trustBadges": [
      {
        "title": "Licensed Care Provider",
        "text": "Non-medical personal assistance services for eligible Texas Medicaid members.",
        "icon": "shield"
      },
      {
        "title": "Medicaid-Focused Support",
        "text": "Guidance for families navigating Medicaid-based personal assistance services.",
        "icon": "heart"
      },
      {
        "title": "EVV-Supported Documentation",
        "text": "Covered visits are documented through applicable Electronic Visit Verification workflows.",
        "icon": "check"
      },
      {
        "title": "Texas Communication",
        "text": "Responsive support for members, family representatives, case managers, and referral partners.",
        "icon": "location"
      }
    ],
    "whoWeHelp": {
      "kicker": "Who We Help",
      "heading": "Support built around dignity, safety, and daily life at home.",
      "intro": "CareBridge supports eligible members and families who need reliable help with approved non-medical daily living needs. Our role is to coordinate clearly, document carefully, and provide respectful assistance in the home.",
      "local": "Serving families across Texas.",
      "cards": [
        {
          "title": "Older Adults",
          "text": "Support for daily routines, personal care, meals, and safe movement at home."
        },
        {
          "title": "Adults with Disabilities",
          "text": "Dependable attendant support that helps members maintain comfort, dignity, and independence."
        },
        {
          "title": "Children and Young Adults",
          "text": "Support for eligible members under applicable Medicaid programs and authorization requirements."
        },
        {
          "title": "Family Caregivers",
          "text": "Clear communication and reliable scheduling to help families feel supported."
        }
      ]
    },
    "services": {
      "kicker": "Services",
      "heading": "Personal assistance services for approved daily living needs.",
      "intro": "CareBridge provides non-medical support with approved daily living needs at home. Services are coordinated according to the member’s service plan and applicable program requirements.",
      "footnote": "CareBridge does not provide skilled nursing, therapy, medical treatment, or emergency services.",
      "items": [
        {
          "title": "Personal Care Assistance",
          "image": "/images/personal-care-assistance.png",
          "imageAlt": "Caregiver assisting an older adult with safe daily support at home",
          "text": "Help with bathing, dressing, grooming, toileting, and other approved personal care tasks."
        },
        {
          "title": "Mobility and Transfer Support",
          "image": "/images/mobility-support.png",
          "imageAlt": "Caregiver supporting an older adult using a walker at home",
          "text": "Assistance with safe movement around the home, transfers, and positioning support within the approved care plan."
        },
        {
          "title": "Meal Preparation",
          "image": "/images/meal-preparation.png",
          "imageAlt": "Caregiver helping an older adult prepare a meal at home",
          "text": "Support with preparing simple meals and maintaining daily nutrition routines."
        },
        {
          "title": "Light Housekeeping",
          "image": "/images/light-housekeeping.png",
          "imageAlt": "Clean home icon for light housekeeping support",
          "text": "Help with approved household tasks related to the member’s health, safety, and daily living needs."
        },
        {
          "title": "Laundry and Linens",
          "image": "/images/laundry-linens.png",
          "imageAlt": "Caregiver and older adult folding laundry and linens at home",
          "text": "Assistance with member-related laundry and basic home routines when included in the service plan."
        },
        {
          "title": "Attendant Support",
          "image": "/images/attendant-support.png",
          "imageAlt": "Caregiver and older adult sharing a warm moment at home",
          "text": "Reliable non-medical support from trained staff following applicable Medicaid and agency requirements."
        }
      ]
    },
    "medicaidSupport": {
      "kicker": "Medicaid Support",
      "heading": "Focused on Texas Medicaid personal assistance programs.",
      "intro": "CareBridge coordinates non-medical personal assistance services for eligible members after required program, health plan, service area, and authorization details are reviewed.",
      "footnote": "Program availability and plan participation may vary. Contact CareBridge to discuss next steps.",
      "programs": [
        {
          "title": "Personal Assistance Services",
          "text": "Non-medical support for approved daily living and attendant care needs."
        },
        {
          "title": "PHC / FC / CAS",
          "text": "Support for eligible Primary Home Care, Family Care, and Community Attendant Services members."
        },
        {
          "title": "STAR+PLUS",
          "text": "Support for eligible adults receiving long-term services and supports through Medicaid managed care."
        },
        {
          "title": "STAR Kids",
          "text": "Support for eligible children and young adults when services are authorized through applicable Medicaid programs."
        },
        {
          "title": "EVV-Supported Services",
          "text": "CareBridge follows applicable Electronic Visit Verification requirements for covered services."
        }
      ]
    },
    "howItWorks": {
      "kicker": "How It Works",
      "heading": "A clear path from first call to in-home support.",
      "intro": "CareBridge helps members, families, representatives, and referral partners understand the next step clearly.",
      "steps": [
        {
          "step": "1",
          "title": "Contact CareBridge",
          "text": "Call us or submit a request so we can understand the support needed."
        },
        {
          "step": "2",
          "title": "Review Eligibility and Authorization",
          "text": "We review basic program information and explain what may be needed before services can begin."
        },
        {
          "step": "3",
          "title": "Coordinate the Care Plan",
          "text": "CareBridge works with the member, family, representative, and program requirements to prepare for service."
        },
        {
          "step": "4",
          "title": "Begin In-Home Support",
          "text": "Services begin with trained staff, clear scheduling, and EVV-supported visit documentation after required approvals are in place."
        }
      ]
    },
    "whyCareBridge": {
      "kicker": "Why CareBridge",
      "heading": "Premium communication with practical Medicaid discipline.",
      "paragraph1": "Families deserve warm, reliable support. Medicaid programs also require accurate eligibility checks, authorization awareness, visit documentation, and respectful coordination. CareBridge is built around both needs.",
      "paragraph2": "Our approach is steady, documentation-focused, and designed to support members at home while helping families understand what must be verified before services begin.",
      "imageAlt": "CareBridge team member reviewing care information with a family at home",
      "featureListLabel": "CareBridge service strengths",
      "features": [
        "Licensed Texas personal assistance services provider",
        "Medicaid-focused service coordination",
        "EVV-supported visit documentation",
        "Clear communication with families and representatives",
        "Trained W-2 staff",
        "Respectful, non-discriminatory service",
        "Texas care coordination",
        "Documentation-focused operations"
      ]
    },
    "healthPlans": {
      "kicker": "Health Plan Status",
      "heading": "Health Plan Participation Status",
      "intro": "CareBridge Solutions works with participating Texas Medicaid health plans for eligible members receiving personal assistance services. Active Agreement means CareBridge has an agreement or participation status with the listed health plan.",
      "disclaimer": "Member eligibility, service area, authorization, covered services, credentialing status, and plan-specific requirements must still be verified before services begin. Listing a health plan does not guarantee eligibility, approval, service availability, payment, or service hours.",
      "plans": [
        {
          "name": "Aetna Better Health of Texas",
          "status": "Active Agreement",
          "text": "CareBridge supports eligible members according to plan requirements, service area rules, member eligibility, authorization, claims rules, and ongoing credentialing requirements."
        },
        {
          "name": "Cook Children’s Health Plan",
          "status": "Active Agreement",
          "text": "CareBridge support depends on applicable lines of business, member eligibility, authorization, service area, plan participation, and operational readiness."
        },
        {
          "name": "Superior HealthPlan",
          "status": "Active Agreement",
          "text": "CareBridge support is subject to member eligibility verification, prior authorization when required, credentialing status, system activation, and EVV-supported service documentation."
        },
        {
          "name": "UnitedHealthcare Community Plan of Texas",
          "status": "Active Agreement",
          "text": "CareBridge participation is governed by applicable agreement terms, effective date, eligibility verification, authorization requirements, and plan-specific administrative rules."
        },
        {
          "name": "Texas Children’s Health Plan",
          "status": "Active Agreement",
          "text": "CareBridge may support eligible members in accordance with applicable agreement terms, service authorization requirements, member eligibility verification, and ongoing compliance obligations."
        },
        {
          "name": "Molina Healthcare",
          "status": "In Progress",
          "text": "CareBridge is monitoring Molina network panel and contracting availability. Support is not active until contracting, credentialing, system activation, member eligibility, authorization, service area, and EVV documentation requirements are complete."
        }
      ]
    },
    "referrals": {
      "kicker": "Referrals",
      "heading": "How to request CareBridge through your health plan.",
      "intro": "CareBridge can coordinate with Medicaid members, families, service coordinators, case managers, and referral partners for possible Personal Assistance Services.",
      "requestText": "Ready to request CareBridge through your health plan? Please share the following information with your health plan service coordinator or case manager:",
      "detailsLabel": "CareBridge referral details",
      "companyName": "Company Name",
      "npi": "NPI",
      "license": "Texas HCSSA License",
      "licenseNumber": "#024033",
      "licenseCategory": "Personal Assistance Services",
      "phone": "Phone",
      "fax": "Fax",
      "email": "Email",
      "privacyNote": "Please do not submit protected health information through the general website form. CareBridge can provide appropriate instructions for next steps.",
      "familyCardTitle": "For Medicaid members and families",
      "familyCardText": "Call CareBridge or share the referral details below with your health plan service coordinator or case manager. They can review whether CareBridge may be requested through your plan.",
      "coordinatorCardTitle": "For service coordinators and case managers",
      "coordinatorCardText": "Use the NPI, HCSSA license, phone, fax, and email below to contact CareBridge for referral coordination and next-step verification."
    },
    "careers": {
      "kicker": "Careers",
      "heading": "Apply to work as a CareBridge caregiver.",
      "intro": "CareBridge Solutions LLC hires dependable caregivers to provide non-medical personal assistance services for eligible members. Caregivers support approved daily living tasks while following agency policies, documentation expectations, and applicable Medicaid program requirements.",
      "pay": "Caregiver pay starts at $13.00 per hour. Final pay may vary based on role, schedule, experience, location, and program requirements.",
      "disclaimer": "Employment, assignments, schedules, and service availability depend on hiring requirements, member needs, authorization, and operational fit.",
      "emailSubject": "Caregiver Application Inquiry"
    },
    "about": {
      "kicker": "About CareBridge",
      "heading": "Built to bridge families, care needs, and Medicaid requirements.",
      "paragraph1": "CareBridge Solutions LLC provides non-medical personal assistance services for eligible Texas Medicaid members. Our work centers on respectful in-home support, clear communication, and documentation-conscious operations.",
      "paragraph2": "We serve members and families with a calm, professional approach that keeps expectations clear. Eligibility, authorization, health plan participation, and service availability are verified before services begin.",
      "quote": "“Care should feel personal, dependable, and clear from the first conversation”",
      "imageAlt": "Caregiver and older adult receiving warm in-home support"
    },
    "contact": {
      "kicker": "Contact",
      "heading": "Talk with CareBridge about possible services.",
      "intro": "Call CareBridge or send a general request. A team member can explain next steps for eligibility, authorization, and health plan verification.",
      "formSubject": "CareBridge Website Service Request",
      "mailHeader": "CareBridge Solutions website request",
      "name": "Name",
      "phone": "Phone",
      "email": "Email",
      "bestTime": "Best time to contact",
      "selectOne": "Select one",
      "morning": "Morning",
      "afternoon": "Afternoon",
      "evening": "Evening",
      "relationship": "I am a",
      "medicaidMember": "Medicaid member",
      "familyRep": "Family member or representative",
      "caseManager": "Case manager or referral partner",
      "other": "Other",
      "generalMessage": "General message",
      "messagePlaceholder": "Please keep this general. Do not include detailed medical information, Medicaid IDs, Social Security numbers, or other sensitive information.",
      "privacyAcknowledgement": "I understand this general website form should not be used to send sensitive medical information or private identifiers.",
      "privacyMailLine": "Privacy acknowledgement: The sender was instructed not to include sensitive medical information in this general website form.",
      "urgentNotice": "For urgent or emergency needs, call 911 or seek immediate medical assistance. CareBridge does not provide emergency services.",
      "success": "Thank you. Your general request was submitted to CareBridge.",
      "labels": {
        "phone": "Phone",
        "fax": "Fax",
        "email": "Email",
        "hours": "Hours",
        "office": "Office"
      },
      "imageAlt": "CareBridge Solutions Personal Assistance Services",
      "nextHeading": "What happens next?",
      "nextSteps": [
        "CareBridge reviews your general request and contact information.",
        "A team member contacts you to discuss eligibility, authorization, and health plan verification.",
        "Services begin only after eligibility, authorization, and applicable plan requirements are confirmed."
      ],
      "sending": "Submitting your request…",
      "error": "We could not submit the form. Please call CareBridge at (214) 400-8755 or email admin@thecbscare.com.",
      "formEndpointMissing": "The website form endpoint is not configured yet. Please add VITE_FORM_ENDPOINT in your site environment, or call CareBridge at (214) 400-8755.",
      "formSecurityNote": "This form is for general inquiries only and is not intended for detailed medical information or private identifiers.",
      "honeypotLabel": "Leave this field blank"
    },
    "faq": {
      "kicker": "FAQ",
      "heading": "Common Questions",
      "items": [
        {
          "question": "What does CareBridge Solutions provide?",
          "answer": "CareBridge provides non-medical personal assistance services for eligible Medicaid members who need help with approved daily living and attendant care needs."
        },
        {
          "question": "Is CareBridge a medical home health agency?",
          "answer": "CareBridge provides Personal Assistance Services. We are not skilled nursing, emergency care, or hospital-level medical care."
        },
        {
          "question": "Do I need Medicaid authorization?",
          "answer": "Many services require eligibility verification, authorization, and an approved service plan. CareBridge can help explain next steps."
        },
        {
          "question": "Can family members contact CareBridge?",
          "answer": "Yes. Members, family representatives, case managers, and referral partners may contact CareBridge to discuss possible services."
        },
        {
          "question": "Does CareBridge use EVV?",
          "answer": "CareBridge follows applicable Electronic Visit Verification requirements for covered services."
        },
        {
          "question": "Can I send private medical information through the website?",
          "answer": "Please avoid sending sensitive medical information through the general website form. A CareBridge team member can provide instructions for appropriate next steps."
        }
      ]
    },
    "footer": {
      "explore": "Explore",
      "contact": "Contact",
      "office": "Office",
      "description": "Reliable Texas Medicaid Personal Assistance Services at home. CareBridge provides non-medical, Medicaid-focused support for eligible members.",
      "legal": "CareBridge Solutions LLC provides non-medical personal assistance services. Eligibility, authorization, covered services, service hours, health plan participation, credentialing status, and service availability must be verified before services begin. This website does not guarantee Medicaid eligibility, approval, or authorization.",
      "privacyHeading": "Privacy Notice",
      "privacyText": "Please do not submit sensitive medical information, Medicaid IDs, Social Security numbers, banking information, or private identifiers through general website forms.",
      "emergencyHeading": "Emergency Notice",
      "emergencyText": "CareBridge does not provide emergency medical services. For urgent or life-threatening emergencies, call 911.",
      "rights": "All rights reserved."
    },
    "mobileMenuLabel": "Mobile navigation",
    "openMenu": "Menu",
    "closeMenu": "Close menu",
    "switchToSpanish": "Español"
  },
  "es": {
    "company": {
      "tagline": "Servicios confiables de asistencia personal de Texas Medicaid en el hogar.",
      "hours": "Lunes – viernes, 8:00 AM – 5:00 PM",
      "hoursLine1": "Lunes – viernes",
      "hoursLine2": "8:00 AM – 5:00 PM"
    },
    "skipLink": "Saltar al contenido",
    "languageToggleLabel": "Idioma del sitio web",
    "switchToEnglish": "English",
    "switchToArabic": "العربية",
    "navLinks": [
      {
        "href": "#services",
        "label": "Servicios"
      },
      {
        "href": "#medicaid-support",
        "label": "Apoyo de Medicaid"
      },
      {
        "href": "#how-it-works",
        "label": "Cómo funciona"
      },
      {
        "href": "#about",
        "label": "Acerca de"
      },
      {
        "href": "#referrals",
        "label": "Referencias"
      },
      {
        "href": "#careers",
        "label": "Empleos"
      },
      {
        "href": "#contact",
        "label": "Contacto"
      }
    ],
    "buttons": {
      "requestCareServices": "Solicitar servicios",
      "callNow": "Llamar ahora",
      "call": "Llamar",
      "requestServices": "Solicitar servicios",
      "emailCareBridge": "Enviar correo a CareBridge",
      "applyByEmail": "Aplicar por correo",
      "requestContact": "Solicitar contacto"
    },
    "hero": {
      "eyebrow": "Servicios de Asistencia Personal de Texas Medicaid",
      "headline": "Apoyo en el hogar cálido y confiable para miembros elegibles de Texas Medicaid.",
      "lead": "CareBridge Solutions LLC brinda Servicios de Asistencia Personal no médicos para ayudar con necesidades diarias aprobadas en el hogar.",
      "trust": "Proveedor HCSSA autorizado en Texas para Servicios de Asistencia Personal · Apoyo enfocado en Medicaid · Documentación apoyada por EVV",
      "disclaimer": "La elegibilidad, autorización, participación del plan de salud, estado de credencialización y disponibilidad del servicio deben verificarse antes de iniciar servicios."
    },
    "trustBadges": [
      {
        "title": "Proveedor autorizado",
        "text": "Servicios de asistencia personal no médicos para miembros elegibles de Texas Medicaid.",
        "icon": "shield"
      },
      {
        "title": "Apoyo enfocado en Medicaid",
        "text": "Orientación para familias que navegan servicios de asistencia personal basados en Medicaid.",
        "icon": "heart"
      },
      {
        "title": "Documentación con EVV",
        "text": "Las visitas cubiertas se documentan mediante los flujos de verificación electrónica de visitas aplicables.",
        "icon": "check"
      },
      {
        "title": "Comunicación en Texas",
        "text": "Apoyo receptivo para miembros, representantes familiares, administradores de casos y socios de referencia.",
        "icon": "location"
      }
    ],
    "whoWeHelp": {
      "kicker": "A quién ayudamos",
      "heading": "Apoyo basado en dignidad, seguridad y vida diaria en el hogar.",
      "intro": "CareBridge apoya a miembros elegibles y familias que necesitan ayuda confiable con necesidades diarias no médicas aprobadas. Nuestro rol es coordinar con claridad, documentar cuidadosamente y brindar asistencia respetuosa en el hogar.",
      "local": "Sirviendo a familias en Texas.",
      "cards": [
        {
          "title": "Adultos mayores",
          "text": "Apoyo con rutinas diarias, cuidado personal, comidas y movimiento seguro en el hogar."
        },
        {
          "title": "Adultos con discapacidades",
          "text": "Apoyo confiable de asistentes para ayudar a mantener comodidad, dignidad e independencia."
        },
        {
          "title": "Niños y jóvenes",
          "text": "Apoyo para miembros elegibles bajo programas de Medicaid aplicables y requisitos de autorización."
        },
        {
          "title": "Cuidadores familiares",
          "text": "Comunicación clara y programación confiable para ayudar a las familias a sentirse apoyadas."
        }
      ]
    },
    "services": {
      "kicker": "Servicios",
      "heading": "Servicios de asistencia personal para necesidades diarias aprobadas.",
      "intro": "CareBridge brinda apoyo no médico con necesidades diarias aprobadas en el hogar. Los servicios se coordinan de acuerdo con el plan de servicio del miembro y los requisitos aplicables del programa.",
      "footnote": "CareBridge no brinda enfermería especializada, terapia, tratamiento médico ni servicios de emergencia.",
      "items": [
        {
          "title": "Asistencia de cuidado personal",
          "image": "/images/personal-care-assistance.png",
          "imageAlt": "Cuidador ayudando a un adulto mayor con apoyo diario seguro en el hogar",
          "text": "Ayuda con baño, vestido, arreglo personal, uso del baño y otras tareas de cuidado personal aprobadas."
        },
        {
          "title": "Apoyo de movilidad y traslados",
          "image": "/images/mobility-support.png",
          "imageAlt": "Cuidador apoyando a un adulto mayor que usa andador en casa",
          "text": "Asistencia con movimiento seguro dentro del hogar, traslados y apoyo de posicionamiento dentro del plan de cuidado aprobado."
        },
        {
          "title": "Preparación de comidas",
          "image": "/images/meal-preparation.png",
          "imageAlt": "Cuidador ayudando a un adulto mayor a preparar una comida en casa",
          "text": "Apoyo para preparar comidas sencillas y mantener rutinas diarias de nutrición."
        },
        {
          "title": "Limpieza ligera",
          "image": "/images/light-housekeeping.png",
          "imageAlt": "Ícono de hogar limpio para apoyo de limpieza ligera",
          "text": "Ayuda con tareas del hogar aprobadas relacionadas con la salud, seguridad y necesidades diarias del miembro."
        },
        {
          "title": "Lavandería y ropa de cama",
          "image": "/images/laundry-linens.png",
          "imageAlt": "Cuidador y adulto mayor doblando ropa y sábanas en casa",
          "text": "Asistencia con lavandería relacionada con el miembro y rutinas básicas del hogar cuando se incluyen en el plan de servicio."
        },
        {
          "title": "Apoyo de asistente",
          "image": "/images/attendant-support.png",
          "imageAlt": "Cuidador y adulto mayor compartiendo un momento cálido en casa",
          "text": "Apoyo no médico confiable de personal capacitado siguiendo los requisitos aplicables de Medicaid y de la agencia."
        }
      ]
    },
    "medicaidSupport": {
      "kicker": "Apoyo de Medicaid",
      "heading": "Enfocados en programas de asistencia personal de Texas Medicaid.",
      "intro": "CareBridge coordina servicios de asistencia personal no médicos para miembros elegibles después de revisar los detalles requeridos del programa, plan de salud, área de servicio y autorización.",
      "footnote": "La disponibilidad del programa y la participación del plan pueden variar. Contacte a CareBridge para hablar sobre los próximos pasos.",
      "programs": [
        {
          "title": "Servicios de Asistencia Personal",
          "text": "Apoyo no médico para necesidades aprobadas de vida diaria y cuidado de asistente."
        },
        {
          "title": "PHC / FC / CAS",
          "text": "Apoyo para miembros elegibles de Primary Home Care, Family Care y Community Attendant Services."
        },
        {
          "title": "STAR+PLUS",
          "text": "Apoyo para adultos elegibles que reciben servicios y apoyos a largo plazo a través de atención administrada de Medicaid."
        },
        {
          "title": "STAR Kids",
          "text": "Apoyo para niños y jóvenes elegibles cuando los servicios están autorizados a través de programas de Medicaid aplicables."
        },
        {
          "title": "Servicios apoyados por EVV",
          "text": "CareBridge sigue los requisitos aplicables de Verificación Electrónica de Visitas para servicios cubiertos."
        }
      ]
    },
    "howItWorks": {
      "kicker": "Cómo funciona",
      "heading": "Un camino claro desde la primera llamada hasta el apoyo en el hogar.",
      "intro": "CareBridge ayuda a miembros, familias, representantes y socios de referencia a entender claramente el siguiente paso.",
      "steps": [
        {
          "step": "1",
          "title": "Contacte a CareBridge",
          "text": "Llámenos o envíe una solicitud para que podamos entender el apoyo necesario."
        },
        {
          "step": "2",
          "title": "Revisar elegibilidad y autorización",
          "text": "Revisamos información básica del programa y explicamos qué puede necesitarse antes de que los servicios puedan comenzar."
        },
        {
          "step": "3",
          "title": "Coordinar el plan de cuidado",
          "text": "CareBridge trabaja con el miembro, la familia, el representante y los requisitos del programa para prepararse para el servicio."
        },
        {
          "step": "4",
          "title": "Iniciar apoyo en el hogar",
          "text": "Los servicios comienzan con personal capacitado, programación clara y documentación de visitas apoyada por EVV después de completar los requisitos necesarios."
        }
      ]
    },
    "whyCareBridge": {
      "kicker": "Por qué CareBridge",
      "heading": "Comunicación de alta calidad con disciplina práctica de Medicaid.",
      "paragraph1": "Las familias merecen apoyo cálido y confiable. Los programas de Medicaid también requieren revisión de elegibilidad, atención a autorizaciones, documentación de visitas y coordinación respetuosa. CareBridge está diseñado para ambas necesidades.",
      "paragraph2": "Nuestro enfoque es constante, centrado en documentación y diseñado para apoyar a los miembros en casa mientras ayuda a las familias a entender lo que debe verificarse antes de iniciar servicios.",
      "imageAlt": "Miembro del equipo de CareBridge revisando información de cuidado con una familia en casa",
      "featureListLabel": "Fortalezas del servicio de CareBridge",
      "features": [
        "Proveedor autorizado de servicios de asistencia personal en Texas",
        "Coordinación de servicios enfocada en Medicaid",
        "Documentación de visitas apoyada por EVV",
        "Comunicación clara con familias y representantes",
        "Personal W-2 capacitado",
        "Servicio respetuoso y no discriminatorio",
        "Coordinación de cuidado en Texas",
        "Operaciones enfocadas en documentación"
      ]
    },
    "healthPlans": {
      "kicker": "Estado de planes de salud",
      "heading": "Estado de participación con planes de salud",
      "intro": "CareBridge Solutions trabaja con planes de salud participantes de Texas Medicaid para miembros elegibles que reciben servicios de asistencia personal. Active Agreement significa que CareBridge tiene un acuerdo o estado de participación con el plan de salud listado.",
      "disclaimer": "La elegibilidad del miembro, área de servicio, autorización, servicios cubiertos, estado de credencialización y requisitos específicos del plan aún deben verificarse antes de iniciar servicios. Listar un plan de salud no garantiza elegibilidad, aprobación, disponibilidad del servicio, pago ni horas de servicio.",
      "plans": [
        {
          "name": "Aetna Better Health of Texas",
          "status": "Active Agreement",
          "text": "CareBridge apoya a miembros elegibles de acuerdo con los requisitos del plan, reglas del área de servicio, elegibilidad del miembro, autorización, reglas de reclamos y requisitos continuos de credencialización."
        },
        {
          "name": "Cook Children’s Health Plan",
          "status": "Active Agreement",
          "text": "El apoyo de CareBridge depende de las líneas de negocio aplicables, elegibilidad del miembro, autorización, área de servicio, participación del plan y preparación operativa."
        },
        {
          "name": "Superior HealthPlan",
          "status": "Active Agreement",
          "text": "El apoyo de CareBridge está sujeto a verificación de elegibilidad del miembro, autorización previa cuando se requiera, estado de credencialización, activación del sistema y documentación de servicios apoyada por EVV."
        },
        {
          "name": "UnitedHealthcare Community Plan of Texas",
          "status": "Active Agreement",
          "text": "La participación de CareBridge se rige por los términos aplicables del acuerdo, fecha efectiva, verificación de elegibilidad, requisitos de autorización y reglas administrativas específicas del plan."
        },
        {
          "name": "Texas Children’s Health Plan",
          "status": "Active Agreement",
          "text": "CareBridge puede apoyar a miembros elegibles de acuerdo con los términos aplicables del acuerdo, requisitos de autorización de servicios, verificación de elegibilidad del miembro y obligaciones continuas de cumplimiento."
        },
        {
          "name": "Molina Healthcare",
          "status": "En progreso",
          "text": "CareBridge está monitoreando la disponibilidad de paneles de red y contratación de Molina. El apoyo no está activo hasta que se completen los requisitos de contratación, credencialización, activación del sistema, elegibilidad del miembro, autorización, área de servicio y documentación EVV."
        }
      ]
    },
    "referrals": {
      "kicker": "Referencias",
      "heading": "Cómo solicitar CareBridge a través de su plan de salud.",
      "intro": "CareBridge puede coordinar con miembros de Medicaid, familias, coordinadores de servicios, administradores de casos y socios de referencia para posibles Servicios de Asistencia Personal.",
      "familyCardTitle": "Para miembros de Medicaid y familias",
      "familyCardText": "Llame a CareBridge o comparta los detalles de referencia abajo con el coordinador de servicios o administrador de casos de su plan de salud. Ellos pueden revisar si CareBridge puede solicitarse a través de su plan.",
      "coordinatorCardTitle": "Para coordinadores de servicios y administradores de casos",
      "coordinatorCardText": "Use el NPI, la licencia HCSSA, el teléfono, fax y correo electrónico abajo para contactar a CareBridge para coordinación de referencia y verificación de próximos pasos.",
      "requestText": "¿Listo para solicitar CareBridge a través de su plan de salud? Comparta la siguiente información con el coordinador de servicios o administrador de casos de su plan de salud:",
      "detailsLabel": "Detalles de referencia de CareBridge",
      "companyName": "Nombre de la compañía",
      "npi": "NPI",
      "license": "Licencia HCSSA de Texas",
      "licenseNumber": "#024033",
      "licenseCategory": "Servicios de Asistencia Personal",
      "phone": "Teléfono",
      "fax": "Fax",
      "email": "Correo electrónico",
      "privacyNote": "No envíe información médica protegida a través del formulario general del sitio web. CareBridge puede proporcionar instrucciones apropiadas para los próximos pasos."
    },
    "careers": {
      "kicker": "Empleos",
      "heading": "Aplique para trabajar como cuidador de CareBridge.",
      "intro": "CareBridge Solutions LLC contrata cuidadores confiables para brindar servicios de asistencia personal no médicos a miembros elegibles. Los cuidadores apoyan tareas diarias aprobadas siguiendo políticas de la agencia, expectativas de documentación y requisitos aplicables del programa Medicaid.",
      "pay": "El pago para cuidadores comienza en $13.00 por hora. El pago final puede variar según el rol, horario, experiencia, ubicación y requisitos del programa.",
      "disclaimer": "El empleo, asignaciones, horarios y disponibilidad del servicio dependen de los requisitos de contratación, necesidades del miembro, autorización y ajuste operativo.",
      "emailSubject": "Consulta de aplicación para cuidador"
    },
    "about": {
      "kicker": "Acerca de CareBridge",
      "heading": "Diseñado para conectar familias, necesidades de cuidado y requisitos de Medicaid.",
      "paragraph1": "CareBridge Solutions LLC brinda servicios de asistencia personal no médicos para miembros elegibles de Texas Medicaid. Nuestro trabajo se centra en apoyo respetuoso en el hogar, comunicación clara y operaciones cuidadosas con la documentación.",
      "paragraph2": "Servimos a miembros y familias con un enfoque tranquilo y profesional que mantiene expectativas claras. La elegibilidad, autorización, participación del plan de salud y disponibilidad del servicio se verifican antes de iniciar servicios.",
      "quote": "“El cuidado debe sentirse personal, confiable y claro desde la primera conversación”",
      "imageAlt": "Cuidador y adulto mayor recibiendo apoyo cálido en el hogar"
    },
    "contact": {
      "kicker": "Contacto",
      "heading": "Hable con CareBridge sobre posibles servicios.",
      "intro": "Llame a CareBridge o envíe una solicitud general. Un miembro del equipo puede explicar los próximos pasos para verificar elegibilidad, autorización y plan de salud.",
      "formSubject": "Solicitud del sitio web de CareBridge",
      "mailHeader": "Solicitud del sitio web de CareBridge Solutions",
      "name": "Nombre",
      "phone": "Teléfono",
      "email": "Correo electrónico",
      "bestTime": "Mejor horario para contactar",
      "selectOne": "Seleccione una opción",
      "morning": "Mañana",
      "afternoon": "Tarde",
      "evening": "Noche",
      "relationship": "Soy",
      "medicaidMember": "Miembro de Medicaid",
      "familyRep": "Familiar o representante",
      "caseManager": "Administrador de casos o socio de referencia",
      "other": "Otro",
      "generalMessage": "Mensaje general",
      "messagePlaceholder": "Mantenga esto general. No incluya información médica detallada, números de Medicaid, números de Seguro Social u otra información sensible.",
      "privacyAcknowledgement": "Entiendo que este formulario general del sitio web no debe usarse para enviar información médica sensible ni identificadores privados.",
      "privacyMailLine": "Reconocimiento de privacidad: se indicó al remitente que no incluya información médica sensible en este formulario general del sitio web.",
      "urgentNotice": "Para necesidades urgentes o de emergencia, llame al 911 o busque asistencia médica inmediata. CareBridge no proporciona servicios de emergencia.",
      "success": "Gracias. Su solicitud general fue enviada a CareBridge.",
      "sending": "Enviando su solicitud…",
      "error": "No pudimos enviar el formulario. Llame a CareBridge al (214) 400-8755 o envíe un correo a admin@thecbscare.com.",
      "formEndpointMissing": "El endpoint del formulario del sitio web aún no está configurado. Agregue VITE_FORM_ENDPOINT en el entorno del sitio o llame a CareBridge al (214) 400-8755.",
      "formSecurityNote": "Este formulario es solo para consultas generales y no está destinado a información médica detallada ni identificadores privados.",
      "honeypotLabel": "Deje este campo en blanco",
      "labels": {
        "phone": "Teléfono",
        "fax": "Fax",
        "email": "Correo electrónico",
        "hours": "Horario",
        "office": "Oficina"
      },
      "imageAlt": "Servicios de Asistencia Personal de CareBridge Solutions",
      "nextHeading": "¿Qué sucede después?",
      "nextSteps": [
        "CareBridge revisa su solicitud general e información de contacto.",
        "Un miembro del equipo se comunica con usted para hablar sobre elegibilidad, autorización y verificación del plan de salud.",
        "Los servicios comienzan solo después de confirmar la elegibilidad, autorización y requisitos aplicables del plan."
      ]
    },
    "faq": {
      "kicker": "Preguntas frecuentes",
      "heading": "Preguntas comunes",
      "items": [
        {
          "question": "¿Qué ofrece CareBridge Solutions?",
          "answer": "CareBridge ofrece servicios de asistencia personal no médicos para miembros elegibles de Medicaid que necesitan ayuda con necesidades aprobadas de vida diaria y cuidado de asistente."
        },
        {
          "question": "¿CareBridge es una agencia médica de salud en el hogar?",
          "answer": "CareBridge brinda Servicios de Asistencia Personal. No somos enfermería especializada, atención de emergencia ni atención médica a nivel hospitalario."
        },
        {
          "question": "¿Necesito autorización de Medicaid?",
          "answer": "Muchos servicios requieren verificación de elegibilidad, autorización y un plan de servicio aprobado. CareBridge puede ayudar a explicar los próximos pasos."
        },
        {
          "question": "¿Pueden los familiares contactar a CareBridge?",
          "answer": "Sí. Los miembros, representantes familiares, administradores de casos y socios de referencia pueden contactar a CareBridge para hablar sobre posibles servicios."
        },
        {
          "question": "¿CareBridge usa EVV?",
          "answer": "CareBridge sigue los requisitos aplicables de Verificación Electrónica de Visitas para servicios cubiertos."
        },
        {
          "question": "¿Puedo enviar información médica privada a través del sitio web?",
          "answer": "Evite enviar información médica sensible a través del formulario general del sitio web. Un miembro del equipo de CareBridge puede proporcionar instrucciones apropiadas para los próximos pasos."
        }
      ]
    },
    "footer": {
      "explore": "Explorar",
      "contact": "Contacto",
      "office": "Oficina",
      "description": "Servicios confiables de Asistencia Personal de Texas Medicaid en el hogar. CareBridge brinda apoyo no médico enfocado en Medicaid para miembros elegibles.",
      "legal": "CareBridge Solutions LLC brinda servicios de asistencia personal no médicos. La elegibilidad, autorización, servicios cubiertos, horas de servicio, participación del plan de salud, estado de credencialización y disponibilidad del servicio deben verificarse antes de iniciar servicios. Este sitio web no garantiza elegibilidad, aprobación ni autorización de Medicaid.",
      "privacyHeading": "Aviso de privacidad",
      "privacyText": "No envíe información médica sensible, números de Medicaid, números de Seguro Social, información bancaria ni identificadores privados a través de formularios generales del sitio web.",
      "emergencyHeading": "Aviso de emergencia",
      "emergencyText": "CareBridge no proporciona servicios médicos de emergencia. Para emergencias urgentes o potencialmente mortales, llame al 911.",
      "rights": "Todos los derechos reservados."
    },
    "mobileMenuLabel": "Navegación móvil",
    "openMenu": "Menú",
    "closeMenu": "Cerrar menú",
    "switchToSpanish": "Español"
  },
  "ar": {
    "company": {
      "tagline": "خدمات مساعدة شخصية موثوقة في المنزل لأعضاء Texas Medicaid.",
      "hours": "الاثنين – الجمعة، 8:00 صباحًا – 5:00 مساءً",
      "hoursLine1": "الاثنين – الجمعة",
      "hoursLine2": "8:00 صباحًا – 5:00 مساءً"
    },
    "skipLink": "تخطي إلى المحتوى",
    "languageToggleLabel": "لغة الموقع",
    "switchToEnglish": "English",
    "switchToArabic": "العربية",
    "navLinks": [
      {
        "href": "#services",
        "label": "الخدمات"
      },
      {
        "href": "#medicaid-support",
        "label": "دعم Medicaid"
      },
      {
        "href": "#how-it-works",
        "label": "كيف تعمل الخدمة"
      },
      {
        "href": "#about",
        "label": "من نحن"
      },
      {
        "href": "#referrals",
        "label": "الإحالات"
      },
      {
        "href": "#careers",
        "label": "الوظائف"
      },
      {
        "href": "#contact",
        "label": "اتصل بنا"
      }
    ],
    "buttons": {
      "requestCareServices": "طلب خدمات الرعاية",
      "callNow": "اتصل الآن",
      "call": "اتصال",
      "requestServices": "طلب الخدمات",
      "emailCareBridge": "إرسال بريد إلى CareBridge",
      "applyByEmail": "التقديم عبر البريد الإلكتروني",
      "requestContact": "طلب التواصل"
    },
    "hero": {
      "eyebrow": "خدمات المساعدة الشخصية ضمن Texas Medicaid",
      "headline": "دعم منزلي دافئ وموثوق لأعضاء Texas Medicaid المؤهلين.",
      "lead": "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية للمساعدة في الاحتياجات اليومية المعتمدة داخل المنزل.",
      "trust": "ترخيص HCSSA في تكساس لخدمات المساعدة الشخصية · دعم يركز على Medicaid · توثيق مدعوم بنظام EVV",
      "disclaimer": "يجب التحقق من الأهلية والتفويض ومشاركة الخطة الصحية وحالة الاعتماد وتوفر الخدمة قبل بدء الخدمات."
    },
    "trustBadges": [
      {
        "title": "مزود رعاية مرخّص",
        "text": "خدمات مساعدة شخصية غير طبية لأعضاء Texas Medicaid المؤهلين.",
        "icon": "shield"
      },
      {
        "title": "دعم يركز على Medicaid",
        "text": "إرشاد للعائلات أثناء التعامل مع خدمات المساعدة الشخصية المعتمدة على Medicaid.",
        "icon": "heart"
      },
      {
        "title": "توثيق مدعوم بنظام EVV",
        "text": "يتم توثيق الزيارات المغطاة من خلال إجراءات التحقق الإلكتروني من الزيارة عند انطباقها.",
        "icon": "check"
      },
      {
        "title": "تواصل داخل تكساس",
        "text": "دعم سريع للأعضاء وممثلي العائلة ومديري الحالات وشركاء الإحالة.",
        "icon": "location"
      }
    ],
    "whoWeHelp": {
      "kicker": "من نخدم",
      "heading": "دعم يراعي الكرامة والسلامة والحياة اليومية في المنزل.",
      "intro": "تدعم CareBridge الأعضاء والعائلات المؤهلين الذين يحتاجون إلى مساعدة موثوقة في احتياجات الحياة اليومية غير الطبية المعتمدة. دورنا هو التنسيق بوضوح والتوثيق بعناية وتقديم مساعدة محترمة في المنزل.",
      "local": "نخدم العائلات في تكساس.",
      "cards": [
        {
          "title": "كبار السن",
          "text": "دعم للروتين اليومي والعناية الشخصية والوجبات والحركة الآمنة داخل المنزل."
        },
        {
          "title": "البالغون من ذوي الإعاقة",
          "text": "دعم موثوق من مقدمي رعاية يساعد الأعضاء على الحفاظ على الراحة والكرامة والاستقلالية."
        },
        {
          "title": "الأطفال والشباب",
          "text": "دعم للأعضاء المؤهلين حسب برامج Medicaid ومتطلبات التفويض المعمول بها."
        },
        {
          "title": "مقدمو الرعاية من العائلة",
          "text": "تواصل واضح وجدولة موثوقة لمساعدة العائلات على الشعور بالدعم."
        }
      ]
    },
    "services": {
      "kicker": "الخدمات",
      "heading": "خدمات مساعدة شخصية لاحتياجات الحياة اليومية المعتمدة.",
      "intro": "تقدم CareBridge دعمًا غير طبي للاحتياجات اليومية المعتمدة داخل المنزل. يتم تنسيق الخدمات وفقًا لخطة خدمة العضو ومتطلبات البرنامج المعمول بها.",
      "footnote": "لا تقدم CareBridge تمريضًا ماهرًا أو علاجًا طبيًا أو خدمات علاجية أو خدمات طوارئ.",
      "items": [
        {
          "title": "المساعدة في العناية الشخصية",
          "image": "/images/personal-care-assistance.png",
          "imageAlt": "مقدم رعاية يساعد أحد كبار السن في دعم يومي آمن في المنزل",
          "text": "المساعدة في الاستحمام وارتداء الملابس والعناية بالمظهر واستخدام الحمام وغيرها من مهام العناية الشخصية المعتمدة."
        },
        {
          "title": "دعم الحركة والانتقال",
          "image": "/images/mobility-support.png",
          "imageAlt": "مقدم رعاية يدعم أحد كبار السن أثناء استخدام المشاية في المنزل",
          "text": "المساعدة في الحركة الآمنة داخل المنزل والانتقال وتغيير الوضعية ضمن خطة الرعاية المعتمدة."
        },
        {
          "title": "تحضير الوجبات",
          "image": "/images/meal-preparation.png",
          "imageAlt": "مقدم رعاية يساعد أحد كبار السن في تحضير وجبة في المنزل",
          "text": "دعم في تحضير وجبات بسيطة والحفاظ على روتين التغذية اليومية."
        },
        {
          "title": "الأعمال المنزلية الخفيفة",
          "image": "/images/light-housekeeping.png",
          "imageAlt": "أيقونة منزل نظيف لدعم الأعمال المنزلية الخفيفة",
          "text": "المساعدة في المهام المنزلية المعتمدة المرتبطة بصحة العضو وسلامته واحتياجاته اليومية."
        },
        {
          "title": "الغسيل والبياضات",
          "image": "/images/laundry-linens.png",
          "imageAlt": "مقدم رعاية وأحد كبار السن يطويان الغسيل والبياضات في المنزل",
          "text": "المساعدة في غسيل ملابس العضو والروتين المنزلي الأساسي عندما يكون ذلك ضمن خطة الخدمة."
        },
        {
          "title": "دعم مقدم الرعاية",
          "image": "/images/attendant-support.png",
          "imageAlt": "مقدم رعاية وأحد كبار السن في لحظة ودية في المنزل",
          "text": "دعم غير طبي موثوق من موظفين مدربين يتبعون متطلبات Medicaid والوكالة المعمول بها."
        }
      ]
    },
    "medicaidSupport": {
      "kicker": "دعم Medicaid",
      "heading": "تركيز على برامج المساعدة الشخصية في Texas Medicaid.",
      "intro": "تنسق CareBridge خدمات المساعدة الشخصية غير الطبية للأعضاء المؤهلين بعد مراجعة متطلبات البرنامج والخطة الصحية ومنطقة الخدمة والتفويض.",
      "footnote": "قد تختلف إتاحة البرامج ومشاركة الخطط. تواصل مع CareBridge لمناقشة الخطوات التالية.",
      "programs": [
        {
          "title": "خدمات المساعدة الشخصية",
          "text": "دعم غير طبي لاحتياجات الحياة اليومية ورعاية المرافق المعتمدة."
        },
        {
          "title": "PHC / FC / CAS",
          "text": "دعم للأعضاء المؤهلين في Primary Home Care وFamily Care وCommunity Attendant Services."
        },
        {
          "title": "STAR+PLUS",
          "text": "دعم للبالغين المؤهلين الذين يحصلون على خدمات ودعم طويلة الأمد من خلال الرعاية المدارة في Medicaid."
        },
        {
          "title": "STAR Kids",
          "text": "دعم للأطفال والشباب المؤهلين عندما تكون الخدمات مفوضة من خلال برامج Medicaid المعمول بها."
        },
        {
          "title": "خدمات مدعومة بنظام EVV",
          "text": "تتبع CareBridge متطلبات التحقق الإلكتروني من الزيارة للخدمات المغطاة عند انطباقها."
        }
      ]
    },
    "howItWorks": {
      "kicker": "كيف تعمل الخدمة",
      "heading": "مسار واضح من أول اتصال إلى الدعم داخل المنزل.",
      "intro": "تساعد CareBridge الأعضاء والعائلات والممثلين وشركاء الإحالة على فهم الخطوة التالية بوضوح.",
      "steps": [
        {
          "step": "1",
          "title": "تواصل مع CareBridge",
          "text": "اتصل بنا أو أرسل طلبًا حتى نفهم نوع الدعم المطلوب."
        },
        {
          "step": "2",
          "title": "مراجعة الأهلية والتفويض",
          "text": "نراجع معلومات البرنامج الأساسية ونوضح ما قد يكون مطلوبًا قبل بدء الخدمات."
        },
        {
          "step": "3",
          "title": "تنسيق خطة الرعاية",
          "text": "تعمل CareBridge مع العضو والعائلة والممثل ومتطلبات البرنامج للتحضير للخدمة."
        },
        {
          "step": "4",
          "title": "بدء الدعم داخل المنزل",
          "text": "تبدأ الخدمات مع موظفين مدربين وجدولة واضحة وتوثيق زيارات مدعوم بنظام EVV بعد اكتمال المتطلبات اللازمة."
        }
      ]
    },
    "whyCareBridge": {
      "kicker": "لماذا CareBridge",
      "heading": "تواصل مميز مع انضباط عملي في متطلبات Medicaid.",
      "paragraph1": "تستحق العائلات دعمًا دافئًا وموثوقًا. كما تتطلب برامج Medicaid التحقق الدقيق من الأهلية والانتباه للتفويض وتوثيق الزيارات والتنسيق باحترام. CareBridge مبنية حول هذين الاحتياجين.",
      "paragraph2": "نهجنا ثابت ويركز على التوثيق، ومصمم لدعم الأعضاء في المنزل مع مساعدة العائلات على فهم ما يجب التحقق منه قبل بدء الخدمات.",
      "imageAlt": "عضو من فريق CareBridge يراجع معلومات الرعاية مع عائلة في المنزل",
      "featureListLabel": "نقاط قوة خدمة CareBridge",
      "features": [
        "مزود مرخّص لخدمات المساعدة الشخصية في تكساس",
        "تنسيق خدمات يركز على Medicaid",
        "توثيق زيارات مدعوم بنظام EVV",
        "تواصل واضح مع العائلات والممثلين",
        "موظفون مدربون بنظام W-2",
        "خدمة محترمة وغير تمييزية",
        "تنسيق رعاية داخل تكساس",
        "عمليات تركز على التوثيق"
      ]
    },
    "healthPlans": {
      "kicker": "حالة الخطط الصحية",
      "heading": "حالة المشاركة مع الخطط الصحية",
      "intro": "تعمل CareBridge Solutions مع خطط Texas Medicaid الصحية المشاركة للأعضاء المؤهلين الذين يتلقون خدمات المساعدة الشخصية. تعني عبارة الاتفاقية النشطة أن لدى CareBridge اتفاقية أو حالة مشاركة مع الخطة الصحية المدرجة.",
      "disclaimer": "يجب التحقق من أهلية العضو ومنطقة الخدمة والتفويض والخدمات المغطاة وحالة الاعتماد والمتطلبات الخاصة بالخطة قبل بدء الخدمات. إدراج خطة صحية لا يضمن الأهلية أو الموافقة أو توفر الخدمة أو الدفع أو ساعات الخدمة.",
      "plans": [
        {
          "name": "Aetna Better Health of Texas",
          "status": "اتفاقية نشطة",
          "text": "تدعم CareBridge الأعضاء المؤهلين وفقًا لمتطلبات الخطة وقواعد منطقة الخدمة وأهلية العضو والتفويض وقواعد المطالبات ومتطلبات الاعتماد المستمرة."
        },
        {
          "name": "Cook Children’s Health Plan",
          "status": "اتفاقية نشطة",
          "text": "يعتمد دعم CareBridge على خطوط العمل المعمول بها وأهلية العضو والتفويض ومنطقة الخدمة ومشاركة الخطة والاستعداد التشغيلي."
        },
        {
          "name": "Superior HealthPlan",
          "status": "اتفاقية نشطة",
          "text": "يخضع دعم CareBridge للتحقق من أهلية العضو والتفويض المسبق عند الحاجة وحالة الاعتماد وتفعيل النظام وتوثيق الخدمة المدعوم بنظام EVV."
        },
        {
          "name": "UnitedHealthcare Community Plan of Texas",
          "status": "اتفاقية نشطة",
          "text": "تخضع مشاركة CareBridge لشروط الاتفاقية المعمول بها وتاريخ السريان والتحقق من الأهلية ومتطلبات التفويض والقواعد الإدارية الخاصة بالخطة."
        },
        {
          "name": "Texas Children’s Health Plan",
          "status": "اتفاقية نشطة",
          "text": "قد تدعم CareBridge الأعضاء المؤهلين وفقًا لشروط الاتفاقية المعمول بها ومتطلبات تفويض الخدمة والتحقق من أهلية العضو والالتزامات المستمرة للامتثال."
        },
        {
          "name": "Molina Healthcare",
          "status": "قيد المتابعة",
          "text": "تتابع CareBridge توفر الشبكة والتعاقد لدى Molina. لا يكون الدعم نشطًا حتى اكتمال التعاقد والاعتماد وتفعيل النظام وأهلية العضو والتفويض ومنطقة الخدمة ومتطلبات توثيق EVV."
        }
      ]
    },
    "referrals": {
      "kicker": "الإحالات",
      "heading": "كيفية طلب CareBridge من خلال خطتك الصحية.",
      "intro": "يمكن لـ CareBridge التنسيق مع أعضاء Medicaid والعائلات ومنسقي الخدمات ومديري الحالات وشركاء الإحالة بخصوص خدمات المساعدة الشخصية المحتملة.",
      "requestText": "هل أنت مستعد لطلب خدمات CareBridge من خلال خطتك الصحية؟ يرجى مشاركة المعلومات التالية مع منسق الخدمات أو مدير الحالة التابع لخطتك الصحية:",
      "detailsLabel": "معلومات إحالة CareBridge",
      "companyName": "اسم الشركة",
      "npi": "NPI",
      "license": "ترخيص HCSSA في تكساس",
      "licenseNumber": "#024033",
      "licenseCategory": "خدمات المساعدة الشخصية",
      "phone": "الهاتف",
      "fax": "الفاكس",
      "email": "البريد الإلكتروني",
      "privacyNote": "يرجى عدم إرسال معلومات صحية محمية من خلال نموذج الموقع العام. يمكن لـ CareBridge تقديم التعليمات المناسبة للخطوات التالية.",
      "familyCardTitle": "لأعضاء Medicaid والعائلات",
      "familyCardText": "اتصل بـ CareBridge أو شارك معلومات الإحالة أدناه مع منسق الخدمات أو مدير الحالة في خطتك الصحية. يمكنهم مراجعة ما إذا كان يمكن طلب CareBridge من خلال خطتك.",
      "coordinatorCardTitle": "لمنسقي الخدمات ومديري الحالات",
      "coordinatorCardText": "استخدم رقم NPI وترخيص HCSSA ورقم الهاتف والفاكس والبريد الإلكتروني أدناه للتواصل مع CareBridge لتنسيق الإحالة والتحقق من الخطوات التالية."
    },
    "careers": {
      "kicker": "الوظائف",
      "heading": "قدّم للعمل كمقدم رعاية مع CareBridge.",
      "intro": "توظف CareBridge Solutions LLC مقدمي رعاية يمكن الاعتماد عليهم لتقديم خدمات مساعدة شخصية غير طبية للأعضاء المؤهلين. يدعم مقدمو الرعاية مهام الحياة اليومية المعتمدة مع اتباع سياسات الوكالة وتوقعات التوثيق ومتطلبات برامج Medicaid المعمول بها.",
      "pay": "يبدأ أجر مقدم الرعاية من 13.00 دولارًا في الساعة. قد يختلف الأجر النهائي حسب الدور، والجدول، والخبرة، والموقع، ومتطلبات البرنامج.",
      "disclaimer": "يعتمد التوظيف والمهام والجداول وتوفر الخدمة على متطلبات التوظيف واحتياجات العضو والتفويض والملاءمة التشغيلية.",
      "emailSubject": "استفسار عن التقديم لوظيفة مقدم رعاية"
    },
    "about": {
      "kicker": "عن CareBridge",
      "heading": "بُنيت لربط العائلات واحتياجات الرعاية ومتطلبات Medicaid.",
      "paragraph1": "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية لأعضاء Texas Medicaid المؤهلين. يتركز عملنا على الدعم المنزلي المحترم والتواصل الواضح والعمليات الواعية بالتوثيق.",
      "paragraph2": "نخدم الأعضاء والعائلات بنهج هادئ ومهني يحافظ على وضوح التوقعات. يتم التحقق من الأهلية والتفويض ومشاركة الخطة الصحية وتوفر الخدمة قبل بدء الخدمات.",
      "quote": "“يجب أن تكون الرعاية شخصية وموثوقة وواضحة من أول محادثة”",
      "imageAlt": "مقدم رعاية وأحد كبار السن يتلقى دعمًا منزليًا دافئًا"
    },
    "contact": {
      "kicker": "اتصل بنا",
      "heading": "تحدث مع CareBridge عن الخدمات المحتملة.",
      "intro": "اتصل بـ CareBridge أو أرسل طلبًا عامًا. يمكن لأحد أعضاء الفريق توضيح الخطوات التالية للتحقق من الأهلية والتفويض والخطة الصحية.",
      "formSubject": "طلب خدمة من موقع CareBridge",
      "mailHeader": "طلب من موقع CareBridge Solutions",
      "name": "الاسم",
      "phone": "الهاتف",
      "email": "البريد الإلكتروني",
      "bestTime": "أفضل وقت للتواصل",
      "selectOne": "اختر واحدًا",
      "morning": "صباحًا",
      "afternoon": "بعد الظهر",
      "evening": "مساءً",
      "relationship": "أنا",
      "medicaidMember": "عضو في Medicaid",
      "familyRep": "فرد من العائلة أو ممثل",
      "caseManager": "مدير حالة أو شريك إحالة",
      "other": "غير ذلك",
      "generalMessage": "رسالة عامة",
      "messagePlaceholder": "يرجى إبقاء الرسالة عامة. لا تدرج معلومات طبية تفصيلية أو أرقام Medicaid أو أرقام الضمان الاجتماعي أو أي معلومات حساسة أخرى.",
      "privacyAcknowledgement": "أفهم أن هذا النموذج العام على الموقع لا يجب استخدامه لإرسال معلومات طبية حساسة أو معرفات خاصة.",
      "privacyMailLine": "إقرار الخصوصية: تم إرشاد المرسل إلى عدم تضمين معلومات طبية حساسة في هذا النموذج العام للموقع.",
      "urgentNotice": "للاحتياجات العاجلة أو الطارئة، اتصل بـ 911 أو اطلب مساعدة طبية فورية. لا تقدم CareBridge خدمات طوارئ.",
      "success": "شكرًا لك. تم إرسال طلبك العام إلى CareBridge.",
      "labels": {
        "phone": "الهاتف",
        "fax": "الفاكس",
        "email": "البريد الإلكتروني",
        "hours": "ساعات العمل",
        "office": "المكتب"
      },
      "imageAlt": "CareBridge Solutions لخدمات المساعدة الشخصية",
      "nextHeading": "ماذا يحدث بعد ذلك؟",
      "nextSteps": [
        "تراجع CareBridge طلبك العام ومعلومات الاتصال.",
        "يتواصل معك أحد أعضاء الفريق لمناقشة الأهلية والتفويض والتحقق من الخطة الصحية.",
        "تبدأ الخدمات فقط بعد تأكيد الأهلية والتفويض ومتطلبات الخطة المعمول بها."
      ],
      "sending": "جارٍ إرسال طلبك…",
      "error": "تعذر إرسال النموذج. يرجى استخدام معلومات الاتصال أدناه للتواصل مع CareBridge.",
      "formEndpointMissing": "لم يتم إعداد نقطة إرسال نموذج الموقع بعد. يرجى إضافة VITE_FORM_ENDPOINT في إعدادات الموقع أو استخدام معلومات الاتصال أدناه.",
      "formSecurityNote": "هذا النموذج مخصص للاستفسارات العامة فقط وليس مخصصًا للمعلومات الطبية التفصيلية أو المعرفات الخاصة.",
      "honeypotLabel": "اترك هذا الحقل فارغًا"
    },
    "faq": {
      "kicker": "الأسئلة الشائعة",
      "heading": "أسئلة شائعة",
      "items": [
        {
          "question": "ماذا تقدم CareBridge Solutions؟",
          "answer": "تقدم CareBridge خدمات مساعدة شخصية غير طبية لأعضاء Medicaid المؤهلين الذين يحتاجون إلى مساعدة في احتياجات الحياة اليومية ورعاية المرافق المعتمدة."
        },
        {
          "question": "هل CareBridge وكالة صحة منزلية طبية؟",
          "answer": "تقدم CareBridge خدمات المساعدة الشخصية. نحن لا نقدم تمريضًا ماهرًا أو رعاية طوارئ أو رعاية طبية بمستوى المستشفى."
        },
        {
          "question": "هل أحتاج إلى تفويض من Medicaid؟",
          "answer": "تتطلب العديد من الخدمات التحقق من الأهلية والتفويض وخطة خدمة معتمدة. يمكن لـ CareBridge المساعدة في شرح الخطوات التالية."
        },
        {
          "question": "هل يمكن لأفراد العائلة التواصل مع CareBridge؟",
          "answer": "نعم. يمكن للأعضاء وممثلي العائلة ومديري الحالات وشركاء الإحالة التواصل مع CareBridge لمناقشة الخدمات المحتملة."
        },
        {
          "question": "هل تستخدم CareBridge نظام EVV؟",
          "answer": "تتبع CareBridge متطلبات التحقق الإلكتروني من الزيارة للخدمات المغطاة عند انطباقها."
        },
        {
          "question": "هل يمكنني إرسال معلومات طبية خاصة عبر الموقع؟",
          "answer": "يرجى تجنب إرسال معلومات طبية حساسة من خلال نموذج الموقع العام. يمكن لأحد أعضاء فريق CareBridge تقديم تعليمات مناسبة للخطوات التالية."
        }
      ]
    },
    "footer": {
      "explore": "تصفح",
      "contact": "اتصل",
      "office": "المكتب",
      "description": "خدمات مساعدة شخصية موثوقة في المنزل لأعضاء Texas Medicaid. تقدم CareBridge دعمًا غير طبيًا يركز على Medicaid للأعضاء المؤهلين.",
      "legal": "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية. يجب التحقق من الأهلية والتفويض والخدمات المغطاة وساعات الخدمة ومشاركة الخطة الصحية وحالة الاعتماد وتوفر الخدمة قبل بدء الخدمات. لا يضمن هذا الموقع أهلية Medicaid أو الموافقة أو التفويض.",
      "privacyHeading": "إشعار الخصوصية",
      "privacyText": "يرجى عدم إرسال معلومات طبية حساسة أو أرقام Medicaid أو أرقام الضمان الاجتماعي أو معلومات مصرفية أو معرفات خاصة من خلال نماذج الموقع العامة.",
      "emergencyHeading": "إشعار الطوارئ",
      "emergencyText": "لا تقدم CareBridge خدمات طبية طارئة. للحالات العاجلة أو المهددة للحياة، اتصل بـ 911.",
      "rights": "جميع الحقوق محفوظة."
    },
    "mobileMenuLabel": "قائمة التنقل على الجوال",
    "openMenu": "القائمة",
    "closeMenu": "إغلاق القائمة",
    "switchToSpanish": "Español"
  }
};

function getText(language) {
  return content[language] || content.en;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useInView({ once = true, threshold = 0.12 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, reducedMotion]);

  return [ref, inView || reducedMotion];
}

function Icon({ name, className = "", decorative = true }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": decorative ? "true" : undefined,
    role: decorative ? undefined : "img",
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    shield: (
      <svg {...props}>
        <path {...strokeProps} d="M12 3.2 5.3 5.7v5.4c0 4.3 2.8 8.2 6.7 9.6 3.9-1.4 6.7-5.3 6.7-9.6V5.7L12 3.2Z" />
        <path {...strokeProps} d="m8.8 12.2 2.1 2.1 4.5-5" />
      </svg>
    ),
    heart: (
      <svg {...props}>
        <path {...strokeProps} d="M20.8 8.6c0 5.1-8.8 10.2-8.8 10.2S3.2 13.7 3.2 8.6A4.5 4.5 0 0 1 11 5.5l1 1 1-1a4.5 4.5 0 0 1 7.8 3.1Z" />
      </svg>
    ),
    check: (
      <svg {...props}>
        <path {...strokeProps} d="M20 6 9 17l-5-5" />
      </svg>
    ),
    location: (
      <svg {...props}>
        <path {...strokeProps} d="M12 21s7-5.2 7-11.1a7 7 0 1 0-14 0C5 15.8 12 21 12 21Z" />
        <path {...strokeProps} d="M12 12.2a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
      </svg>
    ),
    home: (
      <svg {...props}>
        <path {...strokeProps} d="m3 11.5 9-7.3 9 7.3" />
        <path {...strokeProps} d="M5.5 10.5V20h13v-9.5" />
        <path {...strokeProps} d="M9.5 20v-5.8h5V20" />
      </svg>
    ),
    phone: (
      <svg {...props}>
        <path {...strokeProps} d="M6.6 3.8 8.8 3c.7-.2 1.5.1 1.8.8l1 2.4c.2.6.1 1.3-.4 1.8L10 9.1a11.4 11.4 0 0 0 5 5l1.1-1.2c.5-.5 1.2-.6 1.8-.4l2.4 1c.7.3 1 1.1.8 1.8l-.8 2.2c-.2.7-.8 1.1-1.5 1.1A15.4 15.4 0 0 1 5.5 5.3c0-.7.4-1.3 1.1-1.5Z" />
      </svg>
    ),
    mail: (
      <svg {...props}>
        <path {...strokeProps} d="M4 6.5h16v11H4z" />
        <path {...strokeProps} d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
    clock: (
      <svg {...props}>
        <circle {...strokeProps} cx="12" cy="12" r="8.5" />
        <path {...strokeProps} d="M12 7.5V12l3.1 2" />
      </svg>
    ),
    sparkle: (
      <svg {...props}>
        <path {...strokeProps} d="M12 3.5 13.8 9l5.7 1.2-5.7 1.2L12 17l-1.8-5.6-5.7-1.2L10.2 9 12 3.5Z" />
        <path {...strokeProps} d="m18 15 .8 2.3 2.2.7-2.2.7L18 22l-.8-2.3-2.2-.7 2.2-.7L18 15Z" />
      </svg>
    ),

    menu: (
      <svg {...props}>
        <path {...strokeProps} d="M4 7h16" />
        <path {...strokeProps} d="M4 12h16" />
        <path {...strokeProps} d="M4 17h16" />
      </svg>
    ),
    close: (
      <svg {...props}>
        <path {...strokeProps} d="M6 6l12 12" />
        <path {...strokeProps} d="M18 6 6 18" />
      </svg>
    ),
    chevron: (
      <svg {...props}>
        <path {...strokeProps} d="m6 9 6 6 6-6" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}


function LtrValue({ children, className = "" }) {
  return (
    <bdi className={`ltr-value ${className}`.trim()} dir="ltr">
      {children}
    </bdi>
  );
}

function AnimatedSection({ children, className = "", id }) {
  const [ref, inView] = useInView();

  return (
    <section id={id} ref={ref} className={`${className} reveal ${inView ? "reveal--visible" : ""}`}>
      {children}
    </section>
  );
}


function LanguageToggle({ language, onLanguageChange, compact = false, onAfterChange }) {
  const t = getText(language);

  const handleChange = (code) => {
    onLanguageChange(code);
    if (typeof onAfterChange === "function") {
      onAfterChange();
    }
  };

  return (
    <div className={`language-toggle ${compact ? "language-toggle--compact" : ""}`} aria-label={t.languageToggleLabel}>
      {Object.values(languageOptions).map((option) => (
        <button
          key={option.code}
          type="button"
          className={`language-toggle__button ${language === option.code ? "is-active" : ""}`}
          aria-pressed={language === option.code}
          onClick={() => handleChange(option.code)}
        >
          {compact ? option.shortLabel : option.label}
        </button>
      ))}
    </div>
  );
}


function Header({ language, onLanguageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getText(language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("mobile-menu-is-open", mobileMenuOpen);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("mobile-menu-is-open");
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label={`${company.name} home`} onClick={closeMobileMenu}>
          <img src="/images/logo-header.png" alt={company.name} />
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
          {t.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions header-actions--desktop">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          <a className="btn btn-outline-dark btn--header" href="#contact">
            {t.buttons.requestCareServices}
          </a>
          <a className="header-cta" href={`tel:${company.phoneHref}`} aria-label={`Call ${company.name}`}>
            <Icon name="phone" className="btn-icon" />
            {t.buttons.callNow}
          </a>
        </div>

        <div className="header-mobile-actions">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} compact onAfterChange={closeMobileMenu} />
          <a className="header-cta header-cta--mobile" href={`tel:${company.phoneHref}`} aria-label={`Call ${company.name}`}>
            <Icon name="phone" className="btn-icon" />
            {t.buttons.callNow}
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} className="btn-icon" />
            <span className="mobile-menu-toggle__text">{mobileMenuOpen ? t.closeMenu : t.openMenu}</span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
        onClick={closeMobileMenu}
      />

      <nav
        id="mobile-menu"
        className={`mobile-menu-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label={t.mobileMenuLabel}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-drawer__header">
          <p><LtrValue>{company.shortName}</LtrValue></p>
          <button type="button" className="mobile-menu-drawer__close" onClick={closeMobileMenu} aria-label={t.closeMenu}>
            <Icon name="close" className="btn-icon" />
          </button>
        </div>

        <div className="mobile-menu-drawer__language">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} onAfterChange={closeMobileMenu} />
        </div>

        <div className="mobile-menu-drawer__links">
          {t.navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobileMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="mobile-menu-drawer__actions">
          <a className="btn btn-primary btn--full" href="#contact" onClick={closeMobileMenu}>
            {t.buttons.requestCareServices}
          </a>
          <a className="btn btn-outline-dark btn--full" href={`tel:${company.phoneHref}`} onClick={closeMobileMenu}>
            {t.buttons.call} <LtrValue>{company.phone}</LtrValue>
          </a>
        </div>
      </nav>
    </header>
  );
}


function HeroSection({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img className="hero-media__image" src="/images/hero-care.png" alt="" />
        <div className="hero-media__overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy hero-copy--animate">
          <span className="hero-eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.headline}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <p className="hero-trust">{t.hero.trust}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={`tel:${company.phoneHref}`}>
              {t.buttons.call} <LtrValue>{company.phone}</LtrValue>
            </a>
            <a className="btn btn-secondary-light" href="#contact">
              {t.buttons.requestServices}
            </a>
          </div>
          <p className="hero-disclaimer">{t.hero.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

function TrustBadges({ t }) {
  return (
    <AnimatedSection className="section section-white" id="trust">
      <div className="container">
        <div className="trust-grid reveal--stagger">
          {t.trustBadges.map((badge, index) => (
            <article className="trust-card" style={{ "--i": index }} key={badge.title}>
              <Icon name={badge.icon} className="trust-card__icon" />
              <h3>{badge.title}</h3>
              <p>{badge.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function WhoWeHelp({ t }) {
  return (
    <AnimatedSection className="section section-cream" id="who-we-help">
      <div className="container">
        <div className="section-header copy-block">
          <span className="section-kicker">{t.whoWeHelp.kicker}</span>
          <h2>{t.whoWeHelp.heading}</h2>
          <p className="long-copy">{t.whoWeHelp.intro}</p>
          <p className="section-local">{t.whoWeHelp.local}</p>
        </div>

        <div className="card-grid card-grid--four reveal--stagger">
          {t.whoWeHelp.cards.map((item, index) => (
            <article className="info-card" style={{ "--i": index }} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServiceVisual({ service }) {
  if (service.image) {
    return <img className="service-card__visual" src={service.image} alt={service.imageAlt} loading="lazy" />;
  }

  return (
    <div className="service-card__visual service-card__visual--icon" aria-label={service.imageAlt}>
      <Icon name={service.icon || "home"} className="service-icon" decorative={false} />
    </div>
  );
}

function ServicesGrid({ t }) {
  return (
    <AnimatedSection className="section section-white" id="services">
      <div className="container">
        <div className="section-header copy-block">
          <span className="section-kicker">{t.services.kicker}</span>
          <h2>{t.services.heading}</h2>
          <p className="long-copy">{t.services.intro}</p>
        </div>

        <div className="service-grid reveal--stagger">
          {t.services.items.map((service, index) => (
            <article className="service-card" style={{ "--i": index }} key={service.title}>
              <ServiceVisual service={service} />
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="section-footnote long-copy">{t.services.footnote}</p>
      </div>
    </AnimatedSection>
  );
}

function MedicaidSupport({ t }) {
  return (
    <AnimatedSection className="section section-navy" id="medicaid-support">
      <div className="container">
        <div className="section-header copy-block--wide">
          <span className="section-kicker section-kicker--light">{t.medicaidSupport.kicker}</span>
          <h2>{t.medicaidSupport.heading}</h2>
          <p className="long-copy">{t.medicaidSupport.intro}</p>
        </div>

        <div className="program-grid reveal--stagger">
          {t.medicaidSupport.programs.map((program, index) => (
            <article className="program-card" style={{ "--i": index }} key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </div>

        <p className="section-footnote section-footnote--light long-copy">{t.medicaidSupport.footnote}</p>
      </div>
    </AnimatedSection>
  );
}

function HowItWorks({ t }) {
  return (
    <AnimatedSection className="section section-cream" id="how-it-works">
      <div className="container">
        <div className="section-header section-header--center copy-block">
          <span className="section-kicker">{t.howItWorks.kicker}</span>
          <h2>{t.howItWorks.heading}</h2>
          <p className="long-copy">{t.howItWorks.intro}</p>
        </div>

        <ol className="steps-timeline reveal--stagger">
          {t.howItWorks.steps.map((item, index) => (
            <li className="step-card" style={{ "--i": index }} key={item.step}>
              <span className="step-card__number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}

function WhyChooseCareBridge({ t }) {
  return (
    <AnimatedSection className="section section-white" id="why-carebridge">
      <div className="container why-grid">
        <div className="copy-block why-copy">
          <span className="section-kicker">{t.whyCareBridge.kicker}</span>
          <h2>{t.whyCareBridge.heading}</h2>
          <p className="long-copy">{t.whyCareBridge.paragraph1}</p>
          <p className="long-copy">{t.whyCareBridge.paragraph2}</p>

          <div className="why-copy__image">
            <img
              src="/images/why-carebridge.png"
              alt={t.whyCareBridge.imageAlt}
              loading="lazy"
            />
          </div>
        </div>

        <ul className="feature-list reveal--stagger" aria-label={t.whyCareBridge.featureListLabel}>
          {t.whyCareBridge.features.map((feature, index) => (
            <li style={{ "--i": index }} key={feature}>
              <Icon name="check" className="feature-list__icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

function HealthPlanStatus({ t }) {
  const getBadgeClass = (status) => {
    const normalized = status.toLowerCase();
    const inProgress = normalized.includes("progress") || normalized.includes("progreso") || status.includes("قيد");
    return `status-badge ${inProgress ? "status-badge--progress" : "status-badge--active"}`;
  };

  return (
    <AnimatedSection className="section section-teal-soft" id="health-plans">
      <div className="container">
        <div className="section-header copy-block--wide">
          <span className="section-kicker">{t.healthPlans.kicker}</span>
          <h2>{t.healthPlans.heading}</h2>
          <p className="long-copy">{t.healthPlans.intro}</p>
        </div>

        <div className="plan-status-grid reveal--stagger">
          {t.healthPlans.plans.map((plan, index) => (
            <article className="plan-status-card" style={{ "--i": index }} key={plan.name}>
              <div className="plan-status-card__top">
                <span className={getBadgeClass(plan.status)}>{plan.status}</span>
                <h3>{plan.name}</h3>
              </div>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>

        <p className="section-footnote long-copy">{t.healthPlans.disclaimer}</p>
      </div>
    </AnimatedSection>
  );
}


function ReferralSection({ t }) {
  return (
    <AnimatedSection className="section section-navy" id="referrals">
      <div className="container referral-layout">
        <span className="section-kicker section-kicker--light">{t.referrals.kicker}</span>
        <h2>{t.referrals.heading}</h2>
        <p className="long-copy">{t.referrals.intro}</p>

        <div className="referral-audience-grid">
          <article className="referral-audience-card">
            <h3>{t.referrals.familyCardTitle}</h3>
            <p>{t.referrals.familyCardText}</p>
          </article>

          <article className="referral-audience-card">
            <h3>{t.referrals.coordinatorCardTitle}</h3>
            <p>{t.referrals.coordinatorCardText}</p>
          </article>
        </div>

        <p className="referral-note long-copy">{t.referrals.requestText}</p>

        <div className="referral-details-card" aria-label={t.referrals.detailsLabel}>
          <p><strong>{t.referrals.companyName}:</strong> <LtrValue>{company.name}</LtrValue></p>
          <p><strong>{t.referrals.npi}:</strong> <LtrValue>{company.npi}</LtrValue></p>
          <p><strong>{t.referrals.license}:</strong> <LtrValue>{t.referrals.licenseNumber}</LtrValue> — {t.referrals.licenseCategory}</p>
          <p><strong>{t.referrals.phone}:</strong> <a href={`tel:${company.phoneHref}`}><LtrValue>{company.phone}</LtrValue></a></p>
          <p><strong>{t.referrals.fax}:</strong> <LtrValue>{company.fax}</LtrValue></p>
          <p><strong>{t.referrals.email}:</strong> <a href={`mailto:${company.email}`}><LtrValue>{company.email}</LtrValue></a></p>
        </div>

        <p className="referral-note long-copy">{t.referrals.privacyNote}</p>

        <div className="btn-row">
          <a className="btn btn-secondary-light" href={`mailto:${company.email}`}>
            {t.buttons.emailCareBridge}
          </a>
          <a className="btn btn-secondary-light" href={`tel:${company.phoneHref}`}>
            {t.buttons.call} <LtrValue>{company.phone}</LtrValue>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}


function CareersSection({ t }) {
  const emailSubject = encodeURIComponent(t.careers.emailSubject);

  return (
    <AnimatedSection className="section section-white" id="careers">
      <div className="container copy-block">
        <span className="section-kicker">{t.careers.kicker}</span>
        <h2>{t.careers.heading}</h2>
        <p className="long-copy">{t.careers.intro}</p>
        <p className="section-local">{t.careers.pay}</p>
        <p className="long-copy">{t.careers.disclaimer}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href={`mailto:${company.email}?subject=${emailSubject}`}>
            {t.buttons.applyByEmail}
          </a>
          <a className="btn btn-outline-dark" href={`tel:${company.phoneHref}`}>
            {t.buttons.call} <LtrValue>{company.phone}</LtrValue>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

function AboutSection({ t }) {
  return (
    <AnimatedSection className="section section-white" id="about">
      <div className="container about-layout">
        <div className="about-layout__media">
          <img src="/images/community-care.png" alt={t.about.imageAlt} loading="lazy" />
        </div>

        <div className="copy-block about-copy">
          <span className="section-kicker">{t.about.kicker}</span>
          <h2>{t.about.heading}</h2>
          <p className="long-copy">{t.about.paragraph1}</p>
          <p className="long-copy">{t.about.paragraph2}</p>

          <blockquote className="mission-quote">
            <p>{t.about.quote}</p>
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactForm({ t }) {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formEndpoint = import.meta.env?.VITE_FORM_ENDPOINT || "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    if (form.get("companyWebsite")) {
      return;
    }

    if (!formEndpoint) {
      setStatus({ type: "error", message: t.contact.formEndpointMissing });
      return;
    }

    const payload = {
      subject: t.contact.formSubject,
      source: company.website,
      language: document.documentElement.lang || "en",
      submittedAt: new Date().toISOString(),
      name: form.get("name") || "",
      phone: form.get("phone") || "",
      email: form.get("email") || "",
      bestTime: form.get("bestTime") || "",
      relationship: form.get("relationship") || "",
      message: form.get("message") || "",
      privacyAcknowledgement: Boolean(form.get("privacy")),
      privacyNotice: t.contact.privacyMailLine,
    };

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      formElement.reset();
      setStatus({ type: "success", message: t.contact.success });
    } catch (error) {
      setStatus({ type: "error", message: t.contact.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection className="section section-cream" id="contact">
      <div className="container contact-layout">
        <div>
          <div className="section-header copy-block contact-copy">
            <span className="section-kicker">{t.contact.kicker}</span>
            <h2>{t.contact.heading}</h2>
            <p className="long-copy">{t.contact.intro}</p>
          </div>

          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="honeypot-field" aria-hidden="true">
              <label htmlFor="companyWebsite">{t.contact.honeypotLabel}</label>
              <input id="companyWebsite" name="companyWebsite" tabIndex="-1" autoComplete="off" />
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">{t.contact.name}</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">{t.contact.phone}</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="email">{t.contact.email}</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>

              <div className="form-field">
                <label htmlFor="bestTime">{t.contact.bestTime}</label>
                <select id="bestTime" name="bestTime" defaultValue="">
                  <option value="" disabled>
                    {t.contact.selectOne}
                  </option>
                  <option>{t.contact.morning}</option>
                  <option>{t.contact.afternoon}</option>
                  <option>{t.contact.evening}</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="relationship">{t.contact.relationship}</label>
              <select id="relationship" name="relationship" defaultValue="">
                <option value="" disabled>
                  {t.contact.selectOne}
                </option>
                <option>{t.contact.medicaidMember}</option>
                <option>{t.contact.familyRep}</option>
                <option>{t.contact.caseManager}</option>
                <option>{t.contact.other}</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">{t.contact.generalMessage}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <div className="form-field form-field--checkbox">
              <input id="privacy" name="privacy" type="checkbox" required />
              <label htmlFor="privacy">{t.contact.privacyAcknowledgement}</label>
            </div>

            <button className="btn btn-primary btn--full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? t.contact.sending : t.buttons.requestContact}
            </button>

            <p className="form-privacy long-copy">{t.contact.formSecurityNote}</p>
            <p className="form-privacy long-copy">{t.contact.urgentNotice}</p>

            {status ? <p className={`form-status form-status--${status.type}`} role="status">{status.message}</p> : null}
          </form>
        </div>

        <div className="contact-side">
          <address className="contact-info">
            <h3 className="contact-info__title">CareBridge Solutions LLC</h3>

            <p>
              <span className="contact-label">{t.contact.labels.phone}</span>
              <a href={`tel:${company.phoneHref}`}><LtrValue>{company.phone}</LtrValue></a>
            </p>

            <p>
              <span className="contact-label">{t.contact.labels.fax}</span>
              <LtrValue>{company.fax}</LtrValue>
            </p>

            <p>
              <span className="contact-label">{t.contact.labels.email}</span>
              <a href={`mailto:${company.email}`}><LtrValue>{company.email}</LtrValue></a>
            </p>

            <p>
              <span className="contact-label">{t.contact.labels.hours}</span>
              <span className="contact-hours"><LtrValue>{t.company.hours}</LtrValue></span>
            </p>

            <p>
              <span className="contact-label">{t.contact.labels.office}</span>
              <a className="address-block" href={company.mapHref} target="_blank" rel="noreferrer">
                <span className="address-line"><LtrValue>{company.addressLine1}</LtrValue></span>
                <span className="address-line"><LtrValue>{company.addressLine2}</LtrValue></span>
              </a>
            </p>
          </address>

          <div className="contact-image-card">
            <img
              src="/images/contact-card.png"
              alt={t.contact.imageAlt}
            />
          </div>

          <div className="contact-next-card">
            <h3>{t.contact.nextHeading}</h3>

            {t.contact.nextSteps.map((step, index) => (
              <div className="contact-next-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}


function FAQSchema({ t }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

function FAQSection({ t }) {
  const [open, setOpen] = useState(0);

  return (
    <AnimatedSection className="section section-white" id="faq">
      <FAQSchema t={t} />
      <div className="container faq-container">
        <div className="section-header section-header--center copy-block">
          <span className="section-kicker">{t.faq.kicker}</span>
          <h2>{t.faq.heading}</h2>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <article className="faq-item" key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <Icon name="chevron" className={`icon-chevron ${isOpen ? "icon-chevron--open" : ""}`} />
                </button>
                {isOpen ? (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}


function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <p className="footer-brand-name"><LtrValue>{company.name}</LtrValue></p>
            <p className="footer-tagline long-copy">{t.footer.description}</p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.footer.explore}</p>
            <ul>
              {t.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.footer.contact}</p>
            <ul>
              <li>
                <a href={`tel:${company.phoneHref}`}><LtrValue>{company.phone}</LtrValue></a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}><LtrValue>{company.email}</LtrValue></a>
              </li>
              <li className="footer-hours">
                <span><LtrValue>{t.company.hoursLine1}</LtrValue></span>
                <span><LtrValue>{t.company.hoursLine2}</LtrValue></span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.footer.office}</p>
            <a className="address-block" href={company.mapHref} target="_blank" rel="noreferrer">
              <span className="address-line"><LtrValue>{company.addressLine1}</LtrValue></span>
              <span className="address-line"><LtrValue>{company.addressLine2}</LtrValue></span>
            </a>
          </div>
        </div>

        <div className="footer-legal-block">
          <p className="footer-legal-main long-copy">{t.footer.legal}</p>

          <div className="footer-legal-details">
            <div className="footer-legal-detail">
              <h3>{t.footer.privacyHeading}</h3>
              <p>{t.footer.privacyText}</p>
            </div>

            <div className="footer-legal-detail">
              <h3>{t.footer.emergencyHeading}</h3>
              <p>{t.footer.emergencyText}</p>
            </div>
          </div>
        </div>

        <p className="footer-bottom">© <LtrValue>{new Date().getFullYear()}</LtrValue> <LtrValue>{company.name}</LtrValue>. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

function MobileStickyCTA({ t }) {
  return (
    <div className="mobile-sticky-cta" role="navigation" aria-label="Quick contact actions">
      <a className="mobile-sticky-cta__btn mobile-sticky-cta__btn--call" href={`tel:${company.phoneHref}`}>
        <Icon name="phone" className="btn-icon" />
        {t.buttons.call}
      </a>
      <a className="mobile-sticky-cta__btn mobile-sticky-cta__btn--request" href="#contact">
        {t.buttons.requestServices}
      </a>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage?.getItem("carebridge-language");
    return storedLanguage && languageOptions[storedLanguage] ? storedLanguage : "en";
  });

  const t = getText(language);
  const direction = languageOptions[language]?.dir || "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    window.localStorage?.setItem("carebridge-language", language);
  }, [language, direction]);

  return (
    <div className="site-shell" dir={direction} lang={language}>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header language={language} onLanguageChange={setLanguage} />

      <main id="main">
        <HeroSection t={t} />
        <TrustBadges t={t} />
        <WhoWeHelp t={t} />
        <ServicesGrid t={t} />
        <MedicaidSupport t={t} />
        <HowItWorks t={t} />
        <WhyChooseCareBridge t={t} />
        <HealthPlanStatus t={t} />
        <ReferralSection t={t} />
        <CareersSection t={t} />
        <AboutSection t={t} />
        <ContactForm t={t} />
        <FAQSection t={t} />
      </main>

      <Footer t={t} />
      <MobileStickyCTA t={t} />
    </div>
  );
}
