import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = {
	telegram: [
		{title: 'Ukriane NOW [English]', link: 'https://t.me/ukrainenowenglish'},
		{title: 'Ukriane NOW [Spanish]', link: 'https://t.me/UkraineNowSpanish'},
		{title: 'Ukriane NOW [Italian]', link: 'https://t.me/UkraineNowItalian'},
		{title: 'Ukriane NOW [German]', link: 'https://t.me/UkraineNowGerman'},
		{title: 'Ukriane NOW [Polish]', link: 'https://t.me/UkraineNowPoland'},
		{title: 'Verkhovna Rada of Ukraine [Eng]', link: 'https://t.me/verkhovnaradaofukrainehttps://t.me/ukrainenowenglish'},
	],
	twitter: [
		{title: 'Ministry of Foreign Affairs of Ikriane', link: 'https://twitter.com/MFA_Ukraine'},
		{title: 'President of Ukraine', link: 'https://twitter.com/ZelenskyyUa'},
		{title: 'Ambassador of the EU to Ukraine', link: 'https://twitter.com/MattiMaasikas'},
	],
}

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