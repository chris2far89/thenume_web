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
    description: "One of the most advanced non-surgical solutions for thinning hair, hair loss, or weak hairline. This treatment combines powerful Plasma technology with Microneedling to repair, restore, and revitalise your hair from the root.",
    benefits: [
      "Reawaken dormant or sleeping hair follicles",
      "Boost blood circulation to the scalp",
      "Encourage stronger, healthier hair growth",
      "Reduce inflammation and improve scalp health",
      "Thicken existing strands and improve density",
      "Reduce shedding and support long-term regrowth",
      "Restore confidence and a youthful hairline"
    ],
    details: [
      "Plasma energy releases controlled plasma energy to reawaken follicles, boost circulation, and enhance serum absorption.",
      "Microneedling creates micro-channels to stimulate collagen, increase blood flow, and reactivate weak follicles.",
      "Includes FREE professional-grade hair-growth products to speed up results and strengthen existing hair.",
      "Non-surgical, no downtime, safe and effective with scientifically proven technology.",
      "1 session per week for 12 sessions for best and most permanent results."
    ],
    sessions: "12 sessions (weekly)",
    results: "Less shedding, stronger hair, and healthier scalp within 4–6 sessions. Full transformation with visible thickening and new growth over 12 sessions with continued improvement afterward."
  },
  {
    id: "nail-fungus",
    category: "Fungal Treatments",
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
    title: "PRP Vampire Facial + Plasma Energy + LED Light Therapy",
    price: "Face: R2,000 | Face, Neck & Chest: R2,800",
    bookingOptions: [
      { id: "prp-face", name: "Face Only", price: 2000 },
      { id: "prp-full", name: "Face, Neck & Chest", price: 2800 }
    ],
    description: "One of the most advanced and effective anti-ageing treatments available. Uses the healing power of your own blood plasma to naturally rejuvenate and repair the skin.",
    benefits: [
      "Improves fine lines & wrinkles",
      "Brightens dull or tired skin",
      "Tightens, firms & lifts the skin",
      "Reduces acne scarring",
      "Minimises pores",
      "Treats hyperpigmentation & uneven tone",
      "Boosts collagen & elastin production",
      "Smooths texture & roughness",
      "Fades dark marks",
      "Speeds up cellular repair",
      "Balances oil production",
      "Leaves skin glowing, plump & youthful"
    ],
    details: [
      "Registered Nurse draws blood and extracts platelet-rich plasma packed with growth factors, healing proteins, and collagen-stimulating nutrients.",
      "PRP applied during microneedling for deep penetration. Microneedling creates micro-channels allowing PRP to boost collagen production, skin repair, and cell regeneration.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "LED Light Therapy speeds up healing, reduces redness, stimulates collagen and elastin, kills bacteria, and brightens the skin.",
      "Extremely safe and biocompatible – uses your own plasma, no chemicals or fillers."
    ],
    sessions: "4–8 treatments (one month apart)",
    results: "Visible improvement after 1 session, best results after full course. Results continue improving as collagen builds over 12–16 weeks."
  },
  {
    id: "microneedling-dermaplaning-led",
    category: "Facial Treatments",
    title: "Microneedling + Plasma Energy + Dermaplaning + LED Light Therapy Combo",
    price: "Full Face & Neck: R1,050 | Face, Neck & Chest: R1,500",
    bookingOptions: [
      { id: "microneedling-face-neck", name: "Face & Neck", price: 1050 },
      { id: "microneedling-full", name: "Face, Neck & Chest", price: 1500 }
    ],
    description: "Powerful 4-in-1 skin rejuvenation treatment delivering smoother texture, brighter skin, reduced scarring, and an instant glow. Perfect for clients who want visible, long-lasting results without downtime.",
    benefits: [
      "Deep exfoliation for ultra-smooth skin",
      "Stimulates collagen & elastin",
      "Brightens dull, uneven skin",
      "Reduces fine lines & wrinkles",
      "Shrinks enlarged pores",
      "Treats acne scarring & hyperpigmentation",
      "Improves texture & tone",
      "Removes peach fuzz for flawless finish",
      "Delivers long-lasting natural glow",
      "Helps skincare products absorb better",
      "Calms inflammation and boosts healing"
    ],
    details: [
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Dermaplaning removes dead skin cells, peach fuzz, dull rough texture, and built-up debris for soft, bright, extremely smooth skin.",
      "Microneedling creates micro-channels to stimulate collagen production, cell renewal, skin tightening, and reduction in scars and pigmentation.",
      "LED Light Therapy calms skin, speeds healing, reduces redness, kills acne-causing bacteria, boosts collagen and elastin.",
      "Spaced 4 weeks apart for best results."
    ],
    sessions: "6–8 sessions",
    results: "Skin looks instantly smoother and brighter. Full results appear within 7–14 days. Collagen continues building for 4–8 weeks."
  },
  {
    id: "pigmentation-brightening",
    category: "Facial Treatments",
    title: "Microneedling + Plasma Energy + Dermaplaning + Superficial Peel",
    price: "R1,750",
    bookingOptions: [{ id: "pigmentation-brightening", name: "Pigmentation Brightening Treatment", price: 1750 }],
    description: "Powerful, glow-boosting combo designed to lighten pigmentation, smooth texture, and rejuvenate the skin. Works on every layer of the skin to brighten, smooth, and restore your natural radiance.",
    benefits: [
      "Brightens pigmentation",
      "Evens out skin tone",
      "Reduces dark marks & sun damage",
      "Stimulates collagen & firming",
      "Smooths texture & fine lines",
      "Minimizes pores",
      "Removes dead skin & peach fuzz",
      "Speeds up cellular turnover",
      "Gives natural, radiant glow",
      "Helps skincare products absorb deeper"
    ],
    details: [
      "Dermaplaning gently removes dead skin buildup, surface pigmentation, dull rough texture, and peach fuzz.",
      "Microneedling creates micro-channels to stimulate collagen production, faster skin cell renewal, breakdown of pigmentation, and smoother texture.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Superficial Peel targets the top layer of pigmentation, breaking it down and encouraging new, brighter skin to shine through.",
      "Once a month for best and long-lasting results."
    ],
    sessions: "6–8 sessions (monthly)",
    results: "Skin looks smoother and brighter immediately. Pigmentation begins to fade within 1–2 sessions. Best results after 6-8 monthly sessions."
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
    description: "Glow Peel + Plasma Energy + Dermaplaning + LED Light Therapy. Your instant glow-up treatment for brighter, smoother, pigmentation-free skin.",
    benefits: [
      "Brightens dull, uneven skin",
      "Reduces hyperpigmentation & dark marks",
      "Smooths and softens texture",
      "Minimizes fine lines",
      "Gives instant, healthy glow",
      "Improves overall clarity and radiance",
      "Enhances product absorption",
      "Zero downtime – walk out glowing"
    ],
    details: [
      "Glow Peel is a gentle brightening peel that fades hyperpigmentation, lightens dark marks, improves uneven tone, and refreshes dull or sun-damaged skin.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Dermaplaning gently exfoliates to remove dead skin buildup, dull dry texture, surface debris, and peach fuzz.",
      "LED Light Therapy boosts collagen, brightens skin, improves healing, reduces inflammation, and gives beautiful post-treatment glow.",
      "Perfect before events, photoshoots, or when you want your skin to look its absolute best."
    ],
    sessions: "Every 2 weeks",
    results: "Instant glow. Best results after 6–8 sessions, especially for pigmentation concerns."
  },
  {
    id: "zena-algae-peel",
    category: "Facial Treatments",
    title: "Zena Algae Peel + Plasma Energy + LED Light Therapy",
    price: "Face: R800 | Body: R1,500",
    bookingOptions: [
      { id: "zena-face", name: "Face", price: 800 },
      { id: "zena-body", name: "Body", price: 1500 }
    ],
    description: "100% natural, non-chemical peel using algae-derived micro-needles to exfoliate, detoxify and stimulate collagen. Does NOT burn or damage the skin.",
    benefits: [
      "Smooth texture, fine lines & enlarged pores",
      "Brighten dull skin & boost radiance",
      "Reduce pigmentation, melasma & dark spots",
      "Treat acne, breakouts & post-acne marks",
      "Improve sagging or sun-damaged skin",
      "Fade pigmentation & scars",
      "Control excess oil"
    ],
    details: [
      "Natural algae spicules safely penetrate deep into skin to exfoliate, detoxify and stimulate collagen from within – no burning or harsh reactions.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Skin becomes dry and gently peels for 3–5 days as new skin forms. By day 7, expect smoother, brighter, healthier-looking skin.",
      "Aftercare gel provided for first three days.",
      "Avoid direct sunlight, heat and steam for about a week, and allow skin to peel naturally."
    ],
    sessions: "3–6 sessions (4 weeks apart)",
    results: "Fresh, renewed skin after just one peel. Visible improvements even after first peel, with better results over multiple sessions."
  },
  {
    id: "anti-aging-rejuvenation",
    category: "Facial Treatments",
    title: "Anti-Aging Rejuvenation Treatment",
    price: "R1,800",
    bookingOptions: [{ id: "anti-aging", name: "Anti-Aging Rejuvenation", price: 1800 }],
    description: "Get younger, smoother, healthier-looking skin with our ultimate anti-aging treatment. This powerful combination targets fine lines, wrinkles, texture, and uneven complexion by working on multiple layers of the skin in one session. Includes: Face • Neck • Chest • Hands.",
    benefits: [
      "Reduces fine lines & softens deeper wrinkles",
      "Smooths rough texture and uneven skin tone",
      "Brightens dull, tired-looking skin",
      "Tightens and firms aging or sagging skin",
      "Fades sun damage, pigmentation & age spots",
      "Minimises enlarged pores and refines complexion",
      "Stimulates collagen and elastin for long-lasting results",
      "Promotes healthier, stronger, more radiant skin",
      "Gives immediate glow + long-term anti-aging improvement"
    ],
    details: [
      "Dermaplaning gently removes dead skin + peach fuzz for instant smoothness and better absorption of active ingredients.",
      "Microneedling creates micro-channels that boost collagen, tighten the skin, and improve texture, firmness, and elasticity.",
      "Dermapen Laser delivers advanced skin rejuvenation, stimulates deeper collagen, brightens pigmentation, and improves overall skin tone.",
      "Plasma uses controlled and precise spark of plasma energy to tighten the skin, stimulate deep collagen, and repair skin.",
      "These four technologies work synergistically for maximum anti-aging results.",
      "Treats face, neck, chest, and hands for fully rejuvenated, even-toned, youthful appearance."
    ],
    results: "Delivers both instant visible results and progressive rejuvenation over the following weeks"
  },
  {
    id: "mens-detox-facial",
    category: "Men's Treatments",
    title: "Men's Detox Facial",
    price: "R850",
    bookingOptions: [{ id: "mens-detox", name: "Men's Detox Facial", price: 850 }],
    description: "Designed specifically for male skin: thicker, oilier, and more prone to clogged pores, ingrown hairs, rough texture, and dullness. This treatment leaves your skin fresh, clean, smooth, and rejuvenated.",
    benefits: [
      "Clears ingrown hairs & razor bumps",
      "Removes blackheads, whiteheads & enlarged pores",
      "Controls oiliness, congestion & stubborn buildup",
      "Smooths rough texture & uneven complexion",
      "Reduces inflammation & redness",
      "Treats dull, tired-looking skin",
      "Addresses early signs of aging",
      "Improves skin rejuvenation & circulation"
    ],
    details: [
      "Deep Pore Cleanse clears oil, dirt, sweat buildup and impurities trapped in the pores.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Dermaplaning removes dead skin and peach fuzz for a smoother, cleaner surface and brighter complexion.",
      "Vacuum Extraction gently lifts blackheads, congestion and buildup without damaging the skin.",
      "Dermabrasion refines texture, softens roughness and smooths uneven tone for healthier-looking skin.",
      "LED-Like Therapy calms inflammation, speeds healing, reduces redness and boosts skin renewal."
    ],
    sessions: "Once a month for maintenance",
    results: "Skin looks cleaner, smoother, fresher and more revitalised immediately after the session"
  },
  {
    id: "mens-bald-head-facial",
    category: "Men's Treatments",
    title: "Men's Bald Head Facial",
    price: "R400",
    bookingOptions: [{ id: "mens-bald-head", name: "Men's Bald Head Facial", price: 400 }],
    description: "This treatment can hydrate your scalp, remove flakes, and eliminate itching. While also treating ingrown hairs and bumps. Treatment leaves your skin fresh, clean, smooth, and rejuvenated — all in one powerful session.",
    benefits: [
      "Clears ingrown hairs & razor bumps",
      "Removes congestion & stubborn buildup",
      "Brightens dull, tired-looking skin",
      "Smooths rough texture & uneven skin",
      "Reduces inflammation & redness",
      "Improves skin rejuvenation & circulation",
      "Prevents razor bumps and irritation"
    ],
    details: [
      "Deep Cleanse clears dead skin, dirt, sweat buildup and impurities.",
      "Dermaplaning removes dead skin and hair for a smoother, cleaner surface and brighter even skin.",
      "Dermabrasion exfoliates, refines texture, softens and smooths uneven tone for healthier-looking skin.",
      "High Frequency kills bacteria and reduces inflammation around freshly cut hair follicles, preventing razor bumps and ingrown hairs.",
      "Repeat once or twice a month for maintenance and to keep skin looking youthful and well-groomed."
    ],
    sessions: "Once or twice a month",
    results: "Scalp looks cleaner, smoother, fresher and more revitalised immediately after the session"
  },
  {
    id: "deep-cleanse-combo",
    category: "Facial Treatments",
    title: "Deep Cleanse + Plasma Energy + High Frequency + LED Light Therapy",
    price: "R800",
    bookingOptions: [{ id: "deep-cleanse", name: "Deep Cleanse Combo", price: 800 }],
    description: "Ultimate solution for congested, dull, breakout-prone or sensitive skin. Each step targets a different layer of the skin, giving you a complete deep-cleaning and healing experience.",
    benefits: [
      "Clears congestion",
      "Reduces bumps & breakouts",
      "Kills acne-causing bacteria",
      "Shrinks enlarged pores",
      "Prevents future breakouts",
      "Minimises pores",
      "Reduces redness and irritation",
      "Stimulates circulation for healthy glow",
      "Calms inflammation",
      "Speeds up skin healing",
      "Boosts collagen for smoother texture",
      "Brightens and evens complexion",
      "Reduces sensitivity"
    ],
    details: [
      "Deep Cleanse removes oil, dirt, sweat, sunscreen buildup and impurities trapped inside the pores.",
      "Plasma energy tightens the skin's surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.",
      "Extractions manually and gently remove blackheads, whiteheads and clogged pores safely and cleanly.",
      "High Frequency uses safe oxygenating currents to kill bacteria, calm inflammation, speed healing, reduce active breakouts, shrink pores, and prevent future pimples.",
      "LED Light Therapy works on cellular level to repair, rejuvenate and balance the skin, calming inflammation and helping with acne, redness, and marks."
    ],
    results: "Clearer, smoother skin with clean, fresh, healthy glow. Suitable for all skin types, including sensitive and acne-prone skin."
  },
