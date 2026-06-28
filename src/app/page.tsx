"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentModal from "@/components/AppointmentModal";
import { SERVICES_DATA, Service } from "@/data/services";
import { BRAND_CONFIG } from "@/data/config";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section id="services" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
            Our <span className="gradient-text">Skin Care Treatments</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
            Advanced dermatology and laser treatments with latest technology and experienced specialists
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} onClick={() => handleBookClick(service)} />
            </motion.div>
          ))}
        </div>
      </section>

      <AppointmentModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Why Choose Us Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '60px', textAlign: 'center', fontWeight: 800 }}>
            Why Choose <span className="gradient-text">{BRAND_CONFIG.clinicName}</span>?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: "Expert Dermatologist", desc: "Highly qualified skin specialist with years of experience" },
              { title: "Advanced Technology", desc: "Latest laser and skincare equipment for best results" },
              { title: "Affordable Packages", desc: "Quality skin care treatments at competitive prices" },
              { title: "Flexible Hours", desc: `${BRAND_CONFIG.hours.weekdays} | ${BRAND_CONFIG.hours.saturday}` }
            ].map((service, i) => (
              <div key={i} className="premium-card" style={{ padding: '32px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '20px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              What Our <span className="gradient-text">Patients Say</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
              Real experiences from our valued patients
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                name: "Sana Ahmed",
                treatment: "Hydra Facial",
                text: "My skin has never looked better! Dr. Farah's hydra facial treatment gave me amazing glow. Highly professional service!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
              },
              {
                name: "Maria Khan",
                treatment: "Laser Hair Removal",
                text: "Best decision ever! The laser hair removal was painless and results are fantastic. Dr. Farah is amazing!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
              },
              {
                name: "Hina Tariq",
                treatment: "Acne Treatment",
                text: "Finally found a solution to my acne problem! Professional treatment with visible results. Thank you Dr. Farah!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '32px' }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '18px' }}>{testimonial.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{testimonial.treatment}</p>
                  </div>
                </div>
                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                  {"★".repeat(testimonial.rating)}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '60px', textAlign: 'center', fontWeight: 800 }}>
            Our <span className="gradient-text">Clinic Gallery</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '280px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                className="premium-card"
              >
                <img
                  src={img}
                  alt={`Clinic ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 24px 40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ marginBottom: '20px', letterSpacing: '1px', fontSize: '18px' }}>{BRAND_CONFIG.clinicName.toUpperCase()}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Professional skin care in {BRAND_CONFIG.city}. {BRAND_CONFIG.tagline}
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="/" style={{ color: 'var(--text-muted)' }}>Home</a></li>
              <li><a href="/#services" style={{ color: 'var(--text-muted)' }}>Services</a></li>
              <li><a href="/about" style={{ color: 'var(--text-muted)' }}>About Us</a></li>
              <li><a href="/contact" style={{ color: 'var(--text-muted)' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
              <li>{BRAND_CONFIG.address}</li>
              <li><a href={`tel:${BRAND_CONFIG.phone}`} style={{ color: 'var(--text-muted)' }}>{BRAND_CONFIG.phone}</a></li>
              <li><a href={`mailto:${BRAND_CONFIG.email}`} style={{ color: 'var(--text-muted)' }}>{BRAND_CONFIG.email}</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Hours</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
              <li>Mon-Fri: {BRAND_CONFIG.hours.weekdays}</li>
              <li>Saturday: {BRAND_CONFIG.hours.saturday}</li>
              <li>Sunday: {BRAND_CONFIG.hours.sunday}</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '60px auto 0', paddingTop: '30px', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
          © {new Date().getFullYear()} {BRAND_CONFIG.clinicName}. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${BRAND_CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} color="#fff" />
      </a>
    </>
  );
}
