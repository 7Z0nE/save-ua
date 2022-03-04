import { data } from '../content/itarmy';
import { Section, Subsection } from '../components/Layout';
import Container from 'react-bootstrap/Container';

const JoinITArmy = () => (<>
	<Container>
		{data.map((section, i) => <Section key={i} title={section.title}>
			{section.subsections.map((subsection, i) => (
				<Subsection key={i} title={subsection.title}>
					{subsection.description}
				</Subsection>))}
		</Section>)}
	</Container>
</>);
export default JoinITArmy;