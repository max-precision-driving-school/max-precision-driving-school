import './HeroBanner.css';
// import classes from './HeroBanner.module.css';
// import HeroImg from '../assets/hero.jpg';
import HeroImg from '../assets/hero-2.png';

function HeroBanner() {

    return (
        <>
			<div class="row">
                    <img id="hero-img" class="img-fluid w-100 px-0 hero-img" src={HeroImg} alt="hero image"></img>
            </div>
        </>
    )
}

export default HeroBanner;