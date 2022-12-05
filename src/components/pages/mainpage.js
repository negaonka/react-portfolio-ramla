import React from "react";
import Footer from "../footer";
import defaultImage from "../../assets/defaultImage.jpeg";

const styles = {
  img: {
    width: "500px",
    marginLeft: "500px",
    marginRight: "auto",
  },
  container: {
    margin: "auto",
    width: "100%",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%",
  },
  heading: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
    paddingTop: "3%",
  },
};


export default function Main() {
  return (
    <div className="auto">
      <div className="flex-container">
        <div style={styles.center}>
          <h1 style={styles.heading}>Hi, I'm Ramla Ahmed</h1>
          <div style={styles.center} className="flex-container">
          <img style={styles.img} src={defaultImage} alt="default" />
          </div>
          <p style={styles.p}>
            {" "}
            I am an aspiring software web developer based in Birmingham, United Kingdom. I would consider myself 
as ambitious and dedicated individual. Before i started looking into web developer, I graduated in BA Childhood studies. I was closely working with 
        children in Early years and children with special education needs and then transitioned into tech as a Full Stack Web Developer.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}