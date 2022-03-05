import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../content/channels";
import { Section, LinkButton } from "../components/Layout";

const Channels = () => (
	<>
		<Container className="pb-5">
			<Section title="Telegram Channels" style={{ gap: "0" }}>
				{data.telegram.map((c, i) => (
					<LinkButton key={i} {...c} />
				))}
			</Section>
			<Section title="Twitter Channels" style={{ gap: "0" }}>
				{data.twitter.map((c, i) => (
					<LinkButton key={i} {...c} />
				))}
			</Section>
		</Container>
	</>
);
export default Channels;
