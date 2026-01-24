import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.A. from HP University Shimla, M.A. from IGNOU Delhi',
  },
  {
    icon: Briefcase,
    title: 'Current Role',
    description: 'Secretary, Animal Husbandry Department, Himachal Pradesh',
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Empanelled as Joint Secretary, Government of India',
  },
  {
    icon: Trophy,
    title: 'Sports Legacy',
    description: '7-time State Table Tennis Champion',
  },
];

export const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="profile" className="py-24 bg-subtle-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            A Servant of the <span className="text-gradient">People</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I grew up in the <strong className="text-foreground">Himalayan foothills</strong>, 
              where it was easy to measure governance since the basic necessities such as roads, 
              schools, and health centers either existed or did not. In my childhood, I watched 
              both my parents, government doctors, and learnt the true meaning of public service: 
              <strong className="text-foreground"> showing up when no one else does</strong>. 
              This shaped my belief that governance must be both efficient and rooted in humanity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cracking what is considered <strong className="text-foreground">India's toughest 
              competitive exam in my first attempt at twenty-two</strong> was exhilarating — a 
              validation of grit, and small-town ambition. But becoming one of the youngest 
              officers meant learning to lead among people decades older in age and experience. 
              Finding my voice amid that environment taught me quiet assertion and earned respect.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Before bureaucracy, it was sports that taught me resilience. As a <strong className="text-foreground">
              seven-time state table tennis champion</strong>, I learned to win with focus and 
              lose with grace. That discipline and humility have stayed with me through every 
              reform I have led. My worldview has been shaped by experiencing these contrasts — 
              between youth and authority, ambition and service, technology and trust.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
