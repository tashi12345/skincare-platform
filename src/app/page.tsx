"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentModal from "@/components/AppointmentModal";
import { SERVICES_DATA, Service } from "@/data/services";
import { BRAND_CONFIG } from "@/data/config";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Smartphone, CreditCard, CheckCircle, Sparkles, Image, Bell, Users, Package, Star, DollarSign } from "lucide-react";

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

      {/* Demo Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
        padding: '24px',
        borderBottom: '4px solid #FF6B00'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(20px, 4vw, 28px)',
              marginBottom: '12px',
              fontWeight: 800,
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
              یہ ایک DEMO platform ہے! آپ اپنی skincare clinic کے لیے customize کروا سکتے ہیں
            </h3>
            <p style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              marginBottom: '20px',
              color: '#fff',
              fontWeight: 600
            }}>
              This is a DEMO platform - customize it for YOUR skincare clinic!
            </p>
            <a
              href="https://wa.me/923290841889?text=I%20want%20to%20customize%20the%20skincare%20clinic%20platform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#25D366',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
              }}
            >
              <MessageCircle size={24} />
              WhatsApp: +92 329 0841889
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
            Hamare <span className="gradient-text">Skincare Services</span>
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 22px)',
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: 600,
            color: 'var(--primary)'
          }}>
            Our Skincare Services
          </p>

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

      {/* How It Works Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              Kaise <span className="gradient-text">Kaam Karta Hai</span>?
            </h2>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '60px',
              textAlign: 'center',
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              How It Works
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {[
              {
                icon: Calendar,
                title: "1. Book Appointment",
                titleUrdu: "Appointment Book Karein",
                desc: "Choose your treatment and preferred time slot online"
              },
              {
                icon: Bell,
                title: "2. Get Confirmation",
                titleUrdu: "Confirmation Hasil Karein",
                desc: "Receive instant SMS/WhatsApp confirmation"
              },
              {
                icon: Sparkles,
                title: "3. Visit Clinic",
                titleUrdu: "Clinic Aayein",
                desc: "Get your professional skincare treatment"
              },
              {
                icon: CreditCard,
                title: "4. Easy Payment",
                titleUrdu: "Asaan Payment",
                desc: "Pay via EasyPaisa, JazzCash, or Bank Transfer"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '32px', textAlign: 'center' }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <step.icon size={40} color="#fff" />
                  </div>
                </div>
                <h3 style={{
                  color: 'var(--primary)',
                  marginBottom: '8px',
                  fontSize: '20px',
                  fontWeight: 700
                }}>
                  {step.titleUrdu}
                </h3>
                <h4 style={{
                  marginBottom: '12px',
                  fontSize: '18px',
                  fontWeight: 600
                }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '24px', fontWeight: 700 }}>
              Payment Methods / قبول شدہ طریقے
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <Smartphone size={48} color="var(--primary)" />
                <p style={{ marginTop: '8px', fontWeight: 600 }}>EasyPaisa</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Smartphone size={48} color="var(--primary)" />
                <p style={{ marginTop: '8px', fontWeight: 600 }}>JazzCash</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <CreditCard size={48} color="var(--primary)" />
                <p style={{ marginTop: '8px', fontWeight: 600 }}>Bank Transfer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Features Section */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              Apni Marzi Ke <span className="gradient-text">Features</span>
            </h2>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '60px',
              textAlign: 'center',
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              Customize Your Platform Features
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: Calendar, text: "Online Appointment Booking", urdu: "آن لائن اپائنٹمنٹ بکنگ" },
              { icon: Users, text: "Patient Skin Records", urdu: "مریض کے سکن ریکارڈز" },
              { icon: CheckCircle, text: "Treatment Progress Tracking", urdu: "علاج کی پیش رفت ٹریکنگ" },
              { icon: Image, text: "Before/After Photo Gallery", urdu: "پہلے/بعد میں تصاویر" },
              { icon: Star, text: "Product Recommendations", urdu: "مصنوعات کی سفارشات" },
              { icon: Bell, text: "SMS/WhatsApp Notifications", urdu: "SMS/WhatsApp اطلاعات" },
              { icon: Users, text: "Multiple Therapist Schedules", urdu: "متعدد تھیراپسٹ شیڈولز" },
              { icon: Sparkles, text: "Custom Branding", urdu: "اپنی برانڈنگ" },
              { icon: Package, text: "Treatment Packages", urdu: "علاج کے پیکجز" },
              { icon: DollarSign, text: "Membership Plans", urdu: "ممبرشپ پلانز" },
              { icon: Star, text: "And Much More...", urdu: "اور بہت کچھ..." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <feature.icon size={24} color="#fff" />
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '4px' }}>{feature.text}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{feature.urdu}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', fontWeight: 800 }}>
              Platform Ki <span className="gradient-text">Qeemat</span>
            </h2>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '40px',
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              Platform Pricing
            </p>

            <div className="premium-card" style={{
              padding: '48px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              color: '#fff'
            }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontWeight: 700 }}>
                Complete Skincare Clinic Platform
              </h3>
              <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>
                Rs 50,000 - 80,000
              </div>
              <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
                پورا پلیٹ فارم صرف 50,000 سے 80,000 روپے میں
              </p>

              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '24px',
                borderRadius: '16px',
                marginBottom: '32px'
              }}>
                <h4 style={{ fontSize: '20px', marginBottom: '16px' }}>
                  Payment Methods قبول شدہ طریقے
                </h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                  <div>
                    <Smartphone size={36} />
                    <p style={{ marginTop: '8px', fontSize: '14px' }}>EasyPaisa</p>
                  </div>
                  <div>
                    <Smartphone size={36} />
                    <p style={{ marginTop: '8px', fontSize: '14px' }}>JazzCash</p>
                  </div>
                  <div>
                    <CreditCard size={36} />
                    <p style={{ marginTop: '8px', fontSize: '14px' }}>Bank Transfer</p>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(0,0,0,0.2)',
                  padding: '16px',
                  borderRadius: '12px',
                  fontFamily: 'monospace',
                  fontSize: '16px',
                  letterSpacing: '1px'
                }}>
                  Account: PK87UNIL0109000352281883
                </div>
              </div>

              <a
                href="https://wa.me/923290841889?text=I%20want%20to%20get%20a%20skincare%20clinic%20platform"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#fff',
                  color: 'var(--primary)',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MessageCircle size={24} />
                Order Now - ابھی آرڈر کریں
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AppointmentModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Why Choose Us Section */}
      <section style={{ padding: '100px 24px' }}>
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
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
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
      <section style={{ padding: '100px 24px' }}>
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
      <footer style={{ background: 'var(--surface)', padding: '80px 24px 40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
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

          <div style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '40px',
            marginBottom: '40px'
          }}>
            <h4 style={{
              fontSize: '20px',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--primary)',
              fontWeight: 700
            }}>
              Check Our Other Demo Platforms
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <a
                href="https://vet-clinic-six.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  background: 'var(--background)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  border: '2px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Veterinary Clinic</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>پشو کلینک</div>
              </a>

              <a
                href="https://banquet-tan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  background: 'var(--background)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  border: '2px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Banquet Hall</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>شادی ہال</div>
              </a>

              <a
                href="https://parlour-platform.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  background: 'var(--background)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  border: '2px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Beauty Parlour</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>بیوٹی پارلر</div>
              </a>

              <a
                href="https://dentist-platform-six.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  background: 'var(--background)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  border: '2px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Dental Clinic</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>ڈینٹل کلینک</div>
              </a>

              <div
                style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#fff',
                  border: '2px solid var(--primary)',
                  position: 'relative'
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>Skincare Clinic</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>سکن کیئر کلینک</div>
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#FFD700',
                  color: '#000',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  Current
                </div>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              marginTop: '32px',
              padding: '24px',
              background: 'var(--background)',
              borderRadius: '12px'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 600 }}>
                Want a platform for YOUR business?
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                اپنے کاروبار کے لیے پلیٹ فارم چاہیے؟
              </p>
              <a
                href="https://wa.me/923290841889"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--primary)',
                  fontSize: '18px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={20} />
                +92 329 0841889
              </a>
            </div>
          </div>

          <div style={{
            paddingTop: '30px',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '14px'
          }}>
            © {new Date().getFullYear()} {BRAND_CONFIG.clinicName}. All rights reserved.
          </div>
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
