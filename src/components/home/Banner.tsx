import { Container, Row, Col, ListGroup, Carousel } from 'react-bootstrap';
import COD2 from 'assets/images/COD2.jpg';
import COD from 'assets/images/COD.jpg';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={COD2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={COD} alt="second slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
