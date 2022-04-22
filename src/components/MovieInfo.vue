<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="titleM">{{currentMovie.name}}</h3>
          </div>

          <div class="modal-body">
            <p class="desc">{{currentMovie.overview}}</p>
          </div>

          <div class="modal-footer">
              <button class="btn btn-lg btn-block btn-primary " @click="$emit('close')">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props:  {
    
    show: {},
    currentMovie:{}
  },
};
</script>