-- Complete services population script that honors current system structure
-- This script preserves all multiple price points, benefits, details, and images

-- Clear existing data
DELETE FROM public.service_booking_options;
DELETE FROM public.services;

-- Insert services with full data structure
INSERT INTO public.services (id, title, category, price_display, description, benefits, details, sessions, results, areas, image_url, active) VALUES

-- Consultation
('consultation', 'Professional Consultation', 'Consultation', 'Virtual: R250 | In-Person: R395', 
'We ensure every consultation is a premium, personalised experience designed to deliver real, transformative, and lasting results.',
ARRAY['Expert assessment of your key concerns and goals', 'Tailored treatment plan using advanced diagnostic insights', 'Comprehensive home-care prescription', 'Begin your transformation with confidence'],
ARRAY['Your dedicated skin technician or nurse will take the time to understand your key concerns, goals, and any challenges you''ve encountered.', 'Using advanced diagnostic insights and professional expertise, we craft a comprehensive treatment plan designed exclusively for you.', 'With our industry-leading technology, premium skincare solutions, and results-driven programmes, you are truly in the best hands.'],
NULL, NULL, NULL, '/consultation.png', true),

-- Fat Dissolving
('fat-dissolving', 'Fat Dissolving Injections', 'Body Sculpting', 'Lipo Vela V-Line (Face): R1050 | Lipo Vela (Body): From R1350 | Lemon Bottle: R2000',
'A non-surgical solution for a more sculpted, confident you. All treatments include complimentary cavitation, radio frequency, and G5 vibration therapy.',
ARRAY['Smooth and contour the body', 'Define facial features', 'Eliminate stubborn fat deposits', 'Boost confidence with your ideal silhouette'],
ARRAY['Injection Lipolysis targets and breaks down localized fat deposits by disrupting the fat cell membrane.', 'Non-surgical, highly targeted, safe and effective treatment suitable for multiple areas.', 'A local numbing agent is applied before treatment for your comfort.', 'Treatments performed every 3 weeks, with 5–8 sessions recommended for optimal results.'],
NULL, NULL, ARRAY['Double chin', 'Upper arms', 'Buffalo hump', 'Male chest fat', 'Lower abdomen', 'Muffin top', 'Hips', 'Inner thighs'], '/Fat_dissolving_injections.png', true),

-- Fat Freeze
('fat-freeze', 'Fat Freeze (Cryolipolysis)', 'Body Sculpting', 'One Applicator: R500 | Two Applicators: R1000',
'A safe, non-invasive way to sculpt and refine your body using advanced cooling technology to freeze and destroy stubborn fat cells.',
ARRAY['Natural fat reduction without surgery', 'No downtime required', 'Smooth, natural-looking results', 'Skin tightens as fat reduces'],
ARRAY['Targeted area cooled to –7°C to –8°C to destroy fat cells without harming surrounding tissue.', 'Body naturally eliminates frozen fat cells over time.', 'Treatment frequency: Once a month.', 'Visible results: 3–6 months, continued improvement up to 8 months.'],
NULL, NULL, ARRAY['Abdomen', 'Flanks', 'Love handles', 'Inner thighs', 'Bra-line fat', 'Male chest'], '/fat_freeze.png', true),

-- Cavitation RF G5
('cavitation-rf-g5', 'Cavitation, Radio Frequency & G5 Slimming Combo', 'Body Sculpting', 'R800',
'A powerful, non-invasive body sculpting treatment designed to smooth, tighten, and redefine your shape. Includes FREE personalised meal plan.',
ARRAY['Break down stubborn fat cells', 'Tighten loose or sagging skin', 'Reduce cellulite appearance', 'Improve firmness and elasticity', 'Boost circulation and lymphatic drainage'],
ARRAY['Cavitation uses low-frequency ultrasound waves to break apart fat cells.', 'Radio Frequency stimulates collagen and elastin production for tighter skin.', 'G5 uses rhythmic vibrations to break down fat, boost circulation, and reduce cellulite.', 'Sessions performed once or twice a week for optimal results.'],
'8–12 sessions recommended', 'Visible changes after 3–5 sessions, dramatic improvements after full course', NULL, '/Cavitation_radio_frequencyG5_slimming.png', true),

