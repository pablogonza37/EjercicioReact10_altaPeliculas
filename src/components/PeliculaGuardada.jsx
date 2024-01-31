import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const PeliculaGuardada = ({ pelicula, borrarPelicula }) => {
  return (
    <Card className="shadow-lg p-3 mb-5 text-bg-dark rounded">
      <Card.Img variant="top" src="./src/asset/imagen_pelicula.webp" />
      <Card.Body>
        <Card.Title>{pelicula.nombre}</Card.Title>
        <Card.Text className="shadow p-2 rounded descripcion">
          Descripcion: {pelicula.descripcion}
        </Card.Text>
        <Card.Text className="shadow p-2 rounded">
          Genero: {pelicula.genero}
        </Card.Text>
        <div className="text-end">
          <Button variant="danger" onClick={() => borrarPelicula(pelicula)}>
            {" "}
            Quitar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PeliculaGuardada;
