import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "../components/home/CoverPage";
import Reception from "../components/home/Reception";
import Church from "../components/home/Church";
import VenueTimer from "../components/home/VenueTimer";
import WhatToWear from "../components/home/WhatToWear";

export default function Home(){
    const book = useRef();

    window.scrollTo(0, 0);

    const handleNext = () => {
        book.current.pageFlip().flipNext();
    }
    
    const handlePrev = () => {
        book.current.pageFlip().flipPrev();
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="p-2 md:p-4 max-w-[100vw]">
                <HTMLFlipBook 
                    className="mx-auto relative"
                    width={400}
                    height={733}
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    ref={book}
                >
                    <div className="page overflow-hidden relative">
                        <CoverPage />
                    </div>
                    <div className="page overflow-hidden relative">
                        <VenueTimer />
                    </div>
                    <div className="page overflow-hidden relative">
                        <Church />
                    </div>
                    <div className="page overflow-hidden relative">
                        <Reception />
                    </div>
                    <div className="page overflow-hidden relative">
                        <WhatToWear />
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    )
}