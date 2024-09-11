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
			<div class="row py-3 py-sm-5 hero-bg">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <picture class="img-fluid hero-img">
                            <source media="(min-width: 968px)" srcset={HeroImg}></source>
                            <source media="(min-width: 767px)" srcset={HeroImgMo}></source>

                            <img id="hero-img" class="img-fluid w-100 px-0 hero-img" src={HeroImg} alt="hero image"></img>
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner;