import {useState} from "react";
import {useDispatch} from "react-redux";

const TodoForm = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        const {value} = e.target
        setFormData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"ADD_TODO", payload: formData})
    }

    return (
        <div className="w-full justify-self-center pt-5 relative max-w-xs">
            <form
            onSubmit={handleSubmit}
             className="bg-white shadow-md rounded px-7 pt-6 pb-7 mb-4">
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="uppertext">
                    Add Todo
                </label>
                <input 
                    onChange={handleChange}
                    name="todo"
                    value={formData}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="uppertext" 
                    type="text" 
                    placeholder="Add Todo"
                    />
                </div>
                <div className="grid justify-items-stretch ">
                    <button className="border  bg-blue-400 focus:outline-none text-white focus:shadow-outline rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;