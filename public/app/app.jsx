import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers/reducers.jsx'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


const loggerMiddleware = createLogger()

const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)


console.log(store.getState())

