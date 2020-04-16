<template lang="pug">
  label(class='switcher')
    input(
      type='checkbox'
      v-model='model'
      class='switcher__input'
      @change="$emit('change', model)")
    span(class='switcher__slider')
</template>

<script>
export default {
  name: 'switcher',
  data: () => ({
    model: false
  })
}
</script>

<style lang="scss" scoped>
  .switcher {
    position: relative;
    display: inline-block;
    width: 29px;
    height: 15px;
    &__input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .switcher__slider {
        &:before {
          transform: translateX(130%);
        }
      }
    }
    &__slider{
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      -webkit-transition: .4s;
      transition: .4s;
      border: 1px solid #626262;
      border-radius: 9px;
      &:before {
        position: absolute;
        content: "";
        height: 9px;
        width: 9px;
        left: 3px;
        bottom: 2px;
        background-color: #626262;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }
    }
  }
</style>
