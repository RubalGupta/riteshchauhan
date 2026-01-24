import { motion } from 'framer-motion';
import { Linkedin, Facebook, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-mountain.jpg';
import portraitImage from '@/assets/ritesh-portrait.jpg';
const socialLinks = [{
  icon: Linkedin,
  href: 'https://www.linkedin.com/in/ritesh-chauhan-58bb3646/',
  label: 'LinkedIn'
}, {
  icon: Facebook,
  href: 'https://facebook.com',
  label: 'Facebook'
}, {
  icon: Mail,
  href: 'mailto:contact@riteshchauhan.in',
  label: 'Email'
}];
export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Digital India - Government Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Text Content - Left Side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6 order-2 lg:order-1">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="inline-block">
              <span className="px-4 py-2 bg-tech-gradient text-white rounded-full text-sm font-medium shadow-lg">
                IAS Officer • 2005 Batch
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Ritesh <span className="text-destructive">Chauhan</span>
            </motion.h1>

            <motion.blockquote initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="text-xl md:text-2xl font-display italic text-white font-semibold border-l-4 border-primary pl-4 drop-shadow-md">
              "The measure of a man is what he does with power"
              <span className="block text-sm mt-2 not-italic text-primary font-bold">— Plato</span>
            </motion.blockquote>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="text-lg font-medium max-w-lg drop-shadow-md text-sky-700">
              A dedicated <strong className="font-bold text-destructive">public servant</strong> committed to 
              transparent governance, sustainable development, and empowering communities 
              across <strong className="font-bold text-destructive">Himachal Pradesh</strong> and India.
            </motion.p>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all border-muted" whileHover={{
              scale: 1.1,
              y: -4
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.9 + index * 0.1
            }}>
                  <social.icon size={20} />
                </motion.a>)}
            </motion.div>

            {/* Stats - Below Bio */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1
          }} className="grid grid-cols-4 gap-4 pt-6">
              {[{
              value: '19+',
              label: 'Years'
            }, {
              value: 'HP',
              label: 'Cadre'
            }, {
              value: 'Jt. Secy',
              label: 'GoI'
            }, {
              value: '3',
              label: 'Depts'
            }].map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 1.1 + index * 0.1
            }} className="text-center p-3 rounded-xl backdrop-blur-sm border border-white/10 bg-muted">
                  <div className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>

          {/* Photo - Right Side with TED-talk style decorative elements */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex justify-center lg:justify-end items-center relative order-1 lg:order-2">
            {/* Decorative elements behind the photo */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
              {/* Large background circle */}
              <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 1,
              delay: 0.6
            }} className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl" />
              
              {/* Decorative ring 1 */}
              <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.7
            }} className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border-2 border-primary/20" />
              
              {/* Decorative ring 2 */}
              <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border border-secondary/30" />
              
              {/* Accent shapes */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 1
            }} className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-full blur-xl" />
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 1.1
            }} className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-accent/40 to-accent/10 rounded-full blur-xl" />
              
              {/* Tricolor accent bar */}
              <motion.div initial={{
              scaleY: 0
            }} animate={{
              scaleY: 1
            }} transition={{
              duration: 0.8,
              delay: 1.2
            }} className="absolute -left-4 top-1/2 -translate-y-1/2 h-32 w-1 tricolor-bar rounded-full origin-center" />
            </div>
            
            {/* Main photo container */}
            <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="relative z-10">
              <div className="relative">
                {/* Photo frame with gradient border */}
                <div className="w-[280px] h-[350px] lg:w-[340px] lg:h-[420px] rounded-2xl p-1 bg-gradient-to-br from-primary via-secondary to-accent shadow-elevated">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                    <img src={portraitImage} alt="Ritesh Chauhan - IAS Officer" className="w-full h-full object-cover object-top shadow-md" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1.3
              }} className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold shadow-lg">
                  HP Cadre • IAS
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div animate={{
          height: ['20%', '60%', '20%']
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="w-1 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>;
};