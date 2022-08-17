import { useEffect, useContext, useState } from "react";
import { Col, Form, Row, Button} from "react-bootstrap";
import { Link} from "react-router-dom";

export default function UsuarioForm() {
    
const { create } = useContext()
const [firstname, setFirstname] = useState();
const [lastname, setLastname] = useState();
const [phone, setPhone] = useState();
const [email, setEmail] = useState();
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [street, setStreet] = useState();
const [number, setNumber] = useState();
const [city, setCity] = useState();
const [zipcode, setZipcode] = useState();
const [prestador, setprestador] = useState();

const submit = (event) => {
  event.preventDefault();
  create({
    email,
    username,
    password,
    name: {
      firstname,
      lastname,
    }
  });
}

return (
  <div className="ClienteForm">
    <h3>Novo Usuário</h3>
    <Form onSubmit={submit}>
      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Control placeholder="Nome" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Control placeholder="Sobrenome" value={lastname} onChange={(event) => setLastname(event.target.value)} />
        </Form.Group>
      </Row>
      <h4>Dados de contato</h4>
      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Control placeholder="Telefone" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>
      </Row>
      <Row>
        <Row>
        <Form.Group as={Col} className="mb-3">
        <Form.Control placeholder="CNPJ" value={prestador} onChange={(event) => setStreet(event.target.value)} />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
        <Form.Control placeholder="Incrisão" value={prestador} onChange={(event) => setStreet(event.target.value)} />
        </Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-3">
        <Form.Control placeholder="Descrisão" value={prestador} onChange={(event) => setStreet(event.target.value)} />
        </Form.Group>
        </Row>
        
      <h4>Dados de acesso</h4>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Usuário" value={username} onChange={(event) => setUsername(event.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      
      <h4>Endereço</h4>
      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Control placeholder="Endereço" value={street} onChange={(event) => setStreet(event.target.value)} />
        </Form.Group>
        <Form.Group as={Col} md={3} className="mb-3">
          <Form.Control placeholder="Número" value={number} onChange={(event) => setNumber(event.target.value)}/>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md={7} className="mb-3">
          <Form.Control placeholder="Cidade" value={city} onChange={(event) => setCity(event.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} md={5} className="mb-3">
          <Form.Control placeholder="CEP" value={zipcode} onChange={(event) => setZipcode(event.target.value)}/>
        </Form.Group>
        </Row>
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
    </Form>

    </div>
  );
}
