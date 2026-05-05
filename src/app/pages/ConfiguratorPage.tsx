import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Mail } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

interface PumpModel {
  name: string;
  flow: string;
  pressure: string;
  power: string;
  rpm: string;
}

const pumpModels: PumpModel[] = [
  {
    name: "Uraca P3-45",
    flow: "180 L/min",
    pressure: "200 bar",
    power: "45 kW",
    rpm: "1450"
  },
  {
    name: "Uraca P3-55",
    flow: "220 L/min",
    pressure: "250 bar",
    power: "55 kW",
    rpm: "1450"
  }
];

interface HoseReelConfig {
  length: number;
  diameter: number;
}

export function ConfiguratorPage() {
  const [recyclingEnabled, setRecyclingEnabled] = useState(true);
  const [flocculationEnabled, setFlocculationEnabled] = useState(false);
  const [selectedPumpIndex, setSelectedPumpIndex] = useState(0);
  const [primaryHose, setPrimaryHose] = useState<HoseReelConfig>({ length: 100, diameter: 50 });
  const [complementaryHose, setComplementaryHose] = useState<HoseReelConfig>({ length: 50, diameter: 25 });

  const nextPump = () => {
    setSelectedPumpIndex((prev) => (prev + 1) % pumpModels.length);
  };

  const prevPump = () => {
    setSelectedPumpIndex((prev) => (prev - 1 + pumpModels.length) % pumpModels.length);
  };

  const selectedPump = pumpModels[selectedPumpIndex];

  const generateQuoteRequest = () => {
    const config = `
Configuration Summary:
- Tank: 12,000L P265GH Steel
- Recycling System: ${recyclingEnabled ? 'Included' : 'Not Included'}
- Flocculation: ${flocculationEnabled ? 'Included' : 'Not Included'}
- High Pressure Pump: ${selectedPump.name} (${selectedPump.flow}, ${selectedPump.pressure})
- Primary Hose Reel: ${primaryHose.length}m x ${primaryHose.diameter}mm
- Complementary Hose Reel: ${complementaryHose.length}m x ${complementaryHose.diameter}mm
    `;
    return encodeURIComponent(config);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/products/warrior" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#009C43] mb-6 transition-colors">
            <ChevronLeft size={20} />
            Back to Warrior
          </Link>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.03em" }}>
              Configure Your Warrior
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Оберіть необхідні модулі та специфікації для вашого індивідуального рішення
            </p>
          </motion.div>
        </div>
      </section>

      {/* Configuration Grid */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tank Specification (Static) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 p-8"
              style={{ borderRadius: "24px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-gray-900">Tank</h3>
                <div className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[8px]">
                  Standard
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-medium text-gray-900">12,000 L</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Material</span>
                  <span className="font-medium text-gray-900">P265GH Steel</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Wall Thickness</span>
                  <span className="font-medium text-gray-900">8mm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Coating</span>
                  <span className="font-medium text-gray-900">Epoxy</span>
                </div>
              </div>
            </motion.div>

            {/* Recycling System (Toggle) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`bg-white border border-gray-200 p-8 transition-all duration-300 ${!recyclingEnabled ? 'opacity-40' : ''}`}
              style={{ borderRadius: "24px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-gray-900">Recycling System</h3>
                <button
                  onClick={() => setRecyclingEnabled(!recyclingEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${recyclingEnabled ? 'bg-[#009C43]' : 'bg-gray-300'}`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${recyclingEnabled ? 'translate-x-6' : ''}`}
                  />
                </button>
              </div>
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[8px] text-sm font-medium ${recyclingEnabled ? 'bg-green-50 text-[#009C43]' : 'bg-gray-100 text-gray-500'}`}>
                  {recyclingEnabled ? (
                    <>
                      <Check size={16} />
                      Option Included
                    </>
                  ) : (
                    'Not Included'
                  )}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Complete water recycling system with filtration and reuse capabilities. Reduces water consumption by up to 80%.
              </p>
            </motion.div>

            {/* Flocculation (Toggle) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`bg-white border border-gray-200 p-8 transition-all duration-300 ${!flocculationEnabled ? 'opacity-40' : ''}`}
              style={{ borderRadius: "24px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-gray-900">Flocculation</h3>
                <button
                  onClick={() => setFlocculationEnabled(!flocculationEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${flocculationEnabled ? 'bg-[#009C43]' : 'bg-gray-300'}`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${flocculationEnabled ? 'translate-x-6' : ''}`}
                  />
                </button>
              </div>
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[8px] text-sm font-medium ${flocculationEnabled ? 'bg-green-50 text-[#009C43]' : 'bg-gray-100 text-gray-500'}`}>
                  {flocculationEnabled ? (
                    <>
                      <Check size={16} />
                      Option Included
                    </>
                  ) : (
                    'Not Included'
                  )}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced flocculation system for enhanced separation of solids from liquids in recycling process.
              </p>
            </motion.div>

            {/* High Pressure Pump (Selector) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 p-8"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">High Pressure Pump</h3>

              {/* Model Selector */}
              <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-[16px]">
                <button
                  onClick={prevPump}
                  className="p-2 hover:bg-white rounded-full transition-colors"
                  aria-label="Previous pump"
                >
                  <ChevronLeft size={24} className="text-gray-700" />
                </button>
                <div className="text-center">
                  <div className="text-xl font-medium text-gray-900">{selectedPump.name}</div>
                  <div className="text-sm text-gray-500">{selectedPumpIndex + 1} / {pumpModels.length}</div>
                </div>
                <button
                  onClick={nextPump}
                  className="p-2 hover:bg-white rounded-full transition-colors"
                  aria-label="Next pump"
                >
                  <ChevronRight size={24} className="text-gray-700" />
                </button>
              </div>

              {/* Pump Specs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Flow Rate</span>
                  <span className="font-medium text-gray-900">{selectedPump.flow}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Max Pressure</span>
                  <span className="font-medium text-gray-900">{selectedPump.pressure}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Power</span>
                  <span className="font-medium text-gray-900">{selectedPump.power}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">RPM</span>
                  <span className="font-medium text-gray-900">{selectedPump.rpm}</span>
                </div>
              </div>
            </motion.div>

            {/* Primary Hose Reel */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-gray-200 p-8"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Primary Hose Reel</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length (meters)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="50"
                      max="150"
                      step="10"
                      value={primaryHose.length}
                      onChange={(e) => setPrimaryHose({ ...primaryHose, length: parseInt(e.target.value) })}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#009C43]"
                    />
                    <span className="text-lg font-medium text-gray-900 min-w-[60px]">{primaryHose.length}m</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diameter (mm)</label>
                  <select
                    value={primaryHose.diameter}
                    onChange={(e) => setPrimaryHose({ ...primaryHose, diameter: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[12px] text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#009C43] focus:border-transparent"
                  >
                    <option value="25">25mm</option>
                    <option value="38">38mm</option>
                    <option value="50">50mm</option>
                    <option value="75">75mm</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Complementary Hose Reel */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border border-gray-200 p-8"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Complementary Hose Reel</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length (meters)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="25"
                      max="100"
                      step="5"
                      value={complementaryHose.length}
                      onChange={(e) => setComplementaryHose({ ...complementaryHose, length: parseInt(e.target.value) })}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#009C43]"
                    />
                    <span className="text-lg font-medium text-gray-900 min-w-[60px]">{complementaryHose.length}m</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diameter (mm)</label>
                  <select
                    value={complementaryHose.diameter}
                    onChange={(e) => setComplementaryHose({ ...complementaryHose, diameter: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[12px] text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#009C43] focus:border-transparent"
                  >
                    <option value="25">25mm</option>
                    <option value="38">38mm</option>
                    <option value="50">50mm</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-medium text-gray-900 mb-1">Ваша конфігурація готова</div>
              <div className="text-sm text-gray-600">Review your selections and request a custom quote</div>
            </div>
            <a
              href={`mailto:sales@revivegroup.com?subject=Warrior Configuration Request&body=${generateQuoteRequest()}`}
              className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors inline-flex items-center gap-3"
              style={{ borderRadius: "16px" }}
            >
              <Mail size={22} />
              Request a Quote for this Configuration
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
