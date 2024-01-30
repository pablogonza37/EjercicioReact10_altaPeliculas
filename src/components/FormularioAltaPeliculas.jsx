import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioAltaPeliculas = () => {
  return (
    <section>
      <Form className="text-white p-4 form my-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="email" placeholder="Nombre de peliculo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Agregue una descripcion"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Genero:</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Selecione el genero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <div className="text-center mt-5">
          <Button variant="success" className="w-50" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default FormularioAltaPeliculas;
