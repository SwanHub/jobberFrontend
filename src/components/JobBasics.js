import React from 'react'

const JobBasics = (props) => {

  const { company_name, role, city, state, created_at } = props.job
  const allArray = [company_name, role, city, state, created_at]
  const showBasics = (array) => {
    return array.map((info, i) => {
      return info ? <p>{String(info)}</p> : null
    })
  }

  // let date = new Date(site.created_at)
  // date.toDateString()

  // <JobCard  todo={todo} deleteTodo={this.deleteTodo}/>
  return(
    <div className="job_basics">
      {showBasics(allArray)}
    </div>
  )
}

export default JobBasics;
