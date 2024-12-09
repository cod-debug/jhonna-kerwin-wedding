export default function WhatToWear(){
    return(
        <div className="p-8 text-secondary">
            <div className="bg-accent"></div>
            <p className="text-script text-3xl border-b border-accent/50 pb-2">What to wear</p>
            <p className="font-bold my-2 text-center">For Sponsors</p>
            <div className="items-center mt-4 text-center flex flex-col gap-4">
                <div>
                    <p className="font-bold">Boys</p>
                    <div>
                        <p>Long-sleeved <strong>Beige</strong> Barong</p>
                        <p><strong>Black</strong> Slacks</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Girls</p>
                    <p><strong>Beige</strong> long dress</p>
                </div>
                <div>
                </div>
            </div>
            <div className="p-4 text-center">
                <hr className="border border-accent/20" />
                <p className="font-bold my-2">For Guests</p>
                <p>Long-sleeved polo, and khaki Pants</p>
            </div>
        </div>
    )
}