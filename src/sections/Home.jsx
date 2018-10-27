import React, { Component } from 'react';
import '../css/resume.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
class Home extends Component {
    render() {
        return (
            <div id="page-top">
                <div className="container-fluid p-0">

                    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                        <div className="my-auto">
                            <h1 className="mb-0">Terry
                                <span className="text-primary ml-2">Huang</span>
                            </h1>
                            <hr/>
                            <h1 className="subheading ">looking for Full time employment and freelance opportunities</h1>
                            <p className="my-4">A young and forward looking software developer. From the ever moving front-end designs, to dealing with complex logic of the bank-end, I have worked on many projects that demonstates both my creativity and eye for design, as well as the capability to integrate and develop common web services and databases.</p>
                            <p>I like to pride myself on being forward looking, always looking for improvement, and paying close attention to detail and taking pride in my work, as such, you can always expect me to do take the initiative and push the agenda forward. </p>
                            <h2 className="subheading mt-5 font-weight-bold">Contact Me</h2>
                            <div className="subheading mb-2">(519) 635-0189
                                <br/><a href="mailto:t.linhuang@gmail.com">t.linhuang@gmail.com</a>
                            </div>
                            <ul className="list-inline list-social-icons mb-0">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/terry-huang-860363136" target="_blank">
                                        <span className="fa-lg">
                                        <FaLinkedin/>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/Tesonis" target="_blank">
                                        <span className="fa-lg">
                                            <FaGithubSquare/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>


                </div>
            </div>
        );
    }
}
export default Home