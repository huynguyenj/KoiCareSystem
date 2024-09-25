// Login.jsx
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../data/userService";
import "./Login.css";
import Footer from "../../components/Footer/Footer";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  function changePage() {
    navigator("/register");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userInfo = {
      userName: userName,
      password: password,
    };

    // Call the login API function
    await loginUser(userInfo);
  }

  async function loginUser(userInfo) {
    await login(userInfo)
      .then(() => {
        alert("Login successfully!");
        navigator("/");
      })
      .catch(() => {
        alert("Your username or password is incorrect! Please try again.");
      });
  }

  return (
    <div className="login-page">
      <img className="bg-image" src="/BG.jpg" alt="Background" />
      <Container className="d-flex justify-content-center align-items-center login-container">
        <Row>
          <Col>
            <div className="login-box p-4">
              <div className="d-flex justify-content-between mb-3">
                <Button
                  variant="light"
                  className="w-50"
                  style={{ marginRight: "20px" }}
                  onClick={changePage}
                >
                  Đăng Ký
                </Button>
                <Button variant="danger" className="w-50">
                  Đăng Nhập
                </Button>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="text-end mb-3">
                  <a className="form-link" style={{ color: "black", fontSize: "18px" }} href="#">
                    Quên mật khẩu?
                  </a>
                </div>
                <Button variant="primary" type="submit" className="w-100">
                  Đăng nhập
                </Button>
              </Form>
              <p className="mt-3 text-center">
                Bạn chưa có tài khoản? Hãy{" "}
                <a href="#" className="form-link" onClick={changePage}>
                  Đăng ký
                </a>{" "}
                trước khi đăng nhập.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
