import React, { useState } from 'react';
import "../App.css";

const Bottom = () => {
  // ✅ State declarations for toggles
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  return (
    <div className="bottom"  id="about">
      {/* Left Side Buttons */}
      <div className="bottom-left">
        <div className="inside-left">
          <button className="scroll-button-b" onClick={() => document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })}>About</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("experience-section").scrollIntoView({ behavior: "smooth" })}>Experience</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" })}>Projects</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("techstack-section").scrollIntoView({ behavior: "smooth" })}>Tech Stack</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("education-section").scrollIntoView({ behavior: "smooth" })}>Education</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("certifications-section").scrollIntoView({ behavior: "smooth" })}>Certifications</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("research-section").scrollIntoView({ behavior: "smooth" })}>Research</button>
          <button className="scroll-button-b" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</button>
        </div>
      </div>

      {/* Right Side Sections */}
      <div className="bottom-right">
        {/* About Section */}
        <div id="about-section" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>About</h3>
          <p>I’m a passionate Full Stack Developer with a strong foundation in both frontend and backend development. I enjoy creating full-featured applications that bridge real-world problems with elegant digital solutions. My focus lies in building performance-oriented, accessible user interfaces backed by robust backend systems.</p>
          <p>Currently, I am completing my B.Tech in Computer Science Engineering at MGIT, Hyderabad. During my academic journey, I have worked on diverse projects, ranging from educational platforms to decentralized real estate applications. My experience also includes building secure smart contracts and integrating Web3 technologies like Ethereum and IPFS into full-stack applications.</p>
          <p>When I’m not coding, I’m usually exploring blockchain innovations, collaborating on open-source projects, or learning new tech stacks to broaden my horizons.</p>
          <br />
        </div>

        {/* Experience Section */}
        <div id="experience-section" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>Experience</h3>
          <p>Although I’m a fresher, I’ve built multiple real-world projects using full stack technologies. These experiences mirror professional workflows including API integration, responsive UI design, database structuring, and smart contract development.</p>
          <br />
        </div>

        {/* Projects Section */}
        <div id="projects-section" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>Projects</h3>

          {/* Project 1 */}
          <h4>📌 ADP: Educational Platform Webpage</h4>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/durgaprasad5649/adp-learning" target="_blank" rel="noopener noreferrer">
              ADP-Learning
            </a>
            <br />
            A full-stack educational portal featuring lectures, study material, and scholarship info.
          </p>
          {!showMore1 ? (
            <button onClick={() => setShowMore1(true)} className='proj-btn'>See More</button>
          ) : (
            <div>
              <p><strong>Role:</strong> Full Stack Developer</p>
              <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
              <p><strong>Description:</strong> Developed a comprehensive platform for undergraduate students to access lectures, study materials, exam guides, and career info.</p>
              <ul>
                <li>User authentication with phone number</li>
                <li>File upload/download for study materials</li>
                <li>Content sections for internships and scholarships</li>
                <li>Admin/teacher dashboard for content upload</li>
              </ul>
              <button onClick={() => setShowMore1(false)} className='proj-btn'>Show Less</button>
            </div>
          )}

          {/* Project 2 */}
          <h4>📌 ADP: Affordable Housing Platform</h4>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/durgaprasad5649/adp-homes" target="_blank" rel="noopener noreferrer">
              ADP-Homes
            </a>
            <br />
            Connects middle-income families with civil engineering students offering design proposals.
          </p>
          {!showMore2 ? (
            <button onClick={() => setShowMore2(true)} className='proj-btn'>See More</button>
          ) : (
            <div>
              <p><strong>Role:</strong> Full Stack Developer</p>
              <p><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MySQL, JWT</p>
              <p><strong>Description:</strong> Platform enabling homeowners to request custom home designs and receive proposals from student engineers.</p>
              <ul>
                <li>Role-based login for homeowners and engineers</li>
                <li>Proposal system with attachments and pricing</li>
                <li>Secure AES-encrypted messaging</li>
                <li>Dashboard for managing project interactions</li>
              </ul>
              <button onClick={() => setShowMore2(false)} className='proj-btn'>Show Less</button>
            </div>
          )}

          {/* Project 3 */}
          <h4>📌 ADP: BLOCK BUILD – Real Estate DApp</h4>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/durgaprasad5649/realestate-dapp" target="_blank" rel="noopener noreferrer">
              RealEstate-DApp
            </a>
            <br />
            Decentralized property listing and transfer using Ethereum smart contracts.
          </p>
          {!showMore3 ? (
            <button onClick={() => setShowMore3(true)} className='proj-btn'>See More</button>
          ) : (
            <div>
              <p><strong>Role:</strong> Blockchain & Frontend Developer</p>
              <p><strong>Tech Stack:</strong> Solidity, Hardhat, React.js, MetaMask, IPFS, Ethers.js</p>
              <p><strong>Description:</strong> A decentralized real estate platform to list, buy, and transfer properties with full blockchain transparency.</p>
              <ul>
                <li>Property listing with price, image, and ownership proof</li>
                <li>MetaMask wallet integration for transactions</li>
                <li>IPFS for decentralized document storage</li>
                <li>Smart contracts for escrow and transfer</li>
              </ul>
              <button onClick={() => setShowMore3(false)} className='proj-btn'>Show Less</button>
            </div>
          )}
        </div>

       <div id="techstack-section" className="data-section">
  <h3 style={{ fontSize: "4vh" }}>🚀 Tech Stack I Work With</h3>

  <p><strong>Frontend:</strong></p>
  <div className="tech-stack-row">
    <span className="tech-badge">React.js</span>
    <span className="tech-badge">HTML5</span>
    <span className="tech-badge">CSS3</span>
    <span className="tech-badge">JavaScript (ES6+)</span>
  </div>

  <p><strong>Backend:</strong></p>
  <div className="tech-stack-row">
    <span className="tech-badge">Node.js</span>
    <span className="tech-badge">Express.js</span>
  </div>

  <p><strong>Database:</strong></p>
  <div className="tech-stack-row">
    <span className="tech-badge">MongoDB</span>
    <span className="tech-badge">MySQL</span>
  </div>

  <p><strong>Tools, Libraries & Others:</strong></p>
  <div className="tech-stack-row">
    <span className="tech-badge">GitHub</span>
    <span className="tech-badge">JWT</span>
    <span className="tech-badge">REST APIs</span>
    <span className="tech-badge">Solidity</span>
    <span className="tech-badge">Hardhat</span>
    <span className="tech-badge">VS Code</span>
  </div>
  <br />
