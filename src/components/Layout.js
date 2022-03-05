import classNames from "classnames";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Layout.scss";

export const Section = ({ children, title, className, style, ...props }) => (
	<Row className={classNames("mt-5", className)}>
		<Col>
			{title ? <h2 className="text-center mb-5">{title}</h2> : null}
			<div className="Section" style={style}>
				{children}
			</div>
		</Col>
	</Row>
);

export const LinkButton = ({ children, link, ...props }) => (
	<a href={link} style={{ minWidth: "200px" }} className="text-center fw-bold m-2 px-4 py-2 btn btn-secondary" {...props}>
		{children}
	</a>
);

export const ExternalLinkButton = ({ title, link, children, ...props }) => (
	<LinkButton target="_blank" rel="nofollow noopener noreferrer external" link={link} {...props}>{children}</LinkButton>
);

export const Subsection = (props) => {
	const website = props.link ? (
		<a className="btn btn-primary" href={props.link}>
			Website
		</a>
	) : null;
	return (
		<div className="Subsection">
			<h3 className="fw-bold">{props.title}</h3>
			<p>{props.description}</p>
			<div className="mb-4">{website}</div>
			{props.children}
		</div>
	);
};

export const Expandables = (props) => {
	if (props.subsections?.length === 0) return null;
	return (
		<Accordion className="mb-4" alwaysOpen={true}>
			{props?.sections?.map((s, i) => (
				<Accordion.Item eventKey={"" + i}>
					<Accordion.Header>{s.title}</Accordion.Header>
					<Accordion.Body>{s.content}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
};
