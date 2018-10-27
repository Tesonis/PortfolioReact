import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div id="page-top">
        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Work Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-1">Pink Elephant Inc.</div>
              <div className="subheading mb-3">Burlington, ON</div>
              <p>Develop and integrate prototype designs into existing site. Revamp and reinvigorate the website to a modern look and enhance the UI/UX to bring up the conversion on e-commerce sales.</p>
              <ul>
                <li>Rework internal CMS system to optimize efficiency and usability</li>
                <li>Maintaining and improving SEO / Monitor Google Analytics for UX improvements</li>
                <li>Full convertion of existing website to utilize the latest web libraries</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - July 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Systems Developer (Co-op)</h3>
              <div className="subheading mb-1">Hatch Ltd.</div>
              <div className="subheading mb-3">Mississauga, ON</div>
              <p>Experimentation with the latest (at the time) technology released by SAP. Enhance the default web application by adding in custom built functionality and integration to SAP. Automate QA processes.</p>
              <ul>
                <li>Developing UI interfaces using SAP Personas, JavaScript</li>
                <li>Dealing with optimization and creating automated tests for web application</li>
                <li>Pushing limits of the web applciation by creating workarond solutions</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2015 - December 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer (Co-op)</h3>
              <div className="subheading mb-1">Wisdeal Corp</div>
              <div className="subheading mb-3">Toronto, ON</div>
              <p>Assist a team of developers to remake the corporate website to fit modern standards. Creating new functionality to enhance the UI/UX and streamline the search process.</p>
              <ul>
                <li>Creatign and integrating APIs to create new functionality</li>
                <li>Create seperate mobile site as well as a responsive desktop site</li>
                <li>Use AJAX and JSON to optimize functionalities and automate existing manual processes</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2010 - August 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>

        </div>

      </section>

        </div>
      </div>
    );
  }
}
export default Experience