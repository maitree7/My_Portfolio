import React from "react";

export default function Resume() {
    return (
        <>
            <section className="resume" id="resume">
                <div className="education">
                    <h1>Resume</h1>

                    <a
                        href="https://drive.google.com/file/d/1TJyIDbi0VXE5XKQA8Yt4t9-yzvnzTa_r/view?usp=sharing"
                        download="Resume"
                    >
                        Download My Resume
                    </a>

                    <div className="row item">
                        <div className="twelve columns">
                            <p className="school-name">
                                Certificate in Financial Technology
                                <span>&bull;</span> <em className="date">Sept 2020</em>
                            </p>
                            <p className="school-name">
                                Certified Chartered Accountant (equivalent of US CPA)
                                <span>&bull;</span> <em className="date">May 2008</em>
                            </p>
                            <p className="school-name">
                                Master's in Information Technology and Computer Applications
                                <span>&bull;</span> <em className="date">May 2006</em>
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <h1>Skills</h1>

                <div className="front-end">
                    <h4>Front End</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>ReactJS</li>
                        <li>JavaScript</li>
                        <li>AJAX</li>
                        <li>JSON</li>
                        <li>JQuery</li>
                        <li>Semantic UI React</li>
                    </ul>
                </div>

                <div className="back-end">
                    <h4>Back End</h4>
                    <ul>
                        <li>Python</li>
                        <li>MERN</li>
                        <li>Sequelize</li>
                        <li>Handlebars.js</li>
                        <li>R Studio</li>
                        <li>Inquirer</li>
                        <li>MongoDB</li>
                        <li>REACT</li>
                        <li>Redux</li>
                    </ul>
                </div>

                <div className="tools">
                    <h4>Tools</h4>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Anaconda</li>
                        <li>Insomnia</li>
                        <li>Heroku</li>
                        <li>Power BI</li>
                        <li>Power Apps</li>
                        <li>MS Flow</li>
                        <li>GitHub</li>
                    </ul>
                </div>

                <div className="apis">
                    <h4>Protocols & APIs</h4>
                    <ul>
                        <li>REST</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                    </ul>
                </div>

                <div className="databases">
                    <h4>Databases</h4>
                    <ul>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>

                <div>
                    <h4>Other</h4>
                    <ul>
                        <li>Progressive Web Application</li>
                        <li>Service Worker</li>
                    </ul>
                </div>
            </section>
        </>
    );
}