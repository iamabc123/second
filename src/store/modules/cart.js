import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据 [{}, {}]
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    }
  },
  actions: {
    // 请求方式：get
    // 请求地址：http://localhost:3000/cart
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    }
  },
  getters: {}
}
