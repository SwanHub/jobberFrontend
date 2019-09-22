import React from 'react'
import JobBasics from './JobBasics.js'
import JobStatus from './JobStatus.js'

const JobCard = (props) => {

  return(
    <div className="job_container">
      <JobBasics job={props.job}/>
      <JobStatus job={props.job}/>
    </div>
  )
}

export default JobCard
