import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <Header />
        <Outlet />
      <Footer />
    </Provider>
  )
}

export default App
