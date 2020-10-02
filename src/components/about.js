import React from "react";
import selfie from "../img/Maitree.jpg";

export default function About() {
    return (
        <section className="about" id="about">
            <h3>I am Maiitree Maniar</h3>
            <div className="about-me">
                <img className="profile-pic" src={selfie} alt="selfie" height="220px" />
                <div>
                    <p>
                        Financial Analyst with Masters in Information Technology, Certified Accountant & a certificate in Financial Technology from University of North Carolina, Charlotte, and 8+ years of experience in financial services. Proven technical and leadership aptitude in data analysis, financial modeling and forecasting. Successfully managed the implementation of Hyperion Planning & Business Intelligence, Cognos TM1 from the finance side.</p>
                    <p>
                        Skilled in Python, Pandas, SQL/NoSQL databases (PostgreSQL, MongoDB), Tableau and Power BI with a strong interest in financial modeling, data analysis & blockchain. Well versed in developing solid partnership with clients, peers and presenting to executive staff and driving cross-functional collaboration across varied organizational subcultures, and global teams. I find great satisfaction in extracting insights from data that enhance decision-making and drive competitive growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
