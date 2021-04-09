import React, { useState } from "react";
import { canciones } from "./canciones.js";

function ListaReproduccion() {
  const [reproduciendo, setReproduciendo] = useState(false);

  function reproducirCancion(cancion) {
    setReproduciendo(true);
  }

  function pausarReproduccion() {
    setReproduciendo(false);
  }

  return (
    <div className="container bg-dark">
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
