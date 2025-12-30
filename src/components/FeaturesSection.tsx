import { motion } from "framer-motion";
import { BarChart3, Box, Layers, RefreshCcw, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Smart Inventory Tracking",
    description:
      "Real-time visibility across all warehouses and channels. Never lose track of a single item.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Data-driven insights to optimize stock levels, predict demand, and reduce carrying costs.",
  },
  {
    icon: RefreshCcw,
    title: "Automated Reordering",
    description:
      "Set smart rules and let AI handle purchase orders. Say goodbye to stockouts.",
  },
  {
    icon: Layers,
    title: "Multi-Channel Sync",
    description:
      "Connect all your sales channels. Shopify, Amazon, eBay — synced in real-time.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance. Your data is protected 24/7.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Process thousands of orders without breaking a sweat.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to
            <br />
            <span className="gradient-text">scale your business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed for modern e-commerce operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="card-gradient h-full rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
