import React from "react";
import Topbar from "./components/Topbar/topbar.jsx";
import Content from "./components/Content/content.jsx";
import Footer from "./components/Footer/footer.jsx";

// import "./components/Topbar/topbar.css";
// import "./components/Content/content.css";
// import "./components/Footer/footer.css";

function Admin() {
  return (
    <div>
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Admin;
