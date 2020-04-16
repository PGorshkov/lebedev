<template lang="pug">
  section(class='toolbar')
    div(class='toolbar__content')
      router-link(tag='img' to='/' :src='require("../assets/logo.svg")')
      router-link(class='toolbar__link' to="/favorites") Избранные пёсели
        img(src='../assets/heart-toolbar.svg')
</template>

<script>
export default {
  name: 'toolbar'
}
</script>

<style lang="scss" scoped>
  .toolbar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background: #151419;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);
    z-index: 10;
    &__content{
      margin: 0 auto;
      max-width: 1280px;
      padding: 35px 60px 38px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > img {
        cursor: pointer;
      }
    }
    &__link{
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.01em;
      color: #626262;
      & > img{
        margin-left: 10px;
      }
    }
  }
</style>
