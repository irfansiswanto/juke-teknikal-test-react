import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EmployeeList from "./components/list.component";
import CreateEmployee from "./components/create.component";

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Juke Teknikal Test
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/create" element={<CreateEmployee />} />
            <Route exact path='/' element={<EmployeeList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
