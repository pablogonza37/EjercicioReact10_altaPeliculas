import { Row, Col } from "react-bootstrap";
import PeliculaGuardada from "./PeliculaGuardada";
import { useState, useEffect } from "react";

const ListaPeliculas = ({ peliculas, borrarPelicula }) => {
  const [segundoTitulo, setSegundoTitulo] = useState("");

  const cambiarTitulo = () => {
    if (peliculas.length === 0) {
      setSegundoTitulo("No hay Peliculas");
    } else {
      setSegundoTitulo("Administrar Peliculas");
    }
  };

  useEffect(() => {
    cambiarTitulo();
  });

  return (
    <div className="my-5">
      <h6 className="h2 display-5 text-white my-4 py-3">{segundoTitulo}</h6>
      <Row className="d-flex justify-content-center">
        {peliculas.map((pelicula, posicion) => (
          <Col md={4} className="mb-4" key={posicion}>
            <PeliculaGuardada
              pelicula={pelicula}
              borrarPelicula={borrarPelicula}
            ></PeliculaGuardada>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListaPeliculas;
