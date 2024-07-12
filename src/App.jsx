
import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import MainComponent from './components/MainComponent';
import MySidebar from './components/MySidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerComponent from './components/PlayerComponent';

function App() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <MySidebar />
          </Col>
          <Col md={8} className="p-0">
            <MainComponent />
            <PlayerComponent />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
