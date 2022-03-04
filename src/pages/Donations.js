import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import { data } from '../content/donations';

const Section = (props) => (<Row className="mt-5"><Col>
	<h1>{props.title}</h1>
	{props.children}
</Col></Row>);

const Subsection = (props) => (
	<div className='mt-3'>
		<h2>{props.title}</h2>
		<p>{props.description}</p>
		{props.children}
	</div>
);

const Expandables = (props) => {
	if (props.subsections?.length === 0) return null;
	return (
	<Accordion alwaysOpen={true}>
		{props.sections.map((s, i) => <Accordion.Item eventKey={"" + i}>
			<Accordion.Header>{s.title}</Accordion.Header>
			<Accordion.Body>{s.content}</Accordion.Body>
		</Accordion.Item>)}
	</Accordion>
		);
};

const Donations = () => (<>
	<Container className="pb-5">
		{data.map((section, i) => <Section key={i} title={section.title}>
			{section.subsections.map((subsection, i) => (
				<Subsection key={i} title={subsection.title} description={subsection.description} link={subsection.link}>
					<Expandables sections={subsection.expandableSubsections}/>
				</Subsection>))}
		</Section>)}
	</Container>
</>);
export default Donations;