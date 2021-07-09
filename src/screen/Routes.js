import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Work from './Work'
import FontContextProvider from '../context/FontContext'
import MenuBtn from './MenuBtn'


function Routes() {
    return (
        <FontContextProvider>
            <BrowserRouter>
            <MenuBtn/>
                <Switch>
                        
                    <Route path ="/" exact component ={Home} />
                    <Route path ="/about" exact component ={About} />
                    <Route path ="/contact" exact component ={Contact} />
                    <Route path ="/work" exact component ={Work} />
                </Switch>
            </BrowserRouter>
        </FontContextProvider>
        
    )
}

export default Routes
