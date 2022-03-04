import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { data } from '../content/channels';


const LinkButton = (props) => (
<a
	href={props.link}
	className="m-2 px-3 btn btn-primary fw-bold"
>
	{props.title}
</a>); 

const Section = (props) => (<Row className="mt-5"><Col>
	<h1>{props.title}</h1>
	{props.children}
</Col></Row>);

const Channels = () => (<>
	<Container className="pb-5">
		<Section title="Telegram Channels">
			{data.telegram.map((c, i) => <LinkButton key={i} {...c}/> )}
		</Section>
		<Section title="Twitter Channels">
			{data.twitter.map((c, i) => <LinkButton key={i} {...c}/> )}
		</Section>
	</Container>
</>);
export default Channels;