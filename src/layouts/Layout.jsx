import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(){
    const [showSwipeGif, setShowSwipeGif] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSwipeGif(false);
        }, 3000);
    });
    return(
    <div>
        <main>
            {
                showSwipeGif && 
                <div className="absolute md:hidden z-50 h-full flex w-full justify-center items-center opacity-80">
                    <img src="./assets/images/swipe.gif" className="w-1/6" />
                </div>
            }
            <Outlet />
        </main>
    </div>
    )
}