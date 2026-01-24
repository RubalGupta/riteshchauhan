import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

const careerHighlights = [
  {
    year: 'Present',
    title: 'Secretary, Animal Husbandry, HP',
    description: 'Working on State\'s First Small Ruminant development policy and contributing to the design of a National Livestock Insurance Program, keeping technology at the center to serve people.',
    impact: 'State-first policy design',
    highlight: true,
  },
  {
    year: '2023',
    title: 'NAFED Transformation',
    description: 'Led 500 professionals and 2,300 cooperative partners through a comprehensive turnaround. Transformed a legacy cooperative into a profitable, tech-first enterprise earning recognition from Union Ministers.',
    impact: 'US$3B enterprise turnaround',
    highlight: true,
  },
  {
    year: '2022',
    title: 'Crop Insurance Program Revival',
    description: 'Led the revival of India\'s national crop insurance program. Achieved 65% of claims settled within 10 days (versus 2 months previously), bringing 3 states and 4 insurers back onboard.',
    impact: '65% claims in 10 days',
    highlight: true,
  },
  {
    year: '2018-21',
    title: 'Ministry of Coal & Mines Reforms',
    description: 'Steered India\'s largest resource sector reforms including commercial coal mining that unlocked US$11 billion in revenue potential, reduced imports by 37%, and doubled state mineral revenues.',
    impact: 'US$11B revenue unlocked',
    highlight: true,
  },
  {
    year: '2018-21',
    title: 'PS to Union Ministers (Health & Coal)',
    description: 'Designed Ayushman Bharat–PMJAY, covering 11.8 million families and onboarding 15,000+ hospitals within a year. Spearheaded India\'s first e-pharmacy policy framework, growing the market from US$0.5B to US$3.18B.',
    impact: 'US$3.18B market created',
    highlight: true,
  },
  {
    year: '2010',
    title: 'District Magistrate, Lahaul & Spiti',
    description: 'Introduced community apple plantations under MGNREGA, helping 1,200 families shift from subsistence farming to commercial agriculture through community-led change.',
    impact: '1,200 families transformed',
    highlight: true,
  },
];

const impactStats = [
  { icon: TrendingUp, value: 'US$11B+', label: 'Revenue Unlocked' },
  { icon: Users, value: '11.8M', label: 'Families Covered' },
  { icon: Briefcase, value: '15,000+', label: 'Hospitals Onboarded' },
  { icon: Award, value: '8', label: 'Nations Replicating' },
];

export const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="career" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Career <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Leadership is a delicate balance between institutional authority and stakeholder alignment. 
            Over two decades, I have led from small district teams to reforming billion-dollar national 
            programs, but the underlying essence has remained the same: <strong className="text-foreground">collaboration under constraint</strong>.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {careerHighlights.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary shadow-soft z-10" />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${
                    item.highlight
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {item.year}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-accent/50 rounded-full text-xs font-medium text-primary">
                  {item.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-primary">
            <p className="text-lg italic text-muted-foreground leading-relaxed">
              "For the first time, modernization feels like our journey, not something imposed on us."
            </p>
            <footer className="mt-4 text-sm text-primary font-medium">
              — On NAFED's transformation
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
