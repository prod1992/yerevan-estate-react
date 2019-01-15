import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import YeCard from "./components/YeCard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md="4" lg="3">
            <YeCard />
          </Col>
          <Col md="4" lg="3">
            <YeCard />
          </Col>
          <Col md="4" lg="3">
            <YeCard />
          </Col>
          <Col md="4" lg="3">
            <YeCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
