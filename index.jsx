'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Play, Pause, Volume2, VolumeX, ChevronRight, ArrowUpRight } from 'lucide-react';

const SajanPremiumPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilmModal, setActiveFilmModal] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Premium film data
  const films = [
    {
      id: 1,
      couple: 'Ananya & Bhavesh',
      location: 'Kathmandu',
      date: 'November 2026',
      description: 'A union of two souls against the backdrop of the Kathmandu valley. Ananya & Bhavesh\'s celebration was marked by genuine connections, family warmth, and moments of pure joy.',
      story: 'We began before sunrise, capturing the quiet anticipation in their separate preparations. The ceremony held profound meaning—each ritual a testament to their families\' traditions. By evening, as the celebration reached its peak, we found them stealing a moment alone, silhouetted against the city lights. That moment became the heart of their film.',
      videoUrl: '/films/a-b-kathmandu.mp4',
      posterUrl: '/films/a-b-poster.jpg',
      duration: '18:32',
      filmType: 'Full Story'
    },
    {
      id: 2,
      couple: 'Rhea & Sameer',
      location: 'Pokhara',
      date: 'September 2026',
      description: 'Lakeside ceremony under open skies. A celebration that felt like poetry—intimate, deliberate, and undeniably romantic.',
      story: 'Their wedding unfolded on the shores of Fewa Lake, where every golden hour arrival felt orchestrated by nature itself. We captured the ceremonial traditions with reverence, but what stayed with us was the laughter. Genuine, unguarded laughter that echoed across the water.',
      videoUrl: '/films/r-s-pokhara.mp4',
      posterUrl: '/films/r-s-poster.jpg',
      duration: '22:15',
      filmType: 'Full Story'
    },
    {
      id: 3,
      couple: 'Priya & Karan',
      location: 'Waling',
      date: 'May 2025',
      description: 'Mountains, tradition, and timeless love woven into one unforgettable narrative.',
      story: 'High in the mountains of Waling, Priya & Karan brought together their extended families for a celebration rooted in tradition. We documented the elaborate ceremonial moments, but also the quiet conversations between elderly relatives, the children playing in the gardens, and the way Priya\'s hands trembled as Karan arrived.',
      videoUrl: '/films/p-k-waling.mp4',
      posterUrl: '/films/p-k-poster.jpg',
      duration: '25:44',
      filmType: 'Full Story'
    }
  ];

  const galleryItems = [
    { id: 1, type: 'full-width', category: 'ceremony', caption: 'The first moment they saw each other' },
    { id: 2, type: 'half', category: 'emotion', caption: 'Unguarded joy' },
    { id: 3, type: 'half', category: 'detail', caption: 'Tradition in every frame' },
    { id: 4, type: 'third', category: 'family', caption: 'Family connections' },
    { id: 5, type: 'third', category: 'celebration', caption: 'The dance begins' },
    { id: 6, type: 'third', category: 'intimate', caption: 'A moment alone' },
    { id: 7, type: 'full-width', category: 'landscape', caption: 'The setting sun over Kathmandu' }
  ];

  const testimonials = [
    {
      quote: 'Placeholder for genuine testimonial - Sajan\'s ability to capture emotion is unmatched.',
      couple: 'Couple Name',
      location: 'Location'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-amber-900/20' : 'bg-transparent'
      }`}>
        <div className="max-w-8xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
            <h1 className="text-lg tracking-[0.2em] font-light">SAJAN CHHETRI</h1>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            <a href="#films" className="text-xs tracking-widest font-light hover:text-amber-100 transition">FILMS</a>
            <a href="#gallery" className="text-xs tracking-widest font-light hover:text-amber-100 transition">WORK</a>
            <a href="#about" className="text-xs tracking-widest font-light hover:text-amber-100 transition">ABOUT</a>
            <a href="#contact" className="text-xs tracking-widest font-light hover:text-amber-100 transition">CONTACT</a>
          </div>

          <button className="hidden lg:block px-6 py-2.5 border border-amber-100/50 text-xs tracking-widest font-light hover:bg-amber-900/20 transition">
            BOOK
          </button>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-amber-900/20 p-8 space-y-6">
            <a href="#films" className="block text-sm tracking-widest">FILMS</a>
            <a href="#gallery" className="block text-sm tracking-widest">WORK</a>
            <a href="#about" className="block text-sm tracking-widest">ABOUT</a>
            <a href="#contact" className="block text-sm tracking-widest">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero - Full Screen Cinema */}
      <section className="relative h-screen w-full overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#b45309', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <rect width="1000" height="1000" fill="url(#grad)" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-amber-100/50 text-xs tracking-[0.3em] font-light">WEDDING CINEMATOGRAPHER</p>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] tracking-tight">
                SAJAN<br />CHHETRI
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-2xl md:text-3xl font-serif font-light text-amber-50/90 leading-relaxed">
                Cinema that captures the soul of your wedding
              </p>
              <p className="text-sm md:text-base font-light text-amber-100/70 leading-relaxed">
                Every frame is intentional. Every moment, preserved. We don't film weddings — we craft emotional narratives that echo through time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#films" className="group relative px-12 py-4 bg-amber-50 text-black font-light text-sm tracking-wider hover:bg-amber-100 transition overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VIEW FILMS
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </span>
              </a>
              <a href="#contact" className="px-12 py-4 border border-amber-100/50 text-white font-light text-sm tracking-wider hover:bg-amber-900/10 transition">
                START YOUR STORY
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 animate-pulse">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-amber-100/40 tracking-widest">SCROLL</p>
              <svg className="w-4 h-6 text-amber-100/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Films - Premium Showcase */}
      <section id="films" className="relative py-32 px-6 md:px-12 bg-black">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-6">
                Cinematic wedding stories
              </h2>
              <p className="text-amber-100/70 font-light text-lg max-w-xl">
                Each film is a unique narrative woven from genuine moments, emotional peaks, and the authentic atmosphere of your wedding day.
              </p>
            </div>
          </div>

          {/* Film Grid */}
          <div className="space-y-12">
            {films.map((film, index) => (
              <div key={film.id} className={`group grid grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Film Visual */}
                <div className={`col-span-12 ${index % 2 === 1 ? 'md:col-span-5 md:order-2' : 'md:col-span-5'}`}>
                  <button
                    onClick={() => setActiveFilmModal(film)}
                    className="relative group/film w-full aspect-video bg-gradient-to-br from-amber-900/20 to-black border border-amber-900/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover/film:bg-black/20 transition duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border border-amber-100/50 rounded-full flex items-center justify-center group-hover/film:border-amber-100 group-hover/film:scale-110 transition">
                        <Play size={28} className="text-amber-100/70 ml-1 group-hover/film:text-amber-100" fill="currentColor" />
                      </div>
                    </div>
                    <p className="absolute bottom-6 left-6 text-xs font-light text-amber-100/50">
                      {film.duration} — {film.filmType}
                    </p>
                  </button>
                </div>

                {/* Film Info */}
                <div className={`col-span-12 ${index % 2 === 1 ? 'md:col-span-7 md:order-1' : 'md:col-span-7'}`}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-amber-100/50 text-xs tracking-[0.2em] mb-3">{film.date}</p>
                      <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-3">
                        {film.couple}
                      </h3>
                      <p className="text-xl text-amber-100/80 font-light">{film.location}</p>
                    </div>

                    <p className="text-amber-100/70 font-light leading-relaxed max-w-md">
                      {film.story}
                    </p>

                    <button
                      onClick={() => setActiveFilmModal(film)}
                      className="group inline-flex items-center gap-3 text-sm font-light text-amber-100 hover:text-amber-50 transition"
                    >
                      <span className="tracking-wider">WATCH FULL FILM</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Editorial Layout */}
      <section id="gallery" className="relative py-32 px-6 md:px-12 bg-black border-t border-amber-900/20">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-20">From the day</h2>

          <div className="grid grid-cols-12 gap-6 auto-rows-[400px] md:auto-rows-[500px]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden bg-gradient-to-br from-amber-900/10 to-black border border-amber-900/30 ${
                  item.type === 'full-width' ? 'col-span-12' :
                  item.type === 'half' ? 'col-span-12 md:col-span-6' :
                  'col-span-12 md:col-span-4'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-black to-black" />
                <div className="absolute inset-0 flex items-end p-8 group-hover:p-10 transition">
                  <p className="text-amber-100/60 font-light group-hover:text-amber-100 transition">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Sophisticated Layout */}
      <section id="about" className="relative py-32 px-6 md:px-12 bg-black border-t border-amber-900/20">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-12 gap-16 items-start">
            {/* Left - Portrait Area */}
            <div className="col-span-12 md:col-span-5">
              <div className="relative group overflow-hidden aspect-square border border-amber-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-black" />
                <div className="absolute inset-0 flex items-center justify-center text-amber-100/30 font-light">
                  [Portrait]
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-amber-900/30 pt-12">
                <div>
                  <p className="text-3xl font-serif font-light text-amber-100 mb-2">2.5+</p>
                  <p className="text-xs tracking-widest text-amber-100/50 font-light">YEARS</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-light text-amber-100 mb-2">Nepal</p>
                  <p className="text-xs tracking-widest text-amber-100/50 font-light">BASED</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-light text-amber-100 mb-2">∞</p>
                  <p className="text-xs tracking-widest text-amber-100/50 font-light">MOMENTS</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-span-12 md:col-span-7">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-serif font-light leading-[1.1]">
                    Behind the lens
                  </h2>
                  <p className="text-amber-100/50 text-sm tracking-widest font-light">WHO WE ARE</p>
                </div>

                <div className="space-y-6 text-amber-100/80 font-light leading-relaxed">
                  <p>
                    For the past 2.5 years, I've dedicated myself to one singular purpose: capturing the unrepeatable. Not just what a wedding looks like, but what it *feels* like.
                  </p>
                  <p>
                    I believe wedding cinematography is a sacred responsibility. You're trusting me with your most intimate moments — the nervous glances, the joyful tears, the quiet connections between loved ones. These deserve to be preserved not as a sequence of events, but as a living, breathing narrative.
                  </p>
                  <p>
                    My approach is simple: I observe more than I direct. I compose with intention. I edit with emotional intelligence. The result is not a wedding video—it's a love letter to your day, crafted in cinema.
                  </p>
                </div>

                <div className="border-t border-amber-900/30 pt-8">
                  <p className="text-xs tracking-widest text-amber-100/50 mb-4">APPROACH</p>
                  <div className="space-y-4">
                    {[
                      'Authentic storytelling over staged perfection',
                      'Emotional truth over technical trends',
                      'Cinematic composition in every frame',
                      'Films you'll return to for years'
                    ].map((point, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1 h-1 bg-amber-100/30 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm font-light text-amber-100/70">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Timeline */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-black to-amber-950/5 border-t border-amber-900/20">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-24">How we work</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber-900/50 via-amber-900/30 to-transparent" />

            <div className="space-y-20">
              {[
                {
                  step: 'Understand',
                  description: 'We connect before the wedding. Learning your story, your personality, what makes your relationship uniquely yours. This is where the narrative foundation is built.',
                  icon: '→'
                },
                {
                  step: 'Observe',
                  description: 'On your wedding day, we fade into the background. We capture genuine moments without forcing emotions. The best moments happen when the camera is ready but invisible.',
                  icon: '◯'
                },
                {
                  step: 'Create',
                  description: 'In post-production, we shape those captured moments into a cinematic narrative. Color, sound, pacing, music—every element serves the emotional arc of your story.',
                  icon: '◆'
                },
                {
                  step: 'Remember',
                  description: 'Your wedding film is completed. When you watch it months or years later, you don't just see what happened—you feel how it felt. That\'s the goal.',
                  icon: '◸'
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="col-span-12 md:col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-amber-900/50 flex items-center justify-center text-amber-100/50 text-xs">
                        {index + 1}
                      </div>
                      <div className="hidden md:block w-12 h-px bg-gradient-to-r from-amber-900/50 to-transparent" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h3 className="text-2xl md:text-3xl font-serif font-light mb-4">{item.step}</h3>
                    <p className="text-amber-100/70 font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="relative py-32 px-6 md:px-12 bg-black border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-16">Feedback</h2>

          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-l-2 border-amber-900/50 pl-8 py-8 space-y-6">
              <p className="text-2xl font-serif font-light text-amber-50/90 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-light text-amber-100/70">{testimonial.couple}</p>
                <p className="text-xs font-light text-amber-100/50">{testimonial.location}</p>
              </div>
            </div>
          ))}

          <div className="mt-16 p-8 border border-amber-900/30 bg-amber-950/5">
            <p className="text-sm font-light text-amber-100/60 text-center">
              Real testimonials from couples we've worked with will appear here
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 px-6 md:px-12 bg-black border-t border-amber-900/20">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-serif font-light leading-[1.1]">
                What we offer
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="space-y-8">
                {[
                  {
                    title: 'Full Wedding Coverage',
                    description: 'Complete cinematic documentation from ceremony through reception. Every meaningful moment, captured.'
                  },
                  {
                    title: 'Highlight Film',
                    description: 'A 3-5 minute emotional summary highlighting the day\'s most powerful moments. Perfect for sharing.'
                  },
                  {
                    title: 'Extended Cut',
                    description: 'A 20-45 minute documentary-style film preserving the full narrative arc and atmosphere.'
                  },
                  {
                    title: 'Engagement Films',
                    description: 'Cinematic pre-wedding storytelling. Capture your connection before the big day.'
                  }
                ].map((service, index) => (
                  <div key={index} className="border-b border-amber-900/20 pb-8 last:border-0">
                    <h3 className="text-xl font-serif font-light mb-2">{service.title}</h3>
                    <p className="text-amber-100/70 font-light">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 border border-amber-900/30 bg-amber-950/10">
                <p className="text-sm font-light text-amber-100/70 text-center">
                  Pricing is custom based on your needs. Let's discuss your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - CTA */}
      <section id="contact" className="relative py-40 px-6 md:px-12 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] text-amber-100/50 font-light">READY?</p>
            <h2 className="text-6xl md:text-7xl font-serif font-light leading-[1.1]">
              Let's create your story
            </h2>
          </div>

          <p className="text-xl text-amber-100/80 font-light max-w-2xl mx-auto leading-relaxed">
            Your wedding happens once. The film we create together will be something you return to for years—a love letter to that day, preserved in cinema.
          </p>

          <div className="pt-8 space-y-6">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-black/50 border-b border-amber-900/50 px-0 py-4 font-light text-white placeholder-amber-100/40 focus:outline-none focus:border-amber-900 transition text-center"
            />
            
            <button className="w-full px-8 py-4 bg-amber-50 text-black font-light text-sm tracking-widest hover:bg-amber-100 transition">
              START THE CONVERSATION
            </button>

            <p className="text-xs text-amber-100/50 font-light">
              Response typically within 24 hours
            </p>
          </div>

          <div className="pt-12 border-t border-amber-900/20 mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left">
              <div>
                <p className="text-xs tracking-widest text-amber-100/50 mb-2 font-light">EMAIL</p>
                <a href="mailto:contact@example.com" className="text-sm font-light hover:text-amber-100 transition">[Your Email]</a>
              </div>
              <div className="hidden md:block w-px h-8 bg-amber-900/30" />
              <div>
                <p className="text-xs tracking-widest text-amber-100/50 mb-2 font-light">INSTAGRAM</p>
                <a href="https://instagram.com" className="text-sm font-light hover:text-amber-100 transition">@[Your Handle]</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-amber-900/20 py-16 px-6 md:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-12 gap-12 mb-12">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                <p className="text-sm tracking-[0.2em] font-light">SAJAN CHHETRI</p>
              </div>
              <p className="text-xs text-amber-100/50 font-light">Wedding Cinematographer — Nepal</p>
            </div>
            <div className="col-span-12 md:col-span-6 text-right">
              <p className="text-xs text-amber-100/50 font-light italic">Stories worth remembering.</p>
            </div>
          </div>

          <div className="border-t border-amber-900/20 pt-8 text-center">
            <p className="text-xs text-amber-100/40 font-light">© 2026 Sajan Chhetri. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Film Modal */}
      {activeFilmModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setActiveFilmModal(null)}
            className="absolute top-8 right-8 z-50 w-10 h-10 border border-amber-100/50 flex items-center justify-center hover:border-amber-100 transition"
          >
            <X size={20} />
          </button>

          <div className="relative w-full max-w-4xl">
            <div className="relative bg-black aspect-video rounded-sm overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-black flex items-center justify-center">
                <button
                  onClick={toggleVideo}
                  className="w-20 h-20 border border-amber-100/50 rounded-full flex items-center justify-center hover:border-amber-100 transition group"
                >
                  {isVideoPlaying ? (
                    <Pause size={32} className="text-amber-100 ml-0" />
                  ) : (
                    <Play size={32} className="text-amber-100 ml-1" />
                  )}
                </button>
              </div>
              <video
                ref={videoRef}
                className="w-full h-full object-cover hidden"
                muted={isMuted}
              />
            </div>

            <div className="space-y-6 px-2">
              <div>
                <p className="text-amber-100/50 text-xs tracking-widest mb-2 font-light">{activeFilmModal.date}</p>
                <h3 className="text-4xl font-serif font-light mb-2">{activeFilmModal.couple}</h3>
                <p className="text-amber-100/80 font-light">{activeFilmModal.location}</p>
              </div>
              
              <p className="text-amber-100/70 font-light leading-relaxed">
                {activeFilmModal.description}
              </p>

              <div className="flex gap-4 pt-4">
                <button onClick={toggleVideo} className="px-6 py-2 border border-amber-100/50 text-xs font-light hover:bg-amber-900/10 transition">
                  {isVideoPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <button onClick={() => setIsMuted(!isMuted)} className="px-6 py-2 border border-amber-100/50 text-xs font-light hover:bg-amber-900/10 transition flex items-center gap-2">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default SajanPremiumPortfolio;
