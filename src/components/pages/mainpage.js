import React from "react";
import Footer from "../footer";
import defaultImage from "../../assets/defaultImage.jpeg";

const styles = {
  img: {
    width: "20px",
    marginLeft: "20px",
    marginRight: "2px",
    
  },
  container: {
    margin: "9px",
    width: "5%",
  },
  center: {
    marginLeft: "100px",
    marginRight: "100px",
    paddingTop: "0%",
  },
  heading: {
    textAlign: "right",
    marginRight: "100px",
  },
  p: {
    textAlign: "center",
    paddingTop: "3%",
  },
  
};

export default function Main() {
  return (
    <div className="auto">
      <div className="container1">
        <div style={styles.center} className="intro">
          <h1 style={styles.heading}>I'M RAMLA AHMED</h1>
          <div style={styles.center} className="flex-container">
            <img className="portraitimg" src={defaultImage} alt="default" />
          </div>
          <p style={styles.p}>
            {" "}
            I am an aspiring software web developer based in Birmingham, United
            Kingdom. I would consider myself as a ambitious and dedicated
            individual. I graduated in BA (Hons) Childhood studies before i 
            transitioned into tech as a Full Stack Web Developer.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
