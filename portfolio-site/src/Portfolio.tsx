/* Stack Item Images */
import reactLogo from '/logos/stack-react.svg'
import viteLogo from '/logos/stack-vite.svg'
import springLogo from '/logos/stack-spring.svg'
import tsLogo from '/logos/lang-typescript.svg'
import mysqlLogo from '/logos/lang-mysql.svg'
import bootstrapLogo from '/logos/stack-bootstrap.svg'
import sassLogo from '/logos/stack-sass.svg'
// import bashLogo from '/logos/tool-bash.svg'
// import cLogo from '/logos/lang-c.svg'
// import cppLogo from '/logos/lang-cplusplus.svg'
// import cshrpLogo from '/logos/lang-csharp.svg'
// import cssLogo from '/logos/lang-css3.svg'
// import htmlLogo from '/logos/lang-html5.svg'
// import jsLogo from '/logos/lang-javascript.svg'

/* Language Item Images */


/* Libraries and CSS */
import './Portfolio.scss'

// import { useState } from 'react';
import { ReactTyped } from 'react-typed';

import Collapse from './components/collapse_comp.tsx'
import Modal from './components/modal_comp.tsx'
import Footer from './components/footer_port.tsx'

/* Constants and Variables */
const positions: string[] = [
  "Software Developer",
  "Software Engineer",
  "Full Stack Developer",
  "Game Developer",
  "Technical Writer"
];

