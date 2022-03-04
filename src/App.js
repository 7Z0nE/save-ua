import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './pages/Home';
import Nav from 'react-bootstrap/Nav';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import JoinITArmy from './pages/JoinITArmy';
import Petitions from './pages/Petitions';
import Channels from './pages/Channels';
import WarCrimes from './pages/WarCrimes';
import Volunteering from './pages/Volunteering';


const Header = () => (
  <Navbar className="Header" sticky="top" collapseOnSelect expand="md">
    <Container>
    <Navbar.Brand href="/" style={{width:"120px", height: "60px", overflow: "hidden"}} >
      <img src="logo.png" width="120px" style={{marginTop: "-30px"}}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto bg-white">
        <Nav.Link className="px-3" href="/">Home</Nav.Link>
        <Nav.Link className="px-3" href="donations">Donations</Nav.Link>
        <Nav.Link className="px-3" href="volunteering">Volunteering</Nav.Link>
        <Nav.Link className="px-3" href="channels">Telegram Channels</Nav.Link>
        <Nav.Link className="px-3" href="Join">Join IT Army</Nav.Link>
        <Nav.Link className="px-3" href="https://standwithukraine.live/">Protest</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );

const Content = () => (
  <Container fluid="true" className="Content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="donations" element={<Donations/>}/>
      <Route path="channels" element={<Channels/>}/>
      <Route path="volunteering" element={<Volunteering/>}/>
      <Route path="join" element={<JoinITArmy/>}/>
      <Route path="faq" element={<FAQ/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="warcrimes" element={<WarCrimes/>}/>
      <Route path="petitions" element={<Petitions/>}/>
    </Routes>
  </Container>
);

const Footer = () => (
<Container fluid="true" className="bg-dark">
  <Container>
    <Row className="align-items-center text-light">
      <Col className="p-5">
        <Row>
          <Col>Home</Col>
          <Col>Protests</Col>
          <Col>FAQ</Col>
        </Row>
        <Row>
          <Col>Donations</Col>
          <Col>War Crimes</Col>
          <Col>Telegram Channels</Col>
        </Row>
        <Row>
          <Col>Petitions</Col>
          <Col>Contact For Inquiries</Col>
          <Col></Col>
        </Row>
      </Col>
      <Col md="auto">
        <img width="200" src="logo_inverted.png" />
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
