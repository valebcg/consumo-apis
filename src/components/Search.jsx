import { useState } from "react";

const Search = ({ info}) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const searchCharacters = (e) => {
    e.preventDefault();
    if(search === ""){
      alert("Ingresa Algún Personaje")
     return;
    }


    const arrayResult = info
      .filter((e) => e.image !== "")
      .filter((e) => e.name.toLowerCase().includes(search));
    setResult(arrayResult);
  };

  return (
    <div className="seeker">
      <div className="search">
        <h4 className="character-title">Ingrese un Personaje de la saga: </h4>
        <form onSubmit={searchCharacters}>
          <input
            type="text"
            placeholder="Buscar"
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button type="submit">Buscar</button>
          <a href="https://valebcg.github.io/consumo-apis/">Volver</a>
        </form>

        <div className="container-card">
          <div>
            {result.length > 0 ? <h1>Resultado: </h1> : null}
            {result.map((e) => (
              <div className="card-result" key={e.name}>
                <img className="image-card" src={e.image} alt="" />
                <div className="text-card">
                  <h3 className="name">Nombre: {e.name}</h3>
                  <h4 className={e.house}>Casa: {e.house}</h4>
                  <h5 className="name">Actor: {e.actor}</h5>
                  
                </div>
              </div>
                  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
