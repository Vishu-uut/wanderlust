"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import TodoList from "@/components/todo-list"
import { Button } from "@/components/ui/button"
import { LogOut, Loader2 } from "lucide-react"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")

    if (!token || !userId) {
      router.push("/")
      return
    }

    // Fetch user data and todos
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`https://dummyjson.com/users/${userId}`)
        const userData = await userResponse.json()
        setUser(userData)

        const todosResponse = await fetch(`https://dummyjson.com/users/${userId}/todos`)
        const todosData = await todosResponse.json()
        setTodos(todosData.todos || [])
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 my-4 borderwidht-2">
          <h1 className="text-xl font-bold text-slate-900">Premium Todo</h1>
          {user && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">Your Tasks</h2>
        <TodoList initialTodos={todos} />
      </main>
    </div>
  )
}

