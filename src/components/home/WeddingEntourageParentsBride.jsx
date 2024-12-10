export default function WeddingEntourageParentsBride(){
    return(
        <div className="p-8 text-secondary flex flex-col h-full">
            <div>
                <p className="text-script text-3xl border-b border-accent/50 pb-2">The Entourage</p>
            </div>
            <div className="mt-4">
                <div className="text-center">
                    <p className="font-bold">Bride's Parents</p>
                    <p className="italic">Bernardo Cuizon</p>
                    <p className="italic">Janeth Cuizon</p>
                </div>
            </div>
            <div className="mt-2">
                <div className="text-center">
                    <p className="font-bold">Groom's Parents</p>
                    <p className="italic">Ernesto Martinez Jr.</p>
                    <p className="italic">Sodalia Martinez</p>
                </div>
            </div>
            <div className="mt-1">
                <img src="/assets/images/aesthetic/ring.jpg" alt="ring" className="rounded-xl" />
            </div>
        </div>
    )
}