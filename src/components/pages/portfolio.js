import React from "react";



const styles = {
  card: {
    width: "18rem",
    height: "10rem",
    display: "flex",
    justifyContent: "flex"
    
  },
  cardBody: {
    alignSelf: "flex-end",
  },
  projectImage: {
    width: "900px",
    height: "500px",
    
  },
  container: {
    width: "150px",
    height: "300px",
  },
  cards: {
    paddingTop: "5%",
    paddingLeft: "5%",
    marginRight: "auto",
    
  },

  button: {
    backgroundColor: "pink",
    color: "white",
    boxShadow: "0 2px 4px white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    
  },

  div: {
    display: "flex",
    justifyContent: "space-around",
    border: "block",
    marginBottom: "10px",
    marginTop: "2px",
    padding: "10px"

  }
};

export default function Portfolio({ projects }) {
  return (
<div style={styles.cards}>
  <div style={styles.cardContainer}>
  {projects.map((project) => (
    
<div key={project.id}>
<h5 className="card-title">{project.name}</h5>
 <img src={project.image} style= {styles.projectImage} alt="..." />
 <div className="card-body">
 <p className="card-text">{project.description}</p>
<div style={styles.div}>

<div className="card-text">

  <a href={project.github} style={styles.button}>
    Github Page
  </a>

 
      <a href={project.siteURL} style={styles.button}>
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
