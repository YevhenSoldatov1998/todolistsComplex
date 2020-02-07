import {instance} from './instanceAxios'

export const todoListAPI = {
    getTodoList: () => {
        return instance.get('todo-lists')
    }
}
