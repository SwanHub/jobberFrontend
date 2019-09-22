import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter.js'
import JobCardContainer from './components/JobCardContainer.js'
import NewJobForm from './components/NewJobForm.js'

class App extends Component {
  state = {
    allJobInfo: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(results => this.setState({
        allJobInfo: results
      }))
  }

  postNewJob = (newJob) => {
    fetch('http://localhost:3000/jobs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    })
    .then(response => response.json())
    .then(result => {
            console.log(result)
            this.setState({
              allJobInfo: [...this.state.allJobInfo, result.job]
            })
          }
        )
  }

  render(){
    return (
      <div className="everything_container">
        <Filter />
        <NewJobForm postNewJob={this.postNewJob}/>
        <JobCardContainer allJobInfo={this.state.allJobInfo} />
      </div>
    );
  }
}

export default App;
