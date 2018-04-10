import React, { Component } from 'react';

class Favorite extends Component {

		removeFavorite() {
			this.props.removeFavorite(this.props.favorite.id);
		}

  	render() {
      return (
      	<div className="Favorite row">
          <div className="col-lg-12">
            <div className="beer__image col-1">
              <img src={this.props.favorite.imageUrl} alt={this.props.favorite.name} />
            </div>
            <div className="beer__info col-9">
              <span className="beer__name">{this.props.favorite.name}</span>
              <span className="beer__tagline">{this.props.favorite.tagline}</span>
              <span className="beer__abv">ABV: {this.props.favorite.abv}%</span>
            </div>
            <div className="beer__deletefavorite col-2">
              <button type="button" className="btn btn-danger" onClick={this.removeFavorite.bind(this)}>Remove Favorite</button>
            </div>
          </div>
      	</div>
      );
  }
}

export default Favorite;
