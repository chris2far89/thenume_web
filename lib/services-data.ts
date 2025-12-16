export interface Service {
  id: string
  category: string
  title: string
  price: string
  description: string
  benefits: string[]
  details: string[]
  sessions?: string
  results?: string
  areas?: string[]
  bookingOptions?: { id: string; name: string; price: number }[]
}

export const services: Service[] = [
  {
    id: "consultation",
    category: "Consultation",
    title: "Professional Consultation",
    price: "Virtual: R250 | In-Person: R395",
    bookingOptions: [
      { id: "consultation-virtual", name: "Virtual Consultation", price: 250 },
      { id: "consultation-person", name: "In-Person Consultation", price: 395 }
    ],
    description: "We ensure every consultation is a premium, personalised experience designed to deliver real, transformative, and lasting results.",
    benefits: [
      "Expert assessment of your key concerns and goals",
      "Tailored treatment plan using advanced diagnostic insights",
      "Comprehensive home-care prescription",
      "Begin your transformation with confidence"
    ],
    details: [
      "Your dedicated skin technician or nurse will take the time to understand your key concerns, goals, and any challenges you've encountered.",
      "Using advanced diagnostic insights and professional expertise, we craft a comprehensive treatment plan designed exclusively for you.",
      "With our industry-leading technology, premium skincare solutions, and results-driven programmes, you are truly in the best hands."
    ]
  },
  {
    id: "fat-dissolving",
    category: "Body Sculpting",
    title: "Fat Dissolving Injections",
    price: "Lipo Vela V-Line (Face): R1050 | Lipo Vela (Body): From R1350 | Lemon Bottle: R2000",
    bookingOptions: [
      { id: "fat-dissolving-face", name: "Lipo Vela V-Line (Face)", price: 1050 },
      { id: "fat-dissolving-body", name: "Lipo Vela (Body)", price: 1350 },
      { id: "fat-dissolving-lemon", name: "Lemon Bottle", price: 2000 }
    ],
    description: "A non-surgical solution for a more sculpted, confident you. All treatments include complimentary cavitation, radio frequency, and G5 vibration therapy.",
    benefits: [
      "Smooth and contour the body",
      "Define facial features",
      "Eliminate stubborn fat deposits",
      "Boost confidence with your ideal silhouette"
    ],
    details: [
      "Injection Lipolysis targets and breaks down localized fat deposits by disrupting the fat cell membrane.",
      "Non-surgical, highly targeted, safe and effective treatment suitable for multiple areas.",
      "A local numbing agent is applied before treatment for your comfort.",
      "Treatments performed every 3 weeks, with 5–8 sessions recommended for optimal results."
    ],
    areas: ["Double chin", "Upper arms", "Buffalo hump", "Male chest fat", "Lower abdomen", "Muffin top", "Hips", "Inner thighs"]
  },
  {
    id: "fat-freeze",
    category: "Body Sculpting",
    title: "Fat Freeze (Cryolipolysis)",
    price: "One Applicator: R500 | Two Applicators: R1000",
    bookingOptions: [
      { id: "fat-freeze-one", name: "One Applicator", price: 500 },
      { id: "fat-freeze-two", name: "Two Applicators", price: 1000 }
    ],
    description: "A safe, non-invasive way to sculpt and refine your body using advanced cooling technology to freeze and destroy stubborn fat cells.",
    benefits: [
      "Natural fat reduction without surgery",
      "No downtime required",
      "Smooth, natural-looking results",
      "Skin tightens as fat reduces"
    ],
    details: [
      "Targeted area cooled to –7°C to –8°C to destroy fat cells without harming surrounding tissue.",
      "Body naturally eliminates frozen fat cells over time.",
      "Treatment frequency: Once a month.",
      "Visible results: 3–6 months, continued improvement up to 8 months."
    ],
    areas: ["Abdomen", "Flanks", "Love handles", "Inner thighs", "Bra-line fat", "Male chest"]
  },
  {
    id: "cavitation-rf-g5",
    category: "Body Sculpting",
    title: "Cavitation, Radio Frequency & G5 Slimming Combo",
    price: "R800",
    bookingOptions: [{ id: "cavitation-rf-g5", name: "Cavitation, RF & G5 Combo", price: 800 }],
    description: "A powerful, non-invasive body sculpting treatment designed to smooth, tighten, and redefine your shape. Includes FREE personalised meal plan.",
    benefits: [
      "Break down stubborn fat cells",
      "Tighten loose or sagging skin",
      "Reduce cellulite appearance",
      "Improve firmness and elasticity",
      "Boost circulation and lymphatic drainage"
    ],
    details: [
      "Cavitation uses low-frequency ultrasound waves to break apart fat cells.",
      "Radio Frequency stimulates collagen and elastin production for tighter skin.",
      "G5 uses rhythmic vibrations to break down fat, boost circulation, and reduce cellulite.",
      "Sessions performed once or twice a week for optimal results."
    ],
    sessions: "8–12 sessions recommended",
    results: "Visible changes after 3–5 sessions, dramatic improvements after full course"
  },
  {
    id: "cellulite-reduction",
    category: "Body Sculpting",
    title: "Cellulite Reduction Treatment",
    price: "R800",
    bookingOptions: [{ id: "cellulite-reduction", name: "Cellulite Reduction Treatment", price: 800 }],
    description: "Noticeably tighten, smooth, and refine your skin using Radiofrequency, G5 Vibration Therapy, and Cupping.",
    benefits: [
      "Tighten loose or sagging skin",
      "Smooth orange peel texture",
      "Break up tight fascia causing dimpling",
      "Increase lymphatic drainage",
      "Improve skin elasticity"
    ],
    details: [
      "RF strengthens and firms the skin, making the surface look smoother and tighter.",
      "G5 physically works on fibrous connective bands that create dimples.",
      "Cupping lifts skin and underlying tissues to break up tight fascia.",
      "Performed once or twice a week."
    ],
    sessions: "8–12 sessions",
    results: "Improvements visible in 3–4 sessions, full results after 6–12 sessions"
  },
  {
    id: "wood-therapy",
    category: "Body Sculpting",
    title: "Wood Therapy + G5 Vibration Combo",
    price: "R600",
    bookingOptions: [{ id: "wood-therapy", name: "Wood Therapy + G5 Combo", price: 600 }],
    description: "A powerful, natural, and non-invasive treatment for body contouring, slimming, and lymphatic drainage.",
    benefits: [
      "Break down stubborn fat deposits",
      "Stimulate lymphatic drainage",
      "Improve blood circulation",
      "Smooth cellulite and uneven texture",
      "Tighten and shape the body naturally"
    ],
    details: [
      "Wood Therapy uses specially shaped wooden tools to sculpt, tone, and smooth the body.",
      "G5 Vibration penetrates deeply to flush out toxins and excess fluids.",
      "Reduces bloating and gives a slimmer, more defined look.",
      "Performed once or twice a week."
    ],
    sessions: "8–12 sessions",
    results: "Visible changes after first treatment, full results after 6–12 sessions"
  },
  {
    id: "skin-tag-removal",
    category: "Skin Treatments",
    title: "Skin Tag Removal",
    price: "20 min: R650 | 40 min: R1000 | 1 hour: R1500",
    bookingOptions: [
      { id: "skin-tag-20", name: "20 minutes", price: 650 },
      { id: "skin-tag-40", name: "40 minutes", price: 1000 },
      { id: "skin-tag-60", name: "1 hour", price: 1500 }
    ],
    description: "Gentle and highly effective Dermapen Laser Skin Tag Removal. Includes FREE aftercare ointment.",
    benefits: [
      "Fast and safe removal",
      "Minimally invasive",
      "No cutting or trauma",
      "Suitable for most skin types",
      "Instantly smoother, clearer skin"
    ],
    details: [
      "Precise Dermapen laser targets the base of the skin tag.",
      "Topical numbing cream applied for comfort.",
      "Complimentary healing ointment included.",
      "No downtime required."
    ]
  },
  {
    id: "iv-drip",
    category: "Wellness",
    title: "IV Drip Therapy",
    price: "From R800",
    bookingOptions: [
      { id: "iv-glow", name: "Skin Lightening Glow Drip", price: 800 },
      { id: "iv-energy", name: "Energy Booster Drip", price: 900 },
      { id: "iv-sports", name: "Sports Recovery Drip", price: 1000 },
      { id: "iv-detox", name: "Detox Wellness Drip", price: 900 }
    ],
    description: "Fast-acting, deeply nourishing therapy delivering essential vitamins, minerals, and antioxidants directly into your bloodstream.",
    benefits: [
      "100% absorption of nutrients",
      "Immediate hydration and wellness boost",
      "Supports skin, health, immunity, and energy",
      "Tailored to your unique needs"
    ],
    details: [
      "Skin Lightening Glow Drip (R800): Glutathione + Vitamin C for brightening and detox",
      "Energy Booster Drip (R900): Vitamin C + B-Complex + B12 for energy and focus",
      "Sports Recovery Drip (R1000): Amino Acids + Magnesium + Calcium for performance",
      "Detox Wellness Drip (R900): Full-body cleanse and reset"
    ],
    sessions: "Once a week for 4–6 weeks, then maintenance",
    results: "Most clients feel results immediately or within 24 hours"
  },
  {
    id: "hair-restoration",
    category: "Hair & Scalp",
    title: "Deluxe Hair Restoration Treatment",
    price: "R1,200 per session | Full 12-session package: R12,000 (Save R2,400)",
    bookingOptions: [
      { id: "hair-single", name: "Single Session", price: 1200 },
      { id: "hair-package", name: "12-Session Package", price: 12000 }
    ],
    description: "Advanced non-surgical solution combining F.Plasma with Microneedling to repair, restore, and revitalise hair from the root.",
    benefits: [
      "Reawaken dormant hair follicles",
      "Boost blood circulation to scalp",
      "Encourage stronger, healthier hair growth",
      "Reduce inflammation and improve scalp health",
      "Thicken existing strands and improve density"
    ],
    details: [
      "F.Plasma releases controlled plasma energy to stimulate follicles.",
      "Microneedling creates micro-channels to boost collagen and nutrient delivery.",
      "Includes professional-grade hair-growth products.",
      "1 session per week for 12 sessions."
    ],
    sessions: "12 sessions (weekly)",
    results: "Improvements within 4–6 sessions, full transformation over 12 sessions"
  },
  {
    id: "nail-fungus",
    category: "Skin Treatments",
    title: "Nail Fungus Removal – Plasma Treatment",
    price: "R300 per session | Full 8-session package: R2,000 (Save R400)",
    bookingOptions: [
      { id: "nail-single", name: "Single Session", price: 300 },
      { id: "nail-package", name: "8-Session Package", price: 2000 }
    ],
    description: "Advanced plasma treatment to eliminate nail fungus. Includes take-home medication.",
    benefits: [
      "Kills fungus at the root",
      "Sanitises the nail bed",
      "Breaks down thick or damaged nail tissue",
      "Boosts blood flow for faster regrowth",
      "Safe and non-invasive"
    ],
    details: [
      "Plasma beam gently heats the nail to destroy fungal cells.",
      "Creates clean, antifungal environment for healthy growth.",
      "Includes home-care medication.",
      "Once per week for 8 sessions."
    ],
    sessions: "8 sessions (weekly)",
    results: "Improvement within 4–6 sessions, full transformation as nail grows out"
  },
  {
    id: "prp-vampire-facial",
    category: "Facial Treatments",
    title: "PRP Vampire Facial + LED Light Therapy",
    price: "Face: R2,000 | Face, Neck & Chest: R2,800",
    bookingOptions: [
      { id: "prp-face", name: "Face Only", price: 2000 },
      { id: "prp-full", name: "Face, Neck & Chest", price: 2800 }
    ],
    description: "Advanced anti-ageing treatment using your own blood plasma to naturally rejuvenate and repair the skin.",
    benefits: [
      "Improves fine lines & wrinkles",
      "Brightens dull or tired skin",
      "Tightens, firms & lifts the skin",
      "Reduces acne scarring",
      "Minimises pores",
      "Treats hyperpigmentation",
      "Boosts collagen & elastin production"
    ],
    details: [
      "Registered Nurse draws blood and extracts platelet-rich plasma.",
      "PRP applied during microneedling for deep penetration.",
      "LED Light Therapy speeds healing and reduces redness.",
      "Extremely safe and biocompatible – no chemicals or fillers."
    ],
    sessions: "4–8 treatments (one month apart)",
    results: "Visible improvement after 1 session, best results after full course"
  },
  {
    id: "microneedling-dermaplaning-led",
    category: "Facial Treatments",
    title: "Microneedling + Dermaplaning + LED Light Therapy Combo",
    price: "Full Face & Neck: R950 | Face, Neck & Chest: R1,500",
    bookingOptions: [
      { id: "microneedling-face-neck", name: "Face & Neck", price: 950 },
      { id: "microneedling-full", name: "Face, Neck & Chest", price: 1500 }
    ],
    description: "Powerful 3-in-1 skin rejuvenation treatment delivering smoother texture, brighter skin, and reduced scarring.",
    benefits: [
      "Deep exfoliation for ultra-smooth skin",
      "Stimulates collagen & elastin",
      "Brightens dull, uneven skin",
      "Reduces fine lines & wrinkles",
      "Shrinks enlarged pores",
      "Treats acne scarring & hyperpigmentation",
      "Removes peach fuzz for flawless finish"
    ],
    details: [
      "Dermaplaning removes dead skin cells and peach fuzz.",
      "Microneedling stimulates collagen and cell renewal.",
      "LED Light Therapy calms skin and speeds healing.",
      "Spaced 4 weeks apart."
    ],
    sessions: "6–8 sessions",
    results: "Instantly smoother, full results within 7–14 days"
  },
  {
    id: "pigmentation-brightening",
    category: "Facial Treatments",
    title: "Microneedling + Dermaplaning + Superficial Peel",
    price: "R1,750",
    bookingOptions: [{ id: "pigmentation-brightening", name: "Pigmentation Brightening Treatment", price: 1750 }],
    description: "Powerful brightening combo designed to lighten pigmentation, smooth texture, and rejuvenate the skin.",
    benefits: [
      "Brightens pigmentation",
      "Evens out skin tone",
      "Reduces dark marks & sun damage",
      "Stimulates collagen & firming",
      "Smooths texture & fine lines",
      "Minimizes pores"
    ],
    details: [
      "Dermaplaning removes surface pigmentation and dead skin.",
      "Microneedling breaks down pigmentation and stimulates renewal.",
      "Superficial Peel targets top layer of pigmentation.",
      "Once a month for best results."
    ],
    sessions: "6–8 sessions (monthly)",
    results: "Smoother and brighter immediately, pigmentation fades within 1–2 sessions"
  },
  {
    id: "acne-peel",
    category: "Facial Treatments",
    title: "Acne Peel + High Frequency Combo",
    price: "Face: R500 | Body: R950",
    bookingOptions: [
      { id: "acne-face", name: "Face", price: 500 },
      { id: "acne-body", name: "Body", price: 950 }
    ],
    description: "Effective treatment to calm inflammation, kill acne-causing bacteria, and restore clear, confident skin.",
    benefits: [
      "Kills acne-causing bacteria",
      "Reduces active breakouts",
      "Fades pigmentation & acne scars",
      "Improves texture & smoothness",
      "Minimizes pores",
      "Prevents new breakouts"
    ],
    details: [
      "Acne Chemical Peel deeply exfoliates and unclogs pores.",
      "High Frequency uses electrical currents to kill bacteria instantly.",
      "Must be repeated once a week.",
      "Suitable for face and body acne."
    ],
    sessions: "6–8 weekly sessions",
    results: "Improvements as early as 1–2 sessions"
  },
  {
    id: "glow-combo",
    category: "Facial Treatments",
    title: "Glow Combo",
    price: "R800",
    bookingOptions: [{ id: "glow-combo", name: "Glow Combo", price: 800 }],
    description: "Glow Peel + Dermaplaning + LED Light Therapy for brighter, smoother, pigmentation-free skin.",
    benefits: [
      "Brightens dull, uneven skin",
      "Reduces hyperpigmentation & dark marks",
      "Smooths and softens texture",
      "Minimizes fine lines",
      "Gives instant, healthy glow",
      "Zero downtime"
    ],
    details: [
      "Glow Peel fades hyperpigmentation and refreshes dull skin.",
      "Dermaplaning removes dead skin and peach fuzz.",
      "LED Light Therapy boosts collagen and brightens.",
      "Perfect before events or photoshoots."
    ],
    sessions: "Every 2 weeks",
    results: "Instant glow, best results after 6–8 sessions"
  },
  {
    id: "zena-algae-peel",
    category: "Facial Treatments",
    title: "Zena Algae Peel",
    price: "Face: R800 | Body: R1500",
    bookingOptions: [
      { id: "zena-face", name: "Face", price: 800 },
      { id: "zena-body", name: "Body", price: 1500 }
    ],
    description: "100% natural, non-chemical peel using algae-derived micro-needles to exfoliate, detoxify and stimulate collagen.",
    benefits: [
      "Smooth texture, fine lines & enlarged pores",
      "Brighten dull skin & boost radiance",
      "Reduce pigmentation, melasma & dark spots",
      "Treat acne & post-acne marks",
      "Fade stretch marks & scars",
      "Control excess oil"
    ],
    details: [
      "Natural algae spicules penetrate deep without burning.",
      "Skin gently peels for 3–5 days as new skin forms.",
      "Aftercare gel provided for first three days.",
      "Avoid direct sunlight and heat for one week."
    ],
    sessions: "3–6 sessions (4 weeks apart)",
    results: "Smoother, brighter skin by day 7"
  },
  {
    id: "anti-aging-rejuvenation",
    category: "Facial Treatments",
    title: "Anti-Aging Rejuvenation Treatment",
    price: "R1,800",
    bookingOptions: [{ id: "anti-aging", name: "Anti-Aging Rejuvenation", price: 1800 }],
    description: "Ultimate anti-aging treatment combining Microneedling + Dermaplaning + Dermapen Laser for face, neck, and chest.",
    benefits: [
      "Reduces fine lines & softens wrinkles",
      "Smooths rough texture and uneven tone",
      "Brightens dull, tired-looking skin",
      "Tightens and firms aging skin",
      "Fades sun damage & age spots",
      "Minimises enlarged pores",
      "Stimulates collagen for long-lasting results"
    ],
    details: [
      "Dermaplaning prepares skin and enhances absorption.",
      "Microneedling triggers collagen repair.",
      "Dermapen Laser boosts results at deeper level.",
      "Treats face, neck, and chest for complete rejuvenation."
    ],
    results: "Immediate glow + progressive rejuvenation over following weeks"
  },
  {
    id: "mens-detox-facial",
    category: "Facial Treatments",
    title: "Men's Detox Facial",
    price: "R850",
    bookingOptions: [{ id: "mens-detox", name: "Men's Detox Facial", price: 850 }],
    description: "Designed specifically for male skin: deep pore cleanse, dermaplaning, vacuum extraction, dermabrasion, and LED therapy.",
    benefits: [
      "Clears ingrown hairs & razor bumps",
      "Removes blackheads & congestion",
      "Controls oiliness",
      "Smooths rough texture",
      "Reduces inflammation & redness",
      "Rejuvenates tired-looking skin"
    ],
    details: [
      "Deep Pore Cleanse clears oil and impurities.",
      "Vacuum Extraction lifts blackheads without damage.",
      "Dermabrasion refines texture and smooths tone.",
      "LED Therapy calms inflammation and speeds healing."
    ],
    sessions: "Once a month for maintenance",
    results: "Cleaner, smoother, fresher skin immediately"
  },
  {
    id: "deep-cleanse-combo",
    category: "Facial Treatments",
    title: "Deep Cleanse + Extractions + High Frequency + LED",
    price: "R800",
    bookingOptions: [{ id: "deep-cleanse", name: "Deep Cleanse Combo", price: 800 }],
    description: "Ultimate solution for congested, dull, breakout-prone or sensitive skin.",
    benefits: [
      "Clears congestion",
      "Reduces bumps & breakouts",
      "Kills acne-causing bacteria",
      "Shrinks enlarged pores",
      "Calms inflammation",
      "Boosts collagen for smoother texture"
    ],
    details: [
      "Deep Cleanse removes oil, dirt, and impurities.",
      "Extractions remove blackheads and whiteheads safely.",
      "High Frequency kills bacteria and reduces redness.",
      "LED Light Therapy repairs and rejuvenates."
    ],
    results: "Clearer, smoother skin with healthy glow"
  },
  {
    id: "stretch-mark-removal",
    category: "Body Treatments",
    title: "Stretch Mark Removal Package",
    price: "8 Sessions: R8,800 | Pay Per Session: R1,500",
    bookingOptions: [
      { id: "stretch-single", name: "Single Session", price: 1500 },
      { id: "stretch-package", name: "8-Session Package", price: 8800 }
    ],
    description: "Microneedling + Dermapen Laser combination to fade and smooth stretch marks. Numbing cream provided.",
    benefits: [
      "Thickens weakened skin",
      "Softens appearance of stretch marks",
      "Smooths rough texture",
      "Improves colour and tone",
      "Rebuilds skin naturally",
      "Fades old and new marks"
    ],
    details: [
      "Microneedling activates collagen and elastin production.",
      "Dermapen Laser works deeper for faster results.",
      "Medical-grade numbing cream applied before each session.",
      "Sessions spaced safely apart for healing."
    ],
    sessions: "6–8 sessions",
    results: "Marks become lighter and less visible, skin feels firmer and smoother"
  },
  {
    id: "dark-knuckle-treatment",
    category: "Body Treatments",
    title: "Dark Knuckle Treatment",
    price: "R2,000 (Full 8-Session Package)",
    bookingOptions: [{ id: "dark-knuckle", name: "8-Session Package", price: 2000 }],
    description: "Specialised 8-session program to brighten, smooth, and even out dark knuckles.",
    benefits: [
      "Lightens dark pigmentation",
      "Softens rough, dry knuckles",
      "Boosts cell turnover",
      "Reveals smoother, even-toned skin",
      "Prevents return of darkening"
    ],
    details: [
      "Professional Peel applied once a week to lift pigmentation.",
      "High-Frequency Treatment improves circulation and product penetration.",
      "Structured 8-session program for progressive results.",
      "Consistency is key for best results."
    ],
    sessions: "8 sessions (weekly)",
    results: "Gradually brighter, smoother, lighter, and more even knuckles"
  }
]
