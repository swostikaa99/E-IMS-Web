import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Director",
    company: "TechFlow Inc.",
    avatar: "SC",
    rating: 5,
    quote:
      "E-IMS transformed how we manage inventory. We reduced stockouts by 85% and saved over $200K in the first year.",
  },
  {
    name: "Marcus Johnson",
    role: "Supply Chain Manager",
    company: "RetailMax",
    avatar: "MJ",
    rating: 5,
    quote:
      "The real-time analytics are game-changing. We now make data-driven decisions that have boosted our efficiency by 60%.",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "GrowthBrand Co.",
    avatar: "ER",
    rating: 5,
    quote:
      "Scaling from 100 to 10,000 SKUs was seamless. E-IMS grows with your business without missing a beat.",
  },
];

const companyLogos = [
  "TechFlow",
  "RetailMax",
  "GrowthBrand",
  "Nexus Corp",
  "Velocity",
  "Quantum",
];

export const TestimonialsSection = () => {
  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Start animation on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move left by 50%
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop(); // pause on hover
  const handleMouseLeave = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by industry{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              leaders
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why thousands of businesses choose E-IMS to power their
            inventory management
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos Marquee */}
        <div className="overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-12">
              Powering inventory for <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-8">
                leading brands
              </span>
            </h2>
          </div>
          <motion.div
            ref={marqueeRef}
            className="flex items-center gap-12 whitespace-nowrap"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300 font-semibold text-lg md:text-xl px-4"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
