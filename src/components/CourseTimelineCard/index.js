// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const GetCourseCard = props => {
  const {content} = props
  const {courseTitle, description, duration, tagsList} = content

  return (
    <div className="card1">
      <div className="courseHeader">
        <h1 className="courseHeading">{courseTitle}</h1>
        <div className="courseDuration">
          <AiFillClockCircle className="courseIcon" />
          <p className="courseDurationPara">{duration}</p>
        </div>
      </div>
      <p className="coursePara">{description}</p>
      <ul className="courseUl">
        {tagsList.map(eachItem => (
          <li className="courseLi" key={eachItem.id}>
            <p className="courseListPara">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GetCourseCard
