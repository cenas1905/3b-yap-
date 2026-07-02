'use client';
import { useState, useEffect } from 'react';
import content from '@/data/content.json';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FullscreenSection from '@/components/FullscreenSection';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  
  // Combine all items into a linear array of sections
  const sections = [
    { id: 'hero', component: <Hero key="hero" /> },
    { id: 'about', component: <FullscreenSection key="about" item={{...content.about, name: content.about.title}} /> },
    ...content.winsa_products.items.map(item => ({
      id: item.id,
      component: <FullscreenSection key={item.id} item={item} />
    })),
    ...content.mirrors.items.map(item => ({
      id: item.id,
      component: <FullscreenSection key={item.id} item={item} />
    })),
    { id: 'contact', component: <Contact key="contact" /> }
  ];

  useEffect(() => {
    const container = document.getElementById('snap-container');
    const handleScroll = () => {
      if (!container) return;
      const index = Math.round(container.scrollTop / window.innerHeight);
      setActiveSection(index);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (index) => {
    const container = document.getElementById('snap-container');
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header />
      
      {/* Side Navigation Dots */}
      <div style={{
        position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', 
        display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1000
      }}>
        {sections.map((section, index) => (
          <div 
            key={section.id}
            onClick={() => scrollTo(index)}
            title={section.id}
            style={{
              width: '12px', height: '12px', borderRadius: '50%', 
              backgroundColor: activeSection === index ? '#FF6600' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer', transition: 'all 0.3s ease',
              border: activeSection === index ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
              boxShadow: activeSection === index ? '0 0 0 2px #FF6600' : 'none'
            }}
          />
        ))}
      </div>

      <main id="snap-container" className="snap-container">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="snap-section">
            {section.component}
          </div>
        ))}
      </main>
    </>
  );
}
