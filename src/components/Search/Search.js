import React from "react";

function Search(props) {
    return (
        <div>
            <form className="form">
                <input
                    name="search"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Search By Name"
                />
            </form>
        </div>
    )
}

export default Search;