// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import GetCourseCard from '../CourseTimelineCard'
import GetProjectCard from '../ProjectTimelineCard'
import './index.css'

class timelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">
            MY JOURNEY OF <br /> <span className="span">CCBP 4.0</span>
          </h1>

          <div className="chronoContainer">
            <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
              {timelineItemsList.map(eachItem => {
                if (eachItem.categoryId === 'COURSE') {
                  return <GetCourseCard content={eachItem} key={eachItem.id} />
                }
                if (eachItem.categoryId === 'PROJECT') {
                  return <GetProjectCard content={eachItem} key={eachItem.id} />
                }
                return null
              })}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default timelineView
