import { useState, useRef } from "react";
import { canciones } from "./canciones.js";
import Controles from "./components/Controles";

function ListaReproduccion() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [indexActual, setIndexActual] = useState(0);
  let audioRef = useRef();

  const reproducirCancion = (indexCancion) => {
    let cancion = canciones[indexCancion];
    audioRef.src = `https://assets.breatheco.de/apis/sound/${cancion.url}`;
    setIndexActual(indexCancion);
    setReproduciendo(true);
  };

  const alternarReproduccion = () => {
    if (audioRef.paused) {
      audioRef.play();
      setReproduciendo(true);
    } else {
      audioRef.pause();
      setReproduciendo(false);
    }
  };

  const siguienteCancion = () => {
    let nuevoIndex;

    if (indexActual < canciones.length - 1) {
      nuevoIndex = indexActual + 1;
    } else {
      nuevoIndex = 0;
    }

    reproducirCancion(nuevoIndex);
  };

  const cancionAnterior = () => {
    let nuevoIndex;

    if (indexActual === 0) {
      nuevoIndex = canciones.length - 1;
    } else {
      nuevoIndex = indexActual - 1;
    }

    reproducirCancion(nuevoIndex);
  };

  return (
    <div className="container bg-dark">
      <div className="card text-center bg-dark">
        <div className="card-header bg-dark text-white bg-dark">
          Lista de Reproducción
          <audio
            className="audioControl"
            ref={(r) => (audioRef = r)}
            autoPlay
          />
        </div>

        <ul className="list-group list-group-flush bg-dark">
          {canciones.map((cancion, index) => {
            return (
              <button
                key={index}
                onClick={() => reproducirCancion(index)}
                type="button"
                className="list-group-item list-group-item-action list-group-item-dark"
              >
                {cancion.name}
              </button>
            );
          })}
        </ul>

        <Controles
          reproduciendo={reproduciendo}
          alternarReproduccion={alternarReproduccion}
          cancionAnterior={cancionAnterior}
          siguienteCancion={siguienteCancion}
        />
      </div>
    </div>
  );
}

export default ListaReproduccion;
