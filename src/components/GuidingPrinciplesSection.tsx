import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mountain, Scale, Compass } from 'lucide-react';

const principles = [
  {
    symbol: 'Α',
    title: 'Arête',
    subtitle: 'Excellence Through Potential',
    description: 'The ancient Greek concept of realizing one\'s full potential — not perfection, but the continuous pursuit of being the best version of oneself in service of others.',
    source: 'Aristotle\'s Nicomachean Ethics',
  },
  {
    symbol: 'Ω',
    title: 'Eudaemonia',
    subtitle: 'Living a Purposeful Life',
    description: 'Beyond happiness lies flourishing — a life aligned with virtue, meaning, and contribution to the greater good. True fulfillment comes from purposeful action.',
    source: 'Aristotle\'s concept of human flourishing',
  },
];

const influences = [
  {
    icon: BookOpen,
    title: 'The Bhagavad Gita',
    insight: '"You have the right to work, but never to the fruit of work." This teaching on Nishkama Karma — action without attachment to results — guides my approach to public service.',
  },
  {
    icon: Mountain,
    title: 'Meditations by Marcus Aurelius',
    insight: '"The impediment to action advances action. What stands in the way becomes the way." Every policy challenge I\'ve faced has been an opportunity for innovation.',
  },
  {
    icon: Scale,
    title: 'Man\'s Search for Meaning',
    insight: 'Viktor Frankl\'s insight that meaning comes from what we give to the world, not what we take — a philosophy that resonates deeply with public service.',
  },
  {
    icon: Compass,
    title: 'Tao Te Ching',
    insight: '"A leader is best when people barely know he exists... when his work is done, they say: we did it ourselves." True leadership empowers others.',
  },
];

export const GuidingPrinciplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="principles" className="py-24 bg-background" ref={ref}>
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
            Guiding <span className="text-gradient">Principles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            My worldview has been shaped by experiencing contrasts — between youth and authority, 
            ambition and service, technology and trust. These tensions led me to timeless principles 
            that continue to guide my journey.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all h-full border border-transparent hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                    <span className="font-serif text-3xl font-bold">{principle.symbol}</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-primary mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                    {principle.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <p className="text-xs text-primary/70 italic">
                    — {principle.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Intellectual Influences */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="font-display text-2xl font-semibold text-center mb-8">
            Intellectual <span className="text-primary">Influences</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {influences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {item.insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Thought */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-2xl p-8 border border-primary/10">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              These principles remind me that governance is ultimately a spiritual practice — 
              serving with humility, leading with purpose, and always remembering that every 
              policy decision touches a human life.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
