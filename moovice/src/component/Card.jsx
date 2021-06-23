import React, { Component } from 'react'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite: localStorage.getItem('favorites')
                ? JSON.parse(localStorage.getItem('favorites')).includes(props.movie.id)
                : false,
        }
    }

    getImage(movie) {
        return movie.backdrop_path ?
            'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path :
            'http://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png'
    }

    addToFavorites = (id) => {
        this.setState({ favorite: true })
        const favorites = localStorage.getItem('favorites')
            ? JSON.parse(localStorage.getItem('favorites'))
            : []
        favorites.push(id)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    removeToFavorite = (id) => {
        this.setState({ favorite: false })
        const favorites = localStorage.getItem('favorites')
            ? JSON.parse(localStorage.getItem('favorites'))
            : []
        const index = favorites.indexOf(id)
        if (index !== -1) {
            favorites.splice(index, 1)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    handleClick = (event, id) => {
        event.stopPropagation()
        this.state.favorite ? this.removeToFavorite(id) : this.addToFavorites(id)
    }

    render() {
        return (
            <div className="card" >
                <img
                    src={this.getImage(this.props.movie)}
                    className="card-img-top"
                    alt="..." style={{ height: "300px" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="text-secondary">{this.props.movie.release_date}</p>
                    <p className="card-text">
                        <button
                            className="btn btn-primary mb-3"
                            onClick={(e) => this.handleClick(e, this.props.movie.id)}
                        >
                            {this.state.favorite ? 'Remove from favorites' : 'Add to favorites'}
                        </button>
                        <br />
                        {this.props.movie.overview}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card