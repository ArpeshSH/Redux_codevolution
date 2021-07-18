const BUY_CAKE = 'BUY_CAKE';


// action 
const buyCake  = () =>{
    return{
        type:BUY_CAKE,
        info:"First redux action"
    }
}

//reducers
//(previousState, action) => newState


const initialState = {
    numofCakes : 10,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                numofCakes: state.numofCakes-1
            }
        default:
            return state
    }
}