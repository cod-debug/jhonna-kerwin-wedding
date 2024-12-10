import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "../components/home/CoverPage";
import Reception from "../components/home/Reception";
import Church from "../components/home/Church";
import VenueTimer from "../components/home/VenueTimer";
import WhatToWear from "../components/home/WhatToWear";
import Details from "../components/home/Details";
import WeddingEntouragePrincipalSponsors from "../components/home/WeddingEntouragePrincipalSponsors";
import WeddingEntourageParentsBride from "../components/home/WeddingEntourageParentsBride";
import WeddingEntourage from "../components/home/WeddingEntourage";

export default function Home(){
    const book = useRef();

    window.scrollTo(0, 0);

    return(
        <div className="flex flex-col gap-4">
            <div className="p-2 md:p-4 max-w-[100vw]">
                <HTMLFlipBook 
                    className="mx-auto relative"
                    width={370}
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
                    <div className="page overflow-hidden relative">
                        <Details />
                    </div>
                    <div className="page overflow-hidden relative">
                        <WeddingEntourageParentsBride />
                    </div>
                    <div className="page overflow-hidden relative">
                        <WeddingEntouragePrincipalSponsors />
                    </div>
                    <div className="page overflow-hidden relative">
                        <WeddingEntourage />
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    )
}