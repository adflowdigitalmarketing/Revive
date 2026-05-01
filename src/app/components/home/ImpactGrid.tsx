import { motion } from "motion/react";
import { Leaf, Clock, PiggyBank } from "lucide-react";

export function ImpactGrid() {
  const cards = [
    {
      title: "Sustainability",
      value: "75+",
      unit: "Tonnes",
      description: "CO2 emissions saved over the asset's lifetime.",
      icon: Leaf,
    },
    {
      title: "Longevity",
      value: "30+",
      unit: "Years",
      description: "Unrivalled operational lifespan.",
      icon: Clock,
    },
    {
      title: "Financial",
      value: "20%",
      unit: "Savings",
      description: "Lifetime cost savings compared to traditional models.",
      icon: PiggyBank,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0B1510]">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1510] via-[#0f2118] to-[#0B1510]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#009C43]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#009C43]/5 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              At The Revive Group, we create{" "}
              <span className="text-[#009C43]">Partners in Sustainability</span>, not just customers.
            </h2>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-[24px]" />
                  <div
                    className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
                    style={{ borderRadius: "24px" }}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-[16px] bg-[#009C43]/20 flex items-center justify-center mb-6">
                        <Icon className="text-[#009C43]" size={24} />
                      </div>
                      <div className="text-white/60 font-medium tracking-wide uppercase text-sm mb-2">
                        {card.title}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl md:text-5xl font-semibold text-white">{card.value}</span>
                        <span className="text-lg font-bold text-[#009C43]">{card.unit}</span>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
