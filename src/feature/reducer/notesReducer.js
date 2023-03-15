

const initialState ={
    notes : [{
        id:1,
        date:"25/25/2512",
        isHighPriority:false,
        note:"note1"
    },
    {
        id:2,
        date:"25/25/2gs2",
        isHighPriority:false,
        note:"note2"
    }
]
}
const reducer =(previousState=initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case "ADD_NOTE":
            return {
                ...previousState,
                notes:[...previousState.notes, payload]
            }
        default:
            return previousState
    }
}

export default reducer