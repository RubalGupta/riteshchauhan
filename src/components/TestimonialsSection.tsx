import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ritesh Chauhan exemplifies what a modern civil servant should be—technically proficient, ethically grounded, and deeply committed to public welfare.",
    author: "Senior Government Official",
    role: "Government of India",
  },
  {
    quote: "His approach to administration combines traditional values with innovative thinking. He truly understands the pulse of both rural and urban communities.",
    author: "District Colleague",
    role: "Himachal Pradesh Administration",
  },
  {
    quote: "A leader who leads by example. His dedication to sustainable development and farmer welfare has made a real difference in people's lives.",
    author: "Department Associate",
    role: "Animal Husbandry Department",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="media" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Voices
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
