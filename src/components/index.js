import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll } from '../actions';
import List from './Todo'
import "./todo.css"

const Todo = () => {
    const [inputData, setInputData] = useState();
    const [filter, setFilter] = useState(true);

    const dispatch = useDispatch();

    const list = useSelector((val) => {
        return val.TodoReducer.todoList
    })
    const handleTodo = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: new Date().getTime().toString(),
                status: true
            }
            const action = addTodo(payload);
            dispatch(action);
            console.log("payload", payload);
            setInputData("")
        }
        catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" className="form-control" placeholder="✍️ Add item..."
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />

                    <i className="fa fa-plus add-btn" title="Add item" onClick={() => handleTodo(inputData)}></i>
                </div>


                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(deleteAll())}><span> CHECK LIST </span> </button>

                    <button type="button" className="btn btn-primary"
                        onClick={() => setFilter(!filter)}>
                        {filter ? "SHOW ALL" : "ONLY ACTIVE"}
                    </button>
                </div>

                {/* clear all button  */}
                <div className="showItems">
                    {
                        list
                            .filter((item) => filter
                                ? (item.status === filter)
                                : item)
                            .map((item) => {
                                return (
                                    <List data={item} />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo