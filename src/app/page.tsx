"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star, Award, Users, Globe, Gift, Waves, UtensilsCrossed, Dumbbell, Briefcase, Home, Sun, Calendar, Crown, Heart, HelpCircle, Sparkles, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Serene Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202696620-49e1qpi2.jpg"
          logoAlt="Serene Haven Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Escape to Elegance and Tranquility"
          description="Discover your perfect sanctuary. Experience luxury hospitality in our carefully curated boutique hotel, where every detail speaks of refined comfort and exceptional service."
          tag="5-Star Experience"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202697288-pg4kzbd3.jpg",
              imageAlt: "Luxury boutique hotel exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202697938-xaw511u2.jpg",
              imageAlt: "Elegant hotel lobby interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202698679-dvh4i5p3.jpg",
              imageAlt: "Luxurious hotel suite bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202699382-2hvn60cn.jpg",
              imageAlt: "Spa and wellness facility"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202700087-1q6ok5ve.jpg",
              imageAlt: "Fine dining restaurant"
            }
          ]}
          buttons={[
            { text: "Reserve Room", href: "contact" },
            { text: "Explore More", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Serene Haven stands as a beacon of luxury hospitality, dedicated to creating unforgettable moments and meaningful connections with every guest who walks through our doors."
          metrics={[
            { icon: Star, label: "Guest Satisfaction", value: "98%" },
            { icon: Award, label: "Industry Awards", value: "12+" },
            { icon: Users, label: "Annual Guests", value: "15K+" },
            { icon: Globe, label: "Years of Excellence", value: "20" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our premium facilities and services designed to elevate your stay and provide ultimate comfort and relaxation."
          tag="Facilities"
          tagIcon={Gift}
          features={[
            {
              title: "Infinity Pool & Spa",
              description: "Unwind in our stunning rooftop infinity pool overlooking the city, complemented by a full-service spa offering rejuvenating treatments.",
              icon: Waves
            },
            {
              title: "Fine Dining Restaurant",
              description: "Award-winning cuisine prepared by our executive chef, featuring both international and local delicacies in an elegant setting.",
              icon: UtensilsCrossed
            },
            {
              title: "Fitness & Wellness",
              description: "State-of-the-art fitness center with personal training services, yoga studio, and wellness programs tailored to your needs.",
              icon: Dumbbell
            },
            {
              title: "Business Lounge",
              description: "Modern business facilities including conference rooms, high-speed internet, and dedicated concierge service for professional needs.",
              icon: Briefcase
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Room Collection"
          description="Choose from our exquisite selection of rooms and suites, each thoughtfully designed for maximum comfort and elegance."
          tag="Accommodations"
          tagIcon={Home}
          products={[
            {
              id: "1",
              brand: "Serene Haven",
              name: "Deluxe Room",
              price: "$250/night",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202704165-h0jbp6el.jpg",
              imageAlt: "Deluxe room with city view"
            },
            {
              id: "2",
              brand: "Serene Haven",
              name: "Junior Suite",
              price: "$380/night",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202705240-nk2h7k8i.jpg",
              imageAlt: "Junior suite with modern design"
            },
            {
              id: "3",
              brand: "Serene Haven",
              name: "Presidential Suite",
              price: "$650/night",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202705736-77306rgg.jpg",
              imageAlt: "Presidential suite luxury accommodation"
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Transparent Pricing"
          description="All-inclusive rates with no hidden charges. Choose the perfect plan that matches your travel needs and budget."
          tag="Special Rates"
          tagIcon={Tag}
          plans={[
            {
              id: "basic",
              badge: "Weekend Getaway",
              badgeIcon: Sun,
              price: "$250",
              subtitle: "Perfect for a short relaxing escape",
              buttons: [
                { text: "Book Room", href: "contact" },
                { text: "Learn More", href: "rooms" }
              ],
              features: [
                "Complimentary breakfast",
                "Free WiFi throughout hotel",
                "Airport pickup service",
                "Access to all amenities"
              ]
            },
            {
              id: "professional",
              badge: "Extended Stay",
              badgeIcon: Calendar,
              price: "$200",
              subtitle: "Best value for longer visits",
              buttons: [
                { text: "Reserve Now", href: "contact" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Complimentary breakfast daily",
                "Priority housekeeping",
                "Late checkout available",
                "Spa credits included",
                "Exclusive lounge access"
              ]
            },
            {
              id: "premium",
              badge: "Luxury Package",
              badgeIcon: Crown,
              price: "$650",
              subtitle: "Ultimate luxury experience",
              buttons: [
                { text: "Book Luxury", href: "contact" },
                { text: "VIP Concierge", href: "contact" }
              ],
              features: [
                "24/7 dedicated concierge",
                "Complimentary spa treatments",
                "Private dining experiences",
                "Helicopter tours available",
                "Personal shopper service",
                "Premium minibar selection"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Cherished Guest Reviews"
          description="Hear from our valued guests who have experienced the magic of Serene Haven firsthand."
          tag="Testimonials"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Emma Richardson",
              handle: "@emmatravel",
              testimonial: "Absolutely stunning hotel! The attention to detail and exceptional service made our anniversary trip unforgettable. Can't wait to return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202706558-sinm3kwd.png",
              imageAlt: "Emma Richardson"
            },
            {
              id: "2",
              name: "James Mitchell",
              handle: "@jmitchell_blog",
              testimonial: "Best boutique hotel experience I've had. The rooms are immaculate, staff is incredibly warm, and the restaurant serves incredible food. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202707272-jg2ye9hw.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "3",
              name: "Sophie Laurent",
              handle: "@sophieluxury",
              testimonial: "From check-in to checkout, everything was perfect. The spa treatments were divine and the hotel location is ideal. Worth every penny for this quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202707933-e1biiyz0.jpg",
              imageAlt: "Sophie Laurent"
            },
            {
              id: "4",
              name: "Marcus Johnson",
              handle: "@marcusexplores",
              testimonial: "A hidden gem! The personalized service made me feel like royalty. The rooftop pool at sunset is breathtaking. Will definitely be back next year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202708469-7iimdxbs.jpg",
              imageAlt: "Marcus Johnson"
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured & Trusted By"
          description="Our hotel is recognized and featured on leading travel and hospitality platforms worldwide."
          tag="Featured"
          tagIcon={Star}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202709853-8py39hxz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202710412-1ucfnq4b.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202710912-ihf6ulyb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202711789-yew18p6b.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202712356-erste6p4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202712871-wx5j1xbb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202713531-i47ro99k.jpg"
          ]}
          textboxLayout="default"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about bookings, amenities, and our services."
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations within 48 hours may incur a one-night charge. We recommend travel insurance for added protection."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, complimentary airport pickup is included with all bookings. Our concierge will arrange pickup at your preferred time. Kindly provide your flight details during booking."
            },
            {
              id: "3",
              title: "What amenities are included in the room rate?",
              content: "All rooms include complimentary WiFi, daily breakfast, gym access, and pool facilities. Premium suites also include spa credits and lounge access. See specific room details for complete amenity lists."
            },
            {
              id: "4",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets for a small daily fee of $25. Please inform us during booking so we can prepare appropriate accommodations and ensure pet-friendly amenities."
            },
            {
              id: "5",
              title: "What dining options are available?",
              content: "Our fine dining restaurant offers breakfast, lunch, and dinner. We also have a spa cafe serving light refreshments and a rooftop bar. In-room dining is available 24/7 through our concierge."
            },
            {
              id: "6",
              title: "Can I book corporate events or weddings?",
              content: "Absolutely! We offer tailored packages for weddings, conferences, and corporate events. Our dedicated events team will work with you to create an unforgettable experience. Contact our events coordinator for details."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Ready to book your escape? Fill out the form below and our team will get back to you within 2 hours. We can't wait to welcome you to Serene Haven."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "checkIn", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkOut", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Room preferences, special requests, or questions...", rows: 5, required: false }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764202709209-mkbdv8il.jpg"
          imageAlt="Hotel reception and concierge desk"
          mediaPosition="right"
          buttonText="Request Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Serene Haven"
          copyrightText="© 2025 Serene Haven Hotel. All rights reserved."
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "amenities" },
                { label: "Spa", href: "amenities" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}