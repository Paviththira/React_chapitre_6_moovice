import { DateTime } from 'luxon'

const API_KEY = '669acbd46afbcc888543678ef2eb54d0'

const network = {
  getLatestMovies: async () => {
    const TODAY = DateTime.now().toISODate()
    const LAST_WEEK = DateTime.now().minus({ weeks: 1 }).toISODate()
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`)
    const response = await result.json()
    return response.results

  },
  getPopularMovies: async () => {
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    const response = await result.json()
    return response.results
  },
  getMovie: async (id) => {
    return await fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(r => r.json())
  },
}

export default network