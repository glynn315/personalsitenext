export default function landing() {
    return (
        <div id="home" className="h-dvh w-[1366px] top-0 z-10 flex items-center">
            <div className="mt-16 flex justify-center items-center w-full">
                <div className=" w-full flex flex-col">
                    <span className="text-3xl font-light leading-none">HI Welcome to my</span>
                    <span className="text-[90px] font-bold leading-none">PORTFOLIO</span> 
                    <div className="flex justify-start items-center w-full p-3 gap-6">
                    <a href="https://www.facebook.com/messages/t/5890368184334852/" target="_blank"><img src="messenger.webp" className="w-12 p-3 rounded-2xl bg-white hover:scale-125 duration-500" alt=""/></a>
                    <a href="https://www.linkedin.com/in/yvert-glynn-soriano-a65721252/" target="_blank"><img src="linkedin.webp" className="w-12 p-3 rounded-2xl bg-white hover:scale-125 duration-500" alt=""/></a>
                    <a href="https://github.com/glynn315" target="_blank"><img src="git.png" className="w-12 p-3 rounded-2xl bg-white hover:scale-125 duration-500" alt=""/></a>
                    </div>
                </div>
                <div className="w-full relative"> 
                    <div className="w-2/5 top-10 h-[40%] left-16 border-4 border-blue-500 absolute">

                    </div>
                    <div className="w-4/6 right-0 top-18 h-[50%] border-4 border-blue-500 absolute">

                    </div>
                    <div className="w-4/6 left-0 bottom-0 h-[30%] border-4 border-blue-500 absolute">

                    </div>
                    <div className="w-1/6 -right-10 bottom-0 h-[70%] border-4 border-blue-500 absolute">

                    </div>
                    <img src="me.png" className="w-full z-20 relative rounded-b-full" alt=""/>
                </div>
            </div>
        </div>
    )
}