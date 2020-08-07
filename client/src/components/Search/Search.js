import React from 'react';

const Search = (props) => {
    return (
        <div>
             <form>
            <div className="form-group">
                <div className=""><h3>Search For a Book</h3></div>
                <br></br>
                <input className="col-12 "
                    value={props.search}
                    type="text"
                    name=""
                    placeholder=""
                    onChange=""
                />
            </div>
            <button type="submit" className=" btn btn-primary" onClick="">
                Submit
            </button>
        </form>
        </div>
    );
};

export default Search;