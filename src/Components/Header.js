import React, { Component } from 'react';
import logo from '../logo.png';
import SearchBar from './SearchBar';

class Header extends Component {

	handleSearchChange(value) {
		this.props.handleSearchChange(value);
	}

  	render() {
    return (
		<div className="Header row">
			<header>
				<div className="header__logo col-md-6">
					<img src={logo} alt="BeerBuddy" />
					<a href="#"><h1>BeerBuddy</h1></a>
				</div>
				<div className="header__favoriteslink col-md-2">
					<a href="#">My favorites ({this.props.favorites.length})</a>
				</div>
				<SearchBar searchTerm={this.props.searchTerm} handleSearchChange={this.handleSearchChange.bind(this)} />
			</header>
		</div>
    );
  }
}

export default Header;
