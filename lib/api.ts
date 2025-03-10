export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface TodosResponse {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export async function getUserTodos(userId: number): Promise<TodosResponse> {
  const response = await fetch(`https://dummyjson.com/users/${userId}/todos`)

  if (!response.ok) {
    throw new Error("Failed to fetch todos")
  }

  return response.json()
}

export async function getUserData(userId: number) {
  const response = await fetch(`https://dummyjson.com/users/${userId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch user data")
  }

  return response.json()
}

