import React from 'react'; 
import styles from './SkillsStyles.module.css'; 
import pythonLogo from '../../assets/python.svg'; 
import javaLogo from '../../assets/Java.svg'; 
import cLogo from '../../assets/c.svg';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.svg'; 
import javascriptLogo from '../../assets/javascript.svg'; 
import linuxLogo from '../../assets/linux.png';
import bashLogo from '../../assets/bash.png';
import gitLogo from '../../assets/git.png'; 
import reactLogo from '../../assets/react.png'; 
import nodejsLogo from '../../assets/nodejs.png'; 
import matlabLogo from '../../assets/MatLab.svg'; 

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
                <img src={pythonLogo} alt="Python Logo" className={styles.skillLogo} />
                <p>Python</p>
            </div>

            <div className={styles.skillCard}>
                <img src={javaLogo} alt="Java Logo" className={styles.skillLogo} />
                <p>Java</p>
            </div>

            <div className={styles.skillCard}>
                <img src={cLogo} alt="C Logo" className={styles.skillLogo} />
                <p>C</p>
            </div>

            <div className={styles.skillCard}>
                <img src={htmlLogo} alt="HTML Logo" className={styles.skillLogo} />
                <p>HTML</p>
            </div>

            <div className={styles.skillCard}>
                <img src={cssLogo} alt="CSS Logo" className={styles.skillLogo} />
                <p>CSS</p>
            </div>

            <div className={styles.skillCard}>
                <img src={javascriptLogo} alt="Javascript Logo" className={styles.skillLogo} />
                <p>Javascript</p>
            </div>

            <div className={styles.skillCard}>
                <img src={linuxLogo} alt="Linux Logo" className={styles.skillLogo} />
                <p>Linux</p>
            </div>

            <div className={styles.skillCard}>
                <img src={bashLogo} alt="Bash Logo" className={styles.skillLogo} />
                <p>Bash</p>
            </div>

            <div className={styles.skillCard}>
                <img src={gitLogo} alt="Git Logo" className={styles.skillLogo} />
                <p>Git</p>
            </div>

            <div className={styles.skillCard}>
                <img src={reactLogo} alt="React Logo" className={styles.skillLogo} />
                <p>React</p>
            </div>

            <div className={styles.skillCard}>
                <img src={nodejsLogo} alt="Node.js Logo" className={styles.skillLogo} />
                <p>Node.js</p>
            </div>

            <div className={styles.skillCard}>
                <img src={matlabLogo} alt="Matlab Logo" className={styles.skillLogo} />
                <p>MatLab</p>
            </div>

        </div>
    </section>
  )
}

export default Skills