"use client"

import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  return (
    <div>
      <h1>Login</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => {
                localStorage.setItem("loggedIn", "true") // ist immer true trotzdem, da es nur eine Demo ist
                router.push("/dashboard")}}>
        Login
      </button>
    </div>
  )
}