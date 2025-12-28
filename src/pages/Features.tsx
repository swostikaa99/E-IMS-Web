import { motion } from "framer-motion";
import { 
  BarChart3, 
  Box, 
  Layers, 
  RefreshCcw, 
  Shield, 
  Zap,
  ArrowRight,
  Truck,
  Package,
  Clock,
  Users,
  Globe
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mainFeatures = [
  {
    icon: Box,
    title: "Smart Inventory Tracking",
    description:
      "Real-time visibility across all warehouses and channels. Never lose track of a single item.",
    details: [
      "Real-time stock updates",
      "Barcode & QR scanning",
      "Low stock alerts",
      "Batch tracking"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Data-driven insights to optimize stock levels, predict demand, and reduce carrying costs.",
    details: [
      "Sales forecasting",
      "Demand prediction",
      "Performance metrics",
      "Custom dashboards"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Automated Reordering",
    description:
      "Set smart rules and let AI handle purchase orders. Say goodbye to stockouts.",
    details: [
      "Smart reorder points",
      "Supplier management",
      "Purchase automation",
      "Cost optimization"
    ]
  },
  {
    icon: Layers,
    title: "Multi-Channel Sync",
    description:
      "Connect all your sales channels. Shopify, Amazon, eBay — synced in real-time.",
    details: [
      "Shopify integration",
      "Amazon sync",
      "eBay connection",
      "WooCommerce support"
    ]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance. Your data is protected 24/7.",
    details: [
      "256-bit encryption",
      "SOC 2 compliant",
      "Regular backups",
      "Role-based access"
    ]
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Process thousands of orders without breaking a sweat.",
    details: [
      "99.9% uptime",
      "Global CDN",
      "Instant sync",
      "Bulk operations"
    ]
  },
];

const additionalFeatures = [
  {
    icon: Truck,
    title: "Shipping Integration",
    description: "Connect with major carriers for automated shipping labels and tracking."
  },
  {
    icon: Package,
    title: "Warehouse Management",
    description: "Organize inventory across multiple locations with bin and zone management."
  },
  {
    icon: Clock,
    title: "Order Fulfillment",
    description: "Streamline picking, packing, and shipping with optimized workflows."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign roles and permissions to team members for secure access control."
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Sell globally with support for multiple currencies and tax regions."
  },
  {
    icon: BarChart3,
    title: "Custom Reports",
    description: "Generate detailed reports on sales, inventory turnover, and profitability."
  },
];

const Features = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Powerful features for{" "}
              <span className="gradient-text">modern inventory</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Everything you need to manage, track, and optimize your inventory across all channels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-gradient h-full rounded-2xl border border-border/50 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{feature.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="relative py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              And so much more
            </h2>
            <p className="text-lg text-muted-foreground">
              Additional features to supercharge your operations
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <feature.icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Start your free trial today. No credit card required.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">Start Free Trial</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Features;
