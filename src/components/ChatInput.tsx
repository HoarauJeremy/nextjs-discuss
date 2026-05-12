"use client";

import { useState } from "react";
import { VscSend } from "react-icons/vsc";

export default function ChatInput() {
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    const request = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (request.ok) {
      e.target.reset();
    }
  }

  return (
    <div className="p-2 mx-auto w-1/2 h-20 bg-zinc-900 ring ring-zinc-800 rounded-md flex items-center">
      <form className="w-full flex flex-row items-center justify-between" onSubmit={handleSubmit}>
        <div className="min-w-11/12">
          <input
            className="w-full p-2.5 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-white"
            type="text"
            placeholder="Votre Message..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="w-1/12 flex justify-center">
          <button className="w-9 h-9 bg-zinc-700 flex items-center justify-center rounded-md ring-1 ring-zinc-600 focus:outline-2 focus:outline-offset-2 focus:outline-white" type="submit"><VscSend /></button>
        </div>
      </form>
    </div>
  );
}