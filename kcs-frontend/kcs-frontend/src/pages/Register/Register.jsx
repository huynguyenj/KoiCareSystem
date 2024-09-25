// import React from 'react'
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../data/userService";
import Footer from "../../components/Footer/Footer";
function Login() {
      const [userName, setUserName] = useState("");
      const [password,setPassword] = useState("");
      const [email,setEmail] = useState("");
      const [phone,setPhone] = useState("");
      const [status,setStatus] = useState(true)
      const navigator = useNavigate();
      function changePage(){
            navigator('/login')
      }
       async function handleSubmit(event) {
        event.preventDefault();
        const userInfo = {
          userName: userName,
          password: password,
          phone: phone,
          email: email,
          status: status
        }
        await registerUser(userInfo);
       }
        async function registerUser(userInfo) {
            await register(userInfo).then((res)=>{  
            alert("Register successfully")
            console.log(res.data.result)
          }).catch(()=>alert("Register fail! Please try again with another account or email, user name"))   
        }
      
        return (
          <div className="login-page">
            <img className="bg-image" src="/BG.jpg" alt="" />
            <Container className="d-flex justify-content-center align-items-center login-container">
              <Row>
                <Col>
                  <div
                    className="login-box p-4"
                    style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
                  >
                    <div className="d-flex justify-content-between mb-3">
                      <Button
                        variant="danger"
                        className="w-50"
                        style={{
                          marginRight: "20px",
                          fontFamily: "JetBrains Mono",
                        }}
                      >
                        Đăng Ký
                      </Button>
                      <Button
                        style={{ fontFamily: "JetBrains Mono" }}
                        variant="light"
                        className="w-50"
                        onClick={changePage}
                      >
                        Đăng Nhập
                      </Button>
                    </div>
                    <Form
                      onSubmit={handleSubmit}
                      style={{ fontFamily: "JetBrains Mono" }}
                    >
                      <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Control
                          style={{ fontFamily: "JetBrains Mono" }}
                          type="text"
                          placeholder="Tên đăng nhập"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control
                          style={{ fontFamily: "JetBrains Mono" }}
                          type="password"
                          placeholder="Mật khẩu"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Control
                          style={{ fontFamily: "JetBrains Mono" }}
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Control
                          style={{ fontFamily: "JetBrains Mono" }}
                          type="number"
                          placeholder="Số điện thoại"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                      <div className="text-end mb-3">
                        <a
                          className="form-link"
                          style={{
                            color: "black",
                            fontSize: "18px",
                            fontFamily: "JetBrains Mono",
                          }}
                          href="#"
                        >
                          Quên mật khẩu?
                        </a>
                      </div>
                      <Button variant="primary" type="submit" className="w-100">
                        Đăng ký
                      </Button>
                    </Form>
                    <p
                      className="mt-3 text-center"
                      style={{ fontFamily: "JetBrains Mono" }}
                    >
                      Bạn có tài khoản rồi? Hãy{" "}
                      <span>
                        {" "}
                        <a
                          style={{ fontFamily: "JetBrains Mono" }}
                          href="#"
                          className="form-link"
                          onClick={changePage}
                        >
                          Đăng nhập
                        </a>{" "}
                      </span>{" "}
                      trước khi đăng ký.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }

export default Login;