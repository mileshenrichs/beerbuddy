import React, { Component } from 'react';
import Favorite from './Favorite';

class Favorites extends Component {

		removeFavorite(favoriteId) {
			this.props.handleFavorite(favoriteId);
		}

  	render() {
  		let favorites;
  		if(this.props.favorites) {
  			favorites = this.props.favorites.map(favorite => {
  				return (
  					<Favorite
  						key={favorite.id} 
  						favorite={favorite}
  						removeFavorite={this.removeFavorite.bind(this)}
						/>
					);
  			});
  		}

    return (
    	<div className="Favorites">
    		<h2>My Favorites</h2>
  			{favorites}
    	</div>
    );
  }
}

export default Favorites;
