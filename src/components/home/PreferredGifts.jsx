export default function PreferredGifts(){
    return(
        <div className="p-8 flex flex-col h-full relative">
            <div className="h-full w-full bg-center bg-cover absolute top-0 left-0" style={{backgroundImage: "linear-gradient(to top, #34170DA2, #6E3C19AE), url(/assets/images/aesthetic/gift.jpg)"}}></div>
            <div className="relative z-50  text-white">
                <div>
                    <p className="text-script text-3xl border-b border-white/50 pb-2">Preferred Gifts</p>
                </div>
                <div className="text-center mt-4">
                    <p className="text-[11pt]">There is no better gift than the honor of your presence. However, if we are blessed with a gift from you, we request a <span className="text-[12pt]">monetary token</span> instead.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8 items-center">
                    <a href="/assets/images/bank-1.jpeg" download>
                        <img src="/assets/images/bank-1.jpeg" alt="GCash" className="w-full rounded" />
                    </a>
                    <a href="/assets/images/bank-2.jpeg" download>
                        <img src="/assets/images/bank-2.jpeg" alt="BDO" className="w-full rounded" />
                    </a>
                </div>
                <p className="text-[11pt] mt-8">Note: Click the image to download QR</p>
            </div>
        </div>
    )
}