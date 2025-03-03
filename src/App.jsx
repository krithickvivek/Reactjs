import './App.css'

function App() {
  return (
    <>
      <header className="header">
        
        <div className="logo">KRITHICK VIVEK</div>
        <nav className="nav-links">
            <a href="1">EDUCATION</a>
            <a href="2">SKILLS</a>
            <a href="3">EXPERIENCE</a>
            <a href="4">PROFILE</a>
            <a href="5">PORTFOLIO</a>
            <a href="6">CLIENTS</a>
            <a href="7">CONTACT</a>
        </nav>
    </header>
    
    <section className="hero">
        <div className="hero-content">
            <h1>HI<span>,</span> I AM <br /> KRITHICK<span>.</span></h1>
            <p>Artificial Intelligence and Machine Learning Engineer</p>
            <a href="8" className="resume-btn">Download Resume</a>
        </div>
    </section>
    <section className="about-section">
        <h2>ABOUT ME</h2>
        <div className="about-content">
            <div className="about-text">
                <p>
                    I am Krithick Vivek, an aspiring AI and Machine Learning Engineer passionate about leveraging technology 
                    to solve real-world problems. I have a strong foundation in data science, automation, and cryptography, 
                    and I love exploring new advancements in artificial intelligence.
                </p>
                <p>
                    I have completed various certifications in data science, cryptography, and robotic process automation. 
                    My expertise includes Python, JavaScript, SQL, and working with AI-based frameworks.
                </p>
                <div className="contact-info">
                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p>+91 7550034925</p>
                    </div>
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p>krithickvivek@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h4>Website</h4>
                        <p>www.krithickvivek.com</p>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src="/Images/LatestPic.jpg" alt="Krithick Vivek" />
                <div className="social-links">
                    <a href="https://github.com/krithickvivek" target="_blank">🔗 GitHub</a>
                    <a href="https://www.linkedin.com/in/krithick-vivek-8934642b2/" target="_blank">🔗 LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
    <section className="education-section">
        <h2>EDUCATION</h2>
        <div className="timeline">
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2018 - 2023</strong><br /><br /><br />8th to 12th Grade<br />Velammal Bodhi Campus</p>
            </div>
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2023 - 2027 (Pursuing)</strong><br /><br /><br />B.Tech AIML<br />Saveetha Engineering College</p>
            </div>
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2028 - 2030 (Future Plan)</strong><br /><br /><br />Master's Degree<br />Harvard University, USA</p>
            </div>
        </div>
    </section>
    <section className="skills-section">
        <h2>SKILLS</h2>
        <div className="skills-container">
            <div className="skills-column">
                <div className="skill">
                    <p>Python Programming</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '90%'}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Data Structure Algorithm</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '85%'}}></div>
                        <span className="progress-percentage">85%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Java OOPS</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '97%'}}></div>
                        <span className="progress-percentage">97%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>C Programming Language</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width : '90%'}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
            </div>
            <div className="skills-column">
                <div className="skill">
                    <p>Full Stack</p>
                    <div className="progress-bar">
                        <div className="progress-fill"  style={{width:'90%'}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>ML Algorithms</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '85%'}}></div>
                        <span className="progress-percentage">85%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Communication</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '97%'}}></div>
                        <span className="progress-percentage">97%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Creativity</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: '90%'}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section">
        <div className="contact-section-title">
            <h2>CONTACT ME</h2>
        </div>
        <div className="contact-section-content">
            <form>
                <div className="name-email">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" id="Subject" />
                <input type="text" placeholder="Message" id="message" />
                <button>Submit</button>
            </form>
            <div className="contact-details">
                <div className="line-1">
                    <h1>Krithick</h1>
                    <p>Engineer</p>
                </div>
                <div className="line-1">
                    <h1>Phone</h1>
                    <p>+91 7550034925</p>
                </div>
                <div className="line-1">
                    <h1>Email</h1>
                    <p>krithickvivek@gmail.com</p>
                </div>
                <div className="line-1">
                    <h1>Website</h1>
                    <p>www.krithickvivek.com</p>
                </div>
                <div className="socials">
                    <img src="/Images/insta.jpg" width="50px" alt="instagram-logo" />
                    <img src="/Images/whatsapp.jpg" width="50px" alt="whatsapp-logo" />
                    <img src="/Images/x.jpg" width="45px" alt="x-logo" />
                    <img src="/Images/pin.jpg" width="45px" alt="pinterest-logo" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default App
