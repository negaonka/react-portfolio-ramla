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
    width: "25%"
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
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width:"1200px",
    flexWrap: "wrap",



},
  button: {
    backgroundColor: "pink",
    color: "white",
    boxShadow: "0 2px 4px white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    position: "absolute",
    bottom: 0,
    marginBottom: "8%",
  },
};

export default function Portfolio({ projects }) {
  return (
<div style={styles.cards}>
  <div style={styles.cardContainer}>
  {projects.map((project) => (
<div key={project.id} className="card" style={styles.card}>
 <img src={project.image} alt="..." />
 <div className="card-body">
 <h5 className="card-title">{project.name}</h5>
<p className="card-text">{project.description}</p>
 <div className="row"><div className="col">
<a href={project.gitHub} style={styles.button}>
   Github Page
 </a>
</div><div className="col">
<a href={project.siteAddress} style={styles.button}>
  Web Link 
</a>
</div> </div>
</div>
 </div>
 ))}
</div>
</div>
  );
}
