import React,{createContext,useReducer} from 'react'
import fontReducer from '../reducer/fontReducer'

export const FontContext = createContext()

const initialState ={
    toggleMenu:false
}
const FontContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(fontReducer, initialState)

    const closemyMenu = () =>{
        dispatch({
            type:'CLOSEMENU',
        })
    }

    return (
        <FontContext.Provider value ={{
            toggleMenu:state.toggleMenu,
            closemyMenu
        }}>
            {children}
        </FontContext.Provider>
    )
}

export default FontContextProvider
