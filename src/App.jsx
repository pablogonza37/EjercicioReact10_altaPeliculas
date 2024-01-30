import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import FormularioAltaPeliculas from "./components/FormularioAltaPeliculas";


function App() {
  return (
    <>
      <h1 className="display-2 text-center py-2 text-bg-dark">
        Alta de peliculas
      </h1>
      <Container className="mainPage">
      <FormularioAltaPeliculas></FormularioAltaPeliculas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
