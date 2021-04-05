import {useSelector} from 'react-redux';
import Todo from './Todo';

const TodoList = () => {

    const todos = useSelector(data => data)

    return (
        <div className="w-full justify-self-center pt-5 relative max-w-xs">
            <h1>List</h1>
            <div className="bg-white shadow-md rounded px-7 pt-6 pb-7 mb-4 h-80 overflow-y-scroll">
            {todos.map(todo => <Todo key={todo.id} data={todo}/> )}
            </div>
            
        </div>
    )
}

export default TodoList;