import { data } from "../content/volunteering";
import Container from "react-bootstrap/Container";
import { Section, Subsection } from "../components/Layout";

const Volunteering = () => (
	<>
		<Container>
			{data.map((section, i) => (
				<Section key={i} title={section.title}>
					{section.subsections.map((subsection, i) => (
						<Subsection key={i} title={subsection.title}>
							{subsection.description}
						</Subsection>
					))}
				</Section>
			))}
		</Container>
	</>
);
export default Volunteering;
