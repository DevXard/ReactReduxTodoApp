import TodoForm from './components/form/TodoForm';
import TodoList from './components/todoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="grid justify-items-stretch ">
      
        <TodoForm />
        <TodoList />
    </div>
  );
}

export default App;
