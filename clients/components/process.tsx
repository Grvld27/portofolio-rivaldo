import { nav } from "framer-motion/client";

import plan1 from "https://img.icons8.com/ios/50/test--v1.png";

const navItem = [
  {
    icon: (
      <img
        src="https://img.icons8.com/ios/50/test--v1.png"
        width="48"
        height="48"
        alt="what-i-do"
      />
    ),
    iconHoover: (
      <img
        src="https://img.icons8.com/ios-filled/50/test.png"
        width="48"
        height="48"
        alt="what-i-do"
      />
    ),

    icon1: (
      <img
        src="https://img.icons8.com/ios/50/code--v2.png"
        width="48"
        height="48"
      />
    ),
    iconhoover1: (
      <img
        src="https://img.icons8.com/ios-filled/50/code.png"
        width="48"
        height="48"
      />
    ),

    icon2: (
      <img
        src="https://img.icons8.com/ios/50/launched-rocket.png"
        width="48"
        height="48"
      />
    ),
    iconhoover2: (
      <img
        src="https://img.icons8.com/ios-filled/50/launched-rocket.png"
        width="48"
        height="48"
      />
    ),

    icon3: (
      <img
        src="https://img.icons8.com/ios/50/design--v1.png"
        width="48"
        height="48"
      />
    ),
    iconhoover3: (
      <img
        src="https://img.icons8.com/ios-filled/50/design--v1.png"
        width="48"
        height="48"
      />
    ),

    icon4: (
      <img
        src="https://img.icons8.com/ios/50/test-results.png"
        width="48"
        height="48"
      />
    ),
    iconhoover4: (
      <img
        src="https://img.icons8.com/ios-filled/50/test-results.png"
        width="48"
        height="48"
      />
    ),

    icon5: (
      <img
        src="https://img.icons8.com/ios/50/service--v1.png"
        width="48"
        height="48"
      />
    ),
    iconhoover5: (
      <img
        src="https://img.icons8.com/ios-filled/50/service.png"
        width="48"
        height="48"
      />
    ),
  },
];

