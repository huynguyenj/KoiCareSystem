// import React from 'react'
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
      const [userName, setUserName] = useState("");
      const [password,setPassword] = useState("");
      const navigator = useNavigate();
      function changePage(){
            navigator('/register')
      }
      async function handleSubmit(event){
            event.preventDefault();
            const userInfo = {
                  userName: userName,
                  password: password,
                };
            
                // Call the login API function
                await handleLt(userInfo);
      }
      async function login(userInfo) {
           
            try {
                  const userInfo = {userName,password}
                  await login(userInfo).then(res =>{
                        if(res.data.code === 1010){
                              console.log("login success")
                        }else{
                              console.log("Error", res.date.result)
                        }
                  })
            } catch (error) {
                  console.error('There was an error making the request:', error);
            }
            
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
                      <Button variant="light" className="w-50" style={{marginRight: "20px"}} onClick ={changePage}>
                        Đăng Ký
                      </Button>
                      <Button variant="danger" className="w-50">
                        Đăng Nhập
                      </Button>
                    </div>
                    <Form onSubmit={login}>

                      <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Control type="text" placeholder="Tên đăng nhập" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
                      </Form.Group>
                      <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control type="password" placeholder="Mật khẩu" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                      </Form.Group>
                      <div className="text-end mb-3">
                        <a style={{color: "black", fontSize:"18px"}} href="#">Quên mật khẩu?</a>
                      </div>
                      <Button variant="primary" type="submit" className="w-100" >
                        Đăng nhập
                      </Button>
                    </Form>
                    <p className="mt-3 text-center">
                      Bạn chưa có tài khoản? Hãy <span><a href="" style={{color:'red',fontSize:'18px'}}>Đăng ký</a></span> trước khi đăng nhập.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }

export default Login