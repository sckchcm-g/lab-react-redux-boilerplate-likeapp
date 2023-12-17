import React, { useState } from 'react'
import {Provider} from 'react-redux'
import { myStore } from './redux/store'
import LikeContainer from './components/Like'
import './App.css'



function App() {
  return (
    <Provider store={myStore}>
      <LikeContainer />
    </Provider>
  )
}

export default App
