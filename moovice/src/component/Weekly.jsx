import React, { Component } from 'react'
import network from '../utils/network';
import Card from './Card';


class Weekly extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
        }
    }
    async componentDidMount() {

        const movies = await network.getPopularMovies()
        this.setState({ movies })
    }
    render() {
        return (
            <div>
                <h1>
                    Weekly
                </h1>
                <div className="row">
                    {this.state.movies.map((movie, index) => (
                        <div key={index} className="col-4 d-flex align-items-stretch p-2">
                            <Card movie={movie} />
                        </div>
                    ),
                    )}
                </div>
            </div>
        )
    }
}
export default Weekly