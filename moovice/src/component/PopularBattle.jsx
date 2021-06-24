import React, { Component } from 'react'
import network from '../utils/network'
import Card from './Card'

class PopularBattle extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            currentBattle: 2,
        }
    }

    async componentDidMount() {

        const movies = await network.getPopularMovies()
        this.setState({ movies })
    }

    handleClick = () => {
        this.setState({ currentBattle: this.state.currentBattle + 2 })
        if (this.state.currentBattle === 20) {
            alert('Vous avez parcouru tous les films !')
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Popular Battle
                </h1>
                <div className="row">
                    {this.state.movies.slice(0, this.state.currentBattle).map((movie, index) => (
                        <div
                            key={index}
                            className="col-4 d-flex align-items-stretch p-2"
                            onClick={this.handleClick}
                        >
                            <Card movie={movie} />
                        </div>
                    ),
                    )}
                </div>
            </div>
        )
    }
}

export default PopularBattle