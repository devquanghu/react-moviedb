import axios from "axios";

const apiConfig = (config: any) => {

    config.headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzZjOWMyMjM0MThhZDM0ZmU2ZTU5OTVmYzYxNDIzYyIsInN1YiI6IjVhMzFlNGJlYzNhMzY4MTRhODAwY2VlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcAxipnGbmEOvGgjoxvdEneeSFE8dkWuB3ZnKZw30sA',
        'Accept' : 'application/json'
    }

    return config;
}

const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 90_000
})

baseApi.interceptors.request.use(apiConfig)

export default baseApi