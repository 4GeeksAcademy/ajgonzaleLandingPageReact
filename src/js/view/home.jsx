import React from "react";

//import your own components
import Nav from "../component/nav.jsx";
import Footer from "../component/footer.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import CardsGrid from "../component/cardsGrid.jsx";

//create your first component
const Home = () => {
	return (
		<div >
			<Nav />
			<Jumbotron title="A warm welcome!" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." />
			<CardsGrid />
			<Footer />
		</div>
	);
};

export default Home;
