import React from "react";
import "../styles/About.css";

function Account() {
    return (
        <div className="dashboard">
            <div className="header">
                <h1>About Nexus Travel</h1>
            </div>
            <div className="desc">
                <p>Nexus Travel is a <b>data-driven</b> travel application which fosters greater connection throughout our <b>global community</b>. Nexus provides a <b>simple filter system    </b> that predicts travel ideas based on each user's preferences. At the center of our vision is our core value of <b>open-mindedness</b>, allowing users to <b>expand</b> their mindset of global cultures.</p>
            </div>
            <p>Built with &#10084;&#65039; by Ravi Shah, Reet Sinha, Jadon Lee, Alex Bui, and Samarth Bikki for the Tech Optimum Hackathon 2022</p>
            <p className="citations">A huge thanks to our APIs! <a href="https://opentripmap.io/catalog" target="_blank" rel="noreferrer noopener">https://opentripmap.io/catalog</a> - <a href="https://restcountries.com/" target="_blank" rel="noreferrer noopener">https://restcountries.com/</a></p>
            <p>The website's Github: <a href="https://github.com/Rav4s/tech-optimum-2022-hackathon" target="_blank" rel="noreferrer noopener">https://github.com/Rav4s/tech-optimum-2022-hackathon</a></p>
        </div>
    );
}
export default Account;