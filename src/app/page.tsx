'use client';

import Landing from "@/views/home";
import About from "@/views/about";
import Skills from "@/views/skills";
// import Projects from "@/views/projects";
import Contact from "@/views/contact";
import React from "react";

export default function Home() {

  const openNav = () => {
    const navContainer = document.querySelector('.navContainer');
    if (navContainer) {
      const isOpen = navContainer.classList.contains('flex');
      if (isOpen) {
        navContainer.classList.remove('flex');
        navContainer.classList.add('hidden');
      } else {
        navContainer.classList.add('flex');
        navContainer.classList.remove('hidden');
      }
    }
  };
  return (
    <div className="w-full">
      {/* <img src="bgsite.png" alt="" className="fixed h-dvh w-full" /> */}
      <div className="nav p-4 flex justify-center items-center text-white z-50 fixed max-w-full w-full">
        <div className="max-w-[1400px] w-full flex justify-between items-center">
          <h1 className="headerLogo font-extrabold text-3xl">&#60;GLYNN&#62;</h1>
          <ul className="flex gap-8 cursor-pointer">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#technologies">Skills</a></li>
            {/* <li><a href="#projects">Projects</a></li> */}
          </ul>  
          <a href="#contact"><button className="px-6 text-white py-2 rounded-full bg-cyan-600">Contact Me</button></a>
        </div>
      </div>
      <div className="navMobile hidden p-4 justify-center items-center text-white z-50 fixed max-w-full w-full">
        <h1 className="headerLogo font-extrabold text-3xl">&#60;GLYNN&#62;</h1>
        <img src="menu.png" className="w-7" alt="" onClick={openNav} />
        <div className="w-full absolute top-16  hidden navContainer">
          <ul className="flex-col border navDisplay gap-8 cursor-pointer bg-slate-900">
            <li><a href="#home" onClick={openNav}>Home</a></li>
            <li><a href="#about" onClick={openNav}>About Me</a></li>
            <li><a href="#technologies" onClick={openNav}>Skills</a></li>
            {/* <li><a href="#projects" onClick={openNav}>Projects</a></li> */}
            <li><a href="#contact" onClick={openNav}>Contact</a></li>
          </ul>  
          
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Landing /> 
        <About/>
        <Skills/>
        {/* <Projects/> */}
        <Contact/>
      </div>
      
    </div>
  );
}
