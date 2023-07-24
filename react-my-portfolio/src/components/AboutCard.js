import React from "react";

function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div>

                    <p>I am a Fullstack Developer.</p>
                    <p>Recognized for team leadership, complex problem-solving,
                                                and client relationship management.</p>

                    <p>
                        I am looking for new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:stbui_emory@yahoo.com"
                            target="_blank">stbui_emory@yahoo.com, </a> through<a
                                href="https://github.com/stbuiemory"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/sandybui/">
                            LinkedIn.</a>
                        Cheers!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/sandybui/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/stbuiemory" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;