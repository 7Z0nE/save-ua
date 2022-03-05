import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Channels from "./pages/Channels";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import JoinITArmy from "./pages/JoinITArmy";
import Petitions from "./pages/Petitions";
import Volunteering from "./pages/Volunteering";
import WarCrimes from "./pages/WarCrimes";
import { useEffect } from "react";

const Header = () => (
	<Navbar className="Header" sticky="top" collapseOnSelect expand="md">
		<Container>
			<Navbar.Brand href="/" style={{ width: "120px", height: "60px", overflow: "hidden" }}>
				<img src="logo.png" width="120px" style={{ marginTop: "-30px" }} alt="Save Ukraine" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto bg-white">
					<Nav.Link className="px-3" href="#/">
						Home
					</Nav.Link>
					<Nav.Link className="px-3" href="#/donations">
						Donations
					</Nav.Link>
					<Nav.Link className="px-3" href="#/volunteering">
						Volunteering
					</Nav.Link>
					<Nav.Link className="px-3" href="#/channels">
						Telegram Channels
					</Nav.Link>
					<Nav.Link className="px-3" href="#/join">
						Join IT Army
					</Nav.Link>
					<Nav.Link className="px-3" href="https://standwithukraine.live/" target="_blank" rel="nofollow noopener noreferrer external">
						Protest
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

const Content = () => {
	const location = useLocation();

	useEffect(() => {
		console.log("location");
	}, [location]);

	return (
		<Container fluid="true" className="Content">
			<Routes>
				<Route path="donations" element={<Donations />} />
				<Route path="channels" element={<Channels />} />
				<Route path="volunteering" element={<Volunteering />} />
				<Route path="join" element={<JoinITArmy />} />
				<Route path="faq" element={<FAQ />} />
				<Route path="contact" element={<Contact />} />
				<Route path="warcrimes" element={<WarCrimes />} />
				<Route path="petitions" element={<Petitions />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</Container>
	);
};

const Footer = () => (
	<Container fluid="true" className="bg-dark">
		<Container>
			<Row className="align-items-center text-light">
				<Col className="py-5 px-3 px-md-5">
					<Row>
						<Col>
							<a className="text-light nodeco" href="#/">
								Home
							</a>
						</Col>
						<Col>
							<a className="text-light nodeco" href="https://standwithukraine.live/" target="_blank" rel="nofollow noopener noreferrer external">
								Protests
							</a>
						</Col>
						<Col>
							<a className="text-light nodeco" href="https://www.facebook.com/dosaveukraine" target="_blank" rel="nofollow noopener noreferrer external">
								Facebook
							</a>
						</Col>
					</Row>
					<Row>
						<Col>
							<a className="text-light nodeco" href="#/channels">
								Telegram Channels
							</a>
						</Col>
						<Col>
							<a className="text-light nodeco" href="#/donations">
								Donations
							</a>
						</Col>
						<Col>
							<a className="text-light nodeco" href="https://www.linkedin.com/company/do-save-ukraine/" target="_blank" rel="nofollow noopener noreferrer external">
								LinkedIn
							</a>
						</Col>
					</Row>
					<Row>
						<Col>
							<a className="text-light nodeco" href="#/join">
								Join IT Army
							</a>
						</Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</Col>
				<Col md="auto">
					<img width="200" src="logo_inverted.png" alt="Save Ukraine" />
				</Col>
			</Row>
			<Row>
				<Col>All rights reserve</Col>
				<Col>Cookie Policy</Col>
			</Row>
		</Container>
	</Container>
);

function App() {
	return (
		<>
			<Header />
			<Content />
			<Footer />
		</>
	);
}

export default App;
