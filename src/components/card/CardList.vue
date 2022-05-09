<template>
  <div class="card-list">
    <card-item v-for="card in 6" />
  </div>
</template>

<script>
import CardItem from '@/components/card/CardItem'

export default {
  name: 'CardList',
  components: {
    CardItem,
  }
}
</script>

<style lang="scss" scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>