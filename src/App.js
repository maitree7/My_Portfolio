import React, { useState, useEffect } from 'react';
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";


export default function App() {
  const [ResumeSelected, setResumeSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);

  return (
      <div>
        <Header
            ResumeSelected={ResumeSelected}
            setResumeSelected={setResumeSelected}
            ContactSelected={ContactSelected}
            setContactSelected={setContactSelected}
            PortfolioSelected={PortfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            AboutSelected={AboutSelected}
            setAboutSelected={setAboutSelected}
        ></Header>

        <main>
          <div>
            {!AboutSelected ? <></> : <About></About>}
            {!PortfolioSelected ? <></> : <portfolio></portfolio>}
            {!ContactSelected ? <></> : <Contact></Contact>}
            {!ResumeSelected ? <></> : <Resume></Resume>}
          </div>
        </main>
        <Footer></Footer>
      </div>
  );
};
