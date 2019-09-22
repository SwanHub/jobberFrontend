import React, { Component } from 'react'

class NewJobForm extends Component {

  state = {
    role: '',
    company_id: 1
  }

  handleChange = (event) => {
    this.setState({ role: event.target.value })
    console.log(this.state.role)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postNewJob(this.state)
    this.setState({
      role: "",
      company_id: 1
    })
  }

render(){
  return(
    <>
      <form onSubmit={this.handleSubmit}>
        <label> Role:
          <input type="text" value={this.state.role} onChange={this.handleChange} />
        </label>
        <input type="submit" value="applied!" />
      </form>
    </>
  )
}
}

export default NewJobForm;
