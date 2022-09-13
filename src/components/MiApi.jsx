import { useEffect, useState } from "react";
import Search from "./Search";

const MiApi = () => {
  const [info, setInfo] = useState([]);

  const characters = async () => {
    const url = "https://hp-api.herokuapp.com/api/characters/";
    const response = await fetch(url);
    const data = await response.json();

    setInfo(data);
  };

  useEffect(() => {
    characters();
  }, []);

  return (
    <div>
      <Search info={info} />
      <div className="container-button">
        <button
          className="btn-organize"
          onClick={() => {
            const sortedList = [...info].sort((a, b) =>
              a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            );
            setInfo(sortedList);
          }}
        >
          Ascendente A-Z
        </button>

        <button
          className="btn-organize"
          onClick={() => {
            const sortedList = [...info].sort((a, b) =>
              a.name > b.name ? -1 : a.name < b.name ? 1 : 0
            );
            setInfo(sortedList);
          }}
        >
          Descendente Z-A
        </button>
      
        
      </div>

      <div className="container-card">
        {info
          .filter((e) => e.image !== "")
          .map((e) => (
            <div className="card" key={e.name}>
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
  );
};

export default MiApi;
