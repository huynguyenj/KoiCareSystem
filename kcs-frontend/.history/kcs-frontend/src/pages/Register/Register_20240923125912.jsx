// import React from 'react'
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../data/userService";
function Login() {
      const [userName, setUserName] = useState("");
      const [password,setPassword] = useState("");
      const [email,setEmail] = useState("");
      const [phone,setPhone] = useState("");
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
          status: true
        }
        // registerUser(userInfo);
        console.log(userInfo)
       }
      //  async function registerUser(userInfo) {
      //     register(userInfo).then((res)=>{
      //       if(res.data.code !== 1010)
      //       alert("Register fail")
      //     else{alert("Register successfully")}
      //     })
      //  }
      
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
                      <Button variant="danger" className="w-50" style={{marginRight: "20px"}} >
                        Đăng Ký
                      </Button>
                      <Button variant="light" className="w-50" onClick ={changePage}>
                        Đăng Nhập
                      </Button>
                    </div>
                    <Form onSubmit={handleSubmit}>

                      <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Control type="text" placeholder="Tên đăng nhập" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required />
                      </Form.Group>
                      <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control type="password" placeholder="Mật khẩu" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                      </Form.Group>
                      <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} re />
                      </Form.Group>
                      <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Control type="number" placeholder="phone" value={password} onChange={(e)=>{setPhone(e.target.value)}} />
                      </Form.Group>
                      <div className="text-end mb-3">
                        <a style={{color: "black", fontSize:"18px"}} href="#">Quên mật khẩu?</a>
                      </div>
                      <Button variant="primary" type="submit" className="w-100" >
                        Đăng nhập
                      </Button>
                    </Form>
                    <p className="mt-3 text-center">
                      Bạn có tài khoản rồi? Hãy <span><a href="" style={{color:'red',fontSize:'18px'}} onClick={changePage}>Đăng nhập</a></span> trước khi đăng ký.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }

export default Login