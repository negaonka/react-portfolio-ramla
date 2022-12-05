import React, { useState } from "react";
import Nav from "../nav";
import Portfolio from "../pages/projects";
import Main from "../pages/mainpage";
import projects from "../pages/projects";
import Contact from "../pages/contact";
import Footer from "../footer";


export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Main />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio projects={projects} />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
      </div>
  );
}