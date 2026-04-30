import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Filter } from "lucide-react";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  categoryColor: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "EcoPark",
    title: "Revive Group Reaches New Stage of Decarbonisation in Tipperary: Launch of Building One",
    description: "Our new manufacturing facility powered 100% by renewable energy marks a significant milestone in our journey toward carbon-neutral operations. The state-of-the-art Building One features advanced solar arrays and wind integration.",
    date: "21 Apr 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop",
    featured: true,
    categoryColor: "#009C43"
  },
  {
    id: 2,
    category: "Global News",
    title: "Partnership with REI NZ: Warrior Enters the New Zealand Market",
    description: "Strategic partnership expands our Asia-Pacific presence with local representation and support infrastructure.",
    date: "18 Apr 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=800&h=600&fit=crop",
    categoryColor: "#0066CC"
  },
  {
    id: 3,
    category: "Technology",
    title: "Tech Update: New Remote-Control Systems from Åkerströms",
    description: "Enhanced safety and operational efficiency with next-generation wireless control technology integrated across the Warrior fleet.",
    date: "15 Apr 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    categoryColor: "#6B7280"
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Revive Program: How We Saved 5,000 Tonnes of CO₂ Last Quarter",
    description: "Regeneration initiative delivers measurable environmental impact through chassis reuse and circular engineering practices.",
    date: "12 Apr 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop",
    categoryColor: "#009C43"
  },
  {
    id: 5,
    category: "Technology",
    title: "Revive Live Platform Reaches 100+ Connected Fleet Vehicles",
    description: "Real-time monitoring and predictive maintenance system now deployed across major European markets.",
    date: "8 Apr 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    categoryColor: "#6B7280"
  },
  {
    id: 6,
    category: "Global News",
    title: "Revive Group Expands Nordic Presence with New Service Hub in Copenhagen",
    description: "Dedicated facility supports growing Scandinavian customer base with specialized winter-ready configurations.",
    date: "5 Apr 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop",
    categoryColor: "#0066CC"
  }
];

const categories = ["All", "EcoPark", "Technology", "Global News", "Sustainability"];

function NewsCard({ item, className = "" }: { item: NewsItem; className?: string }) {
  return (
    <motion.article
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 ${className}`}
      style={{ borderRadius: '24px' }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-100 ${item.featured ? 'h-96' : 'h-64'}`}>
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Tag */}
        <div className="absolute top-6 left-6">
          <div
            className="px-4 py-2 text-white backdrop-blur-md"
            style={{
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              backgroundColor: `${item.categoryColor}DD`
            }}
          >
            {item.category.toUpperCase()}
          </div>
        </div>

        {/* Date & Time */}
        <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{item.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3
          className="mb-3 group-hover:text-[#009C43] transition-colors"
          style={{
            fontSize: item.featured ? '2rem' : '1.5rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: '#1a1a1a'
          }}
        >
          {item.title}
        </h3>

        {item.description && (
          <p className="text-gray-600 leading-relaxed mb-6">
            {item.description}
          </p>
        )}

        {/* Read More Arrow */}
        <div className="flex items-center gap-2 text-[#009C43] font-semibold text-sm group-hover:gap-4 transition-all">
          READ MORE
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

function PressReleaseCard({ title, date }: { title: string; date: string }) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-200 p-6 hover:border-[#009C43] hover:shadow-lg transition-all cursor-pointer"
      style={{ borderRadius: '16px' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-grow">
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h4 className="font-bold text-gray-900 group-hover:text-[#009C43] transition-colors">
            {title}
          </h4>
        </div>
        <ArrowRight
          size={20}
          className="text-[#009C43] flex-shrink-0 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </motion.div>
  );
}

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredNews = newsItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const visibleNews = filteredNews.slice(0, visibleCount);
  const featuredNews = visibleNews.find((item) => item.featured);
  const secondaryNews = visibleNews.filter((item) => !item.featured);

  const pressReleases = [
    { title: "Revive Group Announces Q2 2026 Financial Results", date: "28 Mar 2026" },
    { title: "New Board Appointment: Industry Veteran Joins Leadership Team", date: "22 Mar 2026" },
    { title: "Revive Program Achieves ISO 14001 Certification", date: "15 Mar 2026" },
    { title: "Partnership Announcement: Strategic Alliance with Scania Group", date: "8 Mar 2026" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009C43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 text-[#009C43] mb-6"
              style={{
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em'
              }}
            >
              NEWS & UPDATES
            </div>
            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: '#1a1a1a'
              }}
            >
              The Revive
              <br />
              Innovation Journal
            </h1>
            <p
              className="text-gray-600 max-w-3xl"
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.7
              }}
            >
              We build the future every day, and here we share our achievements.
              From opening new production capacities in Tipperary to strategic
              partnerships with global leaders — follow how Revive Group transforms
              the world of heavy engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span className="font-semibold">Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-semibold text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-[#009C43] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ borderRadius: '16px' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Featured News */}
          {featuredNews && (
            <div className="mb-12">
              <NewsCard item={featuredNews} />
            </div>
          )}

          {/* Secondary News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {secondaryNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredNews.length && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="bg-[#009C43] text-white px-10 py-4 hover:bg-[#007A34] transition-colors font-semibold"
                style={{ borderRadius: '20px' }}
              >
                LOAD MORE NEWS
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#1a1a1a'
              }}
            >
              Press Releases
            </h2>
            <p className="text-gray-600 text-lg">
              Official announcements and corporate updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressReleases.map((release, index) => (
              <PressReleaseCard key={index} {...release} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
