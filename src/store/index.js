import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        digit: 100
    },
    mutations: {
        change(state, num) {
            state.digit = num
        }
    },
    actions: {
        change(state, num) {
            state.commit('change', num)
        }
    },
    modules: {},
    getters: {
        getterDigit(state) {
            return state.digit
        }
    }
})

export default store