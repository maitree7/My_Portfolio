import React from "react";

export default function ContactForm() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label>Email Me:</label>
                    <a href="mailto:maitree.maniar@gmail.com">maitree.maniar@gmail.com</a>
                </div>
                <div>
                    <label>Phone: </label>
                    <a href="tel:19802054641">(m) 980.205.4641</a>
                </div>
            </form>
        </section>
    );
};