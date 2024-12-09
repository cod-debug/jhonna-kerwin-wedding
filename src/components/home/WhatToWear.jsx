export default function WhatToWear(){
    return(
        <div className="p-8 text-secondary">
            <p className="text-script text-3xl border-b border-accent/50 pb-2">What to wear</p>
            <p className="font-bold my-2 text-center">For Sponsors</p>
            <div className="grid grid-cols-2 items-center gap-4 mt-4">
                <div className="px-4 flex items-center justify-end border-r border-accent/20 h-full">
                    Boys
                </div>
                <div>
                    <p>Long-sleeved <strong>Beige</strong> Barong</p>
                    <p><strong>Black</strong> Slacks</p>
                </div>
                <div className="flex text-right px-4 flex-col justify-center border-r border-accent/20 h-full">
                    <p>Long-sleeved <strong>Beige</strong> Barong</p>
                    <p><strong>Black</strong> Slacks</p>
                </div>
                <div>
                    Girls
                </div>
            </div>
            <div className="p-4">
                <hr className="border border-accent/20" />
                <p className="font-bold my-2 text-center">For Guests</p>
            </div>
        </div>
    )
}