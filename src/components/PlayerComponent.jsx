
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import shuffleIcon from '../../public/assets/playerbuttons/shuffle.png';
import prevIcon from '../../public/assets/playerbuttons/prev.png';
import playIcon from '../../public/assets/playerbuttons/play.png';
import nextIcon from '../../public/assets/playerbuttons/next.png';
import repeatIcon from '../../public/assets/playerbuttons/repeat.png';

const PlayerComponent = () => {
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <Container fluid>
                <Row className="h-100">
                    <Col lg={10} className="offset-lg-2">
                        <Row className="h-100 flex-column justify-content-center align-items-center">
                            <Col xs={6} md={4} className="playerControls">
                                <div className="icons-player">
                                    <a href="#" className="d-flex align-items-center">
                                        <img src={shuffleIcon} alt="shuffle" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center">
                                        <img src={prevIcon} alt="prev" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center">
                                        <img src={playIcon} alt="play" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center">
                                        <img src={nextIcon} alt="next" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center">
                                        <img src={repeatIcon} alt="repeat" />
                                    </a>
                                </div>
                                <div className="progress mt-3">
                                    <ProgressBar now={60} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlayerComponent;