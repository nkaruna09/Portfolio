import React from 'react'; 
import styles from './ProjectsStyles.module.css'; 
import conversify from '../../assets/Conversify.png'; 
import CNN from '../../assets/CNN_Google_Speech_Commands.png';
import budgeting_system from '../../assets/budgeting_system.png'; 
import ProjectCard from '../../common/ProjectCard';
import Q_arm from '../../assets/QArm-07-700x766.jpg'; 
import UpRight from '../../assets/UPRight posture.png';
import NutriSafe from '../../assets/NutriSafe_cover_1.png';  
import recycling from '../../assets/Recycling.webp'; 

function Projects() {
  return (
    <section id="projects" className={styles.container}> 
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}> 

          <ProjectCard 
               src={NutriSafe} 
               link="https://github.com/nkaruna09/NutriSafe" 
               h3={"NutriSafe"} 
               p={"NutriSafe is an AI-powered food safety assistant built with Streamlit, Python, and Cohere NLP models, using Open Food Facts and Spoonacular APIs to assess food safety based on user-specific conditions."}
           />

          <ProjectCard 
               src={UpRight} 
               link="https://github.com/nkaruna09/Conversify" 
               h3={"UpRight"} 
               p={"Chrome extension built with JavaScript, HTML, and CSS that sends posture reminders every 20 minutes and offers real-time posture analysis using Python, Flask, and Mediapipe for a healthier, pain-free lifestyle."}
           />

           <ProjectCard 
               src={conversify} 
               link="https://github.com/nkaruna09/Conversify" 
               h3={"Conversify"} 
               p={"Multi-language conversation simulator developed with React, Flask, and Cohere LLM, offering dynamic, AI-driven dialogue with varying difficulty levels for an interactive experience."}
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

            <ProjectCard 
               src={Q_arm} 
               link="https://best-verdict-aa5.notion.site/Design-Project-2-c4a89210af48429a924743b47c5b248b" 
               h3={"Get-a-Grip"} 
               p={"Computer program designed using Python and Quanser Labs for controlling movement of a robotic arm to pick up and transfer a container into an autoclave for sterilization."}
           /> 
            
            <ProjectCard 
               src={recycling} 
               link="https://best-verdict-aa5.notion.site/Design-Project-3-ba9576dbf64948f2aa6652617c19c4d7" 
               h3={"Recycling System"} 
               p={"Protyped a mechanism that sorts and disposes of containers into their respective bins using a hopper, designed with AutoCAD and PursaSlicer for precision and efficiency."}
           /> 

        </div>
    </section>
  ); 
}

export default Projects;
