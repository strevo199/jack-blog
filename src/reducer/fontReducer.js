
 const fontReducer = (state,action) =>{
    switch (action.type) {
        case 'CLOSEMENU':
            document.querySelector('.menuContent').style.display = 'none'
            return {...state,toggleMenu:true}
    
        default:
            return state;
    }
}

export default fontReducer