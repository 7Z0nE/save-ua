import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './Layout.scss';

export const Section = (props) => (
	<Row className="mt-5">
		<Col>
			<h2 className="text-center mb-5">{props.title}</h2>
			<div className="Section">{props.children}</div>
		</Col>
	</Row>
);

export const LinkButton = (props) => (
	<a
		href={props.link}
		className="m-2 px-3 btn btn-primary fw-bold"
	>
		{props.title}
	</a>);


export const Subsection = (props) => {
	const website = props.link ? <a className="btn btn-primary" href={props.link}>Website</a> : null;
	return <div className="Subsection">
		<h3 className="fw-bold">{props.title}</h3>
		<p>{props.description}</p>
		<div className="mb-4">{website}</div>
		{props.children}
	</div>;
};

export const Expandables = (props) => {
	if (props.subsections?.length === 0) return null;
	return (
		<Accordion className="mb-4" alwaysOpen={true}>
			{props.sections.map((s, i) => <Accordion.Item eventKey={"" + i}>
				<Accordion.Header>{s.title}</Accordion.Header>
				<Accordion.Body>{s.content}</Accordion.Body>
			</Accordion.Item>)}
		</Accordion>
	);
};
