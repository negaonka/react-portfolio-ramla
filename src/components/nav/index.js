import React from "react";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
    button: "hover",
  },
  navStyle: {
    display: "flex",
    justifyContent: "space-around",
    border: "block",
  },
};

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navStyle} className="flex-container space-around">
      <ul>
        <div>
          <li
            style={styles.linkStyle}
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-active" : "nav-inactive"}
          >
            ABOUT ME
          </li>
        </div>
        <div>
          <li
            style={styles.linkStyle}
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-active" : "nav-inactive"
            }
          >
            MY PROJECT
          </li>
        </div>
        <div>
          <li
            style={styles.linkStyle}
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-active" : "nav-inactive"
            }
          >
            CONTACT
          </li>
        </div>
        <div>
          <li
            style={styles.linkStyle}
            onClick={() => handlePageChange("resume")}
            className={currentPage === "resume" ? "nav-active" : "nav-inactive"}
          >
            RESUME
          </li>
        </div>
      </ul>
    </nav>
  );
}
