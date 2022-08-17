import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./components/Banner";
import Pesquisa from "./components/Pesquisa";
import PrestadorLista from "./components/PrestadorLista";
import Servicos from "./components/Servicos";

export default function Home() {
  const [prestadores, setPrestadores] = useState([]);

  useEffect(() => {
    setPrestadores([
      {
        id: 1,
        nome: "Mariazinha da Silva",
        descricao: "Corte e costura",
        experiencia: "2 anos de experiência"
      },
      {
        id: 2,
        nome: "Luiza",
        descricao: "Faxineira e cozinheira diária e mensal...",
        experiencia: "2 anos de experiência"
      },
      {
        id: 3,
        nome: "Jão da Silva",
        descricao: "Eletricista",
        experiencia: "2 anos de experiência"
      }
    ])
  }, []);

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
        <PrestadorLista prestadores={prestadores} />
      </Row>
    </Container>
  );
}
