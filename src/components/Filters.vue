<template lang="pug">
  section(class='filter')
    div(class='filter__header')
      div(class='filter__breeds')
        a(v-if='getCatList' v-on:click="showCats = !showCats") Породы
          img(:class='{ open: showCats }' src='../assets/arrow.svg')
      div(class='filter__switch')
        span Сортировка по алфавиту
        switcher(@change="changeSortAlphabet")
    div(class='filter__categories' v-if="getCatList" v-show="showCats")
      categories-list(:list-cats="getCatList")
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import Switcher from './Switcher'
import CategoriesList from './CategoriesList'
export default {
  async mounted () {
    await this.fetchCategories()
  },
  name: 'filters',
  components: { CategoriesList, Switcher },
  data: () => ({
    loading: false,
    showCats: false
  }),
  props: {
    breeds: {
      type: String
    },
    subBreeds: {
      type: String
    }
  },
  computed: {
    ...mapState('photo', ['categories']),
    getCatList () {
      if (!this.categories) {
        return null
      }
      if (this.subBreeds) {
        return null
      }
      if (this.breeds) {
        const subCats = this.categories[this.breeds] || []
        return subCats.length ? subCats : null
      }
      return Object.keys(this.categories)
    }
  },
  methods: {
    ...mapMutations('photo', ['changeSortAlphabet']),
    ...mapActions('photo', ['fetchCategories'])
  }
}
</script>

<style lang="scss" scoped>
  .filter{
    margin: 50px 0;
    &__header{
      display: flex;
      justify-content: space-between;
    }
    &__breeds{
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      border-bottom: 1px dashed #FFFFFF;
      cursor: pointer;
      & img {
        &.open{
          transform: rotate(180deg);
        }
        margin-left: 10px;
      }
    }
    &__switch{
      display: flex;
      align-items: center;
      & > span{
        font-size: 16px;
        line-height: 28px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #626262;
        margin-right: 15px;
      }
    }
    &__categories{
      margin-top: 30px;
    }
  }
</style>
