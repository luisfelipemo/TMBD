<template>
    <!-- banner movie -->
    <div class="container-fluid bg-banner">
        <!--navbar-->
        <nav class="navbar navPage navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://www.themoviedb.org"><img class="logo-img" src="../src/assets/img/logo-one.svg" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#Movie">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Serie">TV</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!--navbar-->
        <div class="row">
            <div class="col-md-6 col-xs-12 col-lg-6 title-izq">
                <div class="contend-card">
                    <h1 class="titleBanner">Peliculas,<span style="color: #08BBFF"> series</span>,<br> novelas y más. </h1>
                    <h2 class="subtitleBanner">Lo mejor del septimo arte en internet</h2>
                    <a class="btn button-style" href="#TopMovies" title="YouTube video player" style="left:0; position:absolute;">EXPLORAR</a>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 col-lg-6 title-der">

            </div>
        </div>
    </div>
    <!-- banner movie -->
    <!-- movie section 1-->
    <div class="container-fluid catalogoSect" id="Movie">
        <!-- movies-->
        <div class="row">
            <div class="col-md-12 col-xs-12 col-lg-12 section-title">
                <h3 class="titleSect">Favorite Movies</h3>
            </div>
            <movieFav v-for="movie of Movies" v-bind:key="movie.id" v-bind:movie="movie" />
        </div>
        <!-- movies -->
    </div>
    <!-- movie section 1-->
    <!-- popular section 2-->
    <div class="container-fluid catalogoSect2" id="TopMovies">
        <div class="row">
            <div class="col-md-12 col-xs-12 col-lg-12 section-title" >
                <h3 class="titleSect" style="color:#030303; opacity:1;">Popular Movies</h3>
            </div>
             <!-- movies-->
                <moviePopular v-for="PopularMovie of PopularMovies" v-bind:key="PopularMovie.id" v-bind:PopularMovie="PopularMovie" />
            <!-- movies -->
        </div>
    </div>
    <!-- popular section 2-->
    <!-- popular section 3 -->
    <!-- tv section-->
    <div class="container-fluid catalogoSect" id="Serie">
        <div class="row">
            <div  class="col-md-12 col-xs-12 col-lg-12 section-title">
                <h3 class="titleSect">Rated TV</h3>
            </div>
            <!-- tv-->
            <tvFav v-for="serie of Series" v-bind:key="serie.id" v-bind:serie="serie" />
            <!-- tv -->
        </div>
    </div>
    <!-- tv section-->
    <!-- popular section 3 -->
    <!-- tv section-->
    <!-- tv section-->
    <!-- popular section 2-->
    <div class="container-fluid movie-Sect2">
        <div class="row bg-sectionTV">
            <img src="../src/assets/img/bg-5.jpg" class="bg-movieSect" alt="Alternate Text" />
            <div class="col-md-12">
            </div>
            <div class="col-md-3 slider-movie">
                <p class="title-section">Popular Series</p>
                <div class="sidebar">
                <!-- tv section-->
                    <tvPopular v-for="PopularSerie of PopularSeries"  v-bind:key="PopularSerie.id" v-bind:PopularSerie="PopularSerie" />
                <!-- tv section-->    
                </div>
            </div>
            <div class="col-md-9">
               <!-- <div class="contend-text">
                    <div class="title"><h3>¡Disfruta de Moon Knight!</h3></div>
                    <div class="subtitle">Los mejores heroés de marvel están aqui</div>
                </div>-->
            </div>
        </div>
    </div>
    <!-- popular section 2-->
    <!-- movie single-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9"></div>
        </div>
    </div>
    <!-- movie single-->
</template>

<script>
 import axios from 'axios';

 import movieFav from './components/MoviesComponent';
 import tvFav from './components/TvComponent';
 import moviePopular from './components/PopularMovie';
 import tvPopular from './components/PopularTv';

    export default {
        name: 'App',
        components:{
            movieFav,
            moviePopular,
            tvFav,
            tvPopular
        },
        data: function () {
            return {
                Movies: [],
                Series: [],
                PopularSeries: [],
                PopularMovies: [],
                // favouriteMovies: [],
                // movieId: null
            }
        },
        methods: {
            // rated movie
            fetch() {
                let result = axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8ece54d7e3d5be09c1eb2794cc730ab4&language=en-US&page=1')
                    .then((res) => {
                        this.Movies = res.data.results;
                        console.log(res.data.results);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                return result;
            },
            // ratedTV
            fetchSerie() {
                let result = axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=8ece54d7e3d5be09c1eb2794cc730ab4&language=en-US&page=1')
                    .then((res) => {
                        this.Series = res.data.results;
                        console.log(res.data.results);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                return result;
            },
            //popularTV
            fetchSeriesPopular() {
                let result = axios.get('https://api.themoviedb.org/3/tv/popular?api_key=8ece54d7e3d5be09c1eb2794cc730ab4&language=en-US&page=1')
                    .then((res) => {
                        this.PopularSeries = res.data.results;
                        console.log(res.data.results);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                return result;
            },
            // popularMovie
            fetchMoviesPopular() {
                let result = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8ece54d7e3d5be09c1eb2794cc730ab4&language=en-US&page=1')
                    .then((res) => {
                        this.PopularMovies = res.data.results;
                        console.log(res.data.results);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                return result;
            },
            // favouriteMovie
            // fetchMoviesFavourite(id){
            // let result = axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=8ece54d7e3d5be09c1eb2794cc730ab4&language=en-US&page=1`)
            //         .then((res) => {
            //             this.movieId = res.data.results;
            //             console.log(res.data.results);
            //         })
            //         .catch(err => {
            //             console.log(err);
            //         });
            //     return result;
            // }        
        },
        mounted(){
            this.fetch(),
            this.fetchSeriesPopular(),
            this.fetchSerie(),
            this.fetchMoviesPopular()
            // this.fetchMoviesFavourite()
        }
    };
</script>

<style>
</style>
