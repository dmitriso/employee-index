import React from "react";

function SearchForm() {
    return (
        <div class="container">
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Employee-Index</span>
            </nav>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>

    );
}

export default SearchForm;