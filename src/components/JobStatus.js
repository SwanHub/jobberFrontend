import React from 'react'

const JobStatus = (props) => {

  const { offer, reject, ghost, interview,
          intvw_rounds, compensation, personal_contact } = props.job

  const allArray = [ghost, personal_contact, interview,
          intvw_rounds, offer, compensation, reject]

  const allStrings = ["Ghost: ",
                      "Personal Contact: ",
                      "Interview: ",
                      "Rounds: ",
                      "Offer: ",
                      "Compensation: ",
                      "Rejected: "]

  const showAllArray = (array) => {
    return array.map((value, i) => {
      return(
          <p>
            <label>{allStrings[i].replace(": ", "")}
              <input type="checkbox" checked={value} value={value} />
            </label>
          </p>
      )})
  }

  // <JobCard  todo={todo} deleteTodo={this.deleteTodo}/>

  return(
    <div className="application_status">
        {showAllArray(allArray)}
    </div>
  )
}

export default JobStatus
