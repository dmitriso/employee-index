import React from "react";
// SEARCH FORM COMPONENT
function SearchForm(props) {
    return (
        <form className="container">
        <div className="form-group text-center">
          <h1 className="card">Employee-Index</h1>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For An Employee"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
          <button onClick={props.handleSortByAgeAscend} className="btn btn-primary">
            Sort By Youngest
          </button>
          <button onClick={props.handleSortByAgeDescend} className="btn btn-primary">
            Sort By Oldest
          </button>
        </div>
      </form>

    );
}

export default SearchForm;