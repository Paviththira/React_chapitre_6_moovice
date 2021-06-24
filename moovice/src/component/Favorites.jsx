import React, { Component } from 'react'
import network from '../utils/network'
import Card from './Card'

class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            favIDs: this.getStorage(),
        }

    }

    getStorage = () => {
        return localStorage.getItem('favorites')
            ? JSON.parse(localStorage.getItem('favorites'))
            : []
    }

    getMovie = async id => {
        const movie = await network.getMovie(id)
        this.setState({ movies: [...this.state.movies, movie] })
    }

    componentDidMount() {
        this.state.favIDs.map(id => this.getMovie(id))
    }

    render() {
        return (
            <div>
                <h1>
                    Favorites
                </h1>
                {
                    this.state.movies.map(movie => {
                        return <div key={movie.id} className="col-4 d-flex align-items-stretch p-2">
                            <Card movie={movie} />
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Favorites