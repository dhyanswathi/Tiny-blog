import React from "react";
import Header from "./Header";
import './About.css';
import Button from 'react-bootstrap/Button';

function About() {

    const imgUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png";

    return (
        <> <Header></Header>
            <section style={{ backgroundImage: `url(${imgUrl})` }} className="about">
                <h3>Developer Info</h3>
                <article>
                    <p>Swathi Sidharthan</p>
                    <p> Junior Full-stack Dotnet developer from India, currently living in Stockholm, Sweden.</p>
                    <p> Connect to me @ <a href="http://www.linkedin.com/in/swathi-sidharthan">
                        <Button variant="outline-primary" size="sm">LinkedIn</Button>
                        </a></p>
                </article>             
            </section></>
    )
}

export default About;