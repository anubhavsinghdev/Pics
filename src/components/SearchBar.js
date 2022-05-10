import React from "react";
class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value)
  //   }

  state = { term: "" };

  // always use arrow function, this will not get undefined this
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
          <div className="field">
            <label htmlFor="">Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* this.onInputChange is a callback method can be also used as
            (event)=>{} */}
            {/* onClick, onSubmit, onInputClick  */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;