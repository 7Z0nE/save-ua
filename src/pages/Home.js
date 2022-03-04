import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const ImageCarousel = () => (
	<Carousel>
		<Carousel.Item>
			<div className='img1 d-block w-100' style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className='img2 d-block w-100' style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className='img3 d-block w-100' style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className='img4 d-block w-100' style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className='img5 d-block w-100' style={{ height: "400px" }}></div>
		</Carousel.Item>
	</Carousel>
);

const Home = () => {
	const navigate = useNavigate();
	const howToHelpRef = useRef();

	return (<>
		<Row className="ProtestImage mb-5">
			<Col className="order-1.order-md-2 BannerLeft">
				<Row>
					<Col className="BannerSave ps-1 bg-primary">
						<h1 className="BannerText text-white ml">SAVE</h1>
					</Col>
					<Col>
					</Col>
				</Row>
				<Row>
					<Col className="BannerUkraine">
						<h1 className="BannerText text-secondary ml">UKRAINE</h1>
					</Col>
					<Col >
					</Col>
				</Row>
				<Row className="bg-dark pt-5">
					<Col>
						<p className="Text text-white ml">
							Is an index page, that will provide updated information
							for you to help Ukraine! <span className="HashTag">#stopwar #standwithukraine</span>
						</p>
					</Col>
				</Row>
				<Row className="bg-dark mb-5 pb-5">
					<Col>
						<Button className="btn btn-secondary text-dark px-4 fw-bold ml" onClick={() => howToHelpRef.current.scrollIntoView()}>How can I help?</Button>
					</Col>
				</Row>
			</Col>
			<Col classNames="d-none d-md-block order-2.order-md-1"></Col>
		</Row>

		<Container fluid="md" className="mt-5">
			<Row className="align-items-center">
				<Col className="order-1.order-md-2 pt-5 pb-md-5 px-0" xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
					<ImageCarousel />
				</Col>
				<Col className="order-2.order-md-1 py-5" xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
					<Container>
						<h1 className="bolder text-primary mb-3">Russia is invading Ukraine!</h1>
						<p>
							The world will bear witness to innocent deaths, destruction of civilian infrastructure, and massive displacement inside the country and across Europe. It is not about the military only. It is about everyone.
						</p>
						<p>
							As destruction worsens and casualties mount during the invasion, people all over the world are looking for ways to help.
						</p>
					</Container>
				</Col>
			</Row>
		</Container>

		<Row ref={howToHelpRef}>
			<Col className="p-2 mt-md-5 bg-dark">
				<h1 className="BannerText text-secondary text-center">
					HOW CAN YOU HELP?
				</h1>
			</Col>
		</Row>

		<Container fluid="sm" className="my-5">
			<Row>
				<Col sm={12} md={6} className="py-5">
					<Container>
						<h1 className="bolder text-primary mb-3">Donation</h1>
						<p>
							Wars are expensive. Every single Euro, Dollar or Hryvnia helps!
							We provide you links to the most important channels for direct donations to the Ukrainians.
						</p>
						<Button className="btn-secondary" onClick={() => navigate('donations')}>How to Donate</Button>
					</Container>
				</Col>
				<Col sm={12} md={6} className="py-5">
					<Container>
						<h1 className="bolder text-primary mb-3">Protest</h1>
						<p>
							You are as upset as we are? It hurts you looking at the suffering of the Ukrainian population too? Then GET ON THE STREET! No online petition can ever be as effective as a large protest in your city.
						</p>
						<a className="btn btn-secondary" href="https://standwithukraine.live">Protest Info</a>
					</Container>
				</Col>
			</Row>
		</Container>
	</>
	);
};

export default Home;