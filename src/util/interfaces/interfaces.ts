export interface ITodoLists {
    id: string,
    title: string,
    // tasks: ITask[],
    filterValue: string
}
export interface ITask {
    id: number,
    title: string,
    isDone: boolean,
    priority: string
}
export interface IState {
    todoLists: ITodoLists[],
}