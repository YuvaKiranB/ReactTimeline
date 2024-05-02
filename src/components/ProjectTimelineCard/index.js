// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const GetProjectCard = props => {
  const {content} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = content

  return (
    <div className="projectCard">
      <img className="projectImage" src={imageUrl} alt="project" />
      <div className="projectHeader">
        <h1 className="projectHeading">{projectTitle}</h1>
        <div className="projectDuration">
          <AiFillCalendar className="projectDurationIcon" />
          <p className="projectDurationPara">{duration}</p>
        </div>
      </div>
      <p className="projectPara">{description}</p>
      <a className="projectUrl" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default GetProjectCard
