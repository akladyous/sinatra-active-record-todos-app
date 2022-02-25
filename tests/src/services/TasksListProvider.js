import { useState ,createContext } from "react";

export const TasksProvider = createContext();

export default function TasksListProvider({children}) {

    const [tasksList, setTasksList] = useState([]);
    const addTask = (task) => {
        const taskExist = tasksList.find(item => item.id === task.id)
        if (!taskExist){
            setTasksList([...tasksList, task])
        }
    }

    const removeTask = (task) => {
        const taskExist = tasksList.find(item => item.id === task.id)
        if (taskExist) {
            setTasksList(tasksList.filter(item => item.id !== task.id))
        }
    }

    const tasksListInit = (tasksList) =>{
        setTasksList(tasksList)
    }

    return (
        <TasksProvider.Provider value={{
            addTodo: addTask, 
            removeTodo: removeTask,
            TasksListSetter: tasksListInit
        }}>
                    {children}
        </TasksProvider.Provider>
    )
}
