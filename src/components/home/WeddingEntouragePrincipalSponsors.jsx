export default function WeddingEntouragePrincipalSponsors(){
    return(
        <div className="py-8 text-white flex flex-col h-full relative">
            <div className="h-full w-full bg-center bg-cover absolute top-0 left-0" style={{backgroundImage: "linear-gradient(to top, #34170DA2, #A7795E), url(/assets/images/aesthetic/flower.jpg)"}}></div>
            <div className="relative z-10">
                <div className="px-8">
                    <p className="text-script text-3xl border-b border-white/50 pb-2">The Entourage</p>
                </div>
                <div className="mt-4 mx-4">
                    <p className="text-center text-script">Primary Sponsors</p>
                    <div className="mt-2 text-[10pt] flex justify-between text-times">
                        <div className="text-center">
                            <p>Dr. Simon John Eric Flores</p>
                            <p>Hon. John Raymond Jr.</p>
                            <p>Mr. Reynaldo Lamoco</p>
                            <p>Hon. Emezalde Siacor</p>
                            <p>Mr. Napoleon Capulso</p>
                            <p>Mr. Rene Martinez</p>
                            <p>Mr. Bernard John Neri</p>
                            <p>Mr. Sharlou Jamin</p>
                            <p>Mr. Jesselito Nuñez</p>
                            <p>Mr. Mario Dolar</p>
                            <p>Engr. Jed Luba</p>
                            <p>Engr. Marlon Tanilon</p>
                            <p>Mr. Diosdado Lajato</p>
                            <p>Mr. Joy Cabebe</p>
                        </div>
                        <div className="text-center">
                            <p>Dr. Sheila Marie Flores</p>
                            <p>Atty. Pristine Raymond</p>
                            <p>Mrs. Irene Lamaco</p>
                            <p>Mrs. Jocelyn Siacor</p>
                            <p>Mrs. Geraldine Capulso</p>
                            <p>Mrs. Maritess Martinez</p>
                            <p>Engr. Janice Neri</p>
                            <p>Mrs. Jocelyn Torreda</p>
                            <p>Mrs. Tulip Nuñez</p>
                            <p>Mrs. Estrella Dolar</p>
                            <p>Mrs. Maria Vilma Luba</p>
                            <p>Mrs. Junila Tanilon</p>
                            <p>Mrs. Salvation Lajato</p>
                            <p>Mrs. Susan Occeña</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mx-2">
                    <p className="text-center text-script">Secondary Sponsors</p>
                    <div className="mt-2 text-[10pt] flex justify-between text-times">
                        <div className="text-center">
                            <p>Mr. Eran Ysola</p>
                            <p>Mr. John Rey Jumuad</p>
                            <p>Engr. Daryl Rey Torreda</p>
                        </div>
                        <div className="text-center">
                            <p>Mrs. Jocel Marie Ysola</p>
                            <p>Mrs. Kimberly Lourdes Jumuad</p>
                            <p>Mrs. Karina Rufa Torreda</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 flex gap-2 items-center">
                    <div className="rounded-xl overflow-hidden">
                        <img src="/assets/images/sunset.jpg" alt="candles" />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/assets/images/sunset-2.jpg" alt="candles" />
                    </div>
                </div>
            </div>
        </div>
    )
}