import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
      <Header></Header>
      <div id="about" className="grid-container" style={{ backgroundColor: "lightgray" }}>
        <h2 className="">Đặc điểm chung</h2>
        <section style={{marginLeft: '100px'}}>
          <p style={{ marginLeft: "20px" }}>
            {" "}
            Những dịch vụ chăm sóc bảo dưỡng hồ cá Koi tại Koiday gồm những gì?
            <br />
            Dịch vụ chăm sóc, kiểm tra hồ cá:
            <br />+ Kiểm tra, tư vấn và xử lý tình trạng nước hồ, cung cấp các
            bộ test, chế phẩm vi sinh giúp kiểm tra và duy trì hệ thống vi sinh
            của hồ. <br />
            + Kiểm tra hoạt động và báo dưỡng các thiết bị trong hồ cá <br />
            + Hướng dẫn khách hàng những yêu cầu сơ bản để chăm sóc hồ cá và sử
            dụng các thiêt bị trong hồ <br />
            - Dịch vụ chăm sóc, chữa bệnh cho cá Koi: <br />
            + Cung cấp thức ăn chuẩn cho cá Koi theo mục đích nuôi, từng giai
            đoạn phát triển và theo yêu cầu của khách hàng <br />
            + Kiểm tra, phát hiện, chuẩn đoán và điều trị các bệnh thường gặp ở
            cá Koi <br />+ Tư vấn kỹ thuật chăm sóc cá giúp quý khách hàng an
            tâm hơn trong quá trình nuôi dưỡng
          </p>
        </section>
        <br />
        <section style={{marginLeft: '100px'}}>
          <p style={{ marginLeft: "20px" }}>
            Chăm sóc hồ cá Koi là rất quan trọng vì những lý do sau: <br />{" "}
            1.Sức khỏe của cá Koi: Cá Koi cần môi trường nước sạch và giàu oxy
            để phát triển khỏe mạnh. Chăm sóc hồ giúp duy trì chất lượng nước,
            ngăn ngừa bệnh tật và giúp cá sống lâu. <br />
            2.Ngăn ngừa ô nhiễm: Nếu không chăm sóc định kỳ, chất thải của cá,
            thức ăn thừa, và tảo có thể tích tụ, gây ô nhiễm nước, làm giảm chất
            lượng sống của cá. <br />
            3.Cân bằng hệ sinh thái: Một hồ cá được chăm sóc tốt sẽ duy trì hệ
            sinh thái cân bằng, bao gồm cây thủy sinh, vi sinh vật có lợi và cá
            Koi. <br />
            4.Thẩm mỹ và thư giãn: Hồ cá Koi thường được coi là yếu tố trang trí
            quan trọng trong không gian sân vườn. Chăm sóc hồ giúp giữ cho nó
            luôn đẹp, mang lại cảm giác thư giãn và hài hòa. <br />
            5.Giá trị kinh tế: Cá Koi là loài cá cảnh có giá trị kinh tế cao.
            Việc chăm sóc tốt không chỉ giúp cá khỏe mạnh mà còn làm tăng giá
            trị của chúng khi bán hoặc trao đổi.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
