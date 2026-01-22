import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Leaf, Lightbulb } from 'lucide-react';

const visionPillars = [
  {
    icon: Target,
    title: 'Good Governance',
    description: 'Implementing transparent, accountable, and responsive administration that puts citizens first.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: Users,
    title: 'Inclusive Development',
    description: 'Ensuring no community is left behind in the march towards progress and prosperity.',
    color: 'from-secondary to-secondary/70',
  },
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    description: 'Balancing development with environmental conservation for future generations.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Lightbulb,
    title: 'Digital Innovation',
    description: 'Leveraging technology to improve service delivery and citizen engagement.',
    color: 'from-secondary to-primary',
  },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="py-24 bg-subtle-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Vision & <span className="text-gradient">Values</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Guiding principles that drive every decision and action in the pursuit 
            of a better, more equitable society.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all h-full border border-transparent hover:border-primary/20">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed">
              "Public service is not just a profession; it's a sacred trust. Every decision 
              we make affects lives, and every action must be guided by the principle of 
              serving the greater good."
            </p>
            <footer className="mt-6 text-primary font-medium">
              — Ritesh Chauhan
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
