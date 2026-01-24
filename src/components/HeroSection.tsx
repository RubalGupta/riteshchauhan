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
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Digital India - Government Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-[80vh] pt-8 lg:pt-12">
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
              Ritesh <span className="text-sidebar">Chauhan</span>
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
              A dedicated <strong className="font-bold text-sky-700">public servant</strong> committed to 
              transparent governance, sustainable development, and empowering communities 
              across <strong className="font-bold text-sky-700">Himachal Pradesh</strong> and India.
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
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full text-white flex items-center justify-center transition-all shadow-lg bg-cyan-500" whileHover={{
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
        }} className="flex justify-center lg:justify-end items-start relative order-1 lg:order-2">
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
                {/* Layered decorative elements for depth */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} className="absolute -inset-4 lg:-inset-6 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-xl" />
                <motion.div initial={{
                opacity: 0,
                x: 20,
                y: 20
              }} animate={{
                opacity: 1,
                x: 0,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.4
              }} className="absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 w-full h-full bg-gradient-to-br from-accent/40 to-secondary/40 rounded-2xl" />
                <motion.div initial={{
                opacity: 0,
                x: -15,
                y: -15
              }} animate={{
                opacity: 1,
                x: 0,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.5
              }} className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-full h-full bg-gradient-to-tl from-primary/30 to-secondary/30 rounded-2xl" />
                {/* Saffron accent bar - left side */}
                <motion.div initial={{
                scaleY: 0
              }} animate={{
                scaleY: 1
              }} transition={{
                duration: 0.6,
                delay: 0.7
              }} className="absolute -left-3 lg:-left-5 top-4 bottom-4 w-1.5 bg-gradient-to-b from-[hsl(var(--saffron))] via-white to-[hsl(var(--india-green))] rounded-full origin-top" />
                {/* Photo container */}
                <div className="relative w-[360px] h-[200px] lg:w-[600px] lg:h-[340px] rounded-2xl overflow-hidden shadow-elevated">
                  <img src={portraitImage} alt="Ritesh Chauhan - IAS Officer" className="w-full h-full object-cover object-center" />
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
              
              {/* Stats - Below Portrait */}
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1
              }} className="grid grid-cols-4 gap-2 mt-8 w-[360px] lg:w-[600px]">
                {[{
                  value: '19+',
                  label: 'Years',
                  color: 'from-primary to-primary/80'
                }, {
                  value: 'Secy',
                  label: 'Govt HP',
                  color: 'from-secondary to-secondary/80'
                }, {
                  value: 'Jt. Secy',
                  label: 'GoI',
                  color: 'from-slate-600 to-slate-700'
                }, {
                  value: '5',
                  label: 'Depts',
                  color: 'from-cyan-500 to-cyan-600'
                }].map((stat, index) => <motion.div key={stat.label} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 1.1 + index * 0.1
                }} whileHover={{
                  scale: 1.05,
                  y: -2
                }} className={`text-center py-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <div className="font-display text-xl lg:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-xs text-white/80 mt-0.5 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>)}
              </motion.div>
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