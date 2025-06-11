export default function Contact(){
    return(
        <div id="contact"  className=" bg-slate-600 w-full top-0 z-10 flex flex-col items-center">
            <div className="contact p-10 shadow-lg flex flex-row justify-center items-center w-full">
                <div className="w-2/4 flex justify-center items-center">
                    <h1 className="headline font-extrabold text-[50px] text-white">Want to Connect?</h1>
                </div>
                <div className="w-2/4 border-l-2 border-white pl-6">
                    <table>
                        <thead>
                            <tr className="h-14">
                                <td><img src="letter.png" alt="" className="w-8"/></td>
                                <td className="text-white pl-4"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sorianoyvert26@gmail.com" target="_blank">sorianoyvert26&#64;gmail.com</a></td>
                            </tr>
                            <tr className="h-14">
                                <td><img src="contact.png" alt="" className="w-8"/></td>
                                <td className="text-white pl-4">09569435938</td>
                            </tr>
                            <tr className="h-14">
                                <td><img src="text.png" alt="" className="w-8"/></td>
                                <td className="text-white pl-4"><a href="https://www.messenger.com/t/10030725137042171/" target="_blank">Yvert Glynn Soriano</a></td>
                            </tr>
                            
                        </thead>
                    </table>
                </div>
            </div>
            <div className="w-full footer p-7">
                <div className="w-full flex justify-between items-center text-white">
                    <h1 className="font-extrabold text-3xl">&#60;GLYNN&#62;</h1>
                    <span>Copyright &#64;    2025 Yvert Glynn Soriano. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}