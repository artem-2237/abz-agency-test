import {createStore} from 'vuex'
import axios from '@/axios'

export default createStore({
  state() {
    return {
      users: null,
      positions: null,
      page: {
        cur: 1,
        total: null
      },
      token: null,
    }
  },
  getters: {
    users: state => state.users?.users || [],
    positions: state => state.positions?.positions || [],
    token: state => state.token?.token || null
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    setPositions(state, payload) {
      state.positions = payload
    },
    changePage(state, payload) {
      state.page.cur = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async loadUsers({ state, commit }) {
      try {
        const { data } = await axios.get(`users?page=${state.page.cur}&count=6`)
        commit('setUsers', await data)
        state.page.total = data.total_pages
      } catch (err) {
        console.log(err)
      }
    },
    async loadPositions({ commit }) {
      try {
        const { data } = await axios.get('positions')
        commit('setPositions', await data)
      } catch (err) {
        console.log(err)
      }
    },
    async loadToken({ commit }) {
      try {
        const { data } = await axios.get('token')
        commit('setToken', await data)
      } catch (err) {
        console.log(err)
      }
    },
    async createUser ({ commit, dispatch, getters }, payload) {
      try {
        await dispatch('loadToken')
        const { data } = await axios.post(
          'users',
          payload,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Token': getters.token
            }
          })
        commit('changePage', 1)
        dispatch('loadUsers')
      } catch (err) {
        throw new Error(err)
      }
    }
  }
})