export default function Process() {
  return (
    <div className="grid-cols-2 ">
      {navItem.map((item, index) => (
        <div className=" flex items-center justify-center  gap-5 xl:mt-60 xl:mb-[-17%]  text-sm ">
          <div
            key={index}
            className=" group hover:bg-white   transition-all
              duration-200
              hover:scale-105
    
 w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000]  "
          >
            <div className=" relative grid grid-cols-2 mt-[-5%]">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-5 ">
                {item.icon}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-5">
                {item.iconHoover}
              </div>

              <h1 className=" text-black font-bold xl:mt-6 xl:mr-10 group-hover:block">
                {" "}
                Research & Planning{" "}
              </h1>
            </div>
            <p className=" xl:ml-6 xl:mt-5 w-55 text-justify  text-black font-semibold">
              Before diving into development, i make sure really get what the
              project's about the goals, what users actually need, and all the
              requirements
            </p>
          </div>

          <div
            key={index}
            className=" group hover:bg-white   transition-all
              duration-200
              hover:scale-105 w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000]  "
          >
            <div className=" relative grid grid-cols-2 xl:mb-3  ">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-3 ">
                {item.icon1}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-3  ">
                {item.iconhoover1}
              </div>

              <h1 className=" text-black font-bold xl:mt-6 w-100 group-hover:block">
                Build & Develop
              </h1>
            </div>
            <p className=" xl:ml-4 w-58 text-justify text-black font-semibold">
              {" "}
              I bring the design to life with clean, responsive code that scales
              well, using modern tools HTML, CSS and Javascript framework
            </p>
          </div>

          <div
            className=" group transition-all
              duration-200
              hover:scale-105 bg-white w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000]  "
          >
            <div className="  relative grid grid-cols-2 xl:mb-5">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-3 ">
                {item.icon2}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-3  ">
                {item.iconhoover2}
              </div>

              <div className="grid grid-cols-2 xl:mb-5">
                <h1 className=" text-black font-bold xl:mt-6 w-100">Launch</h1>
              </div>
              <p className=" xl:ml-6 xl:mt-2 w-55 text-black font-semibold">
                {" "}
                Get the build ready and ship it to production, so it's live and
                ready for real users
              </p>
            </div>
          </div>
        </div>
      ))}

      {/*  */}

      <div className="grid-cols-1">
        <h1 className="  text-3xl text-end xl:mt-80 xl:ml-20     text-m w-20 h-7 gap-1 text-black font-semibold">
          Process Development
        </h1>
        <div className="bg-black rounded-full rotate-90 h-1 w-30 mt-2"></div>
      </div>

      <div className="flex items-center justify-center xl:mb-[-15%] xl:mt-[-24%] ">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          {/* Garis horizontal utama */}
          <path
            d="M 380 297 H 870"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector atas kiri */}
          <path
            d="M 380 297 V 250"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector atas tengah */}
          <path
            d="M 600 297 V 250"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector atas kanan */}
          <path
            d="M 820 297 V 250"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector bawah kiri */}
          <path
            d="M 435 300 V 350"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector bawah tengah */}
          <path
            d="M 650 300 V 350"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Connector bawah kanan */}
          <path
            d="M 870 300 V 350"
            stroke="black"
            strokeWidth="4"
            fill="none"
            stroke-linecap="round"
          />

          {/* Titik atas */}
          <circle cx="380" cy="243" r="6" fill="black" />
          <circle cx="600" cy="243" r="6" fill="black" />
          <circle cx="820" cy="243" r="6" fill="black" />

          {/* Titik bawah */}
          <circle cx="435" cy="346" r="6" fill="black" />
          <circle cx="650" cy="346" r="6" fill="black" />
          <circle cx="870" cy="346" r="6" fill="black" />
        </svg>
      </div>

      {navItem.map((item, index) => (
        <div
          key={index}
          className=" flex items-center justify-center gap-5 xl:ml-30 xl:mt-15    text-sm "
        >
          <div className=" group transition-all duration-200 hover:scale-105 bg-white w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000] ">
            <div className=" relative grid grid-cols-2 xl:mb-3 ">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-3 ">
                {item.icon3}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-3  ">
                {item.iconhoover3}
              </div>

              <h1 className=" text-black font-bold xl:mt-6"> UI/UX Design </h1>
            </div>
            <p className=" xl:ml-6 w-55 text-start text-black font-semibold">
              Sketch out wireframes and design visuals in Figma, keeping things
              clean, simple, and se
            </p>
          </div>

          <div className=" group transition-all hover:scale-105 bg-white w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000]  ">
            <div className=" relative grid grid-cols-2 xl:mb-3">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-3 ">
                {item.icon4}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-3  ">
                {item.iconhoover4}
              </div>

              <h1 className=" text-black font-bold xl:mt-6 w-100">Testing</h1>
            </div>
            <p className=" xl:ml-6 w-55 text-black font-semibold">
              {" "}
              Step four. I'm testing how it works, how it loos, and how it feels
              across devices, then polishing until it's just right
            </p>
          </div>

          <div className="group transition-all hover:scale-105 bg-white w-65 h-50 rounded-2xl shadow-[0_3px_9px_-6px_#000000]  ">
            <div className=" relative grid grid-cols-2 xl:mb-3">
              <div className=" group-hover:hidden xl:ml-10 xl:mt-3 ">
                {item.icon5}
              </div>
              <div className=" hidden group-hover:block  xl:ml-10 xl:mt-3  ">
                {item.iconhoover5}
              </div>

              <h1 className=" text-black font-bold xl:mt-6 w-100">
                Maintenance
              </h1>
            </div>
            <p className=" xl:ml-6 w-55 text-black font-semibold">
              And it doesn't stop there. I keep improving things with updates,
              bug fixes, performance tweaks, and new features based on what
              users say
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
