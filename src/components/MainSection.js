import React, { useEffect, useState } from 'react';
import GetApiData from "./Api";
import Card from "./Card"; // Import your Card component here

const MainSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cardElements = await GetApiData();
        setCards(cardElements);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container">
      <div className="flex main_intro">
        <h2>Featured Movies</h2>
        <a href="#">See more <i className='fa-solid fa-chevron-right'></i></a>
      </div>
      <div className="cards d-flex">
        {cards}
      </div>
    </main>
  );
}

export default MainSection;