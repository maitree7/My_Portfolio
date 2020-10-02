import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <SocialIcon url="https://github.com/maitree7" bgColor="white" />

                <SocialIcon url="https://www.linkedin.com/in/maitree-maniar/"  />

                <h5 className="footer-name">Maiitree Maniar &copy; 2020</h5>


                </footer>
        );
    }
}