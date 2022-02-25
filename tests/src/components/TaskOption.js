import { useContext } from "react"
import TaskModal from "./TaskModal.js"
import { OptionContext } from "../services/OptionProvider.js"
import { ModalContext } from "../services/ModalProvider.js";

export default function TaskOption() {
    const currentOption = useContext(OptionContext);
    const {show, handleOpen, handleClose} = useContext(ModalContext);

    return (
        <div className="container-fluid d-flex justify-content-between">
            <div className="fs-4 fw-bold text-secondary text-capitalize">
                {currentOption}
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark" onClick={handleOpen}>
                    New Task
                </button>
            </div>
            <TaskModal 
                status={show} 
                // handleOpen={handleOpen} 
                handleClose={handleClose} 
            />
        </div>
    );
}
