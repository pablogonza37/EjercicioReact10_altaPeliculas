import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaPeliculas from "./ListaPeliculas";
import { useState } from "react";

const FormularioAltaPeliculas = () => {
  const [pelicula, setPelicula] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const [peliculas, setPeliculas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeliculas((prevState) => [...prevState, pelicula]);
      setPelicula({ nombre: "",
      descripcion: "",
      genero: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPelicula((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const borrarPelicula = (nombrePelicula) => {
    const indicePelicula = peliculas.findIndex((pelicula) => pelicula === nombrePelicula);
    if (indicePelicula !== -1) {
      const nuevasPeliculas = [
        ...peliculas.slice(0, indicePelicula),
        ...peliculas.slice(indicePelicula + 1),
      ];
      setPeliculas(nuevasPeliculas);
    }
  };

  return (
    <section>
      <Form className="text-white p-4 form my-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de pelicula"
            name="nombre"
            value={pelicula.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Agregue una descripcion"
            name="descripcion"
            value={pelicula.descripcion}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Genero:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="genero"
            value={pelicula.genero}
            onChange={handleChange}
          >
            <option>Seleccione un genero</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Accion">Accion</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Terror">Terror</option>
            <option value="Romantico">Romantico</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
        </Form.Group>
        <div className="text-center mt-5">
          <Button variant="success" className="w-50" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
      <ListaPeliculas peliculas={peliculas} borrarPelicula={borrarPelicula}></ListaPeliculas>
    </section>
  );
};

export default FormularioAltaPeliculas;
