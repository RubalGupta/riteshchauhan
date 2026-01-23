import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import speakingImage from '@/assets/ritesh-speaking.jpg';
import heroMountain from '@/assets/hero-mountain.jpg';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritesh-chauhan-58bb3646/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@riteshchauhan.in', label: 'Email' },
];

const stats = [
  { value: '19+', label: 'Years of Service' },
  { value: 'HP', label: 'Cadre' },
  { value: 'Jt. Secy', label: 'GoI Empanelment' },
  { value: '3', label: 'Departments Led' },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMountain}
          alt="Digital India and Government backdrop"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-tech-gradient text-white rounded-full text-sm font-medium shadow-lg">
                IAS Officer • 2005 Batch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            >
              <span className="text-gradient font-bold">Ritesh</span>{' '}
              <span className="text-white drop-shadow-lg">Chauhan</span>
            </motion.h1>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl font-display italic text-white/80 border-l-4 border-primary pl-4"
            >
              "The measure of a man is what he does with power"
              <span className="block text-sm mt-2 not-italic text-primary font-medium">— Plato</span>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-white/70 max-w-md font-light"
            >
              A dedicated <strong className="text-white font-medium">public servant</strong> committed to 
              transparent governance, sustainable development, and empowering communities 
              across <strong className="text-white font-medium">Himachal Pradesh</strong> and India.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 pt-2"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm shadow-soft flex items-center justify-center text-white/80 hover:text-primary hover:bg-white/20 transition-all border border-white/20"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats Row - Below text on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hidden md:flex gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dynamic Speaking Photo - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            {/* Main Photo Container */}
            <div className="relative">
              {/* Decorative Elements Behind */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl" />
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-primary/20 rounded-3xl" />
              
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-elevated"
              >
                <img
                  src={speakingImage}
                  alt="Ritesh Chauhan speaking at international conference on disaster management"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
                
                {/* Caption Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="glass rounded-xl px-4 py-3 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-1 tricolor-bar rounded-full" />
                      <div>
                        <p className="text-white text-sm font-medium">
                          International Forum on Disaster Resilience
                        </p>
                        <p className="text-white/70 text-xs">
                          Thought Leadership in Climate Adaptation & Policy
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Stats - Show below on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="md:hidden absolute bottom-24 left-0 right-0 px-6"
      >
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              className="text-center glass rounded-lg p-2"
            >
              <div className="font-display text-lg font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-[10px] text-white/60 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};