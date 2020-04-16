<template lang="pug">
  section(class='card-photo' :style="{ backgroundImage: `url(${photo})`}")
    img(:src='checkFavorites' class='card-photo__favorite' @click="changeFavorites(photo)")
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'card-photo',
  props: {
    photo: {
      type: String
    }
  },
  computed: {
    ...mapState('photo', ['favorites']),
    checkFavorites () {
      return this.favorites.some(f => f === this.photo)
        ? require('../assets/heart-like.svg')
        : require('../assets/heart-nolike.svg')
    }
  },
  methods: {
    ...mapMutations('photo', ['changeFavorites'])
  }
}
</script>

<style lang="scss" scoped>
  .card-photo{
    position: relative;
    width: 100%;
    height: 290px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    &:first-of-type{
      grid-column: 1 / -1;
      height: 513px;
      & > .card-photo__favorite{
        top: 35px;
        left: 35px;
      }
    }
    &__favorite{
      cursor: pointer;
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
</style>
