import { useEffect, useState } from "react";

import homeBlack from "../assets/homeBlack.png";
import homeWhite from "../assets/homeWhite.png";
import aboutBlack from "../assets/id-card-black.png";
import aboutWhite from "../assets/id-card-white.png";

import projectBlack from "../assets/icons8-opened-folderBlack.png";
import projectWhite from "../assets/icons8-opened-folderWhite.png";
import processBlack from "../assets/icons8-servicesBlack.png";
import processWhite from "../assets/icons8-servicesWhite.png";
import servicesBlack from "../assets/rocketBlack.png";
import servicesWhite from "../assets/rocketWhite.png";
import contactBlack from "../assets/MailBlack.png";
import contactWhite from "../assets/MailWhite.png";

const navItem = [
  {
    label: "Home",
    icon: homeBlack,
    id: "home",
    hoverIcon: homeWhite,
  },

  {
    label: "About",
    icon: aboutBlack,
    id: "about",
    hoverIcon: aboutWhite,
  },

  {
    label: "Projects",
    icon: projectBlack,
    id: "project",
    hoverIcon: projectWhite,
  },

  {
    label: "Process",
    icon: processBlack,
    id: "process",
    hoverIcon: processWhite,
  },

  {
    label: "Services",
    icon: servicesBlack,
    id: "services",
    hoverIcon: servicesWhite,
  },
  {
    label: "Contact",
    icon: contactBlack,
    id: "contact",
    hoverIcon: contactWhite,
  },
];

export default function Navbar() {
  // Menyimpan section yang sedang aktif
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Mengambil semua section yang memiliki ID
    const sections = document.querySelectorAll("section");

    // Membuat observer untuk mendeteksi section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika section sedang terlihat
          if (entry.isIntersecting) {
            // Simpan ID section yang sedang terlihat
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Section dianggap aktif jika 50% terlihat
        threshold: 0.2,
      },
    );

    // Mulai mengamati semua section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Membersihkan observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="flex items-center justify-center rounded-full bg-[#F9F9F9] p-4 text-m text-black shadow-[0_3px_9px_-6px_#000000] sticky top-0 z-50">
      <div className="flex space-x-2">
        {navItem.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={`
              group
              flex
              items-center
              gap-3
              font-jakarta
              font-extrabold
              transition-all
              duration-400
              hover:scale-105
              hover:text-white
              xl:h-10
              xl:w-35
              xl:rounded-4xl
              xl:hover:bg-black
          ${activeSection === item.id ? "bg-black text-white" : "text-black"}
          
            }
              `}
          >
            <div className="ml-5">
              {/* Icon hitam - normal */}
              <img
                src={item.icon}
                alt={item.label}
                className={
                  activeSection === item.id
                    ? "hidden h-6 w-6"
                    : "h-6 w-6 group-hover:hidden"
                }
              />

              {/* Icon putih - saat hover */}
              <img
                src={item.hoverIcon}
                alt={item.label}
                className={
                  activeSection === item.id
                    ? "block h-6 w-6"
                    : "hidden h-6 w-6 group-hover:block"
                }
              />
            </div>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
