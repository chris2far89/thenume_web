interface BookingEmailProps {
  fullName: string
  serviceName: string
  date: string
  time: string
  email: string
  phone: string
}

export function createBookingConfirmationEmail({
  fullName,
  serviceName,
  date,
  time,
  email,
  phone
}: BookingEmailProps): string {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - The Nume</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            color: #2c2c2c;
            background-color: #faf9f7;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #f8f6f3 0%, #ede8e0 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 1px solid #e5e0d8;
        }
        
        .logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 36px;
            font-weight: 300;
            color: #8b7355;
            letter-spacing: 0.02em;
            margin-bottom: 10px;
        }
        
        .tagline {
            font-size: 12px;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: #a0958a;
            font-weight: 300;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-family: 'Cormorant Garamond', serif;
            font-size: 28px;
            font-weight: 300;
            color: #2c2c2c;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .message {
            font-size: 16px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        .booking-details {
            background-color: #faf9f7;
            border: 1px solid #e5e0d8;
            padding: 30px;
            margin: 30px 0;
        }
        
        .booking-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 24px;
            font-weight: 400;
            color: #8b7355;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #e5e0d8;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-size: 12px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #a0958a;
            font-weight: 500;
        }
        
        .detail-value {
            font-size: 16px;
            color: #2c2c2c;
            font-weight: 400;
            text-align: right;
        }
        
        .service-name {
            font-family: 'Cormorant Garamond', serif;
            font-size: 18px;
            font-weight: 400;
        }
        
        .important-info {
            background-color: #f0ede8;
            border-left: 4px solid #8b7355;
            padding: 20px;
            margin: 30px 0;
        }
        
        .important-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            font-weight: 500;
            color: #8b7355;
            margin-bottom: 10px;
        }
        
        .important-text {
            font-size: 14px;
            color: #666;
            line-height: 1.5;
        }
        
        .cta-section {
            text-align: center;
            margin: 40px 0;
        }
        
        .cta-button {
            display: inline-block;
            background-color: #2c2c2c;
            color: #ffffff;
            padding: 15px 30px;
            text-decoration: none;
            font-size: 12px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }
        
        .cta-button:hover {
            background-color: #8b7355;
        }
        
        .footer {
            background-color: #2c2c2c;
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
        }
        
        .footer-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 15px;
            color: #8b7355;
        }
        
        .footer-text {
            font-size: 12px;
            color: #a0958a;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        
        .contact-info {
            font-size: 12px;
            color: #a0958a;
            margin-bottom: 5px;
        }
        
        .social-links {
            margin-top: 20px;
        }
        
        .social-link {
            color: #8b7355;
            text-decoration: none;
            margin: 0 10px;
            font-size: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
        
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                box-shadow: none;
            }
            
            .header, .content, .footer {
                padding: 30px 20px;
            }
            
            .booking-details {
                padding: 20px;
                margin: 20px 0;
            }
            
            .detail-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
            
            .detail-value {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">The Nume</div>
            <div class="tagline">Luxury Wellness & Aesthetics</div>
        </div>
        
        <div class="content">
            <h1 class="greeting">Your transformation awaits, ${fullName}</h1>
            
            <p class="message">
                Thank you for choosing The Nume for your wellness journey. We're delighted to confirm your upcoming appointment and look forward to providing you with an exceptional experience.
            </p>
            
            <div class="booking-details">
                <h2 class="booking-title">Appointment Details</h2>
                
                <div class="detail-row">
                    <span class="detail-label">Treatment</span>
                    <span class="detail-value service-name">${serviceName}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Date</span>
                    <span class="detail-value">${formattedDate}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Time</span>
                    <span class="detail-value">${time}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Guest</span>
                    <span class="detail-value">${fullName}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Contact</span>
                    <span class="detail-value">${phone}</span>
                </div>
            </div>
            
            <div class="important-info">
                <h3 class="important-title">Before Your Visit</h3>
                <p class="important-text">
                    Please complete the consultation form we've sent to ensure your treatment is perfectly tailored to your needs. Arrive 15 minutes early to settle in and begin your relaxation journey.
                </p>
            </div>
            
            <div class="cta-section">
                <a href="tel:+27123456789" class="cta-button">Contact Us</a>
            </div>
            
            <p class="message">
                Should you need to reschedule or have any questions, please don't hesitate to contact us. We're here to ensure your experience exceeds expectations.
            </p>
        </div>
        
        <div class="footer">
            <div class="footer-logo">The Nume</div>
            <p class="footer-text">
                Where luxury meets wellness, and transformation begins.
            </p>
            
            <div class="contact-info">123 Wellness Avenue, Cape Town, South Africa</div>
            <div class="contact-info">+27 123 456 789 | hello@thenume.co.za</div>
            
            <div class="social-links">
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">WhatsApp</a>
            </div>
        </div>
    </div>
</body>
</html>
  `
}