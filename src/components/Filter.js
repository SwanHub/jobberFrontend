import React from 'react'

const Filter = (props) => {
  return(
    <div className="top_filter">
      <form>
        <label>Personal Contact
          <input type="checkbox" unchecked/>
        </label>
        <label>Interviewed
          <input type="checkbox" unchecked/>
        </label>
        <label>Rejected
          <input type="checkbox" unchecked/>
        </label>
          <input type="submit" value="filter"/>
      </form>
    </div>
  )
}

export default Filter;
