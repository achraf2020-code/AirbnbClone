import heroImg from "/images/hero-img.png"
const Hero = ()=>{
    return(
        <section className="hero">
            <img src={heroImg} alt="hero" className="hero--img" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--desc">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}
export default Hero