import { Card, Button } from "react-bootstrap";
import Imagen from "../assets/imagen_pelicula.webp";

const PeliculaGuardada = ({ pelicula, borrarPelicula }) => {
  return (
    <Card className="shadow-lg p-3 mb-5 text-bg-dark rounded">
      <img src={pelicula.imagen} alt="" className="card-img-top" />
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
