"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn("flex items-center gap-3 p-3 transition-all hover:shadow-md", todo.completed && "bg-slate-50")}
    >
      <div {...attributes} {...listeners} className="cursor-grab touch-none text-slate-400 hover:text-slate-600">
        <GripVertical className="h-5 w-5" />
      </div>

      <Checkbox id={`todo-${todo.id}`} checked={todo.completed} onCheckedChange={onToggle} />

      <label
        htmlFor={`todo-${todo.id}`}
        className={cn("flex-1 cursor-pointer text-sm font-medium", todo.completed && "text-slate-500 line-through")}
      >
        {todo.todo}
      </label>

      <Button variant="ghost" size="sm" onClick={onDelete} className="h-8 w-8 p-0 text-slate-400 hover:text-red-500">
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </Card>
  )
}

