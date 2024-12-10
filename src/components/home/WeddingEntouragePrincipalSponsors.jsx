export default function WeddingEntouragePrincipalSponsors(){
    return(
        <div className="py-8 text-white flex flex-col h-full relative">
            <div className="h-full w-full bg-center bg-cover absolute top-0 left-0" style={{backgroundImage: "linear-gradient(to top, #34170DA2, #A7795E), url(/assets/images/aesthetic/flower.jpg)"}}></div>
            <div className="relative z-10">
                <div className="px-8">
                    <p className="text-script text-3xl border-b border-white/50 pb-2">The Entourage</p>
                </div>
                <div className="mt-4 mx-4">
                    <p className="font-bold text-center">Primary Sponsors</p>
                    <div className="mt-2 text-[10pt] flex justify-between">
                        <div className="text-center">
                            <p className="italic">Dr. Simon John Eric Flores</p>
                            <p className="italic">Hon. John Raymond Jr.</p>
                            <p className="italic">Mr. Reynaldo Lamoco</p>
                            <p className="italic">Hon. Emezalde Siacor</p>
                            <p className="italic">Mr. Napoleon Capulso</p>
                            <p className="italic">Mr. Rene Martinez</p>
                            <p className="italic">Mr. Bernardo Neri II</p>
                            <p className="italic">Mr. Sharlou Jamin</p>
                            <p className="italic">Mr. Jesselito Nuñez</p>
                            <p className="italic">Mr. Mario Dolar</p>
                            <p className="italic">Engr. Jed Luba</p>
                            <p className="italic">Engr. Marlon Tanilon</p>
                            <p className="italic">Mr. Diosdado Lajato</p>
                            <p className="italic">Mr. Joy Cabebe</p>
                        </div>
                        <div className="text-center">
                            <p className="italic">Dr. Sheila Marie Flores</p>
                            <p className="italic">Atty. Pristine Raymond</p>
                            <p className="italic">Mrs. Irene Lamaco</p>
                            <p className="italic">Mrs. Jocelyn Siacor</p>
                            <p className="italic">Mrs. Geraldine Capulso</p>
                            <p className="italic">Mrs. Maritess Martinez</p>
                            <p className="italic">Engr. Janice Neri</p>
                            <p className="italic">Mrs. Jocelyn Torreda</p>
                            <p className="italic">Mrs. Tulip Nuñez</p>
                            <p className="italic">Mrs. Estrella Dolar</p>
                            <p className="italic">Mrs. Maria Vilma Luba</p>
                            <p className="italic">Mrs. Junila Tanilon</p>
                            <p className="italic">Mrs. Salvation Lajato</p>
                            <p className="italic">Mrs. Susan Occeña</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mx-2">
                    <p className="font-bold text-center">Secondary Sponsors</p>
                    <div className="mt-2 text-[10pt] flex justify-between">
                        <div className="text-center">
                            <p className="italic">Mr. Eran Ysola</p>
                            <p className="italic">Mr. John Rey Jumuad</p>
                            <p className="italic">Engr. Daryl Rey Torreda</p>
                        </div>
                        <div className="text-center">
                            <p className="italic">Mrs. Jocel Marie Ysola</p>
                            <p className="italic">Mrs. Kimberly Lourdes Jumuad</p>
                            <p className="italic">Mrs. Karina Rufa Torreda</p>
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