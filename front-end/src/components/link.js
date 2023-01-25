import React from "react";

export const LinkComp = ({ link, short }) => {
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
    <div style={styles.plus}>
      <div style={styles.grey}>
        Өгөгдсөн холбоос:
        <br></br>
        <div style={styles.black}> {link}</div>
      </div>
      <div style={styles.grey}>
        Богино холбоос:
        <br></br>
        <div style={styles.black}> {short}</div>
        <br></br>
        <button
          style={styles.greenunderline}
          onClick={() => {
            navigator.clipboard.writeText(short);
          }}
        >
          Хуулж авах
        </button>
      </div>
    </div>
  );
};
