import FlipCountdown from "@rumess/react-flip-countdown";

export default function VenueTimer(){
    return(
        <div className="flex justify-center items-center h-full w-full ">
            <div className="text-center flex flex-col gap-2">
                <div className="uppercase">Join us as we celebrate the beginning of our new life together.</div>
                <FlipCountdown 
                    theme="light"
                    hideYear
                    titlePosition='bottom'
                    endAt={'2025-01-11 14:00:00'}/>
                <div className="uppercase">On Friday, The 11<sup>th</sup> of January 2025</div>
                <div className="uppercase">At two o'clock in the afternoon</div>
            </div>
        </div>
    )
}