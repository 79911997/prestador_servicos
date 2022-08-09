import { Button, Container } from "react-bootstrap";

export default function Servicos() {
  return (
    <Container>
      <h3>Prestadores de Serviços</h3>
      <>
  <Button className="rounded-pill" variant="secondary">Faxina</Button>{' '}
  <Button className="rounded-pill" variant="secondary">Pedreiro</Button>{' '}
  <Button className="rounded-pill" variant="secondary">Pintor</Button>{' '}
  <Button className="rounded-pill" variant="secondary">Eletricista</Button>{' '}
  <Button className="rounded-pill" variant="secondary">Mecânico</Button>{' '}
      </>
</Container>
  );
}