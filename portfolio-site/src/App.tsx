/* Stack Item Images */
import reactLogo from '/logos/stack-react.svg'
import viteLogo from '/logos/stack-vite.svg'
import springLogo from '/logos/stack-spring.svg'
import mavenLogo from '/logos/stack-maven.svg'
import mongoLogo from '/logos/stack-mongod.svg'
import bootstrapLogo from '/logos/stack-bootstrap.svg'
import sassLogo from '/logos/stack-sass.svg'

/* Language Item Images */


/* Tool Item Images */

/* Libraries and CSS */
import './App.css'

import { useState } from 'react'

/* Constants and Variables */
let positions: string[] = [
  "Software Developer",
  "Software Engineer",
  "Full Stack Developer",
  "Game Developer",
];

function titleRandomizer()
{
  const index: number = Math.floor(Math.random() * positions.length);
  const output: string = positions[index];

  return output;
}

function App() {

  return (
    <>


      <div className="mainTitle">
        <h1>Jace Zavarelli,  <span className="positionTitle text-green-500">{titleRandomizer()}</span></h1>
      </div>

      <div className="aboutEntries">

        <div className="aboutMe">
          <h2>WhoAmI</h2>
          <p>
            I am Jace Zavarelli, a Software Developer and Designer with an interest and hobby in Game Development! I love to build systems that are complex and innovative in any space I enter, a user-oriented and collaborative development environment creates the strongest of systems!
          </p>
          <p>
            With my 4+ years of educational and internship experience, along with the last year of career work, I have developed software for ASM micro-PCB applications and designed Front-End environments to feature API integration and React functionality. I am a developer who knows the versatility of researching language documentation effectively while throwing solutions at the wall to create solutions with a speedy-learning outlook. I enjoy working with teams and collaborating in the workspace, but I am experienced as a solo developer who is never afraid to ask for assistance on problems!
          </p>
          <p>
            I am still learning and love to so every day, be it working with Arch Linux as my main operating system, or building custom websites for my personal projects. Every time I get a chance to learn and grow, I become a stronger developer who can implement new ideas and practice my innovative abilities. I hope to land in a spot where I can show that knowledge but also learn from people equally or more experienced than me. 
          </p>
          <p>
            Feel free to reach out! I am open to collaboration or trying new opportunities in the development space!
          </p>
        </div>

        <div className="aboutBox rounded-xl outline-black/4 bg-slate-500">
          <p>
            Focus: Software Engineering, UX UI Design, Full Stack Development, System Software Integration
          </p>
          <p>
            Toolset: Arch Linux, Linux Server Interfaces, Visual Studio Code, IntelliJ, UiPath Suite
          </p>
          <p>
            Languages: Java, Javascript, Typescript, Bash, C, C#, GDscript
          </p>
          <p>
            Specialty: Building Front-End Systems and Designing Custom Software Solutions
          </p>
        </div>

      </div>


      <div className="projectEntries">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Personal Portfolio</h3>
            <h4 className="subTitle">09-2025 \\ PRESENT</h4>
            <p>A fun look and feel into the mind of a software and game developer. Portfolio, WhoAmI, and Development Timeline.</p>
          </li>
          <li>
            <h3>T.A.P.S IRS Timekeeping System</h3>
            <h4 className="subTitle">05-2025 \\ 09-2025</h4>
          </li>          
          <li>
            <h3>Recursive-Descent Compiler Senior Capstone</h3>
            <h4 className="subTitle">01-2023 \\ 05-2023</h4>
            <p>Custom transpiled language called "Catscript" built on a Java Bytecode encapsulator using the Recursive Descent process of development.</p>
          </li>
          <li>
            <h3>Little-Man Stack Machine Junior Project</h3>
            <h4 className="subTitle">079-2022 \\ 12-2022</h4>
            <p>A C-based Stack machine built to replicate the 1970 Little Man Computer that led the computer revolution of software development.</p>
          </li>
        </ul>
      </div>


      <div className="stackEntries">
        <h2>Experience and Tools</h2>

        <div className="stackItems flex gap-x-1">
          <img src={reactLogo} alt="React Logo" />
          <img src={viteLogo} alt="Vite Logo" />
          <img src={springLogo} alt="Spring Logo" />
          <img src={mavenLogo} alt="Maven Logo" />
          <img src={mongoLogo} alt="MongoDB Logo" />
          <img src={bootstrapLogo} alt="Bootstrap Logo" />
          <img src={sassLogo} alt="Sass Logo" />
        </div>

        <div className="langItems flex gap-x-1">
          <img src={reactLogo} alt="React Logo" />
          <img src={viteLogo} alt="Vite Logo" />
          <img src={springLogo} alt="Spring Logo" />
          <img src={mavenLogo} alt="Maven Logo" />
          <img src={mongoLogo} alt="MongoDB Logo" />
          <img src={bootstrapLogo} alt="Bootstrap Logo" />
          <img src={sassLogo} alt="Sass Logo" />
        </div>

        <div className="toolItems flex gap-x-1">
          <img src={reactLogo} alt="React Logo" />
          <img src={viteLogo} alt="Vite Logo" />
          <img src={springLogo} alt="Spring Logo" />
          <img src={mavenLogo} alt="Maven Logo" />
          <img src={mongoLogo} alt="MongoDB Logo" />
          <img src={bootstrapLogo} alt="Bootstrap Logo" />
          <img src={sassLogo} alt="Sass Logo" />
        </div>
      </div>


      <div className="experEntries">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Management Science and Innovation</h3>
            <h4 className="subTitle">Software Developer | Business Analyst</h4>
            <h5 className="subTitle">Full-Time | August 2024 - September 2025</h5>
            <p>Created Automation Processes and Front-End environments based in the U.S. IRS department ecosystem within precise deadlines and while handling sensitive information with proper clearance protocols. Worked with end-users and clients to document processes needing automation solutions with technical language to bridge client-developer communication.</p>
            
            <div>
              <ul>
                <li>Designed Front-End systems with React.js on a Spring Boot 3 stack for T.A.P.S environment.</li>
                <li>Developed Robotic Processing Automation with UiPath Suite for end-user client projects.</li>
                <li>Developed software solutions using C# to process legacy files and digitize archive files.</li>
                <li>Documented official files for projects and automation's while coordinating with clients and developers.</li>
                <li>Worked with clients to translate and communicate changes or designs to developers on processes.</li>
              </ul>
            </div>

          </li>
          <li>
            <h3>I.P.A.L Human Interaction Lab, Montana State University</h3>
            <h4 className="subTitle">Software Developer</h4>
            <h5 className="subTitle">Part-Time | November 2020 - January 2024</h5>
            <p>Created 3D environments and immersive simulations mounted on augmented, mixed, and virtual reality environments, integrating UX designs to guide users through cognitive behavioral therapy.</p>

            <div>
              <ul>
                <li>Developed Unity 3D Beach Simulation Environment.</li>
                <li>Integrated Breathing Simulations for Biofeedback interaction and cognitive behavioral therapy, based on UX Designs.</li>
                <li>Implemented Python Libraries for Biofeedback device monitoring systems.</li>
                <li>Setup and Implemented software on Virtual, Augmented, and Mixed Reality Devices.</li>
              </ul>
            </div>
            
          </li>
          <li>
            <h3>TrialWear Technologies, Montana State University</h3>
            <h4 className="subTitle">Java Software Developer</h4>
            <h5 className="subTitle">Part-Time | May 2022 - August 2022</h5>
            <p>Formulated initial concepts and software for the company device to function and be expanded upon in future developments.</p>

            <div>
              <ul>
                <li>Designed UI/UX systems with proper engineering principles and UML Diagraming.</li>
                <li>Implemented OOP techniques in the Java language to create a GUI and user interface.</li>
                <li>Integrated systems to have a secure launch of application via USB-Flash Drive key implementation.</li>
              </ul>
            </div>

          </li>
        </ul>
      </div>


      <div className="certEntries">
        <h2>Certifications</h2>
        <ul>
          <li>
            <h3>GitHub Foundations</h3>
            <h4 className="subTitle">@ GitHub | 05-02-2025 <a href="https://www.credly.com/badges/abc234d9-41f6-4534-970b-ec50dafaf260/linked_in_profile">LINK</a></h4>
          </li>
            <li>
            <h3>UiPath Professional Automation Developer Associate ID. 001751</h3>
            <h4 className="subTitle">@ UiPath | 09-10-2024 <a href="https://credentials.uipath.com/87e59944-e467-40ef-b02b-ef656f2bf251#acc.y42KjHVc">LINK</a></h4>
          </li>
            <li>
            <h3>UiPath Professional Automation Developer Professional ID. 001517</h3>
            <h4 className="subTitle">@ UiPath | 10-10-2024 <a href="https://credentials.uipath.com/af3c7ba7-b36f-4a8b-a90b-16d18b4fcb5b#acc.diCUfgaB">LINK</a></h4>
          </li>
        </ul>
      </div>

    <footer>
      FOOT
    </footer>

    </>
  )
}

export default App
