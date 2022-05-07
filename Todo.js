import React, { useState, useEffect } from "react";
import "./todo.css";
import { addTodo, deleteTodo, editTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [toggleButton, setToggleButton] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [editState, setEditState] = useState(false);

  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();

  const handleEdit = (task) => {
    try {
      if (!task) throw "Empty Field"
      const payload = {
        type: task,
        id: data.id
      }
      const action = editTodo(payload);
      dispatch(action);
      console.log("payload", payload)
      setEditState(false)
    }
    catch (error) {
      console.log("error", error)
    }
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            {/* <form action="submit"> */}
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              required=""
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {
              toggleButton ? <i className="fa fa-plus add-btn" title="Add Item" onClick={() => dispatch(addTodo(inputData), setInputData([""]))}></i> :
                <i className="far fa-edit add-btn" title="Update Item" onClick={() => dispatch(addTodo(inputData), setInputData([""]))}></i>
            }

            {/* <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addTodo(inputData), setInputData([""]))}
            ></i> */}
            {/* </form> */}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    {/* <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => dispatch(editTodo(elem.id, setInputData(elem.data)))}
                    ></i> */}
                    <button onClick={() => setEditState(!editState)}>
                      edit
                    </button>
                    {
                      editState ?
                        <>
                          <input value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                          <button onClick={() => handleEdit(inputData)}>
                            Submit
                          </button>
                        </>
                        : ""
                    }
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
