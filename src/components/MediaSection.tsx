import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink, Youtube, Instagram, Facebook, Linkedin, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import mediaPmfby from '@/assets/media-pmfby.png';
import mediaKangra from '@/assets/media-kangra.png';

const mediaItems = [
  {
    id: 1,
    platform: 'YouTube',
    icon: Youtube,
    title: '13th PMFBY Conference: Disaster management',
    description: 'Bridging the massive financing gap is not just a fiscal necessity but a moral imperative to protect our most vulnerable communities and critical infrastructure.',
    thumbnail: 'https://img.youtube.com/vi/CZnBvNrheU4/maxresdefault.jpg',
    url: 'https://www.youtube.com/live/CZnBvNrheU4?si=INNa8vIKbMJJD-ox&t=16754',
    duration: 'Live Session',
    accent: 'from-red-500 to-red-600',
  },
  {
    id: 2,
    platform: 'YouTube',
    icon: Youtube,
    title: 'Policy Reform Insights',
    description: 'Sharing experiences on driving large-scale policy reforms and institutional transformation.',
    thumbnail: 'https://img.youtube.com/vi/uXNt06qChLg/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?si=yLgOhQTE_kir0seH&v=uXNt06qChLg&feature=youtu.be',
    duration: 'Interview',
    accent: 'from-red-500 to-red-600',
  },
  {
    id: 3,
    platform: 'Instagram',
    icon: Instagram,
    title: 'Digital Innovation at PMFBY',
    description: 'Delving into ground breaking digital innovations at Pradhan Mantri Fasal Bima Yojana (PMFBY).',
    thumbnail: mediaPmfby,
    url: 'https://www.instagram.com/reels/DGxGnyQv3kZ/',
    duration: 'Reel',
    accent: 'from-pink-500 via-purple-500 to-orange-400',
  },
  {
    id: 4,
    platform: 'Facebook',
    icon: Facebook,
    title: 'Community Connect',
    description: 'Ritesh Chauhan IAS, DC Kangra speaks to Insighthimachal regarding various developmental activities going in Distt.',
    thumbnail: mediaKangra,
    url: 'https://www.facebook.com/watch/?v=253423955025915',
    duration: 'Video',
    accent: 'from-blue-600 to-blue-700',
  },
];

const articleItems = [
  {
    id: 1,
    publication: 'AgroSpectrum',
    title: 'India Should Move Toward Productivity-Linked Livestock Insurance',
    description: '"India should move toward productivity-linked livestock insurance—but only through a phased, data-anchored evolution"',
    url: 'https://www.magzter.com/stories/business/AgroSpectrum/INDIA-SHOULD-MOVE-TOWARD-PRODUCTIVITYLINKED-LIVESTOCK-INSURANCEBUT-ONLY-THROUGH-A-PHASED-DATAANCHORED-EVOLUTION',
    date: 'February 2026',
    type: 'Interview',
  },
];

export const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="media" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Media & Appearances
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            In the <span className="text-primary">Spotlight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured discussions, interviews, and insights on governance, technology, and public service transformation
          </p>
        </motion.div>

        {/* Featured Video - Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <a
            href={mediaItems[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative">
              <img
                src={mediaItems[0].thumbnail}
                alt={mediaItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                >
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${mediaItems[0].accent}`}>
                    <Youtube size={16} />
                    {mediaItems[0].platform}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                    {mediaItems[0].duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  {mediaItems[0].title}
                </h3>
                <p className="text-white/80 max-w-2xl">
                  {mediaItems[0].description}
                </p>
              </div>

              {/* External link indicator */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Grid of other videos */}
        <div className="grid md:grid-cols-3 gap-6">
          {mediaItems.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Platform badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${item.accent}`}>
                      <item.icon size={14} />
                      {item.platform}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-card">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Articles & Interviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">Articles & Interviews</h3>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {articleItems.map((article) => (
                <CarouselItem key={article.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {article.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{article.publication}</p>
                      <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3 italic">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read article <ExternalLink size={14} />
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            {articleItems.length > 3 && (
              <>
                <CarouselPrevious className="hidden md:flex -left-4" />
                <CarouselNext className="hidden md:flex -right-4" />
              </>
            )}
          </Carousel>
        </motion.div>

        {/* Social follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Follow for more updates on governance and public policy</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ritesh-chauhan-58bb3646/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/ritesh.chauhan.777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <Facebook size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
