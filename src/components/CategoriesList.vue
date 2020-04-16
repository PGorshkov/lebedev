<template lang="pug">
  section(class='categories-list')
    template(v-for="(symbol, index) in listSorting")
      span(class='categories-list__symbol') {{ index }}
      a(class='categories-list__breed' v-for="breed in symbol" @click="openBreed(breed)") {{ breed }}
</template>

<script>
export default {
  name: 'categories-list',
  props: {
    listCats: {
      type: Array
    }
  },
  computed: {
    listSorting () {
      const list = [...this.listCats]
      return list.sort().reduce((acc, val, index) => {
        const checkLast = index + 1 === list.length
        const firstLetter = val.charAt(0).toUpperCase()
        let firstLetterNext
        if (!checkLast) {
          firstLetterNext = list[index + 1].charAt(0).toUpperCase()
        }
        if (!index) {
          acc = {
            [firstLetter]: [val]
          }
        } else if (!checkLast && firstLetter !== firstLetterNext) {
          acc[firstLetter].push(val)
          acc = {
            ...acc,
            [firstLetterNext]: []
          }
        } else {
          acc[firstLetter].push(val)
        }
        return acc
      }, {})
    }
  },
  methods: {
    openBreed (val) {
      let params
      if (this.$route.params && this.$route.params.breeds) {
        params = {
          ...this.$route.params,
          subBreeds: val
        }
      } else {
        params = {
          breeds: val
        }
      }
      this.$router.push({ name: 'Home', params })
    }
  }
}
</script>

<style lang="scss" scoped>
  .categories-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &__symbol{
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.01em;
      color: #626262;
      margin-right: 15px;
      margin-left: 25px;
      margin-bottom: 15px;
      &:first-of-type{
        margin-left: 0;
      }
    }
    &__breed{
      display: block;
      border: 1px solid #626262;
      border-radius: 20px;
      cursor: pointer;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: #626262;
      margin-right: 15px;
      margin-bottom: 15px;
      padding: 4px 12px;
      &:last-of-type{
        margin-right: 40px;
      }
    }
  }
</style>
