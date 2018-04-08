import React, { Component } from 'react';

class SearchBar extends Component {

	handleSearchChange(e) {
		this.props.handleSearchChange(e.target.value);
	}

  	render() {
    return (
		<form className="searchbar__form col-md-4">
   		<div className="form-group">
     			<input className="form-control" placeholder="Search"
					value={this.props.searchTerm} onChange={this.handleSearchChange.bind(this)} />
   		</div>
 		</form>
    );
  }
}

export default SearchBar;
