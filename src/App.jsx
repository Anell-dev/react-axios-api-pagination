import { CharactersContextProviders } from "./context/CharactersContext";
import { Characters } from "./components/Characters";

export const App = () => {
  return (
    <div className="container">
      <div className="alert alert-success text-center mt-2 fs-5 text-success">
        Rick & Morty API - Using contextApi of React.js
      </div>

      <CharactersContextProviders>
        <Characters />
      </CharactersContextProviders>
    </div>
  );
};
