import img1 from '../assets/assetProject1.png'
import img2 from '../assets/project2.png'
import imgdummy from '../assets/userdummy.png'


const itemProjects=[
    
    
    
    {
pict: img1 ,
label: "Mancong Village Profile",
description: (
<p className="w-100 ">

digital platform designed to introduce the village, its local potential, culture, tourism, and community activities in a simple and accessible way

</p>),
tech:(
  
<div className="grid grid-cols-3">

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">ReactJS</h1>
</div>
<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">ExpressJS</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">NodeJS</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">MongoDB</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">Tailwind</h1>
</div>
  </div>
),

},
  {
pict: img2 ,
label: "Simple Portofolio v1",
description: (
<p className="w-100 ">
On Going

</p>),
tech:(
  
<div className="grid grid-cols-3">

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">ReactJS</h1>
</div>
<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">Laravel</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">NodeJS</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">CodeIgniter</h1>
</div>

<div className="flex flex-row items-center justify-center gap-2 bg-black rounded-2xl w-25 h-10 hover:scale-105 transition-all duration-200">
<h1 className="text-white ">Tailwind</h1>
</div>
  </div>
),

},
  {

label: "Re-design Gajah Tunggal Company Profile",
description: "this project is coming soon",
tech:'React',

},








]





export default function Projects (){
return(


<div className="flex flex-col items-center justify-center  gap-10 text-black font-jakarta   ">
<h1 className="  text-3xl flex items-center justify-center    text-m w-80 h-7 gap-1 text-black font-semibold">
         My Projects
</h1>


  





<div className="grid grid-cols-3 gap-10 xl:ml-10 xl:mt-10 ">



{itemProjects.map((item, index) => (

<div className=" bg-[#F9F9F9] p-4 text-m text-black shadow-[0_3px_9px_-6px_#000000]  h-120 rounded-3xl grid grid-cols-1   ">







  


<img key={index} src={item.pict} alt="Project" className="  flex-items-center justify-items-center-safe w-100 h-auto   object-cover rounded-xl">



</img> 

{item.label && (
<h1 className=" rounded-full text-m   flex items-center justify-center  xl:mt-[-5%] text-black font-bold">
         {item.label} 
</h1 >




)}


      {item.description}
 


      {item.tech}


</div>




))}
    </div>     
   </div> 




);





}
