import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';

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
    icon: Heart,
    title: 'Passion',
    description: 'Rural development, sustainable agriculture, and public welfare',
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
              <strong className="text-foreground">Ritesh Chauhan</strong> is an Indian Administrative 
              Service (IAS) officer of the <strong className="text-foreground">2005 batch</strong>, 
              belonging to the Himachal Pradesh cadre. Born on January 11, 1983, he has dedicated 
              nearly two decades to public service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fluent in English and Hindi, he brings a unique blend of administrative acumen and 
              ground-level understanding to every role. His career trajectory reflects a deep 
              commitment to <strong className="text-foreground">good governance</strong>, 
              <strong className="text-foreground"> transparency</strong>, and 
              <strong className="text-foreground"> citizen-centric policies</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as <strong className="text-foreground">Secretary of the Animal 
              Husbandry Department</strong>, he has been recognized for his exceptional work 
              and empanelled as <strong className="text-foreground">Joint Secretary</strong> 
              at the Government of India level.
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
