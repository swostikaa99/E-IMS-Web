import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10K+", label: "Active Businesses" },
  { value: "$2.5B", label: "Revenue Processed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "Products Tracked" },
];

export const StatsSection = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/80 to-card p-8 md:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-center"
              >
                <p className="gradient-text mb-2 text-4xl font-bold md:text-5xl">
                  <AnimatedNumber value={stat.value} duration={3500} />
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function AnimatedNumber({
  value,
  duration = 3500,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  // parse value into prefix, numeric, unit/suffix
  const prefixMatch = value.match(/^[^0-9\-\.+]*/);
  const prefix = prefixMatch ? prefixMatch[0] : "";
  const suffixMatch = value.match(/[A-Za-z%+]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const numericStr = value.replace(/[^0-9.]/g, "");
  const numeric = parseFloat(numericStr) || 0;
  const decimals = (numericStr.split(".")[1] || "").length;

  // determine unit (K/M/B) present in suffix
  const unit = /K/i.test(suffix)
    ? "K"
    : /M/i.test(suffix)
    ? "M"
    : /B/i.test(suffix)
    ? "B"
    : null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            // start animation
            let start: number | null = null;
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

            const tick = (ts: number) => {
              if (!start) start = ts;
              const elapsed = ts - start;
              const t = Math.min(1, elapsed / duration);
              const eased = easeOut(t);

              // animate in unit-space: e.g. 0 -> numeric (10 for 10K+)
              const current = numeric * eased;

              let text = "";
              if (unit) {
                // preserve decimals like original
                if (decimals > 0)
                  text =
                    current.toFixed(decimals) + unit + suffix.replace(unit, "");
                else
                  text = Math.round(current) + unit + suffix.replace(unit, "");
              } else if (prefix.includes("$") && /B/i.test(suffix)) {
                // $2.5B -> animate in billions with same decimal places
                if (decimals > 0)
                  text = prefix + current.toFixed(decimals) + suffix;
                else text = prefix + Math.round(current) + suffix;
              } else if (suffix.includes("%")) {
                // percent
                if (decimals > 0) text = current.toFixed(decimals) + suffix;
                else text = Math.round(current) + suffix;
              } else if (prefix) {
                // e.g. $123 -> animate numeric with prefix
                if (decimals > 0)
                  text = prefix + current.toFixed(decimals) + suffix;
                else
                  text = prefix + Math.round(current).toLocaleString() + suffix;
              } else {
                // plain number
                if (decimals > 0) text = current.toFixed(decimals) + suffix;
                else text = Math.round(current).toLocaleString() + suffix;
              }

              setDisplay(text);

              if (t < 1) requestAnimationFrame(tick);
              else {
                // ensure final exact value
                setDisplay(value);
              }
            };

            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [numeric, duration, decimals, prefix, suffix, unit, value]);

  return (
    <span ref={ref} aria-hidden>
      {display}
    </span>
  );
}
