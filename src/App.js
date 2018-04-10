import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import BeerGrid from './Components/BeerGrid';
import Favorites from './Components/Favorites';

class App extends Component {

	constructor() {
		super();
		this.state = {
			beers: [],
			favorites: [],
			apiPageNo: 1,
			loading: false,
			searchTerm: ''
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this))
		let beers;
		fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
			.then((resp) => resp.json())
			.then(data => {
	  			beers = data.map(beer => {
					return {
						id: beer.id,
						name: beer.name,
						imageUrl: beer.image_url,
						tagline: beer.tagline,
						abv: beer.abv
					};
				});
				this.setState({beers: beers});
  			})
	}

	handleScroll() {
		let distanceFromBottom = Math.max(document.body.offsetHeight - (window.pageYOffset + window.innerHeight), 0)
		if(distanceFromBottom <= 500 && this.state.apiPageNo < 3) {
			this.loadMoreBeers();
		}
	}

	loadMoreBeers() {
		if(this.state.loading) {
			return;
		}

		let newBeers;
		fetch('https://api.punkapi.com/v2/beers?page=' + (this.state.apiPageNo + 1) + '&per_page=80')
			.then((response) => response.json())
			.then(data => {
				newBeers = data.map(beer => {
					return {
						id: beer.id,
						name: beer.name,
						imageUrl: beer.image_url,
						tagline: beer.tagline,
						abv: beer.abv
					};
				});
				let beerList = this.state.beers.concat(newBeers);
				this.setState((prevState) => ({
					beers: beerList,
					apiPageNo: prevState.apiPageNo + 1,
					loading: false
				}));
			})

		this.setState({loading: true});
	}

	handleSearchChange(term) {
		this.setState({searchTerm: term});
		if(term === '') {
			let beers;
			fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
				.then((resp) => resp.json())
				.then(data => {
					beers = data.map(beer => {
						return {
							id: beer.id,
							name: beer.name,
							imageUrl: beer.image_url,
							tagline: beer.tagline,
							abv: beer.abv
						};
					});
					this.setState({
						beers: beers,
						apiPageNo: 1
					});
				})
		}
		let beerName = term.replace(' ', '_');
		let beerResults;
		fetch('https://api.punkapi.com/v2/beers?beer_name=' + beerName + '&per_page=80 ')
			.then((response) => response.json())
			.then(data => {
				beerResults = data.map(beer => {
					return {
						id: beer.id,
						name: beer.name,
						imageUrl: beer.image_url,
						tagline: beer.tagline,
						abv: beer.abv
					};
				});
				this.setState({beers: beerResults});
			})
	}

	handleFavorite(beerId) {
		let beer = this.state.beers.find(beer => beer.id === beerId);
		let favorites = this.state.favorites;
		if(favorites.find(beer => beer.id === beerId)) {
			favorites.splice(favorites.indexOf(beer), 1);
		} else {
			favorites.push(beer);
		}
		this.setState({favorites: favorites});
	}

  	render() {
    return (
      <div className="App">
			<div className="container">
				<Header
					searchTerm={this.state.searchTerm}
					handleSearchChange={this.handleSearchChange.bind(this)}
					favorites={this.state.favorites}
				/>
				<Switch>
					<Route 
						exact path="/"
						component={() => (
									<BeerGrid
										beers={this.state.beers}
										favorites={this.state.favorites}
										handleFavorite={this.handleFavorite.bind(this)}
									/>
							)}
					/>
					<Route
						exact path="/favorites"
						component={() => (
									<Favorites
										favorites={this.state.favorites}
										handleFavorite={this.handleFavorite.bind(this)}
									/>
							)}
					/>
				</Switch>
				
			</div>
      </div>
    );
  }
}

export default App;
