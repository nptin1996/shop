import { Container, Row, Col } from "react-bootstrap";
import FooterItem from "./FooterItem";
import classes from "./Footer.module.css";

const DUMMY_FOOTER = [
  {
    title: "CUSTOMER SERVICES",
    data: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms & Conditions",
    ],
  },
  {
    title: "COMPANY",
    data: ["What We Do", "Available Services", "Latest Posts", "FAQS"],
  },
  {
    title: "SOCIAL MEDIA",
    data: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container fluid="md">
        <Row>
          {DUMMY_FOOTER.map((ele, i) => (
            <Col sm key={i}>
              <FooterItem title={ele.title} data={ele.data} />
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
