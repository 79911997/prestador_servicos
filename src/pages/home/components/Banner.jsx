import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";



export default function Banner() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img src={img1}
      className="d-block w-100"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Prestador na sua cidade</h3>
      <p>Aqui você encontra um prestador perto de você!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img2}
      className="d-block w-100"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Divulgue seu trabalho aqui</h3>
      <p>Seja um prestador Proserv</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img3}
      className="d-block w-100"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Encontre aqui os melhores proficionais</h3>
      <p>Precisa de reparos na sua casa? Entre em contato com um dos nossos prestadores!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}
