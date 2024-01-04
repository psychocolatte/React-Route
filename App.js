import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, "is the searchtext");
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=914ad3a63cb807a729153b29f3c9fe4a&query=${searchText}&include_adult=true&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSearchResults(json.results);
      });
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
