function Controles({
  reproduciendo,
  alternarReproduccion,
  cancionAnterior,
  siguienteCancion,
}) {
  return (
    <div className="container card-footer bg-dark">
      <button onClick={() => cancionAnterior()}>
        <i className="fas fa-arrow-alt-circle-left"></i>
      </button>
      {reproduciendo ? (
        <button onClick={() => alternarReproduccion()}>
          <i className="fas fa-pause-circle"></i>
        </button>
      ) : (
        <button onClick={() => alternarReproduccion()}>
          <i className="fas fa-play-circle"></i>
        </button>
      )}
      <button onClick={() => siguienteCancion()}>
        <i className="fas fa-arrow-alt-circle-right"></i>
      </button>
    </div>
  );
}

export default Controles;
