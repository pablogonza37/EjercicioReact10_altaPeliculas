import { Card, Button } from "react-bootstrap";


const PeliculaGuardada = () => {
  return (
    <Card className="text-bg-dark">
      <Card.Img variant="top" src="./src/asset/imagen_pelicula.webp"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="text-end">
          <Button variant="danger">Quitar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PeliculaGuardada;
