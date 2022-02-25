import { useState, useContext } from "react";
import TaskModifier from "./TaskModifier.js";
import { TasksProvider } from "../layout/Container.js";

const usDateFormat =  (input) => {
    return new Date(input).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export default function ToDoCard({todo}) {
    const { removeTask } = useContext(TasksProvider)

    const { title, content, updated_at } = todo || {};

    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const handleTodoCard = () => {
        handleOpen(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost:9292/api/todo/${todo.id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((record) => {
                console.log(record);
                // setData(record);
            })
            .catch((err) => {
                console.error(err);
            });
            // updateUrl(currentUrl);
            removeTask(todo)
    };

    return (
        <div
            className="card-deck w-1"
            onClick={(e) => {
                e.stopPropagation();
                handleTodoCard();
            }}
        >
            <div
                className="card m-2"
                // align-items-stretch
                style={{
                    minWidth: "250px",
                    maxWidth: "250px",
                    minHeight: "200px",
                    maxHeight: "250px",
                }}
            >
                <h4 className="card-header">{title}</h4>
                <div className="card-body">
                    <p className="card-text">{content}</p>
                </div>
                <div className="d-flex justify-content-between m-0 p-0">
                    <div className="mx-2">
                        <i className="far fa-clock"></i>&nbsp;
                        <small>{usDateFormat(updated_at)}</small>
                    </div>
                    <div className="mx-2 px-1">
                        <i className="fas fa-edit" onClick={handleOpen}></i>
                        &nbsp;
                        <i
                            className="fas fa-trash-alt data-toggle='popover' title='Popover title'"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                        ></i>
                    </div>
                </div>
            </div>
            {show && (
                <TaskModifier
                    todo={todo}
                    show={show}
                    handleClose={handleClose}
                />
            )}
        </div>
    );
}
