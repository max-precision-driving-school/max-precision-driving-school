import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import HeroBanner from '../components/HeroBanner';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Section from '../components/Section';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Home.css'

function Home() {
	const [count, setCount] = useState(0)

	return (
		<>
			<HeroBanner />
			<Section />
		</>
	)
}

export default Home;
