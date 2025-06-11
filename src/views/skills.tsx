export default function About() {
    return (
        <div id="technologies" className="h-dvh w-[1366px] top-0 z-10 flex items-center p-20">
            <div className="mt-16 flex flex-col justify-center items-center w-full">
                <div className=" w-full flex flex-col">
                    <span className="text-[80px] font-extrabold opacity-20 leading-none">TECHNOLOGIES</span>
                    <span className="text-[50px] -mt-12 font-extrabold leading-none text-white z-20">Technologies Used</span>
                    <span className="text-2xl font-semibold text-black leading-none text-justify pr-5 indent-10"></span> 
                </div>
                <div className="w-full flex justify-start gap-2 items-center flex-wrap gap-y-10 mt-16"> 
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="w-1/3">
                            <span className="text-2xl text-white font-bold">Frontend Development</span>
                        </div>
                        <div className="w-2/3 flex flex-row justify-start items-center gap-4 border-l-2 border-white pl-4">
                            <img src="hmtl.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="css.png" className="w-[45px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="bootstrap.png" className="w-[60px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="ionic.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="js.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="sass.png" className="w-[70px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="wordpress.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="tailwind.png" className="w-[70px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="w-1/3">
                            <span className="text-2xl text-white font-bold">Backend Development</span>
                        </div>
                        <div className="w-2/3 flex flex-row justify-start items-center gap-4 border-l-2 border-white pl-4">
                            <img src="net.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="php.png" className="w-[90px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="laravel.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="w-1/3">
                            <span className="text-2xl text-white font-bold">Database</span>
                        </div>
                        <div className="w-2/3 flex flex-row justify-start items-center gap-4 border-l-2 border-white pl-4">
                            <img src="mssql.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="mysql.png" className="w-[80px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="psql.png" className="w-[110px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="w-1/3">
                            <span className="text-2xl text-white font-bold">Creatives</span>
                        </div>
                        <div className="w-2/3 flex flex-row justify-start items-center gap-4 border-l-2 border-white pl-4">
                            <img src="ps.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="ai.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                            <img src="Figma.png" className="w-[50px] h-[50px] p-2 rounded-md bg-white hover:scale-120 duration-500" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
