import './HeroBanner.css';
// import classes from './HeroBanner.module.css';
// import HeroImg from '../assets/hero.jpg';
// import HeroImg from '../assets/hero-desktop.png';
// import HeroImgMo from '../assets/hero-mobile.png';
// import HeroImg from '../assets/hero-desktop-v1.png';
import HeroImg from '../assets/hero-image-xl.jpg';
// import HeroImgMo from '../assets/hero-mobile-v1.png';

function HeroBanner() {

    return (
        <>
			<div className="row hero-bg hero3">
                <div className="container-1200 m-auto hero3-text">
                    <p>Drive with Confidence</p>
                    <p>Drive with Max Precision</p>
                </div>
            </div>
        </>
    )
}

export default HeroBanner;