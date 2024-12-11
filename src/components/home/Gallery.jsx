import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
};

export default function Gallery(){
    return(
        <div className="p-8 flex flex-col h-full">
            <div className="relative z-50  text-secondary px-2">
                <div>
                    <p className="text-script text-3xl border-b border-secondary/50 pb-2">Gallery</p>
                </div>
                <div className="mt-1">
                    <Carousel responsive={responsive} infinite={true} autoPlay arrows={false}>
                        <div className="p-2">
                            <img src="/assets/images/mountain.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/mountain-2.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/mountain-3.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/black-3.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/beach-3.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/beach.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/mountain-4.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/mountain-8.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/black-4.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                        <div className="p-2">
                            <img src="/assets/images/black-5.jpg" alt="mountain" className="w-full rounded" />
                        </div>
                    </Carousel>
                </div>
                <Carousel responsive={responsive} infinite={true} autoPlay arrows={false}>
                    <div className="p-2">
                        <img src="/assets/images/black-2.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/forest.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/beach-2.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/mountain-5.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/mountain-6.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/mountain-7.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                    <div className="p-2">
                        <img src="/assets/images/black-6.jpg" alt="mountain" className="w-full rounded" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}