import React, { Component } from 'react'
import network from '../utils/network';
import Card from './Card';

export class Popular extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }

    }

    async componentDidMount() {

        const movies = await network.getPopularMovies()
        this.setState({ movies })
        console.log(this.state.movies);

    }

    render() {
        return (
            <div>
                <h1>
                    Popular
                </h1>

                <div className="row">

                    {this.state.movies.map((movie, index) => {
                        return (
                            <div className="col-4 d-flex align-items-stretch p-2">
                                <Card key={index} movie={movie}></Card>
                            </div>
                        )


                    })}




                </div>
            </div>
        )
    }
}

export default Popular
