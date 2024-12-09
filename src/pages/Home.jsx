import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

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
            <div className="fixed -top-5 z-50 w-full hidden justify-center items-center">
                <img src="./assets/images/border-1.png" className="w-[200px]" alt="border top" />
            </div>
            <div className="p-4">
                <HTMLFlipBook 
                    className="mx-auto relative"
                    width={550}
                    height={733}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={600}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    ref={book}
                >
                    <div className="page bg-primary relative overflow-hidden" number="1">
                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-[4]" 
                        style={{backgroundImage: "linear-gradient(to bottom, #11070369, #A7795E5E), url(./assets/images/DSCF7702.jpg)"}}></div>
                        <div className="flex flex-col justify-between items-center h-full py-24">
                            <div>
                                <div className="text-center">
                                    <p className="text-8xl text-primary font-bold leading-10">Jhonna</p>
                                    <br />
                                    <p className="text-8xl text-primary font-bold text-script italic">&amp;</p>
                                    <p className="text-8xl text-primary font-bold leading-10">Kerwin</p>
                                </div>
                            </div>
                            <div className="text-primary font-bold text-3xl">
                                01.11.25
                            </div>
                        </div>
                    </div>
                    <div className="page bg-white overflow-hidden relative" number="2">
                        <div className="flex justify-center items-center h-full">
                            <div>
                                <div class="flipdown" id="flipdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="page bg-white" number="2">
                        <div className="flex justify-center items-center h-full">
                            <div>
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    )
}