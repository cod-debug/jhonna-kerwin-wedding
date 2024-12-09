export default function CoverPage(){
    return(
        <div className="h-full w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-[4]" 
            style={{backgroundImage: "linear-gradient(to bottom, #11070369, #A7795E5E), url(./assets/images/DSCF7702.jpg)"}}></div>
            <div className="flex flex-col justify-between items-center h-full py-24">
                <div>
                    <div className="text-center">
                        <p className="text-8xl text-primary font-bold leading-10 text-hollow">Jhonna</p>
                        <br />
                        <p className="text-8xl text-primary font-bold text-script italic">&amp;</p>
                        <p className="text-8xl text-primary font-bold leading-10 text-hollow">Kerwin</p>
                    </div>
                </div>
                <div className="text-primary font-bold text-3xl">
                    01.11.25
                </div>
            </div>
        </div>
    )
}