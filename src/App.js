import "./App.css";
import React, { useEffect, useState } from "react";
import Clothes from "./Clothes";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("title");

  useEffect(() => {
    getClothing();
  }, []);
  const getClothing = async () => {
    setIsLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setClothes(data);
    console.log(data);
    setIsLoading(false);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getClothing();
    setSearch("");
  };

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   // clothes.filter((value) => {
  //   //   if (search === "") {
  //   //     return value;
  //   //   } else if (value.title.toLowerCase().includes(search.toLowerCase)) {
  //   //     return value;
  //   //   } else {
  //   //     setSearch("");
  //   //   }
  //   // });
  // };

  return (
    <div className="App">
      <form id="search-form" onSubmit={getSearch}>
        {/* <input
          type="text"
          id="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button id="search-button" type="submit">
          Search
        </button> */}
      </form>
      <div className="clothes">
        {}
        {clothes
          // eslint-disable-next-line array-callback-return
          // .filter((value) => {
          //   if (search === "") {
          //     return value;
          //   } else if (
          //     value.title.toLowerCase().includes(search.toLowerCase) ||
          //     value.description.toLowerCase().includes(search.toLowerCase)
          //   ) {
          //     return value;
          //   } else {
          //     setSearch("");
          //   }
          // })
          .map((clothe) => (
            <Clothes
              key={clothe.title}
              title={clothe.title}
              image={clothe.image}
              description={clothe.description}
              category={clothe.category}
              price={clothe.price}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
