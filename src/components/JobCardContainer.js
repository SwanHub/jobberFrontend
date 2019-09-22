import React from 'react'
import JobCard from './JobCard.js'

const JobCardContainer = (props) => {

  const mapThroughJobs = () => {
    return props.allJobInfo.map((job, i) => (
      <p><JobCard job={job}/></p>
    ))
  }
  return(
    <div>
      {mapThroughJobs()}
    </div>
  )
}

export default JobCardContainer
