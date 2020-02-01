let initialState = {
    tasks: [
        {id: 0, title: "d", isDone: false, priority: "low"},
        {id: 0, title: "d", isDone: false, priority: "low"}
    ]
}
export const taskReducer = (state = initialState, action) => {
 switch (action.type) {
     default:
         return state
 }
};
