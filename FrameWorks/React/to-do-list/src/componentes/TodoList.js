import "./TodoList.css";

const TodoList = ({tasks, removeTask}) =>{
    //retorna a lista de tarefas
    return(
        <ul>
            {/* faz o mapemaneto do vetor de tarfeas e cria um item para cada tarefa da lista */}
            {tasks.map((task, index) => (
                <li key={index}>
                    {task} <button onClick={() => removeTask(index)}>
                        Excluir
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;