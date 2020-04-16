<template lang="pug">
  section(class='favorites')
    div(class='favorites__content')
      card-photo(v-for="photo in favorites" :photo="photo")
</template>

<script>
import { mapState } from 'vuex'
import CardPhoto from '../components/CardPhoto'
export default {
  name: 'favorites',
  components: { CardPhoto },
  computed: {
    ...mapState('photo', ['favorites'])
  }
}
</script>

<style lang="scss" scoped>
  .favorites{
    &__content{
      margin-top: 122px;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      grid-gap: 30px;
    }
  }
</style>
