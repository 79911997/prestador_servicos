import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import img4 from "../../../assets/img/4.jpg";

export default function PrestadorLista({ prestadores }) {
  return (
    <div>
      <Row>
        {prestadores.map((prestador) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                  <Card.Title>{prestador.nome}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </ListGroupItem>
                <Card.Text>
                  <p>
                    <i>Faxineira e cozinheira diária e mensal...</i>
                  </p>
                </Card.Text>
                <ListGroupItem>2 anos de experiência</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button
                  className="btn btn-secondary btn-sm disabled"
                  variant="primary"
                >
                  Saiba mais
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