function Portfolio() {

  return (
    <>
      <main>
        <div className="mainTitle">
          <h1>Jace Zavarelli, <br/><ReactTyped className="positionTitle" strings={positions} typeSpeed={100} loop backSpeed={50} cursorChar="|" showCursor={true}/></h1>
        </div>

        <div className="aboutEntries">
          <section className="container_flex">
            
              {/* Terminal Style - Meant to Look like the Terminals a Developer would use with Updating Views. */}
              <div className="terminal" id="aboutBio"> 
                <p>
                  <b className="Bold">jzavarelli&#64;zavpit: $</b> <b className="BoldItalic">User --history</b><br />
                  I am Jace Zavarelli, a Software Developer and Designer with an interest and hobby in Game Development! I love to build systems that are complex and innovative in any space I enter, a user-oriented and collaborative development environment creates the strongest of systems!
                  <br />
                  <br />
                  <b className="Bold">jzavarelli&#64;zavpit: $</b> <b className="BoldItalic">User --experience</b><br />
                  With my 4+ years of educational and internship experience, along with the last year of career work, I have developed software for ASM micro-PCB applications and designed Front-End environments to feature API integration and React functionality. I am a developer who knows the versatility of researching language documentation effectively while throwing solutions at the wall to create solutions with a speedy-learning outlook. I enjoy working with teams and collaborating in the workspace, but I am experienced as a solo developer who is never afraid to ask for assistance on problems!
                  <br />
                  <br />
                  I am still learning and love to so every day, be it working with Arch Linux as my main operating system, or building custom websites for my personal projects. Every time I get a chance to learn and grow, I become a stronger developer who can implement new ideas and practice my innovative abilities. I hope to land in a spot where I can show that knowledge but also learn from people equally or more experienced than me. 
                  <br />
                  <br />
                  Feel free to reach out! I am open to collaboration or trying new opportunities in the development space!
                  <br />
                  <br />
                  <b className="Bold">jzavarelli&#64;zavpit: $</b> <b className="BoldItalic"><ReactTyped typeSpeed={100} stopped loop cursorChar="|" showCursor={true}/></b><br />
                </p>
              </div>

              {/* Animated and Defined Skills - Showcase my abilities in a segmented View, Matches the general look of the Page. */}
              <aside id="aboutSkills">
                <div className="container_flex">
                  <p>
                    <b>Focus</b>: <br/>
                    Software Engineering, UX UI Design, Full Stack Development, System Software Integration
                  </p>
                </div>
                <div className="container_flex">
                  <p>
                    <b>Toolset</b>: <br/>
                    Arch Linux, Linux Server Interfaces, Visual Studio Code, IntelliJ, UiPath Suite.
                  </p>
                </div>
                <div className="container_flex">
                  <p>
                    <b>Languages</b>: <br/>
                    Java, Javascript, Typescript, Bash, C, C#, GDscript
                  </p>
                </div>
                <div className="container_flex">
                  <p>
                    <b>Specialty</b>: <br/>
                    Building Front-End Systems and Designing Custom Software Solutions
                  </p>
                </div>
              </aside>
          </section>
        </div>

        {/* Development Projects - Different Projects I have worked on that have an expandable style to help keep the Page neat and showcase abilities to build Components. */}
        <div className="projectEntries">
          <h2>Projects</h2>
          <Collapse
            open
            title="Personal Portfolio"
            timeline="09-2025 | PRESENT"
            children="A fun look and feel into the mind of a software and game developer. Portfolio, WhoAmI, and Development Timeline." />

          <Collapse
            open
            title="T.A.P.S IRS Timekeeping System"
            timeline="05-2025 | 09-2025"
            children="" />

          <Collapse
            open
            title="Recursive-Descent Compiler Senior Capstone"
            timeline="01-2023 | 05-2023"
            children="Custom transpiled language called &#8220;Catscript&#8220; built on a Java Bytecode encapsulator using the Recursive Descent process of development." />

          <Collapse
            open
            title="Little-Man Stack Machine Junior Project"
            timeline="07-2022 | 12-2022"
            children="A C-based Stack machine built to replicate the 1970 Little Man Computer that led the computer revolution of software development." />
        </div>

        {/* Stack and Toolsets - Meant to reflect the categories from my Skills and linked from them like a T.O.C, where the individual parts of the Stack are dynamic with Modals custom Built. Themed on Toolset. */}
        <div className="stackEntries">
          <h2>Experience and Tools</h2>
          <div className="container_grid">
            <section className="container_flex">
              <Modal 
                skillImage={reactLogo}
                skillAlt='React Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={viteLogo}
                skillAlt='Vite Logo'
                title="Vite Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={springLogo}
                skillAlt='Spring Boot Logo'
                title="Spring Boot Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={tsLogo}
                skillAlt='TypeScript Logo'
                title="TypeScript Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={mysqlLogo}
                skillAlt='MySQL Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={bootstrapLogo}
                skillAlt='Bootstrap Logo'
                title="Bootstrap Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={sassLogo}
                skillAlt='SASS Logo'
                title="SASS Item"
                children='Used SASS in Blarg Blarg.'
              />
            </section>
            <section className="container_flex">
              <Modal 
                skillImage={reactLogo}
                skillAlt='React Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={viteLogo}
                skillAlt='Vite Logo'
                title="Vite Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={springLogo}
                skillAlt='Spring Boot Logo'
                title="Spring Boot Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={tsLogo}
                skillAlt='TypeScript Logo'
                title="TypeScript Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={mysqlLogo}
                skillAlt='MySQL Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={bootstrapLogo}
                skillAlt='Bootstrap Logo'
                title="Bootstrap Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={sassLogo}
                skillAlt='SASS Logo'
                title="SASS Item"
                children='Used SASS in Blarg Blarg.'
              />
            </section>
            <section className="container_flex">
              <Modal 
                skillImage={reactLogo}
                skillAlt='React Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={viteLogo}
                skillAlt='Vite Logo'
                title="Vite Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={springLogo}
                skillAlt='Spring Boot Logo'
                title="Spring Boot Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={tsLogo}
                skillAlt='TypeScript Logo'
                title="TypeScript Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={mysqlLogo}
                skillAlt='MySQL Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={bootstrapLogo}
                skillAlt='Bootstrap Logo'
                title="Bootstrap Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={sassLogo}
                skillAlt='SASS Logo'
                title="SASS Item"
                children='Used SASS in Blarg Blarg.'
              />
            </section>
            <section className="container_flex">
              <Modal 
                skillImage={reactLogo}
                skillAlt='React Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={viteLogo}
                skillAlt='Vite Logo'
                title="Vite Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={springLogo}
                skillAlt='Spring Boot Logo'
                title="Spring Boot Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={tsLogo}
                skillAlt='TypeScript Logo'
                title="TypeScript Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={mysqlLogo}
                skillAlt='MySQL Logo'
                title="React Item"
                children='Used React in Blarg Blarg.'
              />
              <Modal 
                skillImage={bootstrapLogo}
                skillAlt='Bootstrap Logo'
                title="Bootstrap Item"
                children='Used in Blarg Blarg.'
              />
              <Modal 
                skillImage={sassLogo}
                skillAlt='SASS Logo'
                title="SASS Item"
                children='Used SASS in Blarg Blarg.'
              />
            </section>
          </div>
        </div>

        {/* Experiences - . */}
        <div className="experEntries">
          <h2>Experience</h2>
            <article className="pocket_flex">
              <h3>Zoot Enterprises Inc.</h3>
              <p>
                <b>Technical Writer</b>
                <br />
                <b>Full-Time | January 2026 - PRESENT</b>
                <br />
                ABCD
              </p>
              <ul>
                <li></li>
              </ul>
            </article>
            <article className="pocket_flex">
              <h3>Management Science and Innovation</h3>
              <p>
                <b>Software Developer | Business Analyst</b>
                <br />
                <b>Full-Time | August 2024 - September 2025</b>
                <br />
                Created Automation Processes and Front-End environments based in the U.S. IRS department ecosystem within precise deadlines and while handling sensitive information with proper clearance protocols. Worked with end-users and clients to document processes needing automation solutions with technical language to bridge client-developer communication.
              </p>
              <ul>
                <li>Designed Front-End systems with React.js on a Spring Boot 3 stack for T.A.P.S environment.</li>
                <li>Developed Robotic Processing Automation with UiPath Suite for end-user client projects.</li>
                <li>Developed software solutions using C# to process legacy files and digitize archive files.</li>
                <li>Documented official files for projects and automation's while coordinating with clients and developers.</li>
                <li>Worked with clients to translate and communicate changes or designs to developers on processes.</li>
              </ul>
            </article>

            <article className="pocket_flex">
              <h3>I.P.A.L Human Interaction Lab, Montana State University</h3>
              <p>
                <b>Software Developer</b>
                <br />
                <b>Part-Time | November 2020 - January 2024</b>
                <br />
                Created 3D environments and immersive simulations mounted on augmented, mixed, and virtual reality environments, integrating UX designs to guide users through cognitive behavioral therapy.
              </p>
              <ul>
                <li>Developed Unity 3D Beach Simulation Environment.</li>
                <li>Integrated Breathing Simulations for Biofeedback interaction and cognitive behavioral therapy, based on UX Designs.</li>
                <li>Implemented Python Libraries for Biofeedback device monitoring systems.</li>
                <li>Setup and Implemented software on Virtual, Augmented, and Mixed Reality Devices.</li>
              </ul>
            </article>

            <article className="pocket_flex">
              <h3>TrialWear Technologies, Montana State University</h3>
              <p>
                <b>Java Software Developer</b>
                <br />
                <b>Part-Time | May 2022 - August 2022</b>
                <br />
                Formulated initial concepts and software for the company device to function and be expanded upon in future developments.
              </p>
              <ul>
                <li>Designed UI/UX systems with proper engineering principles and UML Diagraming.</li>
                <li>Implemented OOP techniques in the Java language to create a GUI and user interface.</li>
                <li>Integrated systems to have a secure launch of application via USB-Flash Drive key implementation.</li>
              </ul>
            </article>
        </div>

        {/* Professional Certifications - . */}
        <div className="certEntries">
          <h2>Certifications</h2>
          <article className="pocket_flex">
            <h3>GitHub Foundations</h3>
            <p>
              <button className="statusIndicator"><a href="https://www.credly.com/badges/abc234d9-41f6-4534-970b-ec50dafaf260/linked_in_profile" /></button> @GitHub | 05-02-2025
            </p>
          </article>
          <article className="pocket_flex">
            <h3>UiPath Professional Automation Developer Associate</h3>
            <p>
              <button className="statusIndicator"><a href="https://credentials.uipath.com/87e59944-e467-40ef-b02b-ef656f2bf251#acc.y42KjHVc" /></button> ID. 001751 | @UiPath | 09-10-2024
            </p>
          </article>
          <article className="pocket_flex">
            <h3>UiPath Professional Automation Developer Professional</h3>
            <p>
              <button className="statusIndicator"><a href="https://credentials.uipath.com/af3c7ba7-b36f-4a8b-a90b-16d18b4fcb5b#acc.diCUfgaB" /></button> ID. 001517 | @UiPath | 10-10-2024
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Portfolio
