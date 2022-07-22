import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
// const cakeReducer = require('../features/cake/cakeSlice')
// const icecreamReducer = require('../features/icecream/icecreamSlice')
import userReducer from '../features/user/searchSlice'
import dashboardReducer from '../features/dashboard/dashboardSlice';
// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    // icecream: icecreamReducer,
    user: userReducer,
    dashboard:dashboardReducer
  }
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store