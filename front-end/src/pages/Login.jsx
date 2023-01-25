import React from "react";
import pic from "../assets/logo.png";
const Login = () => {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    loginTitle: {
      height: "10vh",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 32,
      textAlign: "center",
      color: "02B589",
    },
    input: {
      width: "381px",
      height: "44px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #F0F0F0",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: 100,
    },
    button: {
      width: "383px",
      height: "43px",
      backgroundColor: "#02B589",
      border: 0,
      borderRadius: "100px",
      fontFamily: "Ubuntu",
      fontWeight: 700,
      fontSize: 20,
      textTransform: "uppercase",
      color: "#FFFFFF",
    },
  };
  return (
    <div>
      <div className="header">
        <div className="title">хэрхэн ажилладаг вэ?</div>
      </div>
      <div style={styles.main}>
        <div className="logo">
          <img className="logoLink" src={pic} alt="" />
          <div className="logoTitle">Boginoo</div>
        </div>
        <div style={styles.loginTitle}>Нэвтрэх</div>
        <div className="inputContainer">
          <div>Цахим хаяг</div>
          <input
            style={styles.input}
            placeholder="name@mail.domain"
            type="email"
          />
          <div>Нууц үг</div>
          <input style={styles.input} placeholder="********" />
          <div>
            <div style={styles.row}>
              <input type="checkbox"></input>
              <div>Намайг сана</div>
            </div>
            <a href="https://reactjs.org/docs/forms.html">Нууц үгээ мартсан</a>
          </div>
          <button style={styles.button}>Нэвтрэх</button>
          <a href="https://reactjs.org/docs/forms.html">
            Шинэ хэрэглэгч бол энд дарна уу?
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
