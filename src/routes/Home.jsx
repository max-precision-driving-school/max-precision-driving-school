import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Home.css'

import quality from '../assets/quality-2.png';
import mission from '../assets/mission-2.png';
import value from '../assets/value-2.png';

function Home() {
	const sections = [
		{id: 1, title: "Quality", img: quality, text: [
			{ id: "1a", t: "We provide our students with a high quality learning experience." },
			{ id: "1b", t: "Our instructors are fluent in English and Spanish!"}
		]},
		{id: 2, title: "Our Mission", img: mission, text: [
			{ id: "2a", t: "Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, expecially for first time and nervous drivers." },
			{ id: "2b", t: "Students will learn how to execute basic maneuvers such as parallel parking and executing 3 point turn with max precision." }
		]},
		{id: 3, title: "Value", img: value, text: [
			{ id: "3a", t: "We value our students and ensure that they not only pass their road test but gain confidence in their abilities as a driver." },
			{ id: "3b", t: "We are currently located in Astoria and offer the best rates in the neighborhood!" }
		]}
	]
	return (
		<>
			<HeroBanner />
			<Section sections={sections}/>
		</>
	)
}

export default Home;