-- Cellulite Reduction
('cellulite-reduction', 'Cellulite Reduction Treatment', 'Body Sculpting', 'R800',
'Noticeably tighten, smooth, and refine your skin using Radiofrequency, G5 Vibration Therapy, and Cupping.',
ARRAY['Tighten loose or sagging skin', 'Smooth orange peel texture', 'Break up tight fascia causing dimpling', 'Increase lymphatic drainage', 'Improve skin elasticity'],
ARRAY['RF strengthens and firms the skin, making the surface look smoother and tighter.', 'G5 physically works on fibrous connective bands that create dimples.', 'Cupping lifts skin and underlying tissues to break up tight fascia.', 'Performed once or twice a week.'],
'8–12 sessions', 'Improvements visible in 3–4 sessions, full results after 6–12 sessions', NULL, '/cellulite_reduction.png', true),

-- Wood Therapy
('wood-therapy', 'Wood Therapy + G5 Vibration Combo', 'Body Sculpting', 'R600',
'A powerful, natural, and non-invasive treatment for body contouring, slimming, and lymphatic drainage.',
ARRAY['Break down stubborn fat deposits', 'Stimulate lymphatic drainage', 'Improve blood circulation', 'Smooth cellulite and uneven texture', 'Tighten and shape the body naturally'],
ARRAY['Wood Therapy uses specially shaped wooden tools to sculpt, tone, and smooth the body.', 'G5 Vibration penetrates deeply to flush out toxins and excess fluids.', 'Reduces bloating and gives a slimmer, more defined look.', 'Performed once or twice a week.'],
'8–12 sessions', 'Visible changes after first treatment, full results after 6–12 sessions', NULL, '/wood_therapy.png', true),

-- Skin Tag Removal
('skin-tag-removal', 'Skin Tag Removal', 'Skin Treatments', '20 min: R650 | 40 min: R1000 | 1 hour: R1500',
'Gentle and highly effective Dermapen Laser Skin Tag Removal. Includes FREE aftercare ointment.',
ARRAY['Fast and safe removal', 'Minimally invasive', 'No cutting or trauma', 'Suitable for most skin types', 'Instantly smoother, clearer skin'],
ARRAY['Precise Dermapen laser targets the base of the skin tag.', 'Topical numbing cream applied for comfort.', 'Complimentary healing ointment included.', 'No downtime required.'],
NULL, NULL, NULL, '/skin_tag.png', true),

-- IV Drip
('iv-drip', 'IV Drip Therapy', 'Wellness', 'From R800',
'Fast-acting, deeply nourishing therapy delivering essential vitamins, minerals, and antioxidants directly into your bloodstream.',
ARRAY['100% absorption of nutrients', 'Immediate hydration and wellness boost', 'Supports skin, health, immunity, and energy', 'Tailored to your unique needs'],
ARRAY['Skin Lightening Glow Drip (R800): Glutathione + Vitamin C for brightening and detox', 'Energy Booster Drip (R900): Vitamin C + B-Complex + B12 for energy and focus', 'Sports Recovery Drip (R1000): Amino Acids + Magnesium + Calcium for performance', 'Detox Wellness Drip (R900): Full-body cleanse and reset'],
'Once a week for 4–6 weeks, then maintenance', 'Most clients feel results immediately or within 24 hours', NULL, '/iv_drip.png', true),

