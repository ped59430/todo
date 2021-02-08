import todoItem from 'src/api/todo-item'

const state = {
  list: [],
}

const mutations = {
  SET_LIST: (state, list) => {
    state.list = list
  }
}

const actions = {
  readAll({ commit }, payload) {
    return new Promise((resolve, reject) => {
      todoItem.readAll()
        .then(response => {
          commit('SET_LIST', response)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

