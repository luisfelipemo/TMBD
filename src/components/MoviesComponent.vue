<template>
    <div  @click="handleShowInfo" class="col-md-3 col-xs-4 col-lg-3 movie-bg" v-bind:key="movie.id" >
        <figure>
            <img v-bind:src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" alt="">
        </figure>
        <div class="infoMovie">
            <p class="titleM">{{movie.title}}</p>
            <p class="date">{{movie.release_date}}</p>
            <div class="btn btn-sm btn-movie" style="width:100px; text-align:center;">VER MÁS
            </div>
        </div>
    </div>
</template>

<script>
export default({
      props: ['movie'],
      methods: {
          handleShowInfo () {
            this.$emit('showinfo', this.movie)
          },
      },
});
</script>