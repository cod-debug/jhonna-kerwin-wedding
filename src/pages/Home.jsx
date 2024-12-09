import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "../components/home/CoverPage";
import PageOne from "../components/home/PageOne";
import PageTwo from "../components/home/PageTwo";

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
                    <div className="page bg-primary relative overflow-hidden">
                        <CoverPage />
                    </div>
                    <div className="page overflow-hidden relative">
                        <PageOne />
                    </div>
                    <div className="page overflow-hidden relative">
                        <PageTwo />
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    )
}