import LoginForm from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Premium Todo App",
  description: "Login to access your todos",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Premium Todo</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to manage your tasks</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

