import React from 'react'; 
import styles from './ProjectsStyles.module.css'; 
import conversify from '../../assets/Conversify.png'; 
import CNN from '../../assets/CNN_Google_Speech_Commands.png';
import budgeting_system from '../../assets/budgeting_system.png'; 
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}> 
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}> 
           <ProjectCard 
               src={conversify} 
               link="https://github.com/nkaruna09/Conversify" 
               h3={"Conversify"} 
               p={"Multi-language conversation simulator developed with React, Flask, and Cohere LLM for dynamic, AI-driven dialogue."}
           />

            <ProjectCard 
               src={budgeting_system} 
               link="https://github.com/nkaruna09/student-budgeting-app" 
               h3={"Student Budgeting App"} 
               p={"Text-based student budgeting app developed using Linux, C, Bash, and Git, designed to help students effectively manage their finances."}
           /> 

           <ProjectCard 
               src={CNN} 
               link="https://github.com/nkaruna09/CNN-google-speech-commands" 
               h3={"Convolutional Neural Network"} 
               p={"CNN built with Python, Keras, and TensorFlow to recognize Google Speech Commands, using NumPy, Matplotlib, and Pandas for analysis."}
           /> 

        </div>
    </section>
  ); 
}

export default Projects;
