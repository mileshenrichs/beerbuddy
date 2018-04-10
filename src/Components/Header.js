import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<h1><Link to="/">BeerBuddy</Link></h1>
				</div>
				<div className="header__favoriteslink col-md-2">
					<Link to="/favorites">My favorites ({this.props.favorites.length})</Link>
				</div>
				<SearchBar searchTerm={this.props.searchTerm} handleSearchChange={this.handleSearchChange.bind(this)} />
			</header>
		</div>
    );
  }
}

export default Header;
