
import fotoHitam from '../assets/fotoGw.jpeg'
import riungMitra from '../assets/Riung.png'
import kampusMerdeka from '../assets/KM.png'
import logoSaya from '../assets/logoHitamgw.png'


export default function About (){
return (

         <div className=" grid grid-cols-1 text-black font-jakarta m-25 justify-center">
<h1 className="text-3xl font-bold ">

About Me

</h1>

<div className="bg-black rounded-full h-1 w-100 mt-5"></div>

<div className="grid grid-cols-2   ">

<div className="grid grid-cols-1  mt-10 ">
<p className="text-m font-medium mt-10 w-130 ">
Hey, My name is Rivaldo Jollien Ramdarto i'm loves building digital products that feel intuitive and look modern. I've got a background in Computer and Network Engineering and studied Information Systems in college, so I know my way around both the code and the design side. Outside of that, I'm into business, investing, and all things tech.
</p>
<p className="text-m font-medium mt-5 w-130">
Born and raised in Tenggarong, East Kalimantan, I first got introduced to the world of computers back at SMK Negeri 2 Sendawar, before going on to study Information Systems at Mulia University. Honestly, in my early years of college, web development wasn't really something I was drawn to. That changed in 2024 when I joined a RevoU program focused on data analysis and web development , that experience was the turning point that sparked my genuine interest in building for the web.
       
</p>





</div>
<div className="grid grid-cols-2  ">
<img src={fotoHitam} alt="fotoSaya" className="w-104 h-104 ml-[-20%] object-cover rounded-xl mt-10" />


<div className="grid grid-cols-1 gap-39 ">
         {/* 1 */}
<div className="bg-gray-200  rounded-xl  mt-10  h-30 mr-2">

<div className="grid grid-cols-2  ">
         <img src={riungMitra} alt="Riung" className="w-24 h-auto ml-4 mt-8 object-cover rounded-sm" />
         
<div className="grid grid-cols-1  ">
<h1 className=" rounded-full text-m  h-7 xl:ml-[-21%] xl:mt-4 text-black font-bold">
         IT Support (2019) 
</h1 >

<p className="font-medium xl:ml-[-21%] ">SMK Negeri 2 Sendawar Internship Program</p>
</div>

</div>
</div>
{/* 1 */}

{/* 2 */}
<div className="bg-gray-200  rounded-xl xl:mt-[-40%]  h-30">

<div className="grid grid-cols-2  ">
         <img src={kampusMerdeka} alt="Kampus Merdeka" className="w-24 h-auto ml-5 mt-8 object-cover rounded-sm" />
         
<div className="grid grid-cols-1  ">
<h1 className=" rounded-full text-m  h-7 xl:ml-[-20%] xl:mt-4 text-black font-bold">
         Web Tester (2024)
</h1 >

<p className="font-medium xl:ml-[-21%] ">Revou x Kampus Merdeka Studi Independent</p>
</div>

</div>
</div>
{/* 2 */}





{/* 3 */}
<div className="bg-gray-200  rounded-xl xl:mt-[-41%]  h-30">

<div className="grid grid-cols-2  ">
         <img src={logoSaya} alt="Kampus Merdeka" className="w-24 h-auto ml-5 mt-3 object-cover rounded-full" />
         
<div className="grid grid-cols-1  ">
<h1 className=" rounded-full text-m w-50 h-7 xl:ml-[-20%] xl:mt-4 text-black font-bold">
         Fullstack Developer (2025-present)
</h1 >

<p className="font-medium xl:ml-[-21%] xl:mt-2 ">On going study</p>
</div>

</div>
</div>
{/* 3 */}





</div>


</div>
</div>
  
</div>
)


}