export default function OrderOfEvents(){
    return(
        <div className="p-8 text-secondary flex flex-col h-full">
            <div>
                <p className="text-script text-3xl border-b border-accent/50 pb-2">Order of Events</p>
            </div>
            <div className="mt-4">
                <div className="grid grid-cols-2 items-center">
                    <div className="justify-center w-full flex p-4">
                        <img src="/assets/images/ring.png" alt="wedding ring" className="w-1/2" />
                    </div>
                    <div className="text-center flex border-l border-accent/25 p-4">
                        <div className="flex flex-col items-center">
                            <strong className="text-sm">02:00 PM</strong>
                            <p className="text-script">We Do</p>
                            <p className="text-[9pt]">San Isidro Labrador Parish, Talay, Dumaguete City</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 items-center">
                    <div className="text-center flex">
                        <div className="flex flex-col items-center p-4">
                            <strong className="text-sm">04:30 PM</strong>
                            <p className="text-script">We Drink</p>
                            <p className="text-[9pt]">The Barn Air Park, Valencia, Neg Or.</p>
                        </div>
                    </div>
                    <div className="justify-center w-full flex border-l border-accent/25 p-4">
                        <img src="/assets/images/wine-glass.png" alt="wine glass" className="w-3/4" />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 items-center">
                    <div className="justify-center flex">
                        <div style={{backgroundImage: "url(/assets/images/plate.webp)", backgroundSize: "170% 170%"}} 
                            className="aspect-square w-1/2 bg-center rounded-full -rotate-12"></div>
                    </div>
                    <div className="justify-center w-full flex border-l border-accent/25 p-4">
                        <div className="flex flex-col items-center p-4">
                            <strong className="text-sm">06:00 PM</strong>
                            <p className="text-script">We Eat</p>
                            <p className="text-[9pt]">The Barn Air Park, Valencia, Neg Or.</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 items-center mt-2">
                    <div className="text-center flex">
                        <div className="flex flex-col items-center p-4">
                            <strong className="text-sm">08:00 PM</strong>
                            <p className="text-script">We Dance</p>
                            <p className="text-[9pt]">The Barn Air Park, Valencia, Neg Or.</p>
                        </div>
                    </div>
                    <div className="justify-center w-full flex border-l border-accent/25 p-4">
                        <img src="/assets/images/disco.png" alt="wine glass" className="w-full" />
                    </div>
                </div>
                <div className="h-[80px] w-full bg-center bg-contain relative rounded-xl border-2 border-accent/50 mt-2" style={{backgroundImage: "linear-gradient(to left, #34170DA2, #6E3C19AE), url(/assets/images/sunset-5.jpg)"}}></div>
            </div>
        </div>
    )
}