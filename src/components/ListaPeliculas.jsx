import { Row, Col } from "react-bootstrap";
import PeliculaGuardada from "./PeliculaGuardada";

const ListaPeliculas = () => {
  return (
    <div className="my-5">
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-4">
          <PeliculaGuardada></PeliculaGuardada>
        </Col> 
        <Col md={4} className="mb-4">
          <PeliculaGuardada></PeliculaGuardada>
        </Col>
        <Col md={4} className="mb-4">
          <PeliculaGuardada></PeliculaGuardada>
        </Col>
        
      </Row>
    </div>
  );
};

export default ListaPeliculas;
