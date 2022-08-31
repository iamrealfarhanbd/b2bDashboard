import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <Container>
      <h1>Instructor’s Dashboard</h1>
      <p>You need to Login first to view Dashboard</p>
      <div className="loginForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="linkDiv">
            <Link className="forgetPassword" to="/forget">
              Forget Password?{" "}
            </Link>
            <Link className="adminLink" to="/admin">
              Contact Admin
            </Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
