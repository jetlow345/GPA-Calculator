import { useEffect, useState, React } from "react";
import "./App.css";
import { Topbar } from "./components/Topbar/topbar.tsx";
import { Content } from "./components/Content/content.tsx";
import { Footer } from "./components/Footer/footer.tsx";

function App() {
  return (
    <>
      <Topbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
