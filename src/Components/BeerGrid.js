import React, { Component } from 'react';
import Beer from './Beer';

class BeerGrid extends Component {

	handleFavorite(beerId) {
		this.props.handleFavorite(beerId);
	}

	isFavorite(beerToCheck) {
		return this.props.favorites.find(beer => beer.id === beerToCheck.id);
	}

  render() {
	let beerRows;
	if(this.props.beers) {
		beerRows = this.props.beers.map(beer => {
			return (
				<div key={beer.id} className="col-md-4">
					<Beer
						beer={beer}
						handleFavorite={this.handleFavorite.bind(this)}
						isFavorite={this.isFavorite(beer)}
					/>
				</div>
			);
		});
	}


    return (
		<div className="row">
			{beerRows}
		</div>
    );
  }
}

export default BeerGrid;
