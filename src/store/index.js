import 'es6-promise/auto'
import { createStore } from 'vuex'
import transactions from './modules/transaction'
import calendar from './modules/calendar'


export default createStore({
  modules: {
    transactions,
    calendar
  }
})
