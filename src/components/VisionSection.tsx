import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Leaf, Globe, Cpu } from 'lucide-react';

const visionPillars = [
  {
    icon: Target,
    title: 'Governance as Art',
    description: 'Aligning data, design, and dignity. Governance is not just management of systems, but bridging policy with the lives of people it impacts.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: Cpu,
    title: 'Technology for Empathy',
    description: 'Leveraging satellite imagery and real-time data analytics to transform struggling schemes into responsive systems that serve human needs.',
    color: 'from-secondary to-secondary/70',
  },
  {
    icon: Leaf,
    title: 'Digital Agriculture',
    description: 'Transforming agriculture from a livelihood of uncertainty into one of resilience and dignity through AI-powered tools and digital public systems.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Globe,
    title: 'Global Collaboration',
    description: 'Building networks with World Bank, FAO, and UNDP to lead national missions in digital agriculture and AI governance. UNDP is replicating initiatives across 8 nations.',
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
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Being a practitioner of governance, I have witnessed firsthand the gap between policy 
            and the lives of people it impacts. From farmers waiting months for crop insurance claims 
            to cooperatives struggling with legacy systems — these experiences shaped my vision for 
            <strong className="text-foreground"> technology that bridges this divide</strong>.
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

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-l-4 border-primary">
            <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
              The Next Decade
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My past achievements are milestones, not destinations. In the next decade, I want to 
              bring the power of <strong className="text-foreground">AI to tools that support agriculture 
              and rural communities</strong>. In the long term, I will dedicate my efforts to collaborating 
              with institutions such as the World Bank, FAO, and UNDP.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In a nation where agriculture sustains nearly half the population and the country strives 
              for inclusive growth, <strong className="text-foreground">digital public systems can transform 
              agriculture from a livelihood of uncertainty into one of resilience and dignity</strong>.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
              "Technology serves not as a substitute for empathy, but as its most powerful 
              expression in public policy."
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
