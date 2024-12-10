import FlipCountdown from "@rumess/react-flip-countdown";

export default function VenueTimer(){
    return(
        <div className="flex bg-black justify-center items-center h-full w-full p-4 text-accent">
            <div className="text-center flex flex-col gap-2">
                <div className="text-[15pt] text-script">
                    <div>Join us as we celebrate the beginning of our new life together.</div>
                </div>
                <FlipCountdown 
                    theme="dark"
                    hideYear
                    titlePosition='bottom'
                    endAt={'2025-01-11 14:00:00'}/>
                <div className="text-[9pt]">
                    <div className="uppercase">On Friday, The 11<sup>th</sup> of January 2025</div>
                    <div className="uppercase">At two o'clock in the afternoon</div>
                    <div className="uppercase"><strong>San Isidro Labrador Parish</strong>, Talay, Dumaguete City, Negros Oriental</div>
                </div>
            </div>
        </div>
    )
}