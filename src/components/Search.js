import Hero from "./Hero";
//TMDB API KEY 914ad3a63cb807a729153b29f3c9fe4a
//link:

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for...${keyword}`;
  return (
    <>
      <Hero text={title} />
      <h2>{searchResults}</h2>
    </>
  );
};
export default Search;
