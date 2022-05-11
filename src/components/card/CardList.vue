<template>
  <div v-if="users" class="card-list">
    <card-item
        v-for="user in users"
        :key="user.id"
        :user="user"
    />
    <div class="card-list__btn-wrapper btn-group">
      <app-button
          v-if="$store.state.page.cur !== 1"
          text="Back"
          center
          @action="changePage('prev')"
      />
      <app-button
          text="Show more"
          center
          :disabled="$store.state.page.cur === $store.state.page.total"
          @action="changePage('next')"
      />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/card/CardItem'
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'CardList',
  components: {
    CardItem,
    AppButton,
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },
  methods: {
    async changePage(direction) {
      const page = direction === 'next' ? this.$store.state.page.cur + 1 : this.$store.state.page.cur - 1
      this.$store.commit('changePage', page)
      await this.$store.dispatch('loadUsers')
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__btn-wrapper {
      margin: 30px auto 0 auto;
      width: 250px;
    }
  }
</style>