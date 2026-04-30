import { motion } from "motion/react";
import { Shield } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: "point-0",
    name: "Initial Purchase",
    Alternative: 450000,
    Revive: 450000,
  },
  {
    id: "point-1",
    name: "Year 10",
    Alternative: 900000,
    Revive: 750000,
  },
  {
    id: "point-2",
    name: "Year 20",
    Alternative: 1350000,
    Revive: 1050000,
  },
  {
    id: "point-3",
    name: "Year 30+",
    Alternative: 1800000,
    Revive: 1477500,
  },
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `€${(value / 1000000).toFixed(1)}m`;
  }
  return `€${(value / 1000).toFixed(0)}k`;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const alternativeValue = payload.find((p: any) => p.dataKey === "Alternative")?.value || 0;
    const reviveValue = payload.find((p: any) => p.dataKey === "Revive")?.value || 0;
    const diff = alternativeValue - reviveValue;

    return (
      <div className="bg-white/95 backdrop-blur-md border border-gray-100 p-4 rounded-[16px] shadow-xl">
        <p className="font-bold text-gray-800 mb-3">{label}</p>
        {payload.map((entry: any) => (
          <div key={`tooltip-${entry.dataKey}`} className="flex items-center gap-3 mb-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600 font-medium">{entry.name}:</span>
            <span className="font-bold text-gray-900 ml-auto">
              €{entry.value.toLocaleString()}
            </span>
          </div>
        ))}
        {diff > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3 text-sm">
            <span className="text-gray-600 font-medium">Savings:</span>
            <span className="font-bold text-[#009C43] ml-auto">
              +€{diff.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export function DepreciationStrategies() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gray-50 text-gray-600 mb-6 rounded-[12px] text-sm font-bold tracking-widest uppercase border border-gray-200">
            Split Depreciation Strategies
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ letterSpacing: "-0.03em", color: "#1a1a1a" }}
          >
            WHY CHOOSE THE <span className="text-[#009C43]">REVIVE WARRIOR</span> PROGRAM?
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Chart Container (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] bg-white border border-gray-100 rounded-[24px] shadow-lg p-6"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">Cumulative Cost Comparison</h3>
            <div className="w-full" style={{ height: '420px' }}>
              <ResponsiveContainer width="100%" height={420}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid key="chart-grid" strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis
                    key="chart-x-axis"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis
                    key="chart-y-axis"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
                    tickFormatter={formatCurrency}
                    domain={[400000, 1800000]}
                    ticks={[400000, 800000, 1200000, 1800000]}
                    dx={-10}
                  />
                  <Tooltip key="chart-tooltip" content={<CustomTooltip />} />
                  <Legend
                    key="chart-legend"
                    verticalAlign="top"
                    height={36}
                    iconType="circle"
                    wrapperStyle={{ fontSize: "14px", fontWeight: 600, color: "#4b5563" }}
                  />
                  <Line
                    key="line-alternative"
                    type="monotone"
                    dataKey="Alternative"
                    name="Traditional Model"
                    stroke="#4b5563"
                    strokeWidth={4}
                    dot={{ r: 6, fill: "#4b5563", strokeWidth: 0 }}
                    activeDot={{ r: 8, stroke: "#fff", strokeWidth: 2 }}
                  />
                  <Line
                    key="line-revive"
                    type="monotone"
                    dataKey="Revive"
                    name="Revive Program"
                    stroke="#009C43"
                    strokeWidth={4}
                    dot={{ r: 6, fill: "#009C43", strokeWidth: 0 }}
                    activeDot={{ r: 8, stroke: "#fff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Hero Stat Container (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] h-full flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-[#009C43] to-[#007A34] w-full p-12 rounded-[24px] shadow-2xl text-center relative overflow-hidden group">
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center mb-8 border border-white/20">
                  <Shield className="text-white w-10 h-10" />
                </div>
                
                <h3 className="text-white/90 text-sm md:text-base font-bold tracking-widest uppercase mb-4">
                  Life-Time Differential
                </h3>
                
                <div className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 tracking-tighter">
                  €322,500<span className="text-3xl text-emerald-300 align-top">*</span>
                </div>
                
                <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-xs">
                  *Estimated lifetime savings based on 30-year operational lifecycle vs traditional replacement model.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
