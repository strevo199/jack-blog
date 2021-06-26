import React from 'react'
import NavBar from './Screens/NavBar'
import { BrowserRouter,Route} from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contacting from './Screens/Contacting'
import Blog from './Screens/Blog'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Marketing from './Screens/Marketing'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        < NavBar/>
        <Route path='/' exact component={Home}  />
        <Route path='/about' component={About}  />
        <Route path='/contact' component={Contacting}  />
        <Route path='/login' component={Login}  />
        <Route path='/blog' component={Blog}  />
        <Route path='/register' component={Register}  />
        <Route path='/marketing' component={Marketing}  />
      </div>
    </BrowserRouter>
  )
}

export default App
