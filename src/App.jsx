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
  ar: {
    code: "ar",
    label: "العربية",
    shortLabel: "عربي",
    dir: "rtl",
  },
};

const content = {
  en: {
    company: {
      tagline: "Reliable Texas Medicaid personal assistance services at home.",
      hours: "Monday – Friday, 8:00 AM – 5:00 PM",
      hoursLine1: "Monday – Friday",
      hoursLine2: "8:00 AM – 5:00 PM",
    },
    skipLink: "Skip to content",
    languageToggleLabel: "Website language",
    switchToEnglish: "English",
    switchToArabic: "العربية",
    navLinks: [
      { href: "#services", label: "Services" },
      { href: "#medicaid-support", label: "Medicaid Support" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#about", label: "About" },
      { href: "#referrals", label: "Referrals" },
      { href: "#careers", label: "Careers" },
      { href: "#contact", label: "Contact" },
    ],
    buttons: {
      requestCareServices: "Request Care Services",
      callNow: "Call Now",
      call: "Call",
      requestServices: "Request Services",
      emailCareBridge: "Email CareBridge",
      applyByEmail: "Apply by Email",
      requestContact: "Request Contact",
    },
    hero: {
      eyebrow: "Texas Medicaid Personal Assistance Services",
      headline: "Warm, dependable in-home support for eligible Texas Medicaid members.",
      lead:
        "CareBridge Solutions LLC provides non-medical personal assistance services that help members with approved daily living needs while supporting family communication, documentation, and Medicaid program requirements.",
      trust:
        "Licensed Texas Personal Assistance Services provider · Medicaid-focused support · EVV-supported documentation",
      disclaimer:
        "Eligibility, authorization, health plan participation, credentialing status, and service availability must be verified before services begin.",
    },
    trustBadges: [
      {
        title: "Licensed Care Provider",
        text: "Non-medical personal assistance services for eligible Texas Medicaid members.",
        icon: "shield",
      },
      {
        title: "Medicaid-Focused Support",
        text: "Guidance for families navigating Medicaid-based personal assistance services.",
        icon: "heart",
      },
      {
        title: "EVV-Supported Documentation",
        text: "Covered visits are documented through applicable Electronic Visit Verification workflows.",
        icon: "check",
      },
      {
        title: "Texas Communication",
        text: "Responsive support for members, family representatives, case managers, and referral partners.",
        icon: "location",
      },
    ],
    whoWeHelp: {
      kicker: "Who We Help",
      heading: "Support built around dignity, safety, and daily life at home.",
      intro:
        "CareBridge supports eligible members and families who need reliable help with approved non-medical daily living needs. Our role is to coordinate clearly, document carefully, and provide respectful assistance in the home.",
      local: "Serving families across Texas.",
      cards: [
        {
          title: "Older Adults",
          text: "Support for daily routines, personal care, meals, and safe movement at home.",
        },
        {
          title: "Adults with Disabilities",
          text: "Dependable attendant support that helps members maintain comfort, dignity, and independence.",
        },
        {
          title: "Children and Young Adults",
          text: "Support for eligible members under applicable Medicaid programs and authorization requirements.",
        },
        {
          title: "Family Caregivers",
          text: "Clear communication and reliable scheduling to help families feel supported.",
        },
      ],
    },
    services: {
      kicker: "Services",
      heading: "Personal assistance services for approved daily living needs.",
      intro:
        "Our services are non-medical and must match the member’s approved plan of care, eligibility, authorization, and applicable Texas Medicaid program requirements.",
      footnote:
        "Services must be authorized and delivered within the member’s approved plan of care and applicable Medicaid program rules.",
      items: [
        {
          title: "Personal Care Assistance",
          image: "/images/personal-care-assistance.png",
          imageAlt: "Caregiver assisting an older adult with safe daily support at home",
          text: "Help with bathing, dressing, grooming, toileting, and other approved personal care tasks.",
        },
        {
          title: "Mobility and Transfer Support",
          image: "/images/mobility-support.png",
          imageAlt: "Caregiver supporting an older adult using a walker at home",
          text: "Assistance with safe movement around the home, transfers, and positioning support within the approved care plan.",
        },
        {
          title: "Meal Preparation",
          image: "/images/meal-preparation.png",
          imageAlt: "Caregiver helping an older adult prepare a meal at home",
          text: "Support with preparing simple meals and maintaining daily nutrition routines.",
        },
        {
          title: "Light Housekeeping",
          image: "/images/light-housekeeping.png",
          imageAlt: "Clean home icon for light housekeeping support",
          text: "Help with approved household tasks related to the member’s health, safety, and daily living needs.",
        },
        {
          title: "Laundry and Linens",
          image: "/images/laundry-linens.png",
          imageAlt: "Caregiver and older adult folding laundry and linens at home",
          text: "Assistance with member-related laundry and basic home routines when included in the service plan.",
        },
        {
          title: "Attendant Support",
          image: "/images/attendant-support.png",
          imageAlt: "Caregiver and older adult sharing a warm moment at home",
          text: "Reliable non-medical support from trained staff following applicable Medicaid and agency requirements.",
        },
      ],
    },
    medicaidSupport: {
      kicker: "Medicaid Support",
      heading: "Focused on Texas Medicaid personal assistance programs.",
      intro:
        "CareBridge coordinates non-medical personal assistance services for eligible members when program requirements, eligibility, authorization, service area, and health plan participation are verified.",
      footnote:
        "Program availability, eligibility, authorization, and plan participation may vary. Contact CareBridge to discuss next steps.",
      programs: [
        {
          title: "Personal Assistance Services",
          text: "Non-medical support for approved daily living and attendant care needs.",
        },
        {
          title: "PHC / FC / CAS",
          text: "Support for eligible Primary Home Care, Family Care, and Community Attendant Services members.",
        },
        {
          title: "STAR+PLUS",
          text: "Support for eligible adults receiving long-term services and supports through Medicaid managed care.",
        },
        {
          title: "STAR Kids",
          text: "Support for eligible children and young adults when services are authorized through applicable Medicaid programs.",
        },
        {
          title: "EVV-Supported Services",
          text: "CareBridge follows applicable Electronic Visit Verification requirements for covered services.",
        },
      ],
    },
    howItWorks: {
      kicker: "How It Works",
      heading: "A clear path from first call to approved in-home support.",
      intro:
        "CareBridge helps members, families, representatives, and referral partners understand the next step without overpromising eligibility, approval, or service hours.",
      steps: [
        {
          step: "1",
          title: "Contact CareBridge",
          text: "Call us or submit a request so we can understand the support needed.",
        },
        {
          step: "2",
          title: "Review Eligibility and Authorization",
          text: "We review basic program information and explain what documentation or authorization may be required.",
        },
        {
          step: "3",
          title: "Coordinate the Care Plan",
          text: "CareBridge works with the member, family, representative, and applicable program requirements to prepare for service.",
        },
        {
          step: "4",
          title: "Begin In-Home Support",
          text: "Approved services begin with trained staff, clear scheduling, and EVV-supported visit documentation.",
        },
      ],
    },
    whyCareBridge: {
      kicker: "Why CareBridge",
      heading: "Premium communication with practical Medicaid discipline.",
      paragraph1:
        "Families deserve warm, reliable support. Medicaid programs also require accurate eligibility checks, authorization awareness, visit documentation, and respectful coordination. CareBridge is built around both needs.",
      paragraph2:
        "Our approach is steady, documentation-focused, and designed to support members at home while helping families understand what must be verified before services begin.",
      imageAlt: "CareBridge team member reviewing care information with a family at home",
      featureListLabel: "CareBridge service strengths",
      features: [
        "Licensed Texas personal assistance services provider",
        "Medicaid-focused service coordination",
        "EVV-supported visit documentation",
        "Clear communication with families and representatives",
        "Trained W-2 staff",
        "Respectful, non-discriminatory service",
        "Texas care coordination",
        "Documentation-focused operations",
      ],
    },
    healthPlans: {
      kicker: "Health Plan Status",
      heading: "Health Plan Participation Status",
      intro:
        "CareBridge Solutions works with participating Texas Medicaid health plans for eligible members receiving personal assistance services. Participation, eligibility, authorization, covered services, and credentialing status may vary by plan, service area, and member circumstances.",
      disclaimer:
        "Health plan participation, member eligibility, authorization, covered services, and credentialing status must be verified before services begin. Listing a health plan does not guarantee eligibility, approval, service availability, or service hours. Participation and credentialing status may change.",
      plans: [
        {
          name: "Aetna Better Health of Texas",
          status: "Active Agreement",
          text: "CareBridge supports eligible members according to plan requirements, service area rules, member eligibility, authorization, claims rules, and ongoing credentialing requirements.",
        },
        {
          name: "Cook Children’s Health Plan",
          status: "Active Agreement",
          text: "CareBridge support depends on applicable lines of business, member eligibility, authorization, service area, plan participation, and operational readiness.",
        },
        {
          name: "Superior HealthPlan",
          status: "Active Agreement",
          text: "CareBridge support is subject to member eligibility verification, prior authorization when required, credentialing status, system activation, and EVV-supported service documentation.",
        },
        {
          name: "UnitedHealthcare Community Plan of Texas",
          status: "Active Agreement",
          text: "CareBridge participation is governed by applicable agreement terms, effective date, eligibility verification, authorization requirements, and plan-specific administrative rules.",
        },
        {
          name: "Texas Children’s Health Plan",
          status: "Active Agreement",
          text: "CareBridge may support eligible members in accordance with applicable agreement terms, service authorization requirements, member eligibility verification, and ongoing compliance obligations.",
        },
        {
          name: "Molina Healthcare",
          status: "In Progress",
          text: "CareBridge is monitoring Molina network panel and contracting availability. Support is not active until contracting, credentialing, system activation, member eligibility, authorization, service area, and EVV documentation requirements are complete.",
        },
      ],
    },
    referrals: {
      kicker: "Referrals",
      heading: "How to request CareBridge through your health plan.",
      intro:
        "Case managers, service coordinators, discharge planners, community organizations, and family representatives may contact CareBridge to discuss possible personal assistance services for eligible Medicaid members.",
      requestText:
        "Ready to request CareBridge through your health plan? Please share the following information with your health plan service coordinator or case manager:",
      detailsLabel: "CareBridge referral details",
      companyName: "Company Name",
      npi: "NPI",
      license: "Texas HCSSA License",
      licenseNumber: "#024033",
      licenseCategory: "Personal Assistance Services",
      phone: "Phone",
      fax: "Fax",
      email: "Email",
      privacyNote:
        "Please do not submit protected health information through a general website form. CareBridge can provide appropriate instructions for next steps.",
    },
    careers: {
      kicker: "Careers",
      heading: "Apply to work as a CareBridge caregiver.",
      intro:
        "CareBridge Solutions LLC hires dependable caregivers to provide non-medical personal assistance services for eligible members. Caregivers support approved daily living tasks while following agency policies, documentation expectations, and applicable Medicaid program requirements.",
      pay:
        "Caregiver pay starts at $13.00 per hour. Final pay may vary based on role, schedule, experience, location, and program requirements.",
      disclaimer:
        "Employment, assignments, schedules, and service availability depend on hiring requirements, member needs, authorization, and operational fit.",
      emailSubject: "Caregiver Application Inquiry",
    },
    about: {
      kicker: "About CareBridge",
      heading: "Built to bridge families, care needs, and Medicaid requirements.",
      paragraph1:
        "CareBridge Solutions LLC provides non-medical personal assistance services for eligible Texas Medicaid members. Our work centers on respectful in-home support, clear communication, and documentation-conscious operations.",
      paragraph2:
        "We serve members and families with a calm, professional approach that keeps expectations clear. Eligibility, authorization, health plan participation, and service availability are verified before services begin.",
      quote: "“Care should feel personal, dependable, and clear from the first conversation”",
      imageAlt: "Caregiver and older adult receiving warm in-home support",
    },
    contact: {
      kicker: "Contact",
      heading: "Talk with CareBridge about possible services.",
      intro:
        "Call CareBridge or send a general request. A team member can explain next steps for eligibility, authorization, and health plan verification.",
      formSubject: "CareBridge Website Service Request",
      mailHeader: "CareBridge Solutions website request",
      name: "Name",
      phone: "Phone",
      email: "Email",
      bestTime: "Best time to contact",
      selectOne: "Select one",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      relationship: "I am a",
      medicaidMember: "Medicaid member",
      familyRep: "Family member or representative",
      caseManager: "Case manager or referral partner",
      other: "Other",
      generalMessage: "General message",
      messagePlaceholder:
        "Please keep this general. Do not include detailed medical information, Medicaid IDs, Social Security numbers, or other sensitive information.",
      privacyAcknowledgement:
        "I understand this general website form should not be used to send sensitive medical information or private identifiers.",
      privacyMailLine:
        "Privacy acknowledgement: The sender was instructed not to include sensitive medical information in this general website form.",
      urgentNotice:
        "For urgent or emergency needs, call 911 or seek immediate medical assistance. CareBridge does not provide emergency services.",
      success:
        "A draft email should open on your device. Please review it before sending and avoid including sensitive medical information.",
      labels: {
        phone: "Phone",
        fax: "Fax",
        email: "Email",
        hours: "Hours",
        office: "Office",
      },
      imageAlt: "CareBridge Solutions Personal Assistance Services",
      nextHeading: "What happens next?",
      nextSteps: [
        "CareBridge reviews your general request and contact information.",
        "A team member contacts you to discuss eligibility, authorization, and health plan verification.",
        "Services begin only after eligibility, authorization, and applicable plan requirements are confirmed.",
      ],
    },
    faq: {
      kicker: "FAQ",
      heading: "Common Questions",
      items: [
        {
          question: "What does CareBridge Solutions provide?",
          answer:
            "CareBridge provides non-medical personal assistance services for eligible Medicaid members who need help with approved daily living and attendant care needs.",
        },
        {
          question: "Is CareBridge a medical home health agency?",
          answer:
            "CareBridge provides Personal Assistance Services. We are not skilled nursing, emergency care, or hospital-level medical care.",
        },
        {
          question: "Do I need Medicaid authorization?",
          answer:
            "Many services require eligibility verification, authorization, and an approved service plan. CareBridge can help explain next steps.",
        },
        {
          question: "Can family members contact CareBridge?",
          answer:
            "Yes. Members, family representatives, case managers, and referral partners may contact CareBridge to discuss possible services.",
        },
        {
          question: "Does CareBridge use EVV?",
          answer:
            "CareBridge follows applicable Electronic Visit Verification requirements for covered services.",
        },
        {
          question: "Can I send private medical information through the website?",
          answer:
            "Please avoid sending sensitive medical information through the general website form. A CareBridge team member can provide instructions for appropriate next steps.",
        },
      ],
    },
    footer: {
      explore: "Explore",
      contact: "Contact",
      office: "Office",
      description: "Reliable Texas Medicaid personal assistance services at home. CareBridge provides non-medical Texas Medicaid-focused personal assistance services for eligible members.",
      legal:
        "CareBridge Solutions LLC provides non-medical personal assistance services. Eligibility, authorization, covered services, service hours, health plan participation, credentialing status, and service availability must be verified before services begin. This website does not guarantee Medicaid eligibility, approval, or authorization.",
      privacyHeading: "Privacy Notice",
      privacyText:
        "Please do not submit sensitive medical information, Medicaid IDs, Social Security numbers, banking information, or private identifiers through general website forms.",
      emergencyHeading: "Emergency Notice",
      emergencyText:
        "CareBridge does not provide emergency medical services. For urgent or life-threatening emergencies, call 911.",
      rights: "All rights reserved.",
    },
  },
  ar: {
    company: {
      tagline: "خدمات مساعدة شخصية موثوقة في المنزل لأعضاء Texas Medicaid.",
      hours: "الاثنين – الجمعة، 8:00 صباحًا – 5:00 مساءً",
      hoursLine1: "الاثنين – الجمعة",
      hoursLine2: "8:00 صباحًا – 5:00 مساءً",
    },
    skipLink: "تخطي إلى المحتوى",
    languageToggleLabel: "لغة الموقع",
    switchToEnglish: "English",
    switchToArabic: "العربية",
    navLinks: [
      { href: "#services", label: "الخدمات" },
      { href: "#medicaid-support", label: "دعم Medicaid" },
      { href: "#how-it-works", label: "كيف تعمل الخدمة" },
      { href: "#about", label: "من نحن" },
      { href: "#referrals", label: "الإحالات" },
      { href: "#careers", label: "الوظائف" },
      { href: "#contact", label: "اتصل بنا" },
    ],
    buttons: {
      requestCareServices: "طلب خدمات الرعاية",
      callNow: "اتصل الآن",
      call: "اتصال",
      requestServices: "طلب الخدمات",
      emailCareBridge: "إرسال بريد إلى CareBridge",
      applyByEmail: "التقديم عبر البريد الإلكتروني",
      requestContact: "طلب التواصل",
    },
    hero: {
      eyebrow: "خدمات المساعدة الشخصية ضمن Texas Medicaid",
      headline: "دعم منزلي دافئ وموثوق لأعضاء Texas Medicaid المؤهلين.",
      lead:
        "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية تساعد الأعضاء في احتياجات الحياة اليومية المعتمدة، مع دعم التواصل مع العائلة والتوثيق ومتطلبات برامج Medicaid.",
      trust:
        "مزود مرخّص لخدمات المساعدة الشخصية في تكساس · دعم يركز على Medicaid · توثيق مدعوم بنظام EVV",
      disclaimer:
        "يجب التحقق من الأهلية والتفويض ومشاركة الخطة الصحية وحالة الاعتماد وتوفر الخدمة قبل بدء الخدمات.",
    },
    trustBadges: [
      {
        title: "مزود رعاية مرخّص",
        text: "خدمات مساعدة شخصية غير طبية لأعضاء Texas Medicaid المؤهلين.",
        icon: "shield",
      },
      {
        title: "دعم يركز على Medicaid",
        text: "إرشاد للعائلات أثناء التعامل مع خدمات المساعدة الشخصية المعتمدة على Medicaid.",
        icon: "heart",
      },
      {
        title: "توثيق مدعوم بنظام EVV",
        text: "يتم توثيق الزيارات المغطاة من خلال إجراءات التحقق الإلكتروني من الزيارة عند انطباقها.",
        icon: "check",
      },
      {
        title: "تواصل داخل تكساس",
        text: "دعم سريع للأعضاء وممثلي العائلة ومديري الحالات وشركاء الإحالة.",
        icon: "location",
      },
    ],
    whoWeHelp: {
      kicker: "من نخدم",
      heading: "دعم يراعي الكرامة والسلامة والحياة اليومية في المنزل.",
      intro:
        "تدعم CareBridge الأعضاء والعائلات المؤهلين الذين يحتاجون إلى مساعدة موثوقة في احتياجات الحياة اليومية غير الطبية المعتمدة. دورنا هو التنسيق بوضوح والتوثيق بعناية وتقديم مساعدة محترمة في المنزل.",
      local: "نخدم العائلات في تكساس.",
      cards: [
        {
          title: "كبار السن",
          text: "دعم للروتين اليومي والعناية الشخصية والوجبات والحركة الآمنة داخل المنزل.",
        },
        {
          title: "البالغون من ذوي الإعاقة",
          text: "دعم موثوق من مقدمي رعاية يساعد الأعضاء على الحفاظ على الراحة والكرامة والاستقلالية.",
        },
        {
          title: "الأطفال والشباب",
          text: "دعم للأعضاء المؤهلين حسب برامج Medicaid ومتطلبات التفويض المعمول بها.",
        },
        {
          title: "مقدمو الرعاية من العائلة",
          text: "تواصل واضح وجدولة موثوقة لمساعدة العائلات على الشعور بالدعم.",
        },
      ],
    },
    services: {
      kicker: "الخدمات",
      heading: "خدمات مساعدة شخصية لاحتياجات الحياة اليومية المعتمدة.",
      intro:
        "خدماتنا غير طبية ويجب أن تتوافق مع خطة الرعاية المعتمدة للعضو والأهلية والتفويض ومتطلبات برامج Texas Medicaid المعمول بها.",
      footnote:
        "يجب أن تكون الخدمات مفوضة وأن تُقدَّم ضمن خطة الرعاية المعتمدة للعضو وقواعد برنامج Medicaid المعمول بها.",
      items: [
        {
          title: "المساعدة في العناية الشخصية",
          image: "/images/personal-care-assistance.png",
          imageAlt: "مقدم رعاية يساعد أحد كبار السن في دعم يومي آمن في المنزل",
          text: "المساعدة في الاستحمام وارتداء الملابس والعناية بالمظهر واستخدام الحمام وغيرها من مهام العناية الشخصية المعتمدة.",
        },
        {
          title: "دعم الحركة والانتقال",
          image: "/images/mobility-support.png",
          imageAlt: "مقدم رعاية يدعم أحد كبار السن أثناء استخدام المشاية في المنزل",
          text: "المساعدة في الحركة الآمنة داخل المنزل والانتقال وتغيير الوضعية ضمن خطة الرعاية المعتمدة.",
        },
        {
          title: "تحضير الوجبات",
          image: "/images/meal-preparation.png",
          imageAlt: "مقدم رعاية يساعد أحد كبار السن في تحضير وجبة في المنزل",
          text: "دعم في تحضير وجبات بسيطة والحفاظ على روتين التغذية اليومية.",
        },
        {
          title: "الأعمال المنزلية الخفيفة",
          image: "/images/light-housekeeping.png",
          imageAlt: "أيقونة منزل نظيف لدعم الأعمال المنزلية الخفيفة",
          text: "المساعدة في المهام المنزلية المعتمدة المرتبطة بصحة العضو وسلامته واحتياجاته اليومية.",
        },
        {
          title: "الغسيل والبياضات",
          image: "/images/laundry-linens.png",
          imageAlt: "مقدم رعاية وأحد كبار السن يطويان الغسيل والبياضات في المنزل",
          text: "المساعدة في غسيل ملابس العضو والروتين المنزلي الأساسي عندما يكون ذلك ضمن خطة الخدمة.",
        },
        {
          title: "دعم مقدم الرعاية",
          image: "/images/attendant-support.png",
          imageAlt: "مقدم رعاية وأحد كبار السن في لحظة ودية في المنزل",
          text: "دعم غير طبي موثوق من موظفين مدربين يتبعون متطلبات Medicaid والوكالة المعمول بها.",
        },
      ],
    },
    medicaidSupport: {
      kicker: "دعم Medicaid",
      heading: "تركيز على برامج المساعدة الشخصية في Texas Medicaid.",
      intro:
        "تنسق CareBridge خدمات المساعدة الشخصية غير الطبية للأعضاء المؤهلين عند التحقق من متطلبات البرنامج والأهلية والتفويض ومنطقة الخدمة ومشاركة الخطة الصحية.",
      footnote:
        "قد يختلف توفر البرامج والأهلية والتفويض ومشاركة الخطة. تواصل مع CareBridge لمناقشة الخطوات التالية.",
      programs: [
        {
          title: "خدمات المساعدة الشخصية",
          text: "دعم غير طبي لاحتياجات الحياة اليومية ورعاية المرافق المعتمدة.",
        },
        {
          title: "PHC / FC / CAS",
          text: "دعم للأعضاء المؤهلين في Primary Home Care وFamily Care وCommunity Attendant Services.",
        },
        {
          title: "STAR+PLUS",
          text: "دعم للبالغين المؤهلين الذين يحصلون على خدمات ودعم طويلة الأمد من خلال الرعاية المدارة في Medicaid.",
        },
        {
          title: "STAR Kids",
          text: "دعم للأطفال والشباب المؤهلين عندما تكون الخدمات مفوضة من خلال برامج Medicaid المعمول بها.",
        },
        {
          title: "خدمات مدعومة بنظام EVV",
          text: "تتبع CareBridge متطلبات التحقق الإلكتروني من الزيارة للخدمات المغطاة عند انطباقها.",
        },
      ],
    },
    howItWorks: {
      kicker: "كيف تعمل الخدمة",
      heading: "مسار واضح من أول اتصال إلى الدعم المنزلي المعتمد.",
      intro:
        "تساعد CareBridge الأعضاء والعائلات والممثلين وشركاء الإحالة على فهم الخطوة التالية دون تقديم وعود بشأن الأهلية أو الموافقة أو ساعات الخدمة.",
      steps: [
        {
          step: "1",
          title: "تواصل مع CareBridge",
          text: "اتصل بنا أو أرسل طلبًا حتى نفهم نوع الدعم المطلوب.",
        },
        {
          step: "2",
          title: "مراجعة الأهلية والتفويض",
          text: "نراجع معلومات البرنامج الأساسية ونوضح ما قد يكون مطلوبًا من وثائق أو تفويض.",
        },
        {
          step: "3",
          title: "تنسيق خطة الرعاية",
          text: "تعمل CareBridge مع العضو والعائلة والممثل ومتطلبات البرنامج المعمول بها للتحضير للخدمة.",
        },
        {
          step: "4",
          title: "بدء الدعم داخل المنزل",
          text: "تبدأ الخدمات المعتمدة مع موظفين مدربين وجدولة واضحة وتوثيق للزيارات مدعوم بنظام EVV.",
        },
      ],
    },
    whyCareBridge: {
      kicker: "لماذا CareBridge",
      heading: "تواصل مميز مع انضباط عملي في متطلبات Medicaid.",
      paragraph1:
        "تستحق العائلات دعمًا دافئًا وموثوقًا. كما تتطلب برامج Medicaid التحقق الدقيق من الأهلية والانتباه للتفويض وتوثيق الزيارات والتنسيق باحترام. CareBridge مبنية حول هذين الاحتياجين.",
      paragraph2:
        "نهجنا ثابت ويركز على التوثيق، ومصمم لدعم الأعضاء في المنزل مع مساعدة العائلات على فهم ما يجب التحقق منه قبل بدء الخدمات.",
      imageAlt: "عضو من فريق CareBridge يراجع معلومات الرعاية مع عائلة في المنزل",
      featureListLabel: "نقاط قوة خدمة CareBridge",
      features: [
        "مزود مرخّص لخدمات المساعدة الشخصية في تكساس",
        "تنسيق خدمات يركز على Medicaid",
        "توثيق زيارات مدعوم بنظام EVV",
        "تواصل واضح مع العائلات والممثلين",
        "موظفون مدربون بنظام W-2",
        "خدمة محترمة وغير تمييزية",
        "تنسيق رعاية داخل تكساس",
        "عمليات تركز على التوثيق",
      ],
    },
    healthPlans: {
      kicker: "حالة الخطط الصحية",
      heading: "حالة المشاركة مع الخطط الصحية",
      intro:
        "تعمل CareBridge Solutions مع خطط Texas Medicaid الصحية المشاركة للأعضاء المؤهلين الذين يتلقون خدمات المساعدة الشخصية. قد تختلف المشاركة والأهلية والتفويض والخدمات المغطاة وحالة الاعتماد حسب الخطة ومنطقة الخدمة وظروف العضو.",
      disclaimer:
        "يجب التحقق من مشاركة الخطة الصحية وأهلية العضو والتفويض والخدمات المغطاة وحالة الاعتماد قبل بدء الخدمات. إدراج خطة صحية لا يضمن الأهلية أو الموافقة أو توفر الخدمة أو ساعات الخدمة. قد تتغير المشاركة وحالة الاعتماد.",
      plans: [
        {
          name: "Aetna Better Health of Texas",
          status: "اتفاقية نشطة",
          text: "تدعم CareBridge الأعضاء المؤهلين وفقًا لمتطلبات الخطة وقواعد منطقة الخدمة وأهلية العضو والتفويض وقواعد المطالبات ومتطلبات الاعتماد المستمرة.",
        },
        {
          name: "Cook Children’s Health Plan",
          status: "اتفاقية نشطة",
          text: "يعتمد دعم CareBridge على خطوط العمل المعمول بها وأهلية العضو والتفويض ومنطقة الخدمة ومشاركة الخطة والاستعداد التشغيلي.",
        },
        {
          name: "Superior HealthPlan",
          status: "اتفاقية نشطة",
          text: "يخضع دعم CareBridge للتحقق من أهلية العضو والتفويض المسبق عند الحاجة وحالة الاعتماد وتفعيل النظام وتوثيق الخدمة المدعوم بنظام EVV.",
        },
        {
          name: "UnitedHealthcare Community Plan of Texas",
          status: "اتفاقية نشطة",
          text: "تخضع مشاركة CareBridge لشروط الاتفاقية المعمول بها وتاريخ السريان والتحقق من الأهلية ومتطلبات التفويض والقواعد الإدارية الخاصة بالخطة.",
        },
        {
          name: "Texas Children’s Health Plan",
          status: "اتفاقية نشطة",
          text: "قد تدعم CareBridge الأعضاء المؤهلين وفقًا لشروط الاتفاقية المعمول بها ومتطلبات تفويض الخدمة والتحقق من أهلية العضو والالتزامات المستمرة للامتثال.",
        },
        {
          name: "Molina Healthcare",
          status: "قيد المتابعة",
          text: "تتابع CareBridge توفر الشبكة والتعاقد لدى Molina. لا يكون الدعم نشطًا حتى اكتمال التعاقد والاعتماد وتفعيل النظام وأهلية العضو والتفويض ومنطقة الخدمة ومتطلبات توثيق EVV.",
        },
      ],
    },
    referrals: {
      kicker: "الإحالات",
      heading: "كيفية طلب CareBridge من خلال خطتك الصحية.",
      intro:
        "يمكن لمديري الحالات ومنسقي الخدمات ومخططي الخروج والمنظمات المجتمعية وممثلي العائلات التواصل مع CareBridge لمناقشة خدمات المساعدة الشخصية المحتملة لأعضاء Medicaid المؤهلين.",
      requestText:
        "هل أنت مستعد لطلب CareBridge من خلال خطتك الصحية؟ يرجى مشاركة المعلومات التالية مع منسق الخدمات أو مدير الحالة التابع لخطتك الصحية:",
      detailsLabel: "معلومات إحالة CareBridge",
      companyName: "اسم الشركة",
      npi: "NPI",
      license: "ترخيص HCSSA في تكساس",
      licenseNumber: "#024033",
      licenseCategory: "خدمات المساعدة الشخصية",
      phone: "الهاتف",
      fax: "الفاكس",
      email: "البريد الإلكتروني",
      privacyNote:
        "يرجى عدم إرسال معلومات صحية محمية من خلال نموذج الموقع العام. يمكن لـ CareBridge تقديم التعليمات المناسبة للخطوات التالية.",
    },
    careers: {
      kicker: "الوظائف",
      heading: "قدّم للعمل كمقدم رعاية مع CareBridge.",
      intro:
        "توظف CareBridge Solutions LLC مقدمي رعاية يمكن الاعتماد عليهم لتقديم خدمات مساعدة شخصية غير طبية للأعضاء المؤهلين. يدعم مقدمو الرعاية مهام الحياة اليومية المعتمدة مع اتباع سياسات الوكالة وتوقعات التوثيق ومتطلبات برامج Medicaid المعمول بها.",
      pay:
        "يبدأ أجر مقدم الرعاية من 13.00 دولارًا في الساعة. قد يختلف الأجر النهائي حسب الدور، والجدول، والخبرة، والموقع، ومتطلبات البرنامج.",
      disclaimer:
        "يعتمد التوظيف والمهام والجداول وتوفر الخدمة على متطلبات التوظيف واحتياجات العضو والتفويض والملاءمة التشغيلية.",
      emailSubject: "استفسار عن التقديم لوظيفة مقدم رعاية",
    },
    about: {
      kicker: "عن CareBridge",
      heading: "بُنيت لربط العائلات واحتياجات الرعاية ومتطلبات Medicaid.",
      paragraph1:
        "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية لأعضاء Texas Medicaid المؤهلين. يتركز عملنا على الدعم المنزلي المحترم والتواصل الواضح والعمليات الواعية بالتوثيق.",
      paragraph2:
        "نخدم الأعضاء والعائلات بنهج هادئ ومهني يحافظ على وضوح التوقعات. يتم التحقق من الأهلية والتفويض ومشاركة الخطة الصحية وتوفر الخدمة قبل بدء الخدمات.",
      quote: "“يجب أن تكون الرعاية شخصية وموثوقة وواضحة من أول محادثة”",
      imageAlt: "مقدم رعاية وأحد كبار السن يتلقى دعمًا منزليًا دافئًا",
    },
    contact: {
      kicker: "اتصل بنا",
      heading: "تحدث مع CareBridge عن الخدمات المحتملة.",
      intro:
        "اتصل بـ CareBridge أو أرسل طلبًا عامًا. يمكن لأحد أعضاء الفريق توضيح الخطوات التالية للتحقق من الأهلية والتفويض والخطة الصحية.",
      formSubject: "طلب خدمة من موقع CareBridge",
      mailHeader: "طلب من موقع CareBridge Solutions",
      name: "الاسم",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      bestTime: "أفضل وقت للتواصل",
      selectOne: "اختر واحدًا",
      morning: "صباحًا",
      afternoon: "بعد الظهر",
      evening: "مساءً",
      relationship: "أنا",
      medicaidMember: "عضو في Medicaid",
      familyRep: "فرد من العائلة أو ممثل",
      caseManager: "مدير حالة أو شريك إحالة",
      other: "غير ذلك",
      generalMessage: "رسالة عامة",
      messagePlaceholder:
        "يرجى إبقاء الرسالة عامة. لا تدرج معلومات طبية تفصيلية أو أرقام Medicaid أو أرقام الضمان الاجتماعي أو أي معلومات حساسة أخرى.",
      privacyAcknowledgement:
        "أفهم أن هذا النموذج العام على الموقع لا يجب استخدامه لإرسال معلومات طبية حساسة أو معرفات خاصة.",
      privacyMailLine:
        "إقرار الخصوصية: تم إرشاد المرسل إلى عدم تضمين معلومات طبية حساسة في هذا النموذج العام للموقع.",
      urgentNotice:
        "للاحتياجات العاجلة أو الطارئة، اتصل بـ 911 أو اطلب مساعدة طبية فورية. لا تقدم CareBridge خدمات طوارئ.",
      success:
        "يجب أن يتم فتح مسودة بريد إلكتروني على جهازك. يرجى مراجعتها قبل الإرسال وتجنب تضمين معلومات طبية حساسة.",
      labels: {
        phone: "الهاتف",
        fax: "الفاكس",
        email: "البريد الإلكتروني",
        hours: "ساعات العمل",
        office: "المكتب",
      },
      imageAlt: "CareBridge Solutions لخدمات المساعدة الشخصية",
      nextHeading: "ماذا يحدث بعد ذلك؟",
      nextSteps: [
        "تراجع CareBridge طلبك العام ومعلومات الاتصال.",
        "يتواصل معك أحد أعضاء الفريق لمناقشة الأهلية والتفويض والتحقق من الخطة الصحية.",
        "تبدأ الخدمات فقط بعد تأكيد الأهلية والتفويض ومتطلبات الخطة المعمول بها.",
      ],
    },
    faq: {
      kicker: "الأسئلة الشائعة",
      heading: "أسئلة شائعة",
      items: [
        {
          question: "ماذا تقدم CareBridge Solutions؟",
          answer:
            "تقدم CareBridge خدمات مساعدة شخصية غير طبية لأعضاء Medicaid المؤهلين الذين يحتاجون إلى مساعدة في احتياجات الحياة اليومية ورعاية المرافق المعتمدة.",
        },
        {
          question: "هل CareBridge وكالة صحة منزلية طبية؟",
          answer:
            "تقدم CareBridge خدمات المساعدة الشخصية. نحن لا نقدم تمريضًا ماهرًا أو رعاية طوارئ أو رعاية طبية بمستوى المستشفى.",
        },
        {
          question: "هل أحتاج إلى تفويض من Medicaid؟",
          answer:
            "تتطلب العديد من الخدمات التحقق من الأهلية والتفويض وخطة خدمة معتمدة. يمكن لـ CareBridge المساعدة في شرح الخطوات التالية.",
        },
        {
          question: "هل يمكن لأفراد العائلة التواصل مع CareBridge؟",
          answer:
            "نعم. يمكن للأعضاء وممثلي العائلة ومديري الحالات وشركاء الإحالة التواصل مع CareBridge لمناقشة الخدمات المحتملة.",
        },
        {
          question: "هل تستخدم CareBridge نظام EVV؟",
          answer:
            "تتبع CareBridge متطلبات التحقق الإلكتروني من الزيارة للخدمات المغطاة عند انطباقها.",
        },
        {
          question: "هل يمكنني إرسال معلومات طبية خاصة عبر الموقع؟",
          answer:
            "يرجى تجنب إرسال معلومات طبية حساسة من خلال نموذج الموقع العام. يمكن لأحد أعضاء فريق CareBridge تقديم تعليمات مناسبة للخطوات التالية.",
        },
      ],
    },
    footer: {
      explore: "تصفح",
      contact: "اتصل",
      office: "المكتب",
      description: "خدمات مساعدة شخصية موثوقة في المنزل لأعضاء Texas Medicaid. تقدم CareBridge خدمات مساعدة شخصية غير طبية تركز على Texas Medicaid للأعضاء المؤهلين.",
      legal:
        "تقدم CareBridge Solutions LLC خدمات مساعدة شخصية غير طبية. يجب التحقق من الأهلية والتفويض والخدمات المغطاة وساعات الخدمة ومشاركة الخطة الصحية وحالة الاعتماد وتوفر الخدمة قبل بدء الخدمات. لا يضمن هذا الموقع أهلية Medicaid أو الموافقة أو التفويض.",
      privacyHeading: "إشعار الخصوصية",
      privacyText:
        "يرجى عدم إرسال معلومات طبية حساسة أو أرقام Medicaid أو أرقام الضمان الاجتماعي أو معلومات مصرفية أو معرفات خاصة من خلال نماذج الموقع العامة.",
      emergencyHeading: "إشعار الطوارئ",
      emergencyText:
        "لا تقدم CareBridge خدمات طبية طارئة. للحالات العاجلة أو المهددة للحياة، اتصل بـ 911.",
      rights: "جميع الحقوق محفوظة.",
    },
  },
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


function LanguageToggle({ language, onLanguageChange, compact = false }) {
  const t = getText(language);

  return (
    <div className={`language-toggle ${compact ? "language-toggle--compact" : ""}`} aria-label={t.languageToggleLabel}>
      <button
        type="button"
        className={`language-toggle__button ${language === "en" ? "is-active" : ""}`}
        aria-pressed={language === "en"}
        onClick={() => onLanguageChange("en")}
      >
        {compact ? languageOptions.en.shortLabel : t.switchToEnglish}
      </button>
      <button
        type="button"
        className={`language-toggle__button ${language === "ar" ? "is-active" : ""}`}
        aria-pressed={language === "ar"}
        onClick={() => onLanguageChange("ar")}
      >
        {compact ? languageOptions.ar.shortLabel : t.switchToArabic}
      </button>
    </div>
  );
}

function Header({ language, onLanguageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const t = getText(language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label={`${company.name} home`}>
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
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} compact />
          <a className="header-cta header-cta--mobile" href={`tel:${company.phoneHref}`} aria-label={`Call ${company.name}`}>
            <Icon name="phone" className="btn-icon" />
            {t.buttons.callNow}
          </a>
        </div>
      </div>
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
                <span className="status-badge">{plan.status}</span>
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
        <p className="referral-note long-copy">{t.referrals.requestText}</p>
        <div className="referral-note" aria-label={t.referrals.detailsLabel}>
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
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(t.contact.formSubject);
    const message = encodeURIComponent(
      [
        t.contact.mailHeader,
        "",
        `${t.contact.name}: ${form.get("name") || ""}`,
        `${t.contact.phone}: ${form.get("phone") || ""}`,
        `${t.contact.email}: ${form.get("email") || ""}`,
        `${t.contact.bestTime}: ${form.get("bestTime") || ""}`,
        `${t.contact.relationship}: ${form.get("relationship") || ""}`,
        "",
        `${t.contact.generalMessage}:`,
        form.get("message") || "",
        "",
        t.contact.privacyMailLine,
      ].join("\n")
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${message}`;
    setStatus(t.contact.success);
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
              <input id="privacy" type="checkbox" required />
              <label htmlFor="privacy">{t.contact.privacyAcknowledgement}</label>
            </div>

            <button className="btn btn-primary btn--full" type="submit">
              {t.buttons.requestContact}
            </button>

            <p className="form-privacy long-copy">{t.contact.urgentNotice}</p>

            {status ? <p className="form-success">{status}</p> : null}
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

function FAQSection({ t }) {
  const [open, setOpen] = useState(0);

  return (
    <AnimatedSection className="section section-white" id="faq">
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
  const [language, setLanguage] = useState("en");
  const t = getText(language);
  const direction = languageOptions[language]?.dir || "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
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
