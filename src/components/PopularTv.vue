<template>
    <div v-bind:key="PopularSerie.id" class="item-movie">
        <div class="img-boxslide">
            <img class="img-box" v-bind:src="`https://image.tmdb.org/t/p/original${PopularSerie.backdrop_path}`" alt="{{PopularSerie.name}}" />
        </div>
        <div class="desc-movie">
            <p class="titleM">{{PopularSerie.name}}</p>
            <p class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>{{PopularSerie.vote_average}}
            </p>
            <div class="btn btn-sm btn-movie "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                </svg>{{PopularSerie.popularity}}
            </div>
        </div>
    </div>
</template>

<script>
export default({
      props: ['PopularSerie']
});
</script>