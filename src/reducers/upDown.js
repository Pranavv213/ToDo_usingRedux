const initialState=[""];
const changethenum= (state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return [...state, action.value];
        case "DECREMENT":
            return state-1;
        default: return state;
    }

}
export default changethenum;