import React, { Component } from 'react';
import Beer from './Beer';

class BeerGrid extends Component {

	handleFavorite(beerId) {
		this.props.handleFavorite(beerId);
	}

  render() {
	let beerRows;
	if(this.props.beers) {
		beerRows = this.props.beers.map(beer => {
			return (
				<div className="col-md-4">
					<Beer
						beer={beer}
						handleFavorite={this.handleFavorite.bind(this)}
						isFavorite={this.props.favorites.includes(beer)}
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
