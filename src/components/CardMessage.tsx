"use client";

import Message from "@/types/Message";
import { FaTrash } from "react-icons/fa";

export default function CardMessage({
  m,
  userId,
}: {
  m: Message;
  userId: string | undefined;
}) {
  const isOwn = m.userId === userId;

  async function deleteMessage(_id: string, userId: string | undefined) {
    const request = await fetch("/api/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, userId }),
    });
    if (!request.ok) {
      const data = await request.json();
      console.log(data);
    }
  }

  function handleClick() {
    deleteMessage(m._id, userId);
  }

  return (
    <div
      key={m._id}
      className={`flex flex-col rounded-md ${isOwn ? "items-end" : "items-start"}`}
    >
      <div className={`flex flex-col rounded-md shadow ring ${isOwn ? "items-end bg-zinc-900 shadow-zinc-800 ring-zinc-800" : "items-start bg-zinc-800 shadow-zinc-700 ring-zinc-700"} rounded  w-1/3 h-auto p-2`}>
        <p>{m.content}</p>
        <span className="flex flex-row">      
          {!isOwn && <p>{m.userName} - </p>} 
          <p>{new Date(m.createdAt).toLocaleTimeString("fr-FR")}</p>        
          {isOwn && (
            <button className="mx-2" onClick={handleClick}>
              <FaTrash />
            </button>
          )}
        </span>
      </div>
    </div>
  );
}