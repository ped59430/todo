import Vue from 'vue'
import Vuex from 'vuex'
import todoItem from './modules/todo-item'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todoItem
  }
})

export default store
