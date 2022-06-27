import { Button, Container } from "react-bootstrap";

export default function Servicos() {
  return (
    <Container>
      <h3>Prestadores de Serviços</h3>
      <>
  <Button variant="primary">Faxina</Button>{' '}
  <Button variant="secondary">Pedreiro</Button>{' '}
  <Button variant="success">Pintor</Button>{' '}
  <Button variant="warning">Eletricista</Button>{' '}
  <Button variant="danger">Mecânico</Button>{' '}
  
</>

</Container>
  );
}