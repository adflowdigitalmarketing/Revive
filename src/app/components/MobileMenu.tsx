import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ChevronRight, Globe, Mail, Lock, Linkedin } from "lucide-react";
import { Link } from "react-router";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Solutions",
    href: "/products",
    submenu: [
      { label: "Warrior", href: "/products/warrior" },
      { label: "Revive Program", href: "/products/program" },
      { label: "Compact Recycling Piston", href: "/products/piston" },
      { label: "Revive Live", href: "/products/live" }
    ]
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    submenu: [
      { label: "EcoPark", href: "/sustainability/ecopark" },
      { label: "Circular Economy", href: "/sustainability/circular-economy" },
      { label: "Green Credentials", href: "/sustainability/credentials" },
      { label: "Decarbonising Zone", href: "/sustainability/decarbonising-zone" }
    ]
  },
  {
    label: "Global Representation",
    href: "/global"
  },
  {
    label: "Careers",
    href: "/careers",
    submenu: [
      { label: "Apprenticeships", href: "/careers/apprenticeships" },
      { label: "HireHive / HireLocker", href: "/careers/hire" }
    ]
  },
  {
    label: "News",
    href: "/about/news"
  }
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex justify-end z-10">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Main Navigation */}
            <nav className="px-6 py-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between py-5 text-gray-900 hover:text-[#009C43] transition-colors"
                        style={{ fontWeight: 500, fontSize: "1.125rem", minHeight: "48px" }}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: expandedItem === item.label ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={20} className="text-gray-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={onClose}
                                className="block py-3 pl-6 text-gray-600 hover:text-[#009C43] transition-colors"
                                style={{ fontSize: "1rem" }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-5 text-gray-900 hover:text-[#009C43] transition-colors"
                      style={{ fontWeight: 500, fontSize: "1.125rem", minHeight: "48px" }}
                    >
                      {item.label}
                      <ChevronRight size={20} className="text-gray-400" />
                    </Link>
                  )}

                  {index < menuItems.length - 1 && (
                    <div className="border-b border-gray-100" />
                  )}
                </div>
              ))}
            </nav>

            {/* Secondary Actions */}
            <div className="mt-8 bg-gray-50 px-6 py-6 space-y-4">
              <button
                className="w-full flex items-center gap-3 py-4 text-gray-700 hover:text-[#009C43] transition-colors"
                style={{ fontWeight: 500, minHeight: "48px" }}
              >
                <Globe size={20} />
                <span>Select Language / Country</span>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </button>

              <div className="border-b border-gray-200" />

              <a
                href="mailto:contact@revivegroup.com"
                className="flex items-center gap-3 py-4 text-gray-700 hover:text-[#009C43] transition-colors"
                style={{ fontWeight: 500, minHeight: "48px" }}
              >
                <Mail size={20} />
                <span>Contact and Support</span>
              </a>

              <a
                href="https://www.linkedin.com/company/revive-group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 text-gray-700 hover:text-[#009C43] transition-colors"
                style={{ fontWeight: 500, minHeight: "48px" }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <div className="border-b border-gray-200" />

              <button
                className="flex items-center gap-3 py-4 text-gray-700 hover:text-[#009C43] transition-colors"
                style={{ fontWeight: 500, minHeight: "48px" }}
              >
                <Lock size={20} />
                <span>Login</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
