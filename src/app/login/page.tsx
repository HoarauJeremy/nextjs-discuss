"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { PacmanLoader } from "react-spinners";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [type, setType] = useState('password');

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      console.log(error);
      setLoading(false);
    } else {
      router.push("/chat");
    }
  }
  
  const handleToggle = () => {
    if (type==='password'){
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <div className="mx-auto justify-center flex items-center w-1/2 h-screen">
      <form className="flex flex-col px-2.5 w-2/3 h-1/2" onSubmit={handleSubmit}>
        <input
          className="bg-zinc-800 ring ring-zinc-700 p-2.5 mb-2.5 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-white"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          />
        <div className="mb-2.5 flex">
          <input
            className="w-11/12 bg-zinc-800 ring-zinc-700 p-2.5 rounded-md focus:outline-2 focus:outline-offset-2 dark:focus:outline-white"
            type={type}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-1/12 flex justify-center cursor-pointer">
            <span className="w-10 bg-zinc-800 flex items-center justify-center rounded-md ring-1 ring-zinc-700 focus:outline-2 focus:outline-offset-2 focus:outline-white" onClick={handleToggle}>
              <FaRegEye />
            </span>
          </div>
        </div>
        <button className="bg-zinc-800 ring-zinc-700 p-2.5 mb-2.5 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-white dark:hover:bg-white dark:hover:text-zinc-950 transition delay-150 duration-300 ease-in-out" type="submit" disabled={loading}>
          {loading ? <PacmanLoader className="mx-auto" color="white" /> : "Se connecter"}
        </button>
      </form>
    </div>
  );
}