import React from "react";

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
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

    );
}

export default SearchForm;