import React from "react";


const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
    button:"hover"

    
      },
  navStyle: {
    display: "flex",
    justifyContent: "space-around",
    border:"block"
    
  }
  
};

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav style ={styles.navStyle} className="flex-container space-around">
      <div>
        <a 
        style={styles.linkStyle}
         href="#home"
         onClick={() => handlePageChange("Home")}
         className={currentPage === "Home" ? "nav-active": "nav-inactive"}>
          ABOUT ME
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="project"
          onClick={() => handlePageChange("project")}
          className={currentPage === 'project' ? "nav-active": "nav-inactive"}
        >
         MY PROJECT
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-active": "nav-inactive"}
        >
          CONTACT
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#skills"
          onClick={() => handlePageChange("skills")}
          className={currentPage === "skills" ? "nav-active": "nav-inactive"}
        >
          MY SKILLS
        </a>
      </div>

    </nav>
  );
}