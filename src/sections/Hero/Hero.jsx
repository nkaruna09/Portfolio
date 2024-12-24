import React from 'react';
import styles from './HeroStyles.module.css'; 
import headshot from '../../assets/headshot.png'; 
import githubIcon from '../../assets/github-brands-solid.svg';
import linkedinIcon from '../../assets/linkedin-brands-solid.svg'; 
import emailIcon from '../../assets/envelope-solid.svg';  

function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={headshot} alt="Headshot picture of Nithika" />
        </div>

        <div className={styles.info}> 
            <h1>Nithika Karunamoorthy</h1> 
            <h2>Software Engineering & Management Student <br></br> @ McMaster University</h2>
            <span>
                <a href="https://github.com/nkaruna09" target="_blank">
                    <img src={githubIcon} alt="Github Icon" /> 
                </a>
                <a href="https://www.linkedin.com/in/nithika-karunamoorthy/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn Icon" /> 
                </a>
                <a href="mailto:nithika.karuna@gmail.com" target="_blank">
                    <img src={emailIcon} alt="Email Icon" />
                </a>
            </span>
            <p>     
                Passionate about building impactful software solutions and exploring innovative technologies.
            </p> 
            
        </div>
    </section>

  );
}

export default Hero