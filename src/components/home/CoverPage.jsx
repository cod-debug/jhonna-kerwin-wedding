export default function CoverPage(){
    return(
        <div className="h-full w-full relative">
            <div className="absolute w-full h-full bg-cover bg-center" 
            style={{backgroundImage: "linear-gradient(to bottom, #11070369, #A7795E5E), url(./assets/images/grass.jpg)"}}></div>
            <div className="flex flex-col justify-between items-center h-full py-24 relative z-50">
                <div>
                    <div className="text-center">
                        <p className="text-8xl text-primary font-bold leading-10">Jhonna</p>
                        <br />
                        <p className="text-8xl text-primary font-bold text-script italic">&amp;</p>
                        <p className="text-8xl text-primary font-bold leading-10">Kerwin</p>
                    </div>
                </div>
                <div className="text-primary font-bold text-3xl"></div>
            </div>
        </div>
    )
}