export default function WhatToWear(){
    return(
        <div className="p-8 text-secondary flex flex-col h-full">
            <div>
                <p className="text-script text-3xl border-b border-accent/50 pb-2">What to wear</p>
            </div>
            <div className="flex-grow flex flex-col">
                <p className="font-bold">For Sponsors</p>
                <div className="border-b border-accent/50 pb-2">
                    <ul className="list-disc pl-5">
                        <li>
                            <p className="font-bold">Boys:</p>
                            <ul className="list-[circle] pl-5">
                                <li><p>Long-sleeved <strong>Beige</strong> Barong</p></li>
                                <li><p><strong>Black</strong> Slacks</p></li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-bold">Girls:</p>
                            <ul className="list-[circle] pl-5">
                                <li><p><strong>Beige</strong> long dress</p></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="/assets/images/aesthetic/dress.jpg" alt="dress" className="w-full rounded border-2 border-secondary/80"/>
                            </div> 
                            <div>
                                <img src="/assets/images/aesthetic/barong.jpg" alt="dress" className="w-full rounded border-2 border-secondary/80"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-2 justify-center border-b border-accent/50 py-2">
                        <div className="h-7 aspect-square rounded-full bg-[#a07a63]"></div>
                        <div className="h-7 aspect-square rounded-full bg-[#683f21]"></div>
                        <div className="h-7 aspect-square rounded-full bg-[#33180f]"></div>
                        <div className="h-7 aspect-square rounded-full bg-[#22110a]"></div>
                    </div>
                    <p className="font-bold">For Guests</p>
                    <ul className="list-disc pl-5">
                        <li><p>Long-sleeved polo, and khaki Pants</p></li>
                        <li><p>Long Dress</p></li>
                    </ul>
                    <div className="mt-4">
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="/assets/images/aesthetic/sleeve.jpg" alt="dress" className="w-full rounded border-2 border-secondary/80"/>
                            </div> 
                            <div>
                                <img src="/assets/images/aesthetic/khaki-pants.jpg" alt="dress" className="w-full rounded border-2 border-secondary/80"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}