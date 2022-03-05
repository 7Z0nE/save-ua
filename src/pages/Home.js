import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { LinkButton, ExternalLinkButton } from "../components/Layout";

import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ImageCarousel = () => (
	<Carousel>
		<Carousel.Item>
			<div className="img1 d-block w-100" style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="img2 d-block w-100" style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="img3 d-block w-100" style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="img4 d-block w-100" style={{ height: "400px" }}></div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="img5 d-block w-100" style={{ height: "400px" }}></div>
		</Carousel.Item>
	</Carousel>
);

const Section = ({ children, className, title, description, btnLink, btnText, ...props }) => {
	return (<Container>
		<h1 className="bolder text-primary mb-3">{title}</h1>
		{children}
		{btnLink && btnText ? <LinkButton link={btnLink}>{btnText}</LinkButton> : null}
	</Container>);
};

const Home = () => {
	const howToHelpRef = useRef();

	return (
		<>
			<Row className="ProtestImage mb-5">
				<Col className="order-1.order-md-2 BannerLeft">
					<Row>
						<Col className="BannerSave ps-1 bg-primary">
							<h1 className="BannerText text-white ml">SAVE</h1>
						</Col>
						<Col style={{ flexGrow: 8 }}></Col>
					</Row>
					<Row>
						<Col className="BannerUkraine">
							<h1 className="BannerText text-secondary ml">UKRAINE</h1>
						</Col>
						<Col></Col>
					</Row>
					<Row className="bg-dark pt-5">
						<Col>
							<p className="Text text-white ml">
								A webpage that will provide you with the latest information for you to help Ukrainians <span className="HashTag">#stopwar #standwithukraine</span>
							</p>
						</Col>
					</Row>
					<Row className="bg-dark mb-5 pb-5">
						<Col>
							<Button className="btn btn-light text-dark mt-3 px-5 py-2 fw-bold ml" onClick={() => howToHelpRef.current.scrollIntoView()}>
								How can I help?
							</Button>
						</Col>
					</Row>
				</Col>
				<Col className="d-none d-md-block order-2.order-md-1"></Col>
			</Row>

			<Container fluid="md" className="mt-5">
				<Row className="align-items-center">
					<Col className="order-1.order-md-2 pt-5 pb-md-5 px-0" xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
						<ImageCarousel />
					</Col>
					<Col className="order-2.order-md-1 py-5" xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
						<Section title="Russia is invading Ukraine!">
							<p>
								The world is witnessing innocent deaths, destruction of civilian infrastructure, and massive displacement inside the country and across Europe. It is not about the military only. It is about every person. As destruction worsens and casualties mount during the invasion, people are looking for ways to help.
							</p>
							<p>
								We have to stop Putin and prevent worldwide war 3.0.
							</p>
						</Section>
					</Col>
				</Row>
			</Container>

			<Row ref={howToHelpRef}>
				<Col className="p-2 mt-md-5 bg-secondary">
					<h1 className="BannerText text-dark text-center">HOW CAN YOU HELP?</h1>
				</Col>
			</Row>

			<Container fluid="sm" className="my-5">
				<Row>
					<Col sm={12} md={6} className="py-5">
						<Section title="Donation" btnLink="#/donations" btnText="Donate Now">
							<p>
								Every single Euro, Dollar, or Hryvnia helps stop Russian aggression. We provide you with the official links to the most critical channels &amp; charity organizations in need of direct donations to the Ukrainian people.
							</p>
						</Section>
					</Col>
					<Col sm={12} md={6} className="py-5">
						<Section
							title="Protest"
						>
							<p>
								It hurts you to look at the suffering of the Ukrainian population. But your voice can help. Get on the streets! No online petition can ever be as effective as a protest. Find it live happening in your city here.
							</p>
							<ExternalLinkButton link="https://standwithukraine.live">Find A Protest</ExternalLinkButton>

						</Section>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} className="py-5">
						<Section
							title="Join the IT Army"
							btnText="Join Now"
							btnLink="#/join"
						>
							<p>
								You don’t have to hold a weapon to be a soldier. Join our Digital Army and be on the first line of defence against Russian crimes. You don’t have to be an exact professional, we welcome everyone, who has a device and motivation to stop the agressor.
							</p>
						</Section>
					</Col>
					<Col sm={12} md={6} className="py-5">
						<Section
							title="Volunteering"
							btnText="Volunteer Now"
							btnLink="#/volunteering"
						>
							<p>
								If you want to deal with the humanitarian crisis and consequences of a brutal invasion by the Russian Federation, there is a list of needs for Ukrainian army and civilian people: host refugees, bring humanitarian aids &amp; send equipment to our warehouses across Europe and Americas.
							</p>
						</Section>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
