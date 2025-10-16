// import { useState } from 'react'
import reactLogo from '/logos/react.svg'
import viteLogo from '/logos/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>My Portfolio, Jace Zavarelli</h1>
      </div>

      <div>
        <p>WhoAmI: lorem ipsum</p>
      </div>

      <div>
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

      <div>
        <h2>Stack and Development</h2>
        <div className="stackItems">
          <img src={reactLogo} alt="React Logo" />
          <img src={viteLogo} alt="Vite Logo" />
        </div>
      </div>

      <div>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Management Science and Innovation</h3>
            <h4 className="subTitle">Software Developer | Business Analyst</h4>
            <h5 className="subTitle">Full-Time | August 2024 - September 2025</h5>
            <p>Created Automation Processes and Front-End environments based in the U.S. IRS department ecosystem within precise deadlines and while handling sensitive information with proper clearance protocols. Worked with end-users and clients to document processes needing automation solutions with technical language to bridge client-developer communication.</p>
            <div>
              <ul>
                <li></li>
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
                <li></li>
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
                <li></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div>
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
    </>
  )
}

export default App
