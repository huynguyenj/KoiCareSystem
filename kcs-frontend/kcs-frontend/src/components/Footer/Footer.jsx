// import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footer-background">
        <img className="bg-image" src="/BG.jpg" alt="" />
        <div className="custom-divider"></div>
        <div className="footer-container" style={fontStyle}>
          <div className="footer-section">
            <h4 style={{ fontFamily: "JetBrains Mono" }}>Địa chỉ khu vực:</h4>
            <ul>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                CS1: Hẻm 212/Đ, Đường Nguyễn Văn Linh, Quận 7
              </li>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                CS2: Số 17 Đường 37, P. Đông Hòa, Quận Cẩm Lệ, Thành Phố Đà Nẵng
              </li>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                CS3: 99 Hồ Thị Tư, Thị Xã Tiền Hải, Tỉnh Thái Bình
              </li>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                CS4: số 11, Phố Gia Thượng, Phường Ngọc Thụy, Quận Long Biên,
                Thành Phố Hà Nội
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{ fontFamily: "JetBrains Mono" }}>Chính sách Koiday</h4>
            <hr className="footer-divider" />
            <ul>
              <li style={{ fontFamily: "JetBrains Mono" }}>Mua hàng</li>
              <li style={{ fontFamily: "JetBrains Mono" }}>Vận chuyển</li>
              <li style={{ fontFamily: "JetBrains Mono" }}>Thanh toán</li>
              <li style={{ fontFamily: "JetBrains Mono" }}>Bảo mật</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 style={{ fontFamily: "JetBrains Mono" }}>Chức năng</h4>
            <hr className="footer-divider" />
            <ul>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                Dịch vụ chăm sóc khách hàng
              </li>
              <li style={{ fontFamily: "JetBrains Mono" }}>Bảo dưỡng hồ cá</li>
              <li style={{ fontFamily: "JetBrains Mono" }}>Theo dõi định kỳ</li>
              <li style={{ fontFamily: "JetBrains Mono" }}>
                Bảo hành 12 tháng
              </li>
            </ul>
          </div>
          <div className="footer-logo">
            <img src="/Logo2.png" alt="Koiday Logo" />
          </div>
        </div>
        <div
          className="row mt-5"
          style={{
            backgroundColor: "lightgrey",
            padding: "20px",
            position: "relative",
          }}
        >
          <div
            className="d-flex justify-content-around align-items-center"
            style={fontStyle}
          >
            <div style={{ fontFamily: "JetBrains Mono" }}>
              &copy; 2024 Bảo lưu mọi quyền, Koiday&reg;
              <br></br>
              Chính sách quyền riêng tư | Điều khoản
            </div>
            <div className="social-icons" style={{ fontSize: "24px" }}>
              <a>
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a>
                <i>
                  <FontAwesomeIcon icon={faTelegram} />
                </i>
              </a>
              <a>
                <i>
                  <FontAwesomeIcon icon={faPinterest} />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const fontStyle = {
  fontWeight: "bold",
};



export default Footer;
