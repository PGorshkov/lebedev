<template lang="pug">
  div#app(class='app')
    toolbar
    router-view(class='app__content')
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'app',
  components: { Toolbar }
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
  }
</style>
