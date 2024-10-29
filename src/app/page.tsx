"use client"

import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const translations = {
    en: {
      logo: "KICKIT365",
      subtitle: "SF Soccer Leagues & Social Events",
      ctaButton: "Play here - Join Now!",
      contact: "415-944-9548 San Francisco",
      upcomingEvents: "Upcoming Events:",
      missionStatement: "KICKIT365 Mission Statement",
      missionText: "Our mission is to provide our participants with the best soccer and community experience in San Francisco.",
    },
    es: {
      logo: "KICKIT365",
      subtitle: "Ligas de fútbol y eventos sociales en SF",
      ctaButton: "Juega aquí - ¡Únete ahora!",
      contact: "415-944-9548 Área de San Francisco/Bay",
      upcomingEvents: "Eventos próximos:",
      missionStatement: "Declaración de misión de KICKIT365",
      missionText: "Nuestra misión es proporcionar a nuestros participantes la mejor experiencia en fútbol y comunidad en San Francisco.",
    },
  };

  const t = translations[language];

  const changeLanguage = (lng: 'en' | 'es') => {
    setLanguage(lng);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">{t.logo}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <button className="cta-button">{t.ctaButton}</button>
        <span className="contact">{t.contact}</span>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">{t.logo}</button>
        <button className="nav-button">Register</button>
        <button className="nav-button">{t.upcomingEvents}</button>
        <button className="nav-button">Social Events</button>
        <button className="nav-button">We’re Hiring!</button>
        <button className="nav-button">Covid-19 Health & Safety</button>
        <button className="nav-button">More</button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section className="community-section">
          <img src="https://fifpro.org/media/tyodjzmn/2017-w11-onstage-2500.jpg?rxy=0.59208247521187851,0.15997141843990539&width=1600&height=1024&rnd=132513894167700000" alt="Community" className="community-image" />
          <button className="newsletter-button">Sign up for Newsletter</button>
        </section>

        <section className="events-section">
          <h2>{t.upcomingEvents}</h2>
          <div className="event-video">
            <iframe
              src="https://www.youtube.com/embed/fPAtCcgFHfE"
              title="Event Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-lg shadow-md"
            ></iframe>
          </div>
        </section>

        <section className="mission-statement">
          <h2>{t.missionStatement}</h2>
          <p>{t.missionText}</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
