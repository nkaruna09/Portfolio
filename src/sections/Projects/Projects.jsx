import React from 'react'; 
import styles from './ProjectsStyles.module.css'; 
import conversify from '../../assets/Conversify.png'; 
import CNN from '../../assets/CNN_Google_Speech_Commands.png';
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
               p={"Multi-language conversation simulator built using React, Flask, and Cohere LLM"}
           />
           <ProjectCard 
               src={CNN} 
               link="https://github.com/nkaruna09/CNN-google-speech-commands" 
               h3={"CNN Google Speech Commands"} 
               p={"Convolutional Neural Network to identify Google Speech Commands built using Python, Keras, TensorFlow, NumPy, Matplotlib, Pandas"}
           /> 
        </div>
    </section>
  ); 
}

export default Projects;
