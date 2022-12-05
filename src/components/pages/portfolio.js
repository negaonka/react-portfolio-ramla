import React from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  card: {
    width: "18rem",
    height: "27rem",
    display: "flex",
  },
  cardBody: {
    alignSelf: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  container: {
    width: "250px",
    height: "300px",
  },
  cards: {
    paddingTop: "5%",
    paddingLeft: "5%",
    marginRight: "auto",
  },
  button: {
    backgroundColor: "#648381",
    color: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "10px",
    position: "absolute",
    bottom: 0,
    marginBottom: "5%",
  },
};

export default function Portfolio({ projects }) {
  return (
    <div style={styles.cards}>
      <div>
        {projects.map((project) => (
          <div key={project.id} className="card" style={styles.card}>
            <img src={project.image} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <div className="row">
                <div className="col">
                  <a href={project.gitHub} style={styles.button}>
                    Repository
                  </a>
                </div>
                <div className="col">
                  <a href={project.siteAddress} style={styles.button}>
                    Visit app
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
