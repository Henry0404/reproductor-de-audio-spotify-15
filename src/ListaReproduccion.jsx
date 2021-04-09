import React, { useState, useRef } from "react";
import { canciones } from "./canciones.js";

function ListaReproduccion() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [cancionUrl, setCancionUrl] = useState("");
  const audioRef = useRef();

  function reproducirCancion(cancion) {
    setReproduciendo(true);
    setCancionUrl(cancion.url);
    audioRef.current.play();
  }

  function pausarReproduccion() {
    setReproduciendo(false);
    audioRef.current.pause();
  }

  return (
    <div className="container bg-dark">
      <audio
        ref={audioRef}
        src={"https://assets.breatheco.de/apis/sound/" + cancionUrl}
      />
      <div className="card text-center bg-dark">
        <div className="card-header bg-dark text-white bg-dark">
          Lista de Reproducción
        </div>
        <ul className="list-group list-group-flush bg-dark">
          {canciones.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => reproducirCancion(item)}
                type="button"
                className="list-group-item list-group-item-action list-group-item-dark"
              >
                {item.name}
              </button>
            );
          })}
        </ul>
        <div className="container card-footer bg-dark">
          <button>
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          {reproduciendo === true ? (
            <button onClick={() => pausarReproduccion()}>
              <i className="fas fa-pause-circle"></i>
            </button>
          ) : (
            <button>
              <i className="fas fa-play-circle"></i>
            </button>
          )}
          <button>
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListaReproduccion;
