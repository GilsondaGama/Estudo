import { api } from "./server/axios"
import { useQuery, useMutation, useQueryClient } from "react-query"

import "./App.css"

interface Todo {
  id: number
  title: string
  completed: boolean
}

export function App() {
  const { data, isLoading } = useQuery("todos", async () => {
    const response = await api.get<Todo[]>("/todos")  
    return response.data
  })

  const queryClient =  useQueryClient()

  const mutation = useMutation({
    mutationFn: async (todo: Todo) => {
      const response = await api.put<Todo>(`/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      })
      return response.data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('todos')
    }
  })

  if (isLoading) {
    return <div className="loading">carregando...</div>
  } 
  

  return (
    <div className="app-container">
      <div className="todos">
        <h2>Todos & React Query</h2>

        {data?.map((todo) => (
          <div
            onClick={() => mutation.mutate(todo)}
            className={`todo ${todo.completed && "todo-completed"}`}
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}
