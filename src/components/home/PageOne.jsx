export default function PageOne(){
    return(
        <div className="p-4">
            <p className="text-script text-3xl border-b border-accent/50 text-secondary pb-2">Church</p>
            <div className="">
                <div className="mt-4 text-secondary/80">
                    <p><strong>San Isidro Labrador Parish</strong>, Talay, Dumaguete City, Negros Oriental</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4453056499597!2d123.27273927502226!3d9.293751890778507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6f4c7e8300ff%3A0xcb1f7b26c96a9198!2sSan%20Isidro%20Labrador%20Parish!5e0!3m2!1sen!2sph!4v1733734042843!5m2!1sen!2sph" 
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