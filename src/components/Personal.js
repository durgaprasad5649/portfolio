import React, { useState, useEffect } from 'react';
import './Personal.css';

const Personal = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 3 minutes in seconds
  const [showWriting, setShowWriting] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowWriting(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="personal-section">
      <div className="personal-flex">
        {/* Left: Image */}
        <div className="personal-image-container">
          <img src="p1.jpg" alt="Profile" className="personal-image" />
        </div>

        {/* Right: About and Belief */}
        <div className="personal-text-content">
          <h1 className="section-title">About Me</h1>
          <p className="about-text">
            I'm <strong>Durga Prasad Uddagiri</strong>, a passionate Full Stack Developer with a creative edge and a purpose-driven mindset. <br />
            I specialize in building modern web applications using the <strong>MERN stack</strong> and am currently expanding my skills in <strong>Blockchain development</strong>. <br />
            Alongside tech, I’m deeply connected to nature, storytelling, and self-growth.
          </p>

          <h2 className="section-subtitle">💡 Belief</h2>
          <blockquote className="belief-quote">
            "I believe in doing things fast — with clarity and courage." <br />
            We live in a world that’s always running. Waiting too long or overthinking every step often means falling behind. <br />
            I believe in taking action — quick, decisive, and bold. Even if I fall, I fall ahead of the person who hasn’t started yet. <br />
            Every mistake becomes a lesson, every setback becomes a setup for a stronger comeback. <br />
            Whether it's building an app or making a life decision, I trust momentum. <br />
            Because experience comes from movement — and I choose to move forward.
          </blockquote>
        </div>
      </div>

      {/* Career Goals */}
      <h2 className="section-subtitle">🎯 Career Goals</h2>
      <p className="goal-text">
        In the coming years, I aspire to grow into a <strong>Blockchain Developer</strong>, combining my current expertise in Full Stack Development with the power of decentralized technologies. <br />
        I’m actively learning more about blockchain architecture, smart contracts, and secure transaction systems, with a clear goal in mind: <br />
        To build transparent, tamper-proof, and people-centric applications that empower trust in the digital world.
      </p>
      <p className="career-quote">
        “In a world full of fragile systems, I want to build unbreakable trust through technology.”
      </p>

      {/* Hobbies */}
      <h2 className="section-subtitle">🎯 My Hobbies</h2>
      <ul className="hobby-list">
        <li>🌐 Exploring New Web Technologies</li>
        <li>🎬 Watching Telugu Movies</li>
        <li>🎧 Listening to Podcasts</li>
        <li>🌾 Spending Time in the Fields</li>
        <li>✍️ Writing Books</li>
        <li>🧑‍🤝‍🧑 Meaningful Conversations with Friends</li>
        <li>🏏 Watching Cricket Occasionally</li>
      </ul>

      {/* Side Project */}
      <h2 className="section-subtitle">🧩 Side Project</h2>
      <div className="project-box">
        <h3 className="project-title">🌾 Dharithri Saram</h3>
        <p className="project-text">
          A platform connecting users with organic products directly from local farms. <br />
          <strong>Focus:</strong> Healthy living, farmer empowerment, and transparent supply chains. <br />
          <strong>Tech Stack:</strong> MERN, JWT Auth, MySQL, exploring blockchain integration for traceability.
        </p>
      </div>

      {/* Timer & Writings Section */}
      {!showWriting && (
        <div className="timer-section">
          <p className="timer-text">⏳ Revealing "My Writings" in: <strong>{formatTime(timeLeft)}</strong></p>
        </div>
      )}

      {showWriting && (
        <div className="writing-section">
          <h2 className="section-subtitle">✍️ My Writings</h2>
          <p className="writing-text">
            I love to write about the small things that often go unnoticed — emotions, silence, and the unspoken stories of everyday people. <br />
            My writing reflects both my passion for technology and my sensitivity to human experience. <br />
            Whether it’s a poem, a personal blog, or thoughts on life and purpose — every word I write is a piece of me.
          </p>
          <blockquote className="writing-quote">
            "Some stories don’t need to be perfect — they just need to be real."
          </blockquote>
          <br></br>
        <div className="download-container">
      <h2>Download PDFs</h2>

      <a href="/a.pdf" download className="download-link">
        A thread through her heart - a love story of two young people
      </a>
      <br />
      <a href="/b.pdf" download className="download-link">
        Child abuse
      </a>
    </div>
        </div>
      )}
    </div>
  );
};

export default Personal;
