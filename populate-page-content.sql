-- Populate page content with actual website content
INSERT INTO public.page_content (page_key, title, subtitle, content, image_url) VALUES

-- Hero Section (from homepage)
('hero', 'Where luxury meets wellness, and transformation begins', 'Luxury Wellness & Aesthetics', 'Experience the pinnacle of wellness and aesthetic treatments in our serene, luxury environment. Our expert practitioners combine cutting-edge technology with personalized care to help you achieve your wellness goals.', '/hero-image.jpg'),

-- About Section (from homepage)
('about', 'About The Nume', 'Your Journey to Wellness', 'At The Nume, we believe that true beauty comes from within. Our holistic approach to wellness combines advanced aesthetic treatments with personalized care, creating a transformative experience that nurtures both body and mind. Our state-of-the-art facility offers a sanctuary where science meets serenity, and every treatment is tailored to your unique needs.', '/about-image.jpg'),

-- Services Section (from services page)
('services-hero', 'Authentic transformation through natural innovation', 'Our Treatments', 'We provide science-backed beauty solutions that empower confidence and celebrate individuality — all while honoring the planet. Effortless beauty, consciously created.', '/services-hero.jpg'),

-- Blog Section (from blog page)
('blog-hero', 'Insights & Wellness', 'The Nume Journal', 'Discover the latest in wellness science, beauty innovations, and expert insights from our practitioners. Stay informed about the treatments that can transform your health and confidence.', '/blog-hero.jpg'),

-- Contact Section
('contact-hero', 'Begin Your Transformation', 'Contact Us', 'Ready to start your wellness journey? Our expert team is here to guide you every step of the way. Book your consultation today and discover the treatments that will help you look and feel your best.', '/contact-hero.jpg'),

-- Footer Content
('footer', 'The Nume', 'Luxury Wellness & Aesthetics', 'Where luxury meets wellness, and transformation begins. Experience personalized treatments in our serene environment.', NULL),

-- Booking Page
('booking-hero', 'Book Your Treatment', 'Schedule Your Appointment', 'Select your preferred treatment and time slot. Our team will confirm your appointment and provide pre-treatment instructions.', '/booking-hero.jpg')

ON CONFLICT (page_key) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  updated_at = NOW();