import React from "react";

export default function Nav(props) {
    const {
        ResumeSelected,
        setResumeSelected,
        ContactSelected,
        setContactSelected,
        PortfolioSelected,
        setPortfolioSelected,
        AboutSelected,
        setAboutSelected,
    } = props;

    return (
        <>
            <div className="header-main">
                <header>
                    <h1 className="my-name">Maiitree Maniar</h1>
                    <h3>Sr Financial Analyst || Financial Technology</h3>
                </header>
            </div>
            <nav>
                <ul className="">
                    <li className={` ${AboutSelected && `navActive`}`}>
                        <a href="#about">
              <span
                  onClick={() => {
                      setAboutSelected(true);
                      setContactSelected(false);
                      setPortfolioSelected(false);
                      setResumeSelected(false);
                  }}
              >
                About Me
              </span>
                        </a>
                    </li>
                    <li className={` ${PortfolioSelected && `navActive`}`}>
                        <a href="#portfolio">
              <span
                  onClick={() => {
                      setAboutSelected(false);
                      setContactSelected(false);
                      setPortfolioSelected(true);
                      setResumeSelected(false);
                  }}
              >
                Portfolio
              </span>
                        </a>
                    </li>
                    <li className={` ${ContactSelected && "navActive"}`}>
                        <a href="#contact">
              <span
                  onClick={() => {
                      setAboutSelected(false);
                      setContactSelected(true);
                      setPortfolioSelected(false);
                      setResumeSelected(false);
                  }}
              >
                Contact
              </span>
                        </a>
                    </li>
                    <li className={` ${ResumeSelected && "navActive"}`}>
                        <a href="#resume">
              <span
                  onClick={() => {
                      setAboutSelected(false);
                      setContactSelected(false);
                      setPortfolioSelected(false);
                      setResumeSelected(true);
                  }}
              >
                Resume
              </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}