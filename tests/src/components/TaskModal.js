import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import { ModalContext } from '../services/ModalProvider.js';
import { TasksProvider } from '../layout/Container.js';

export default function TaskModal() {

    const {show, handleClose}  = useContext(ModalContext)
    const { addTask } = useContext(TasksProvider)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleForm = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/api/todo/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                content: content,
            }),
        })
            .then((response) => response.json())
            .then((newTodo) => {
                console.log("new todo: ", newTodo);
                addTask(newTodo);
            });
            handleClose()
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div className="card">
                <div className="card-header">New Task</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input name="title" type="title" className="form-control" placeholder="Title" onChange={(se)=>{setTitle(se.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Todo Content</label>
                                <textarea name="content"className="form-control" rows="3" placeholder="Content" onChange={(se)=>{setContent(se.target.value)}}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" onClick={handleForm}>Save</button>
                            &nbsp;
                            <button type="button" className="btn btn-primary mb-3" onClick={handleClose}>close</button>
                        </form>
                    </div>
            </div>

        </Modal>
    );
}