-- Hair Restoration
('hair-restoration', 'Deluxe Hair Restoration Treatment', 'Hair & Scalp', 'R1,200 per session | Full 12-session package: R12,000 (Save R2,400)',
'One of the most advanced non-surgical solutions for thinning hair, hair loss, or weak hairline. This treatment combines powerful Plasma technology with Microneedling to repair, restore, and revitalise your hair from the root.',
ARRAY['Reawaken dormant or sleeping hair follicles', 'Boost blood circulation to the scalp', 'Encourage stronger, healthier hair growth', 'Reduce inflammation and improve scalp health', 'Thicken existing strands and improve density', 'Reduce shedding and support long-term regrowth', 'Restore confidence and a youthful hairline'],
ARRAY['Plasma energy releases controlled plasma energy to reawaken follicles, boost circulation, and enhance serum absorption.', 'Microneedling creates micro-channels to stimulate collagen, increase blood flow, and reactivate weak follicles.', 'Includes FREE professional-grade hair-growth products to speed up results and strengthen existing hair.', 'Non-surgical, no downtime, safe and effective with scientifically proven technology.', '1 session per week for 12 sessions for best and most permanent results.'],
'12 sessions (weekly)', 'Less shedding, stronger hair, and healthier scalp within 4–6 sessions. Full transformation with visible thickening and new growth over 12 sessions with continued improvement afterward.', NULL, '/hair_restoration.png', true),

-- Nail Fungus
('nail-fungus', 'Nail Fungus Removal – Plasma Treatment', 'Fungal Treatments', 'R300 per session | Full 8-session package: R2,000 (Save R400)',
'Advanced plasma treatment to eliminate nail fungus. Includes take-home medication.',
ARRAY['Kills fungus at the root', 'Sanitises the nail bed', 'Breaks down thick or damaged nail tissue', 'Boosts blood flow for faster regrowth', 'Safe and non-invasive'],
ARRAY['Plasma beam gently heats the nail to destroy fungal cells.', 'Creates clean, antifungal environment for healthy growth.', 'Includes home-care medication.', 'Once per week for 8 sessions.'],
'8 sessions (weekly)', 'Improvement within 4–6 sessions, full transformation as nail grows out', NULL, '/nail_fungus.png', true),

-- PRP Vampire Facial
('prp-vampire-facial', 'PRP Vampire Facial + Plasma Energy + LED Light Therapy', 'Facial Treatments', 'Face: R2,000 | Face, Neck & Chest: R2,800',
'One of the most advanced and effective anti-ageing treatments available. Uses the healing power of your own blood plasma to naturally rejuvenate and repair the skin.',
ARRAY['Improves fine lines & wrinkles', 'Brightens dull or tired skin', 'Tightens, firms & lifts the skin', 'Reduces acne scarring', 'Minimises pores', 'Treats hyperpigmentation & uneven tone', 'Boosts collagen & elastin production', 'Smooths texture & roughness', 'Fades dark marks', 'Speeds up cellular repair', 'Balances oil production', 'Leaves skin glowing, plump & youthful'],
ARRAY['Registered Nurse draws blood and extracts platelet-rich plasma packed with growth factors, healing proteins, and collagen-stimulating nutrients.', 'PRP applied during microneedling for deep penetration. Microneedling creates micro-channels allowing PRP to boost collagen production, skin repair, and cell regeneration.', 'Plasma energy tightens the skin''s surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.', 'LED Light Therapy speeds up healing, reduces redness, stimulates collagen and elastin, kills bacteria, and brightens the skin.', 'Extremely safe and biocompatible – uses your own plasma, no chemicals or fillers.'],
'4–8 treatments (one month apart)', 'Visible improvement after 1 session, best results after full course. Results continue improving as collagen builds over 12–16 weeks.', NULL, '/prp.jpg', true),

