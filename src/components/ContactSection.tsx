import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Facebook, Quote } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office',
    value: 'Secretariat, Shimla, Himachal Pradesh',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ritesh.chauhan@gov.in',
    href: 'mailto:ritesh.chauhan@gov.in',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritesh-chauhan-58bb3646/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/ritesh.chauhan.777', label: 'Facebook' },
];

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

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-subtle-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            For official communications and inquiries, please reach out through 
            appropriate government channels.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social & Connect */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-display text-xl font-semibold mb-6">
                Connect on Social Media
              </h3>
              <p className="text-muted-foreground mb-6">
                Follow for updates on initiatives, policy discussions, and 
                governance insights.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> This is an 
                  informational website. For official matters, please use 
                  designated government communication channels.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Voices - What People Say (Commented out - content pending)
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Voices
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-12">
            What People <span className="text-gradient">Say</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
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
        */}
      </div>
    </section>
  );
};
