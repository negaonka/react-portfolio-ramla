
import React from "react";
import Footer from "../Footer";

const styles = {
  img: {
    width: "200px",
    marginLeft: "auto",
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
          <h1 style={styles.heading}>Hi my name is Ramla Ahmed</h1>
          <div style={styles.center} className="flex-container">
            <img style={styles.img} src={myImage} alt="jg eating" />
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