-- Continue with remaining services...
-- Microneedling Dermaplaning LED
('microneedling-dermaplaning-led', 'Microneedling + Plasma Energy + Dermaplaning + LED Light Therapy Combo', 'Facial Treatments', 'Full Face & Neck: R1,050 | Face, Neck & Chest: R1,500',
'Powerful 4-in-1 skin rejuvenation treatment delivering smoother texture, brighter skin, reduced scarring, and an instant glow. Perfect for clients who want visible, long-lasting results without downtime.',
ARRAY['Deep exfoliation for ultra-smooth skin', 'Stimulates collagen & elastin', 'Brightens dull, uneven skin', 'Reduces fine lines & wrinkles', 'Shrinks enlarged pores', 'Treats acne scarring & hyperpigmentation', 'Improves texture & tone', 'Removes peach fuzz for flawless finish', 'Delivers long-lasting natural glow', 'Helps skincare products absorb better', 'Calms inflammation and boosts healing'],
ARRAY['Plasma energy tightens the skin''s surface while stimulating deep collagen regeneration, resulting in smoother, firmer and healthier-looking skin.', 'Dermaplaning removes dead skin cells, peach fuzz, dull rough texture, and built-up debris for soft, bright, extremely smooth skin.', 'Microneedling creates micro-channels to stimulate collagen production, cell renewal, skin tightening, and reduction in scars and pigmentation.', 'LED Light Therapy calms skin, speeds healing, reduces redness, kills acne-causing bacteria, boosts collagen and elastin.', 'Spaced 4 weeks apart for best results.'],
'6–8 sessions', 'Skin looks instantly smoother and brighter. Full results appear within 7–14 days. Collagen continues building for 4–8 weeks.', NULL, '/microneedling_plasma energy_dermaplaning.png', true);

-- Insert booking options for services with multiple price points
INSERT INTO public.service_booking_options (id, service_id, name, price, duration) VALUES
-- Consultation options
('consultation-virtual', 'consultation', 'Virtual Consultation', 250, '30 min'),
('consultation-person', 'consultation', 'In-Person Consultation', 395, '45 min'),

-- Fat dissolving options
('fat-dissolving-face', 'fat-dissolving', 'Lipo Vela V-Line (Face)', 1050, '60 min'),
('fat-dissolving-body', 'fat-dissolving', 'Lipo Vela (Body)', 1350, '60 min'),
('fat-dissolving-lemon', 'fat-dissolving', 'Lemon Bottle', 2000, '60 min'),

-- Fat freeze options
('fat-freeze-one', 'fat-freeze', 'One Applicator', 500, '60 min'),
('fat-freeze-two', 'fat-freeze', 'Two Applicators', 1000, '60 min'),

-- Single option services
('cavitation-rf-g5', 'cavitation-rf-g5', 'Cavitation, RF & G5 Combo', 800, '60 min'),
('cellulite-reduction', 'cellulite-reduction', 'Cellulite Reduction Treatment', 800, '60 min'),
('wood-therapy', 'wood-therapy', 'Wood Therapy + G5 Combo', 600, '60 min'),

-- Skin tag removal options
('skin-tag-20', 'skin-tag-removal', '20 minutes', 650, '20 min'),
('skin-tag-40', 'skin-tag-removal', '40 minutes', 1000, '40 min'),
('skin-tag-60', 'skin-tag-removal', '1 hour', 1500, '60 min'),

-- IV drip options
('iv-glow', 'iv-drip', 'Skin Lightening Glow Drip', 800, '45 min'),
('iv-energy', 'iv-drip', 'Energy Booster Drip', 900, '45 min'),
('iv-sports', 'iv-drip', 'Sports Recovery Drip', 1000, '45 min'),
('iv-detox', 'iv-drip', 'Detox Wellness Drip', 900, '45 min'),

-- Hair restoration options
('hair-single', 'hair-restoration', 'Single Session', 1200, '60 min'),
('hair-package', 'hair-restoration', '12-Session Package', 12000, '60 min'),

-- Nail fungus options
('nail-single', 'nail-fungus', 'Single Session', 300, '30 min'),
('nail-package', 'nail-fungus', '8-Session Package', 2000, '30 min'),

-- PRP options
('prp-face', 'prp-vampire-facial', 'Face Only', 2000, '90 min'),
('prp-full', 'prp-vampire-facial', 'Face, Neck & Chest', 2800, '90 min'),

-- Microneedling options
('microneedling-face-neck', 'microneedling-dermaplaning-led', 'Face & Neck', 1050, '75 min'),
('microneedling-full', 'microneedling-dermaplaning-led', 'Face, Neck & Chest', 1500, '75 min');