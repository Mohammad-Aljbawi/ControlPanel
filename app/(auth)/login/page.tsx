"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    console.log("LOGIN CLICKED");
    
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(res.status);

    // if (res.ok) {
    //   router.push("/dashboard");
    //   router.refresh();
    //   return;
    // } log aotquickly after successful login, so we can see the error message if login fails

    if (res.ok) {
  window.location.href = "/dashboard";
  return;
}

    setError("Invalid username or password");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-80 space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          className="w-full border p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}