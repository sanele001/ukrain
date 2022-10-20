import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import russia from "../../public/russia.png";
import ukrn from "../../public/ukrn.jpg";

function Nav() {
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <Image
              src={russia}
              alt="Picture of the author"
              width={100}
              height={70}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <Image
              src={ukrn}
              alt="Picture of the author"
              width={100}
              height={70}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Col>
          <Col md={6}>
            <ul className="nav">
              <li className="success">About</li>
              <li>Donate</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nav;
