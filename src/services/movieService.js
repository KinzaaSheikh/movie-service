const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.TMDB_API_KEY;
const apiUrl = process.env.TMDB_API_URL;

const getActionMovies2023 = async () => {
    try {
        const response = await axios.get(`${apiUrl}/discover/movie`, {
            params: {
                api_key: apiKey,
                with_genres: '28',
                primary_release_year: '2023',
                sort_by: 'popularity.desc'
            }
        });

        let movies = response.data.results;
        movies = movies.sort((a, b) => {
            if (b.vote_average === a.vote_average) {
                return b.vote_count - a.vote_count;
            }
            return b.vote_average - a.vote_average;
        });

        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

module.exports = { getActionMovies2023 };
