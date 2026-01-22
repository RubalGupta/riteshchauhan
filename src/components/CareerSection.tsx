import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const careerTimeline = [
  {
    year: '2005',
    title: 'Joined Indian Administrative Service',
    description: 'Selected through UPSC Civil Services Examination, allocated to Himachal Pradesh cadre.',
    highlight: true,
  },
  {
    year: '2005-2015',
    title: 'District Level Postings',
    description: 'Served in various capacities across districts of Himachal Pradesh, gaining grassroots administrative experience.',
    highlight: false,
  },
  {
    year: '2015-2020',
    title: 'State Government Roles',
    description: 'Held key positions in state administration, contributing to policy implementation and governance reforms.',
    highlight: false,
  },
  {
    year: '2020-Present',
    title: 'Secretary, Animal Husbandry',
    description: 'Leading the Animal Husbandry Department, focusing on livestock welfare, dairy development, and farmer prosperity.',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Joint Secretary Empanelment',
    description: 'Empanelled as Joint Secretary at Government of India level, recognizing exceptional service and capabilities.',
    highlight: true,
  },
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of dedicated service to the nation, marked by impactful roles 
            and meaningful contributions to public welfare.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {careerTimeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center mb-12 ${
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
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
