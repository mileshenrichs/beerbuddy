import React, { Component } from 'react';
import heartFavorited from '../heart-favorited.png';
import heart from '../heart.png';

class Beer extends Component {

	handleFavorite() {
		this.props.handleFavorite(this.props.beer.id);
	}

  render() {
	  return (
		  <div className={"Beer" + (this.props.isFavorite ? "--favorite" : "")}>
		  		<div className="beer__image col-3">
						<img src={this.props.beer.imageUrl} alt={this.props.beer.name} />
					</div>
		  		<div className="beer__info col-8">
						<span className="beer__name">{this.props.beer.name}</span>
						<span className="beer__tagline">{this.props.beer.tagline}</span>
						<span className="beer__abv">ABV: {this.props.beer.abv}%</span>
					</div>
				<div className="FavoriteButton" onClick={this.handleFavorite.bind(this)} >
					<img src={this.props.isFavorite ? heartFavorited : heart} alt="add to favorites" />
				</div>
				<div className="clearfix"></div>
		  </div>
	  )
  }
}

export default Beer;
