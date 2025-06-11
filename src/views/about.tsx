export default function About() {
    return(
        <div id="about" className="h-dvh w-full bg-slate-800 top-0 z-10 flex justify-center items-center p-20">
            <div className="aboutDisplay mt-16 flex justify-center items-center w-[1366px]">
                <div className=" w-full flex flex-col">
                    <span className="headingshadow text-[100px] font-extrabold opacity-20 text-white leading-none">ABOUT ME</span>
                    <span className="heading text-[50px] -mt-14 font-extrabold text-white leading-none">ABOUT ME</span>
                    <span className="subtext text-2xl font-normal text-white leading-tight text-justify pr-5 indent-10">Hi, I&apos;m Yvert Glynn Soriano, a passionate and driven software developer. I am committed to mastering my craft and staying at the forefront of the industry. I embrace challenges, continuously push my limits, and strive for excellence in everything I do.</span> 
                </div>
                <div className="imgDisplay w-full flex justify-end"> 
                    <img src="coding.png" className="w-2/3" alt=""/>
                </div>
            </div>
        </div>
    )
}
