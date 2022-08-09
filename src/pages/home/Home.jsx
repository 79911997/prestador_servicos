import { Col, Container, Row } from "react-bootstrap";
import Banner from "./components/Banner";
import Pesquisa from "./components/Pesquisa";
import Servicos from "./components/Servicos";
import Prestador1 from "./components/Prestador1";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Procure um prestador na sua cidade: </h3>
        </Col>
        <Col>
          <Pesquisa />
        </Col>
      </Row>

      <Row>
        <Banner />
        <Servicos />
        <Prestador1 />
      </Row>
    </Container>
  );
}
