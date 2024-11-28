import './HeroBanner.css';
// import classes from './HeroBanner.module.css';
// import HeroImg from '../assets/hero.jpg';
// import HeroImg from '../assets/hero-desktop.png';
// import HeroImgMo from '../assets/hero-mobile.png';
import HeroImg from '../assets/hero-desktop-v1.png';
import HeroImgMo from '../assets/hero-mobile-v1.png';

function HeroBanner() {

    return (
        <>
			<div className="row py-3 py-sm-5 hero-bg">
                <div className="container-1200 m-auto">
                    <div className="row">
                        <picture className="img-fluid hero-img">
                            <source media="(min-width: 968px)" srcSet={HeroImg}></source>
                            <source media="(min-width: 767px)" srcSet={HeroImgMo}></source>

                            <img id="hero-img" className="img-fluid w-100 px-0 hero-img" src={HeroImg} alt="hero image"></img>
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner;