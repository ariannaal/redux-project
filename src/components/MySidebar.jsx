
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from 'react-redux';
import { searchSongs } from '../redux/actions/actions';
import { useState } from 'react';

const MySidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchSongs(searchQuery));
    }

    const handleSubmit = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <Navbar bg="black" variant="dark" expand="md" className="flex-md-column p-3 aside-bar align-items-start">
            <Navbar.Brand href="/">
                <img
                    src="./assets/logo/logo.png"
                    alt="Spotify Logo"
                    width="131"
                    height="40"
                    className='logo-spotify'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="sidebarContent" />
            <Navbar.Collapse id="sidebarContent" className='align-items-baseline'>
                <Nav className="flex-md-column">
                    <Nav.Link href="/" className="nav-link">
                        <i className="bi bi-house-door-fill me-2"></i>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/" className="nav-link">
                        <i className="bi bi-book-fill me-2"></i>
                        Your Library
                    </Nav.Link>
                    <li className="nav-item mt-4">
                        <Form className="input-group" onSubmit={handleSearch}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                className="form-control"
                                value={searchQuery}
                                onChange={handleSubmit}
                            />
                            <Button variant="outline-light" type="submit">
                                GO
                            </Button>
                        </Form>
                    </li>
                </Nav>
            </Navbar.Collapse>
            <div className="d-flex flex-column mt-4 align-items-center w-100">
                <Button variant="light" className="mb-2 rounded-pill signup-button w-75">Sign Up</Button>
                <Button variant="outline-light" className="mb-2 rounded-pill w-75">Login</Button>
                <div className="mt-2">
                    <a href="#" className="text-secondary me-2">
                        Cookie Policy
                    </a>
                    |
                    <a href="#" className="text-secondary ms-2">
                        Privacy
                    </a>
                </div>
            </div>
        </Navbar>
    );
};

export default MySidebar;