</div>


        {/* Education */}
      <div id="education-section" className="data-section">
  <h3 style={{ fontSize: "4vh" }}>Education</h3>

  {/* B.Tech */}
  <p>
    <strong>B.Tech in Computer Science Engineering</strong><br />
    Mahatma Gandhi Institute of Technology (MGIT), Hyderabad<br />
    Dec 2021 – Present | CGPA: <strong>7.9/10</strong><br />
    ● Active member of Coding Club, MGIT<br />
    ● Volunteer at NSS MGIT Chapter<br />
    ● Participated in various tech and non-tech events organized by CSE/IT department
  </p>
  <br />

  

  {/* Intermediate */}
  <p>
    <strong>Intermediate (MPC)</strong><br />
    Sri Chaitanya Junior College, Hyderabad<br />
    June 2019 – June 2021 | Percentage: <strong>98.2%</strong>
  </p>
  <br />

  {/* SSC */}
  <p>
    <strong>Secondary School Certificate (SSC)</strong><br />
    Telangana State Model School, Lothukunta, Hyderabad<br />
    June 2018 – March 2019 | GPA: <strong>9.5/10</strong>
  </p>
  <br />
</div>

        {/* Certifications */}
        <div id="certifications-section" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>Certifications</h3>
          <p>
            <strong>Front-End Web Development</strong> – Udemy (Feb 2024)<br />
            Certificate ID: UC-4172e620-6607-41d5-ad04-c2ff1b51e94d
          </p><br />
        </div>

        {/* Research */}
        <div id="research-section" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>Research Publication</h3>
          <p>
            <strong>BLOCK BUILD: Affordable Home Building and Blockchain-Based Real Estate Platform</strong><br />
            Published in IJFMR – 2024
          </p><br />
        </div>

        {/* Contact */}
        <div id="contact" className="data-section">
          <h3 style={{ fontSize: "4vh" }}>Contact & Social</h3>
          <ul>
            <li><strong>GitHub:</strong> <a href="https://github.com/durgaprasad5649" target="_blank" rel="noopener noreferrer">github.com/durgaprasad5649</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/durga-prasad-uddagiri" target="_blank" rel="noopener noreferrer">linkedin.com/in/durga-prasad-uddagiri</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/dasarpagrud" target="_blank" rel="noopener noreferrer">instagram.com/dasarpagrud</a></li>
            <li><strong>Email:</strong> <a href="mailto:durgaprasaduddagiri@gmail.com">durgaprasaduddagiri@gmail.com</a></li>
          </ul><br />
        </div>
      </div><br></br>
    </div>
  );
};

export default Bottom;
