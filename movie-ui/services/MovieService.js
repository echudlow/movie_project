import axios from "axios";

axios.defaults.headers.baseURL = "http://localhost:56770/";

export default {
    getMovies(){
        return axios.get('/movies');
    },

    createMovie(movie){
        return axios.post(`/movies`, movie);
    },

    updateMovie(movieId){
        return axios.put(`/movies/$(movieId)`);
    },

    deleteMovie() {
        return axios.delete(`/movies`);
    }
}