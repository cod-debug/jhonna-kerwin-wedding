export default function PageTwo(){
    return(
        <div className="p-4">
            <p className="text-script text-3xl border-b border-accent/50 text-secondary pb-2">Reception</p>
            <div className="">
                <div className="mt-4 text-secondary/80">
                    <p><strong>The Barn</strong>, Dumaguete - Palinpinon Rd., Valencia, Negros Oriental</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.195722792985!2d123.24304137502226!3d9.315918990757302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab65cc0383ea77%3A0x90959df4750e01a6!2sThe%20Barn!5e0!3m2!1sen!2sph!4v1733734654901!5m2!1sen!2sph" 
                        width="100%" height="350"
                        className="border-2 border-accent/20 rounded-2xl"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">    
                    </iframe>
                </div>
            </div>
        </div>
    )
}