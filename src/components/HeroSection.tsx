import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Boxes } from "@/components/ui/background-boxes";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 -z-10">
          <Boxes />
        </div>
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            <Sparkles className="h-4 w-4" />
            <span>New: AI-powered inventory predictions</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Manage your inventory
            <br />
            <span className="gradient-text">with intelligence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            E-IMS is the all-in-one platform that helps e-commerce businesses
            streamline operations, reduce costs, and scale faster than ever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/pricing">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Trusted by 10,000+ e-commerce businesses worldwide
          </motion.p>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-24 md:mt-32 max-w-6xl"
        >
          <div className="gradient-border rounded-2xl p-1 mt-8">
            <div className="overflow-hidden rounded-xl bg-card">
              {/* Mock Dashboard */}
              <div className="border-b border-border p-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    {
                      label: "Total Products",
                      value: "12,847",
                      change: "+12%",
                    },
                    { label: "Orders Today", value: "1,284", change: "+8%" },
                    { label: "Revenue", value: "$84,520", change: "+23%" },
                    { label: "Low Stock", value: "23", change: "-15%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="rounded-lg bg-secondary/50 p-4"
                    >
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-primary">{stat.change}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      Inventory Levels
                    </p>
                    <div className="flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 70, 60, 90, 75, 85, 50, 95].map(
                        (h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + i * 0.05,
                            }}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                            style={{ minHeight: 8, maxHeight: 80 }}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      Recent Activity
                    </p>
                    <div className="space-y-3">
                      {[
                        "New order #1284 received",
                        "Stock updated for SKU-4521",
                        "Low stock alert: Widget Pro",
                      ].map((activity, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <p className="text-sm text-muted-foreground">
                            {activity}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
};
