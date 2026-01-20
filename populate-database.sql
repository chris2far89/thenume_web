-- Populate services table with current website content
INSERT INTO public.services (id, title, category, price, duration, description, active) VALUES
-- Consultation
('consultation-virtual', 'Virtual Consultation', 'Consultation', 250, '30 min', 'Professional virtual consultation with our wellness experts', true),
('consultation-person', 'In-Person Consultation', 'Consultation', 395, '45 min', 'Comprehensive in-person consultation and assessment', true),

-- Body Sculpting
('fat-dissolving-face', 'Lipo Vela V-Line (Face)', 'Body Sculpting', 1050, '60 min', 'Advanced facial contouring treatment for V-line definition', true),
('fat-dissolving-body', 'Lipo Vela (Body)', 'Body Sculpting', 1350, '60 min', 'Body contouring treatment for targeted fat reduction', true),
('fat-dissolving-lemon', 'Lemon Bottle', 'Body Sculpting', 2000, '60 min', 'Premium fat dissolving treatment using Lemon Bottle technology', true),
('fat-freeze-one', 'Fat Freeze (One Applicator)', 'Body Sculpting', 500, '60 min', 'Cryolipolysis treatment with single applicator', true),
('fat-freeze-two', 'Fat Freeze (Two Applicators)', 'Body Sculpting', 1000, '60 min', 'Enhanced cryolipolysis treatment with dual applicators', true),
('cavitation-rf-g5', 'Cavitation, RF & G5 Combo', 'Body Sculpting', 800, '60 min', 'Comprehensive body sculpting combination treatment', true),
('cellulite-reduction', 'Cellulite Reduction', 'Body Sculpting', 800, '60 min', 'Specialized treatment for cellulite reduction and skin smoothing', true),
('wood-therapy', 'Wood Therapy + G5', 'Body Sculpting', 600, '60 min', 'Traditional wood therapy combined with G5 massage', true),

-- Facial Treatments
('prp-face', 'PRP Vampire Facial (Face)', 'Facial Treatments', 2000, '90 min', 'Regenerative facial treatment using your own platelet-rich plasma', true),
('prp-full', 'PRP Vampire Facial (Face, Neck & Chest)', 'Facial Treatments', 2800, '90 min', 'Comprehensive PRP treatment for face, neck and chest', true),
('microneedling-face-neck', 'Microneedling + Dermaplaning + LED (Face & Neck)', 'Facial Treatments', 1050, '75 min', 'Complete facial rejuvenation treatment with LED therapy', true),
('microneedling-full', 'Microneedling + Dermaplaning + LED (Face, Neck & Chest)', 'Facial Treatments', 1500, '75 min', 'Full upper body skin rejuvenation treatment', true),
('pigmentation-brightening', 'Pigmentation Brightening Treatment', 'Facial Treatments', 1750, '75 min', 'Advanced treatment for pigmentation and skin brightening', true),
('acne-face', 'Acne Peel + High Frequency (Face)', 'Facial Treatments', 500, '45 min', 'Targeted acne treatment for facial skin', true),
('acne-body', 'Acne Peel + High Frequency (Body)', 'Facial Treatments', 950, '60 min', 'Body acne treatment for back and chest areas', true),
('glow-combo', 'Glow Combo', 'Facial Treatments', 800, '60 min', 'Signature treatment for radiant, glowing skin', true),
('zena-face', 'Zena Algae Peel (Face)', 'Facial Treatments', 800, '60 min', 'Natural algae peel for facial rejuvenation', true),
('zena-body', 'Zena Algae Peel (Body)', 'Facial Treatments', 1500, '90 min', 'Full body algae peel treatment', true),
('anti-aging', 'Anti-Aging Rejuvenation', 'Facial Treatments', 1800, '90 min', 'Comprehensive anti-aging facial treatment', true),
('deep-cleanse', 'Deep Cleanse Combo', 'Facial Treatments', 800, '60 min', 'Deep cleansing and purifying facial treatment', true),

-- Men's Treatments
('mens-detox', 'Men''s Detox Facial', 'Men''s Treatments', 850, '60 min', 'Specialized detoxifying facial treatment for men', true),
('mens-bald-head', 'Men''s Bald Head Facial', 'Men''s Treatments', 400, '45 min', 'Specialized scalp and head treatment for men', true),

-- Skin Treatments
('skin-tag-20', 'Skin Tag Removal (20 min)', 'Skin Treatments', 650, '20 min', 'Quick and effective skin tag removal session', true),
('skin-tag-40', 'Skin Tag Removal (40 min)', 'Skin Treatments', 1000, '40 min', 'Extended skin tag removal session', true),
('skin-tag-60', 'Skin Tag Removal (1 hour)', 'Skin Treatments', 1500, '60 min', 'Comprehensive skin tag removal treatment', true),
('dark-knuckle', 'Dark Knuckle Treatment (8 Sessions)', 'Skin Treatments', 2000, '30 min', 'Complete treatment package for dark knuckle correction', true),
('stretch-single', 'Stretch Mark Removal (Single)', 'Skin Treatments', 1500, '60 min', 'Individual stretch mark removal session', true),
('stretch-package', 'Stretch Mark Removal (8 Sessions)', 'Skin Treatments', 8800, '60 min', 'Complete stretch mark removal treatment package', true),

