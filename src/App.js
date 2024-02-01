import './App.css';
import NameSection from './components/NameSection';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracaricular from './components/Extracaricular';
import names from './data/NamesectionData';
import interests from './data/InterestsData';
import skills from './data/SkillsData';
import educationSection from './data/EducationData';
import experiences from './data/ExperienceData';
import extracaricular from './data/ExtracaricularData';


function App() {
  return (
    <>
    <div className='header'/>
    <div className='left'/>
    <div className='stuff'>
    
    <div >Resume</div>
    {
      names.map(names=><NameSection 
        name={names.name} ></NameSection>
        )
    }
    <div style={{marginTop:"1rem"}}>Interests</div>
    {
       interests.map(interest=><Interests 
        interests={interest.interest}
        ></Interests>
        )

    }
    <hr />
    <div style={{marginTop:"1rem"}}>Skills</div>
    {
      skills.map(skill=><Skills
        skill={skill.skill}
        ></Skills>
        )

    }
    <hr />
    <div style={{marginTop:"1rem"}}>Education</div>
    {
      educationSection.map(education=><Education
        link={education.link}
        education={education.education}
        >
        </Education>)

    }
    <hr/>
    {experiences.length>0 &&( 
    <div style={{marginTop:"1rem"}}>Experience</div>)}
       {
        experiences.map(experience=><Experience
          experience={experience.experience}
          ></Experience>)

       }

    {experiences.length>0 &&(<hr/>)}

    <div style={{marginTop:"1rem"}}>Extracaricular</div>
       {
        extracaricular.map(extracaricular=><Extracaricular
          extracaricular={extracaricular.extra}
          ></Extracaricular>)

       }

    <hr/>
    
     
    
    

    </div>
    </>
  );
}

export default App;
