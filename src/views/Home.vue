<template lang="pug">
  section(class='home')
    filters(:breeds="breeds" :sub-breeds="subBreeds")
    div(class='home__content')
      card-photo(v-for="photo in photos" :photo="photo")
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Filters from '../components/Filters'
import CardPhoto from '../components/CardPhoto'
export default {
  name: 'Home',
  async mounted () {
    await this.loadData(this.$route.params)
  },
  destroyed () {
    window.onscroll = function () {}
  },
  components: { CardPhoto, Filters },
  data: () => ({
    loading: false
  }),
  props: {
    breeds: {
      type: String
    },
    subBreeds: {
      type: String
    }
  },
  watch: {
    $route: function (val) {
      this.clearPhoto([])
      this.loadData(val.params)
    }
  },
  computed: {
    ...mapState('photo', ['photos'])
  },
  methods: {
    ...mapActions('photo', ['fetchPhoto']),
    ...mapMutations('photo', ['clearPhoto']),
    async loadData (params) {
      this.loading = !this.loading
      const count = await this.fetchPhoto(params)
      if (count < 20) {
        window.onscroll = function () {}
      } else {
        window.onscroll = this.checkBottomScroll
      }
      this.loading = !this.loading
    },
    async checkBottomScroll () {
      var d = document.documentElement
      var offset = d.scrollTop + window.innerHeight
      var height = d.offsetHeight
      if (offset >= height - 290 && !this.loading) {
        await this.loadData(this.$route.params)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
    &__content{
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      grid-gap: 30px;
    }
  }
</style>
