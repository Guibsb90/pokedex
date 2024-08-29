import React from 'react'
import Body from './Components/Body'
import Header from './Components/Header'
import Container from './Components/Container/container'
import { store } from './Components/API/store/store'
import { Provider } from 'react-redux'


function App() {


  return (
    <>
    <Provider store={store}>
  <Container>
    <Header/>
    <Body />
  </Container>
  </Provider>
    </>
  )
}

export default App
