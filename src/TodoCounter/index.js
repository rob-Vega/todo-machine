import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos}
    </h2>
  );
}

export { TodoCounter };
