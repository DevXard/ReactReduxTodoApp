import {useDispatch} from 'react-redux';

const Todo = ({data}) =>{
    const dispatch = useDispatch();

    const handleDelete = () => dispatch({type:"DELETE", payload: data.id})
    return (
        <div className="shadow-md rounded p-3 relative ">
            <p>{data.payload}</p>
            <button onClick={handleDelete} className="absolute  top-3 right-5 bg-red-300 px-2 rounded-md">Del</button>
        </div>
    )
}

export default Todo;