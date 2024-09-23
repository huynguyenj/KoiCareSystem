// import React from 'react'
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
function Register() {
  const navigator = useNavigate();
  function changePage() {
    navigator("/login");
  }
  return (
    <div className="register-page">
      <img className="bg-image" src="/BG.png" alt="" />
      <Container className="d-flex justify-content-center align-items-center register-container">
        <Row>
          <Col>
            <div
              className="register-box p-4"
              style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
            >
              <div className="d-flex justify-content-between mb-3">
                <Button
                  variant="danger"
                  className="w-50"
                  style={{ marginRight: "20px" }}
                >
                  Đăng Ký
                </Button>
                <Button variant="light" className="w-50"
                onClick={changePage}>
                  Đăng Nhập
                </Button>
              </div>
              <Form>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Control type="text" placeholder="Tên đăng nhập" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formPhonenumbner" className="mb-3">
                  <Form.Control type="" placeholder="Số điện thoại" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Đăng ký
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register