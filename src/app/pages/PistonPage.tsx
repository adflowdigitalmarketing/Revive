import { motion } from "motion/react";
import { Cog, Zap, Shield, Recycle, FileText, Phone, Gauge, Settings, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function PistonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Cog className="text-white" size={80} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Compact Recycling Piston
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-4" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Серце вашої системи рециркуляції
            </p>
            <p className="text-white/80 max-w-2xl mx-auto mb-12" style={{ fontSize: "1.125rem", lineHeight: 1.6 }}>
              Максимальна потужність у компактному виконанні. Розроблено для безперебійної роботи в екстремальних умовах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-medium text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2" style={{ borderRadius: "16px" }}>
                <FileText size={22} />
                Технічне креслення
              </button>
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2" style={{ borderRadius: "16px" }}>
                <Phone size={22} />
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Compact? - Key Advantages */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Чому саме Compact?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Цей поршень кращий за стандартні рішення з конкретних технічних причин
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Компактність",
                description: "Займає на 30% менше місця в системі порівняно зі стандартними рішеннями, дозволяючи збільшити об'єм бака для відходів без зміни габаритів шасі."
              },
              {
                icon: Shield,
                title: "Зносостійкість",
                description: "Використання спеціальних сплавів з хромованим покриттям, що витримують абразивні частинки в процесі рециркуляції. Ресурс роботи до 15,000 циклів."
              },
              {
                icon: Zap,
                title: "Швидкість циклу",
                description: "Оптимізована гідравліка для швидшого переміщення перегородки бака. Час повного циклу: 8-12 секунд замість стандартних 15-20 секунд."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-10 hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="mb-6">
                    <Icon className="text-[#009C43]" size={48} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Settings className="text-gray-700 mx-auto mb-6" size={64} />
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Технічні характеристики
            </h2>
            <p className="text-gray-600 text-lg">
              Точні параметри для професіоналів, які рахують кожну хвилину роботи
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {[
                    { param: "Матеріал", value: "Високоякісна сталь з хромованим покриттям" },
                    { param: "Діаметр поршня", value: "180 мм" },
                    { param: "Хід поршня", value: "400 мм" },
                    { param: "Сумісність", value: "Revive Warrior, системи Revive Program" },
                    { param: "Робочий тиск", value: "До 5 bar (макс. 6.5 bar)" },
                    { param: "Тип приводу", value: "Пневматичний" },
                    { param: "Температурний діапазон", value: "-20°C до +80°C" },
                    { param: "Ресурс", value: "15,000+ циклів" },
                    { param: "Вага", value: "12.5 кг" },
                    { param: "Час циклу", value: "8-12 секунд" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-5 font-medium text-gray-900" style={{ fontSize: "1rem" }}>
                        {row.param}
                      </td>
                      <td className="px-8 py-5 text-gray-700" style={{ fontSize: "1rem" }}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Precision */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Інженерна точність для важких завдань
            </h2>
            <div className="bg-white border border-gray-200 p-10 text-left" style={{ borderRadius: "24px" }}>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Compact Recycling Piston від Revive — це результат тисяч годин роботи в полі. Ми зрозуміли, що стандартні поршні часто є слабкою ланкою в системах рециркуляції, тому створили свій.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Наш компактний дизайн дозволяє ефективно використовувати внутрішній простір бака, а унікальна система ущільнення гарантує відсутність протікань навіть при роботі з найбільш агресивними середовищами.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Це інвестиція в безвідмовність вашої техніки.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Circular Economy Role */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Recycle className="text-[#009C43] mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Роль у Circular Economy
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Compact Recycling Piston дозволяє системі рециркуляції працювати довше без очищення фільтрів.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#009C43] rounded-full mt-2.5" />
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Менше зупинок</span> — постійна робота без втрат часу на очищення
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#009C43] rounded-full mt-2.5" />
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Менше витрат палива</span> — оптимізований цикл знижує споживання на 15%
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#009C43] rounded-full mt-2.5" />
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Нижчий рівень викидів CO₂</span> — внесок у декарбонізацію індустрії
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-12 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative z-10">
                <Gauge className="text-white mb-6" size={56} />
                <h3 className="text-3xl font-medium text-white mb-6">
                  Manufacturing & Quality Control
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Кожен поршень проходить індивідуальне тестування на заводі Building One у Revive EcoPark. Ми гарантуємо точність до мікрона.
                </p>
                <div className="space-y-3">
                  {[
                    "100% контроль розмірів",
                    "Тестування під тиском 7.5 bar",
                    "Перевірка герметичності",
                    "Документована сертифікація"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-Selling */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Цей компонент є частиною системи Revive Warrior
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Compact Recycling Piston встановлюється на всіх моделях Warrior і є ключовим елементом системи рециркуляції води та відходів. Дізнайтеся більше про повну екосистему Warrior.
            </p>
            <Link to="/products/warrior">
              <button className="px-8 py-4 bg-[#009C43] text-white font-medium hover:bg-[#007A34] transition-colors inline-flex items-center gap-2" style={{ borderRadius: "16px" }}>
                Дізнатися більше про Warrior
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
