
import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import MainComponent from './components/MainComponent';
import MySidebar from './components/MySidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Container fluid>
          <Row>
            <Col md={2} className="p-0">
              <MySidebar />
            </Col>
            <Col md={8} className="p-0">
              <MainComponent />

            </Col>
          </Row>

        </Container>
      </Provider>
    </>
  )
}

export default App
