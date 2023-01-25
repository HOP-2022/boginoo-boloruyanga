import { useState } from "react";
import pic from "../components/logo1.png";
import { LinkComp } from "../components/link";
import axios from "axios";

export const Short = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink1, setShortenedLink1] = useState();
  const [shortenedLink2, setShortenedLink2] = useState();

  const create = async () => {
    await axios
      .post("http://localhost:8000/", { url: userInput })
      .then((response) => {
        console.log(response);
        setShortenedLink1(response.data.data.originalUrl);
        setShortenedLink2(response.data.data.shortUrl);
      })
      .catch((error) => {
        console.log(error);
      });
    setUserInput("");
  };

  const styles = {
    header: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      justifyContent: "flex-end",
    },
    green: {
      backgroundColor: "#02B589",
      width: "183px",
      height: "44px",
      borderRadius: "100px",
      fontSize: "20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "8px",
      borderColor: "#02B589",
    },
    white: {
      color: "#02B589",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "44px",
      margin: "8px",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      height: "88vh",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: "184px",
      height: "118px",
    },
    row: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
    },
    input: {
      width: "581px",
      height: "44px",
      backgroundColor: "white",
      border: "1px solid #F0F0F0",
      boxShadow: "opx 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",
    },
    greenunderline: {
      textDecoration: "underline",
      color: "#02B589",
      border: "0px solid black",
      backgroundColor: "white",
      shadow: "null",
    },
    grey: {
      color: "grey",
      fontSize: "16px",
      display: "flex",
      flexDirection: "row",
    },
    plus: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    black: {
      color: "black",
    },
  };
  return (
    <div>
      <div style={styles.header}>
        <div style={styles.white}>хэрхэн ажилладаг вэ?</div>
        <div style={styles.green}>нэвтрэх</div>
      </div>
      <div style={styles.main}>
        <img style={styles.logo} src={pic} alt="" />
        <div style={styles.row}>
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            type="text"
            style={styles.input}
            placeholder="https://www.web-huudas.mn"
          />
          <button onClick={create} style={styles.green}>
            богиносгох
          </button>
        </div>
        {/* <div style={styles.plus}>
      <div style={styles.grey}>
      Өгөгдсөн холбоос <div style={styles.black}>{userInput}</div>
      </div>
      <br></br>
      <div>
      <div style={styles.grey}>
        Богино холбоос <div style={styles.black}>{setShortenedLink2}</div>
        <br></br> */}
        <LinkComp link={shortenedLink1} short={shortenedLink2} />
        {/* <CopyToClipboard text={shortenedLink}>
     <button style={styles.greenunderline}> Хуулж авах</button> 
     </CopyToClipboard> */}
        {/* </div>
     </div>
     </div> */}
      </div>
    </div>
  );
};
