import Card from "./Card";

const apiKey = 'abd8cfb408b731f35181482318030ac4';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

export default async function GetApiData() {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		const {results} =  data;
		const dataArr =  results.slice(0, 10);
		console.log(dataArr);

		let cardData = [];
		dataArr.map(data => cardData.push({
			id: data.id,
			title: data.title, 
			country: data.original_language,
			image: data.backdrop_path,
			percentage: data.vote_average * 10,
			year: data.release_date.split('-')[0],
		}));

		const cardElements = cardData.map(card => <Card key={card.id} {...card}/>)
		return cardElements;
	} 
	catch (err) {
		console.error(`Error: ${err}`);
	}
}