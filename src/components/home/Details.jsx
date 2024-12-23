export default function Details(){
    return(
        <div className="p-8 text-secondary flex flex-col h-full">
            <div>
                <p className="text-script text-3xl border-b border-accent/50 pb-2">The Details</p>
            </div>
            <div className="text-center text-[11pt] mt-4">
                <div>
                    <div>
                        <img src="./assets/images/church.webp" className="w-1/3 mx-auto" />
                    </div>
                    <p>Saturday</p>
                    <p className="font-bold">January 11, 2025</p>
                    <p>Our ceremony will commence at 2:00PM.</p>
                    <p>Please arrive by 1:45PM to be seated.</p>
                </div>
                <div className="text-2xl font-bold mt-8">RSVP</div>
                <div className="flex flex-col gap-2">
                    <p className="italic font-bold">We have reserved ___ seats for you!</p>
                    <p>We look forward to celebrating with you!</p>
                    <p>Please confirm by December 20, 2024</p>
                </div>
                <div className="mt-4">
                    <div className="font-bold text-xl">
                        CONTACT
                    </div>
                    <div>Jhonna Cuizon</div>
                    <div>0965 906 0091</div>
                    <div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUFA3wscOnIM-_147xKRjJKE2Z0JuSoKzqgeE401M5Wu0Uqw/viewform" 
                        target="_blank" 
                        className="border border-secondary py-1 px-4 rounded inline-block my-2
                        hover:bg-secondary hover:text-white
                        transition-all ease-in duration-200
                        "
                        rel="noreferrer">
                            RSVP
                        </a>
                    </div>
                </div>
                <div className="mt-2 opacity-80">
                    <img src="/assets/images/hands-ring.jpg" alt="hands ring" className="w-3/4 rounded-xl overflow-hidden mx-auto" />
                </div>
            </div>
        </div>
    )
}