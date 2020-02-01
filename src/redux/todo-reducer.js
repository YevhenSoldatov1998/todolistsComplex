const ADD_TODOLIST = 'ADD_TODOLIST';
const DELETE_TODOLIST = 'DELETE_TODOLIST';
const CHANGE_IS_DONE = 'CHANGE_IS_DONE';

export const addTodoList = (newTodo) => ({type: ADD_TODOLIST, newTodo});
export const deleteTodoList = (todoId) => ({type: DELETE_TODOLIST, todoId});
export const changeIsDone = (todoId, status) => ({CHANGE_IS_DONE, todoId, status});

const initialState = {
    todolists: [
       {
            id: 1,
            title: 'First Todo'

        }
    ]
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            debugger
            return {
                ...state,
                todolists: [...state.todolists, action.newTodo]
            };
        case DELETE_TODOLIST:

            return {
                ...state,
                todolists: state.todolists.filter(el => el.id !== action.todoId)
            };
        case CHANGE_IS_DONE:
            debugger
            return  {
                ...state,
                todolists: state.todolists.map(el => {
                    if(el.id === action.todoId){
                       return {...el, isDone: action.status}
                    }
                    else{
                        return {...el}
                    }
                })
            }
        default:
            return state;
    }
}
