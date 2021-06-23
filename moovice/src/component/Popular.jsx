import React, { Component } from 'react'
import Card from './Card'


export class Popular extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }

    }

    async componentDidMount() {
        const result = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e16ff25f44004fe2ab5dedc9e0453e')
        const response = await result.json()
        const movies = response.results
        this.setState({ movies })
        console.log(this.state.movies);

    }

    render() {
        return (
            <div>
                Popular

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
