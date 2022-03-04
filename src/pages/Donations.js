import Container from 'react-bootstrap/Container';
import { Section, Subsection, Expandables } from '../components/Layout';

import { data } from '../content/donations';
console.log(data);
const Donations = () => (<>
	<Container className="pb-5">
		{data.map((section, i) => <Section key={i} title={section.title}>
			{section?.subsections?.map((subsection, i) => (
				<Subsection id={"" + i} key={i} title={subsection.title} description={subsection.description} link={subsection.link}>
					<Expandables sections={subsection.expandableSubsections} />
				</Subsection>))}
		</Section>)}
	</Container>
</>);
export default Donations;