import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Profile', href: '#profile' },
  { name: 'Media', href: '#media', featured: true },
  { name: 'Career', href: '#career' },
  { name: 'Vision', href: '#vision' },
  { name: 'Philosophy', href: '#principles' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="font-display text-xl font-semibold text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">RC</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.featured ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Video icon with animation */}
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Video size={14} className="text-cyan-500" />
                  </motion.span>
                  
                  {/* Text with subtle bounce */}
                  <motion.span
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    {link.name}
                  </motion.span>
                </motion.a>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              )
            ))}
          </div>

          <motion.a
            href="https://www.linkedin.com/in/ritesh-chauhan-58bb3646/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-soft hover:shadow-card transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Connect
          </motion.a>

          {/* Mobile Hamburger Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.featured && (
                      <Video size={16} className="text-cyan-500" />
                    )}
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="https://www.linkedin.com/in/ritesh-chauhan-58bb3646/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg text-base font-medium"
                >
                  Connect on LinkedIn
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
