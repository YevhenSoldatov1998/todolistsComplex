import React from 'react';
import {useState} from 'react'
import '../App.css';

const TodoListFooter = ({changeFilter, filterValue,todoId}) => {

    const [showFilter, setShowFilter] = useState(false);

    const onShowFiltersClick = () => setShowFilter(true);
    const onHideFiltersClick = () => setShowFilter(false);

    const onAllFilterClick = () => changeFilter('All', todoId);
    const onCompletedFilterClick = () => changeFilter('Completed',todoId);
    const onActiveFilterClick = () => changeFilter('Active',todoId);

    let classForAll = filterValue === "All" ? "filter-active" : "";
    let classForCompleted = filterValue === "Completed" ? "filter-active" : "";
    let classForActive = filterValue === "Active" ? "filter-active" : "";

    return (
        <div className="todoList-footer">
            {!showFilter && <div>
                <button onClick={onAllFilterClick} className={classForAll}>All</button>
                <button onClick={onCompletedFilterClick} className={classForCompleted}>Completed</button>
                <button onClick={onActiveFilterClick} className={classForActive}>Active</button>
            </div>
            }
            {!showFilter && <span onClick={onShowFiltersClick}>hide</span>}
            {showFilter && <span onClick={onHideFiltersClick}>show</span>}
        </div>
    );
}

export default TodoListFooter;

