<template lang="pug">
  div#app(class='app')
    toolbar
    router-view(class='app__content')
    a(class='app__up-scroll' @click="scrollTop" v-if='upScroll')
      img(src='./assets/upScroll.svg')
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'app',
  mounted () {
    window.addEventListener('scroll', this.checkBtnUpScroll)
  },
  data: () => ({
    upScroll: false
  }),
  components: { Toolbar },
  methods: {
    scrollTop () {
      const d = document.documentElement
      const top = setInterval(() => {
        d.scrollTop = d.scrollTop - 20
        if (d.scrollTop <= 0) {
          clearInterval(top)
          this.upScroll = false
        }
      }, 0)
    },
    checkBtnUpScroll () {
      const d = document.documentElement
      if (d.scrollTop > 350) {
        this.upScroll = true
      } else {
        this.upScroll = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{
    &__content{
      max-width: 1280px;
      margin: 0 auto;
      padding: 100px 60px 60px;
      background-color: transparent;
    }
    &__up-scroll{
      right: 58px;
      bottom: 58px;
      border-radius: 50%;
      cursor: pointer;
      position: fixed;
      background: #111013;
      border: 1px solid #FFFFFF;
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
