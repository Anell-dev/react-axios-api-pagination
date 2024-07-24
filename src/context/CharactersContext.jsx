import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CharactersContext = createContext();

export const CharactersContextProviders = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const { results } = response.data;
        const { count, pages, next, prev } = response.data.info;
        setCharacters(results);
        setTotalResults(count);
        setTotalPages(pages);
        setPrevPage(prev);
        setNextPage(next);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const goToNext = () => {
    if (nextPage) {
      fetchData(nextPage);
      setActualPage(actualPage + 1);
    }
  };

  const goToPrev = () => {
    if (prevPage) {
      fetchData(prevPage);
      setActualPage(actualPage - 1);
    }
  };

  const goToPage = (page) => {
    const pageUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
    fetchData(pageUrl);
    setActualPage(page);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        totalPages,
        actualPage,
        prevPage,
        nextPage,
        goToNext,
        goToPrev,
        goToPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
