import React, { useState } from 'react'
import { deleteTodo, editTodo, activeTodo } from '../actions';
import { useDispatch } from 'react-redux'
import "./todo.css"


const List = ({ data }) => {
  console.log("data", data)

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState();
  const [editState, setEditState] = useState(false);
  const [active, setActive] = useState(true);

  const handleEdit = (task) => {
    try {
      if (!inputData || !active) throw "Empty Field"
      const payload = {
        title: task,
        id: data.id,
        status: true
      }
      const action = editTodo(payload);
      dispatch(action);
      console.log("payload", payload)
      setEditState(false)
      setInputData("")
    }
    catch (error) {
      console.log("error", error)
    }
  }

  const handleAct = async () => {
    try {
      let st;
      if (active === true) {
        st = false
      }
      else {
        st = true
      }
      console.log('st', st)

      const payload = {
        id: data.id,
        status: st
      }

      const action = activeTodo(payload);
      dispatch(action);
      console.log('payload-ACT', payload);
      setEditState(false);

    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="main-div1">
      <div className="child-div">
        <div className="showItems">
          <div className="eachItem" key={data.id}>
            <h3>{data.title}</h3>
            <div className="todo-btn">
              <i className="far fa-edit add-btn" title="Edit Item" onClick={() => setEditState(!editState)}></i>
              <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(data.id))}></i>
            </div>

            {
              editState ?
                <>
                  <input value={inputData}
                    onChange={(e) => setInputData(e.target.value)} />
                  <button type="button" class="btn1" onClick={() => handleEdit(inputData)}>
                    Submit
                  </button>
                </>
                : ""
            }
            <button type="button" class="btn btn-info"
              onClick={() => { setActive(!active); handleAct() }}>
              {data.status ? "Active" : "InActive"}

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List