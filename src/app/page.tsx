import Landing from "@/views/home";
import About from "@/views/about";
import Skills from "@/views/skills";
import Projects from "@/views/projects";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <img src="bgsite.png" alt="" className="fixed h-dvh w-full" />
      <div className="nav p-4 flex justify-center items-center text-white z-50 fixed w-full">
        <div className="w-[1400px] flex justify-between items-center">
          <h1 className="font-extrabold text-3xl">&#60;GLYNN&#62;</h1>
          <ul className="flex gap-8 cursor-pointer">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#technologies">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>  
          <a href="#contact"><button className="px-6 text-white py-2 rounded-full bg-cyan-600">Contact Me</button></a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <Landing /> 
        <About/>
        <Skills/>
        <Projects/>
      </div>
      
    </div>
  );
}
