import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const styles = {
  icons: {
    padding: "30px",
    fontSize: "40px",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    position: "fixed",
    height: "50px",
    bottom: "0",
    width: "100%",
  },
};

export default function Footer() {
  return (
    <footer className="flex-container" style={styles.footer}>
      <p style={styles.center}>
        <a href="https://www.linkedin.com/in/ramla-ahmed-663aa0235/">
          <FontAwesomeIcon icon={faLinkedin} style={styles.icons} />
        </a>
        <a href="https://github.com/ramlaahmed">
          <FontAwesomeIcon icon={faGithub} style={styles.icons} />
        </a>
        <a href="mailto:ramlaahmed01@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={styles.icons} />
        </a>
      </p>
    </footer>
  );
}