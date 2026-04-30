import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import logo from "../../imports/Revive_Group_gray_logo.png";

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "Overview", href: "/products" },
      { label: "Revive Warrior", href: "/products/warrior" },
      { label: "Revive Program", href: "/products/program" },
      { label: "Compact Recycling Piston", href: "/products/piston" },
      { label: "Revive Live", href: "/products/live" }
    ]
  },
  {
    label: "Global Representation",
    href: "/global",
    submenu: [
      { label: "Overview", href: "/global" },
      { label: "Ireland", href: "/global/ireland" },
      { label: "United Kingdom", href: "/global/uk" },
      { label: "New Zealand", href: "/global/nz" },
      { label: "France", href: "/global/france" },
      { label: "Nordics", href: "/global/nordics" }
    ]
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    submenu: [
      { label: "Overview", href: "/sustainability" },
      { label: "Revive EcoPark", href: "/sustainability/ecopark" },
      { label: "Green Credentials", href: "/sustainability/credentials" },
      { label: "Circular Economy", href: "/sustainability/circular-economy" },
      { label: "Decarbonising Zone", href: "/sustainability/decarbonising-zone" }
    ]
  },
  {
    label: "Our Partners",
    href: "/partners"
  },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Overview", href: "/about" },
      { label: "Our Story", href: "/about/story" },
      { label: "Leadership Team", href: "/about/team" },
      { label: "News", href: "/about/news" },
      { label: "Press Releases", href: "/about/press" },
      { label: "Awards", href: "/about/awards" }
    ]
  },
  {
    label: "Careers",
    href: "/careers",
    submenu: [
      { label: "Overview", href: "/careers" },
      { label: "HireHive / HireLocker", href: "/careers/hire" },
      { label: "Apprenticeships", href: "/careers/apprenticeships" }
    ]
  }
];

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState("EN");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const languages = ["EN", "DA", "FR", "DE", "ES"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1600px]"
    >
      <div 
        className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl px-8 py-4 flex items-center justify-between"
        style={{ borderRadius: '24px' }}
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Revive Group" 
            className="h-10 w-auto"
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.submenu ? (
                <>
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm tracking-wide hover:text-[#009C43] transition-colors flex items-center gap-1 group"
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </a>
                  
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl min-w-[240px]"
                        style={{ borderRadius: '16px' }}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, index) => (
                            <a
                              key={index}
                              href={subItem.href}
                              className="block px-6 py-3 text-sm text-gray-700 hover:text-[#009C43] hover:bg-emerald-50/50 transition-colors"
                              style={{ fontWeight: 500 }}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a 
                  href={item.href}
                  className="px-4 py-2 text-sm tracking-wide hover:text-[#009C43] transition-colors block"
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Language Selector & Contact Button */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => setShowLangMenu(true)}
            onMouseLeave={() => setShowLangMenu(false)}
          >
            <button
              className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-gray-300 text-gray-700 px-4 py-2.5 hover:bg-white/60 transition-all"
              style={{ borderRadius: '16px', fontWeight: 600, fontSize: '0.875rem' }}
            >
              <Globe size={18} />
              {currentLang}
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl min-w-[100px]"
                  style={{ borderRadius: '12px' }}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLang(lang)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50/50 transition-colors ${
                          currentLang === lang ? 'text-[#009C43] font-semibold' : 'text-gray-700'
                        }`}
                        style={{ fontWeight: currentLang === lang ? 600 : 500 }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="bg-[#009C43] text-white px-6 py-2.5 hover:bg-[#007A34] transition-colors flex-shrink-0"
            style={{ borderRadius: '16px', fontWeight: 600, fontSize: '0.875rem' }}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </motion.nav>
  );
}