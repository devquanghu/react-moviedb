import baseApi from "./baseApi";

const API_URL_MOVIE = 'movie/popular?language=en-US&page=1';

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export interface MovieResult {
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[]
}

export const getMovies = async () => {
    return await baseApi.get<MovieResult>(API_URL_MOVIE).then((data) => data.data)
}