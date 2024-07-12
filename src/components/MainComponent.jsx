import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const MainComponent = () => {
    const [rockSongs, setRockSongs] = useState([]);
    const [popSongs, setPopSongs] = useState([]);
    const [hiphopSongs, setHiphopSongs] = useState([]);

    const artists = ["queen", "katyperry", "eminem"];


    useEffect(() => {
        const fetchSongs = (artistName, setSongs) => {
            fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setSongs(data.data.slice(0, 4));
                    console.log("Canzoni fetchate per", artistName, data.data);
                })
                .catch(error => {
                    console.error("Error fetching data", error);
                });
        };

        artists.forEach(artist => {
            if (artist === "queen") {
                fetchSongs(artist, setRockSongs);
            } else if (artist === "katyperry") {
                fetchSongs(artist, setPopSongs);
            } else if (artist === "eminem") {
                fetchSongs(artist, setHiphopSongs);
            }
        });

    }, []);

    return (
        <div className="offset-md-3 mainPage">
            <div className="row">
                <div className="col-12 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#" className='link-top'>TRENDING</a>
                    <a href="#" className='link-top'>PODCAST</a>
                    <a href="#" className='link-top'>MOODS AND GENRES</a>
                    <a href="#" className='link-top'>NEW RELEASES</a>
                    <a href="#" className='link-top'>DISCOVER</a>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                            {rockSongs.map((song) => (
                                <Col key={song.id} className="text-center">
                                    <img className="img-fluid" src={song.album.cover_medium} alt="song cover" />
                                    <p>Track: {song.title}
                                        <br />
                                        Artist: {song.artist.name}</p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                            {popSongs.map((song) => (
                                <Col key={song.id} className="text-center">
                                    <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                                    <p>
                                        Track: {song.title}
                                        <br />
                                        Artist: {song.artist.name}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                            {hiphopSongs.map((song) => (
                                <Col key={song.id} className="text-center">
                                    <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                                    <p>
                                        Track: {song.title}
                                        <br />
                                        Artist: {song.artist.name}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
