import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function LatestInsights() {
  const news = [
    {
      id: 1,
      title: "Revive Park Hits 100% Off-Grid Milestone",
      date: "October 15, 2026",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVuZXJneSUyMGZhY3Rvcnl8ZW58MXx8fHwxNjc3NjM0NjI4&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/about/news",
    },
    {
      id: 2,
      title: "New 8mm Steel Tank Design Extends Lifespan",
      date: "September 28, 2026",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNjc3NjM0NjI4&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/about/news",
    },
    {
      id: 3,
      title: "Global Expansion: New Service Hub in Nordic Region",
      date: "September 12, 2026",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWR8ZW58MXx8fHwxNjc3NjM0NjI4&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/about/news",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-[#009C43] mb-6 rounded-[12px] text-sm font-bold tracking-widest uppercase border border-emerald-200">
              News & Updates
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900"
              style={{ letterSpacing: "-0.03em" }}
            >
              Latest Insights & <br className="hidden md:block" /> Innovations
            </h2>
          </div>
          <a
            href="/about/news"
            className="group flex items-center gap-2 text-[#009C43] font-bold tracking-wide uppercase transition-all duration-300 hover:text-emerald-700"
          >
            View All News
            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
              <div
                className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
                style={{ borderRadius: "24px" }}
              >
                {/* Image Preview */}
                <div
                  className="relative h-64 overflow-hidden"
                  style={{ borderRadius: "24px 24px 0 0" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white" style={{ borderRadius: "0 0 24px 24px" }}>
                  <div className="flex items-center gap-2 text-emerald-600 mb-4 text-sm font-semibold tracking-wide">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#009C43] transition-colors duration-300 line-clamp-3">
                    {item.title}
                  </h3>
                  
                  <div className="mt-auto">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-wider text-sm group/btn hover:text-[#009C43] transition-colors"
                    >
                      Read More
                      <ArrowRight 
                        size={18} 
                        className="transform group-hover/btn:translate-x-2 transition-transform duration-300" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
