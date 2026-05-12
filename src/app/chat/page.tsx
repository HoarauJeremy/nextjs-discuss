import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import LogoutButton from "@/components/LogoutButton";

export default function ChatPage() {
  return (
    <div className="min-w-4/5 mx-auto py-4 h-screen flex flex-col justify-between ">
      <div className="w-full flex flex-col items-end">
        <LogoutButton />
      </div>

      <div className="w-full h-full flex flex-col">
        <ChatMessages />
      </div>

      <div className="w-full">
        <ChatInput />
      </div>
    </div>
  );
}