,
  {
    id: "dark-knuckle-treatment",
    category: "Skin Treatments",
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
  },
  {
    id: "stretch-mark-removal",
    category: "Skin Treatments",
    title: "Stretch Mark Removal Package",
    price: "8 Sessions: R8,800 | Pay Per Session: R1,500",
    bookingOptions: [
      { id: "stretch-single", name: "Single Session", price: 1500 },
      { id: "stretch-package", name: "8-Session Package", price: 8800 }
    ],
    description: "Microneedling + Plasma energy + Dermapen Laser combination treatment. Works from the inside out to rebuild skin where collagen has broken down. Numbing cream provided before every session for comfort.",
    benefits: [
      "Thickens weakened skin",
      "Softens the appearance of stretch marks",
      "Smooths rough or stretched texture",
      "Improves colour and tone",
      "Rebuilds the skin naturally",
      "Fades old and new stretch marks",
      "Firms loose, stretched skin",
      "Speeds up healing"
    ],
    details: [
      "Microneedling creates controlled micro-channels to activate collagen and elastin production, thickening weakened skin.",
      "Plasma energy tightens the top layer of skin instantly, making stretch marks appear narrower, firmer, and less deep.",
      "Dermapen Laser works deeper than microneedling to boost skin regeneration, fade marks, and brighten discoloured areas.",
      "Medical-grade numbing cream applied before each session for comfort.",
      "Sessions spaced safely apart to allow healing and collagen rebuilding.",
      "8-session package saves R3,200 compared to paying per session."
    ],
    sessions: "6–8 sessions",
    results: "Stretch marks become lighter and less visible, skin feels firmer and smoother, colour blends more naturally, lines appear softer and shallower. Improvements visible in 3–4 sessions, full results after 6–12 sessions."
  }
]
