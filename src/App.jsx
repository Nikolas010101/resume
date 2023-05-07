import "../src/styles.css";
import foto from "../src/img/foto.jpg";
import linkedin from "../src/img/linkedin.svg";
import github from "../src/img/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import hsbc from "../src/img/hsbc.png";
import scania from "../src/img/scania.jpg";
import etec from "../src/img/etec.jpg";
import ufabc from "../src/img/ufabc.png";
import Skill from "./components/Skill";

function App() {
    return (
        <div className="App">
            <div className="grid-container">
                <div className="header">
                    <img className="foto" src={foto} alt="" />
                    <div className="about-container">
                        <h1 className="about">About Me</h1>
                        <section>
                            <article className="about-text">
                                <p>Mandarin Chinese and engineering student, electronics technician, and intern at HSBC.</p>
                                <p>Very interested in technology, programming and finance, currently an operations intern at HSBC's Vila Olímpia office where I help automate processes and perform tasks related to the daily routine of the bank.</p>
                            </article>
                        </section>
                    </div>
                    <div className="links">
                        <h1>Links</h1>
                        <section className="link-img-container">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nikolas-avelino-grande-0953b8196/">
                                <img className="link-img" src={linkedin} alt="" />
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/Nikolas010101">
                                <img className="link-img" src={github} alt="" />
                            </a>
                        </section>
                    </div>
                </div>
                <div className="content">
                    <section className="basic-info">
                        <div className="name-div">
                            <h1 className="name">Nikolas Avelino Grande</h1>
                            <h2 className="description">Engineering student, operations intern and tech savvy</h2>
                        </div>
                        <div className="infos">
                            <article className="info">
                                <FontAwesomeIcon icon={faMapMarkerAlt} color="#ffff" fontSize="24px" />
                                <p className="info-text">São Paulo, São Caetano do Sul</p>
                            </article>
                            <article className="info">
                                <FontAwesomeIcon icon={faPhone} color="#ffff" fontSize="24px" />
                                <p><a href="tel:11957896290" className="info-text">11-95789-6290</a></p>
                            </article>
                            <article className="info">
                                <FontAwesomeIcon icon={faEnvelope} color="#ffff" fontSize="24px" />
                                <p><a href="mailto:nik.grande@hotmail.com" className="info-text">nik.grande@hotmail.com</a></p>
                            </article>
                        </div>
                    </section>
                    <section className="skills">
                        <h2 className="sub-header">Experience</h2>
                        <div className="skill-container">
                            <article className="skill">
                                <img className="skill-img" src={hsbc} alt="" />
                                <div className="inner-skill">
                                    <h3 className="skill-title">Cross Product Services Operations Intern</h3>
                                    <h4 className="skill-period">April 2023 - Present</h4>
                                    <p className="skill-text">I'm part of the Cross Product Services Operations team, I focus on bank reconciliation and generating reports regarding the bank's accounts. Additionally, I automate tasks to increase efficiency and reduce errors.</p>
                                </div>
                            </article>
                            <article className="skill">
                                <img className="skill-img" src={scania} alt="" />
                                <div className="inner-skill">
                                    <h3 className="skill-title">Industrial Automation and Data Science Intern</h3>
                                    <h4 className="skill-period">February 2022 - March 2023</h4>
                                    <p className="skill-text">I extracted, analyzed, processed and presented data from the production process, creating tools for
                                        data driven decision making, I also supported other areas with the information they needed.</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <div className="skills-education">
                        <section className="skills">
                            <h2 className="sub-header">Education</h2>
                            <div className="skill-container">
                                <article className="skill">
                                    <img className="skill-img" src={ufabc} alt="" />
                                    <div className="inner-skill">
                                        <h3 className="skill-title">Control and Automation Engineering</h3>
                                        <h4 className="skill-period">June 2019 - December 2024</h4>
                                    </div>
                                </article>
                                <article className="skill">
                                    <img className="skill-img" src={etec} alt="" />
                                    <div className="inner-skill">
                                        <h3 className="skill-title">Electronics Technician</h3>
                                        <h4 className="skill-period">February 2016 - December 2018</h4>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <section className="skills skills-grid">
                            <h2 className="sub-header">Skills</h2>
                            <div className="skill-container">
                                <Skill level={5} text="English" />
                                <Skill level={2} text="Chinese" />
                                <Skill level={4} text="Excel" />
                                <Skill level={4} text="VBA" />
                                <Skill level={4} text="Web Dev" />
                                <Skill level={5} text="Python" />
                                <Skill level={4} text="Data Analysis" />
                                <Skill level={4} text="SQL" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
