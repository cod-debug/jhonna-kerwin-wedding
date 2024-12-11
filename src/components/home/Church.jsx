export default function Church(){
    return(
        <div className="p-8">
            <div className="h-full w-full bg-center bg-cover absolute top-0 left-0" style={{backgroundImage: "linear-gradient(to top, #34170DD2, #000000AE), url(/assets/images/aesthetic/church.jpg)"}}></div>
            <div className="relative z-50">
                <p className="text-script text-3xl border-b border-white/50 text-white pb-2">Church</p>
                <div className="">
                    <div className="mt-4 text-white">
                        <p><strong>San Isidro Labrador Parish</strong>, Talay, Dumaguete City, Negros Oriental</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4453056499597!2d123.27273927502226!3d9.293751890778507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6f4c7e8300ff%3A0xcb1f7b26c96a9198!2sSan%20Isidro%20Labrador%20Parish!5e0!3m2!1sen!2sph!4v1733734042843!5m2!1sen!2sph" 
                            width="100%" height="450"
                            className="border-2 border-accent/20 rounded mt-4 opacity-30 hover:opacity-100"
                            allowfullscreen
                            loading="lazy" 
                            title="church"
                            referrerPolicy="no-referrer-when-downgrade">    
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}