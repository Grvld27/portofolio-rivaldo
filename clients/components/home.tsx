import fotoSaya from "../assets/Jas putih bg remove.png";
import placeHolder from "../assets/placeHold.png";
import briefCase from "../assets/briefcase.png";
import linkedIn from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";

// const navItem = [

// Icon:''

// ]

export default function Home() {
  return (
    <div className=" text-black font-jakarta m-25 justify-center">
      <h1 className="bg-gray-200 rounded-full text-m w-80 h-7 gap-1  flex items-center justify-center text-black font-semibold">
        Available for freelance work
      </h1>

      <div className="grid grid-cols-2 gap-1 items-center justify-center mt-[-5%] ">
        <h2 className="text-6xl font-extrabold w-160 mt-[-20%] ">
          Hi, I'm Rivaldo Jollien Ramdarto
        </h2>

        <img
          src={fotoSaya}
          alt="Foto Saya"
          className="w-104 h-104 ml-50  object-cover rounded-xl"
        />
      </div>

      {/* Profile Information */}
      <div className="grid grid-cols-1 mt-[-15%] gap-2">
        <p className="text-2xl font-semibold w-120 font-inter">
          Frontend Developer
        </p>
        <p className="w-120 text-sm">
          By day, I'm just a regular dev by night (okay, also by day), I'm
          swinging between frontend code and UI/UX design, web slinging ideas
          into web apps that actually work and look awesome.
        </p>
      </div>

      {/* Location and Availability */}
      <div className="grid grid-cols-2  mt-6">
        <div className="grid grid-cols-2   ">
          <img
            src={placeHolder}
            alt="Placeholder"
            className="w-6 h-6  ml-5  "
          />
          <p className="md:ml-[-65%] xl:ml-[-80%]">Kutai Barat</p>
        </div>

        <div className="grid grid-cols-2 gap-0 ml-[-80%] ">
          <img src={briefCase} alt="Briefcase" className="w-6 h-6  ml-20  " />
          <p className="md:ml-[-55%] xl:ml-[-76%]">Available now</p>
        </div>
      </div>

      <div className="grid grid-cols-2  mt-10">
        <div className="grid grid-cols-2 ">
          <button className="bg-black text-white rounded-full w-40 h-10 font-semibold hover:bg-gray-800 transition duration-300">
            Hire Me
          </button>
          <button className="bg-white text-black rounded-full w-40 h-10 font-semibold border md:ml-[-2%] xl:ml-[-45%] border-black hover:bg-gray-200 transition duration-300">
            Download CV
          </button>

          {/*  */}
          <p className=" xl:mt-[-10%] w-100 ml-90 ">Follow me</p>

          <div className="flex space-x-4 xl:ml-[50%] xl:mt-[-11%] gap-3">
            <img
              src={linkedIn}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-70"
            />
            <img
              src={discord}
              alt="Discord"
              className="w-8 h-8 cursor-pointer hover:opacity-70"
            />
            <img
              src={github}
              alt="GitHub"
              className="w-8 h-8 cursor-pointer hover:opacity-70"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="w-8 h-8 cursor-pointer hover:opacity-70"
            />
          </div>
          {/*  */}

          <div className="justify-center items-center mt-5 bg-black rounded-xl xl:w-330 h-20 gap-1  flex text-white font-semibold">
            <svg viewBox="0 0 1800 300" className="w-250 xl:mt-5 h-auto">
              <path
                d="
      M -20 220

      C 80 110, 170 70, 250 95
      C 330 115, 370 190, 410 200
      C 440 210, 380 120, 300 40

      C 450 70, 520 140, 650 155
      C 720 165, 740 155, 700 120
      C 650 80, 560 70, 510 100
      C 450 140, 510 185, 610 205

      M 800 110
      C 880 150, 930 155, 980 150
      C 1030 145, 1040 130, 1000 125
      C 950 115, 910 145, 930 210

      C 950 270, 1010 280, 1080 230
      C 1150 180, 1190 130, 1260 140
      C 1330 150, 1350 190, 1410 175
      C 1500 150, 1510 70, 1600 70

      C 1700 70, 1720 160, 1660 180
      C 1600 200, 1510 140, 1460 120
      C 1410 100, 1430 210, 1490 180
      C 1550 150, 1580 100, 1600 50
    "
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