-- Hair & Scalp
('hair-single', 'Hair Restoration (Single)', 'Hair & Scalp', 1200, '60 min', 'Individual hair restoration treatment session', true),
('hair-package', 'Hair Restoration (12 Sessions)', 'Hair & Scalp', 12000, '60 min', 'Complete hair restoration treatment package', true),

-- Wellness
('iv-glow', 'Skin Lightening Glow Drip', 'Wellness', 800, '45 min', 'IV therapy for skin brightening and radiance', true),
('iv-energy', 'Energy Booster Drip', 'Wellness', 900, '45 min', 'Revitalizing IV therapy for energy enhancement', true),
('iv-sports', 'Sports Recovery Drip', 'Wellness', 1000, '45 min', 'Specialized IV therapy for athletic recovery', true),
('iv-detox', 'Detox Wellness Drip', 'Wellness', 900, '45 min', 'Detoxifying IV therapy for overall wellness', true),

-- Fungal Treatments
('nail-single', 'Nail Fungus Removal (Single)', 'Fungal Treatments', 300, '30 min', 'Individual nail fungus treatment session', true),
('nail-package', 'Nail Fungus Removal (8 Sessions)', 'Fungal Treatments', 2000, '30 min', 'Complete nail fungus removal treatment package', true);

-- Insert sample page content
INSERT INTO public.page_content (page_key, title, subtitle, content, image_url) VALUES
('hero', 'Where luxury meets wellness, and transformation begins', 'Luxury Wellness & Aesthetics', 'Experience the pinnacle of wellness and aesthetic treatments in our serene, luxury environment. Our expert practitioners combine cutting-edge technology with personalized care to help you achieve your wellness goals.', '/hero-image.jpg'),
('about', 'About The Nume', 'Your Journey to Wellness', 'At The Nume, we believe that true beauty comes from within. Our holistic approach to wellness combines advanced aesthetic treatments with personalized care, creating a transformative experience that nurtures both body and mind.', '/about-image.jpg'),
('services', 'Our Services', 'Comprehensive Wellness Solutions', 'From advanced facial treatments to body sculpting and wellness therapies, we offer a complete range of services designed to help you look and feel your best.', '/services-image.jpg');

-- Insert actual blog posts from the website
INSERT INTO public.blog_posts (title, slug, excerpt, content, author_name, author_credentials, featured_image, published_at) VALUES
('The Biology of Beauty — A Masterclass in Skin Anatomy & Longevity', 'biology-of-beauty', 'Healthy skin is far more than an aesthetic asset; it is a dynamic, multi-layered organ that serves as your body''s primary interface with the world.', 'Healthy skin is far more than an aesthetic asset; it is a dynamic, multi-layered organ that serves as your body''s primary interface with the world. To achieve a true, sustainable "glow," we must move beyond the surface-level marketing of "miracle creams" and understand the complex biological systems at play.', 'Dr. Amelia Hart', 'Advanced Skin Health & Aesthetic Practitioner', '/blog_1.jpg', '2025-01-15'),

('Beyond the Scale — The Metabolic Science of Fat Loss', 'metabolic-science-fat-loss', 'Weight loss is perhaps the most misunderstood topic in the health industry. Most people focus on the number on the scale, but that number is a poor metric for health.', 'Weight loss is perhaps the most misunderstood topic in the health industry. Most people focus on the number on the scale, but that number is a poor metric for health. To achieve a body transformation that lasts, we must shift the conversation from "weight loss" to "metabolic optimization."', 'Thabo Kadi', 'Clinical Weight Loss & Body Sculpting Consultant', '/blog_2.png', '2025-01-12'),

('The Bioavailability Revolution — Why IV Drip Therapy Works', 'bioavailability-revolution-iv-therapy', 'In a perfect world, we would get all our nutrients from a balanced diet. However, due to soil depletion, modern food processing, and compromised gut health, many people suffer from subclinical deficiencies.', 'In a perfect world, we would get all our nutrients from a balanced diet. However, due to soil depletion, modern food processing, and compromised gut health, many people suffer from "subclinical deficiencies." IV Drip Therapy has emerged as a gold standard for wellness because it solves the primary hurdle of nutrition: Bioavailability.', 'Dr. Nathan Ellis', 'Medical Wellness & IV Therapy Specialist', '/blog_3.png', '2025-01-10'),

('Nutritional Biohacking — Food as Signaling Molecules', 'nutritional-biohacking', 'Nutrition is much more than fuel or calories. In the world of clinical wellness, we view food as biochemical information.', 'Nutrition is much more than "fuel" or calories. In the world of clinical wellness, we view food as biochemical information. Every time you eat, you are sending a set of instructions to your cells, telling your body whether to turn on genes for inflammation or genes for repair.', 'Sophia Verde', 'Clinical Nutrition & Wellness Consultant', '/blog_4.png', '2025-01-08'),

('Acne Decoded — An Integrative Clinical Approach', 'acne-decoded', 'Acne is the most common skin condition in the world, yet it remains one of the most misunderstood. Often dismissed as a teenage phase, acne is actually a chronic, inflammatory medical condition.', 'Acne is the most common skin condition in the world, yet it remains one of the most misunderstood. Often dismissed as a "teenage phase" or a result of "not washing your face," acne is actually a chronic, inflammatory medical condition involving the Pilosebaceous Unit.', 'Teboho Makakane', 'Skin Therapist', '/blog_5.png', '2025-01-05');