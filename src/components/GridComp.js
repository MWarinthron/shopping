import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function GridComp() {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col className='IconGrid'>
            <img src='path/to/icon.png' alt='Icon' />
          </Col>
          <Col className='LogoGrid'>
            <img src='path/to/logo.png' alt='Logo' />
          </Col>
          <Col className='BlankGrid'>
            {/* ช่องว่างหรือเนื้อหาอื่น */}
          </Col>
          <Col className='SearchGrid'>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
          </Col>
          <Col className='OtherGrid'>
            {/* เนื้อหาอื่น */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GridComp;
