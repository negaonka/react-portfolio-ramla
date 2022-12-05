import React, { useState } from "react";
import Nav from "./Nav";
import Portfolio from "./pages/projects";
import Main from "./pages/Main";
import projects from "../projects";
import Contact from "./pages/Contact";
import Footer from "./Footer";


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