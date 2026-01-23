import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-mountain.jpg';
import profileImage from '@/assets/ritesh-profile.jpg';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritesh-chauhan-58bb3646/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@riteshchauhan.in', label: 'Email' },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital India - Government Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
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
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
            >
              Ritesh <span className="text-primary-foreground">Chauhan</span>
            </motion.h1>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl font-display italic text-muted-foreground border-l-4 border-primary pl-4"
            >
              "The measure of a man is what he does with power"
              <span className="block text-sm mt-2 not-italic text-primary">— Plato</span>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              A dedicated <strong className="text-foreground">public servant</strong> committed to 
              transparent governance, sustainable development, and empowering communities 
              across <strong className="text-foreground">Himachal Pradesh</strong> and India.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-card transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo & Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated">
                <img
                  src={profileImage}
                  alt="Ritesh Chauhan - IAS Officer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 tricolor-bar rounded-full" />
            </motion.div>

            {/* Stats Card */}
            <div className="glass rounded-2xl p-6 shadow-elevated border border-primary/10 w-full max-w-sm">
              <h3 className="font-display text-lg font-semibold mb-4 text-gradient text-center">
                At a Glance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '19+', label: 'Years of Service' },
                  { value: 'HP', label: 'Cadre' },
                  { value: 'Jt. Secy', label: 'GoI Empanelment' },
                  { value: '3', label: 'Departments Led' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center p-3 rounded-xl bg-subtle-gradient border border-primary/5 hover:shadow-card transition-all duration-300"
                  >
                    <div className="font-display text-2xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['20%', '60%', '20%'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
