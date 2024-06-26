import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import HeroBanner from './HeroBanner';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Section from './Section';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div class="container-fluid">
				<NavMenu />
				<HeroBanner />
				<Section />
				<Footer />
			</div>
		</>
	)
}

export default App
