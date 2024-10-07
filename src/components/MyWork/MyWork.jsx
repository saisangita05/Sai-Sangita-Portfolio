import React from 'react';
import './MyWork.css';
import image1 from '../../assets/download.png';
import image2 from '../../assets/download (2).jpeg';
import image3 from '../../assets/gemini.png';
import image4 from '../../assets/myntra.png';
import image5 from '../../assets/list.jpeg';
import image6 from '../../assets/myprofile1.png';


const MyWork = () => {
    const projects = [
        {
            id: 1,
            image: image1,
            link: 'https://github.com/saisangita05/ChatBox',
            description: 'ChatBox - A real-time chat application build with react-native',
        },
        {
            id: 2,
            image: image2,
            link: 'https://github.com/saisangita05/TIC-TAC-TOE-game',
            description: 'TIC-TAC-TOE - A classic game built with JS',
        },
        {
            id: 3,
            image: image3,
            link: 'https://github.com/saisangita05/Gemini-clone/tree/master?tab=readme-ov-file',
            description: 'Gemini Clone - A replica of the Gemini website',
        },
        {
          id: 4,
          image: image4,
          link: 'https://github.com/saisangita05/myntra_hackerramp',
          description: 'Myntra Clone - A replica of the Myntra website',
      },
      {
        id: 5,
        image: image5,
        link: 'https://github.com/saisangita05/TO-DO-LIST',
        description: 'TO-DO-LIST web App',
    },
    {
      id: 6,
      image: image6,
      link: 'https://github.com/saisangita05/MyProfile',
      description: 'MyProfile',
  },
    ];

    return (
        <div className="mywork-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <div className="project-box">
                            <div className="project-description">{project.description}</div>
                            <img src={project.image} alt={`Project ${project.id}`} className="project-image" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
