import { Col, Form, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ServicoForm() {
    const { create } = useEffect();
    const [empresa, setempresa] = useState();
    const [cnpj, setcnpj] = useState();
    const [descrisao, setdescrisao] = useState();
    const [tiposerv, settiposerv] = useState();

    const submit = (event) => {
        event.preventDefault();
        create({
          empresa,
          cnpj,
         descrisao,
         tiposerv
        });
      }
  return (
    <div>
        
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Control
              placeholder="Empresa"
              value={empresa}
              onChange={(event) => setempresa(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Control
              placeholder="CNPJ"
              value={cnpj}
              onChange={(event) => setcnpj(event.target.value)}
            />
          </Form.Group>
          <Row>
          <Col>
              <Button as={Link} to="/" variant="primary" type="submit" value="cancelar">
              Cancelar
              </Button>
          </Col>
          <Col>
              <Button variant="primary" type="submit" value="cadastrar">
              Cadastrar
              </Button>
          </Col>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
