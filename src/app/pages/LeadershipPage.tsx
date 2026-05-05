import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedIn?: string;
  image?: string;
}

const boardMembers: TeamMember[] = [
  {
    name: "Liam Kearney",
    role: "Chief Executive",
    description:
      "Serves as the driving force behind Revive's sustainability objectives and goals. A leader with decades of experience in globalisation and corporate development.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGmqesWrCSz5A/profile-displayphoto-crop_800_800/B4EZ1j6fdxG0AQ-/0/1775497772659?e=1778716800&v=beta&t=q39hSWB87psp4nSMRE0bwmDvF8UvoxMw7r6D5uW_Rrs",
  },
  {
    name: "Micheál Boyle",
    role: "Operations Director",
    description:
      "A respected name with strong industry connections, a key player in Revive's production bringing vast experience in logistical optimisation and the supply chain.",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQH23O3L_Jpo9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629293155123?e=1778716800&v=beta&t=RmLLP5r-ZjXXN4RWRFYr3yY345WRI_Ewk0LsXyVHTJ0",
  },
  {
    name: "Liam McCabe",
    role: "Chairman",
    description:
      "Brings extensive experience in leadership roles, governance, investment, and strategic planning across a diverse range of professional and utility sectors.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQF7AGdY9KXJHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705311123647?e=1778716800&v=beta&t=zlDWH2JaI5F22ofZ-rsdfZfX02ZPVWcxuzFoRpq48Ys",
  },

  {
    name: "Anna Ita Ryan",
    role: "Financial Administration",
    description:
      "Established accountant and entrepreneur with a successful track record in developing, managing and sale of global service enterprises, Anne Ita brings a wealth of expertise  in financial strategy, risk  management, and performance optimisation to our board of directors.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEJt42BzKeeEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516790901513?e=1778716800&v=beta&t=rm34_6cVUSLggkPl_imzrL-4bU-ZiGy3dEvqba_UJA4",
  },
  {
    name: "Paul O'Mahony",
    role: "Investment & Funding",
    description:
      "Experienced investor and investment manager with a successful history of involvement with private companies, providing invaluable strategic and financial insight to Revive.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
  },
];



function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        style={{ borderRadius: "24px" }}
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <ImageWithFallback
            src={member.image || ""}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* LinkedIn Badge */}
          <div className="absolute bottom-4 right-4">
            <motion.a
              href={member.linkedIn || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors shadow-lg"
              style={{ borderRadius: "12px" }}
            >
              <Linkedin size={20} fill="currentColor" />
            </motion.a>
          </div>

          {/* Name Overlay */}
          <div className="absolute bottom-4 left-4 right-20">
            <h3
              className="text-white"
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              {member.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div
            className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-[#009C43] mb-4 self-start"
            style={{
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            {member.role.toUpperCase()}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009C43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                borderRadius: "12px",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              OUR LEADERSHIP
            </div>
            <h1
              className="mb-6"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#1a1a1a",
              }}
            >
              Leadership Team
            </h1>
            <p
              className="text-gray-600 max-w-3xl"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
              }}
            >
              Meet the experienced professionals driving Revive
              Group's mission to transform drainage
              infrastructure through circular engineering and
              sustainable innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#009C43",
              }}
            >
              Advisory Board
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl">
              This board will lead Revive toward achieving its
              strategic goals and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {boardMembers.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
}