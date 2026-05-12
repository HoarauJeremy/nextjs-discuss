"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { IoLogOutOutline  } from "react-icons/io5";

export default function LogoutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }

  // return <button onClick={handleSignOut}>Se deconnecter</button>;
  return <button onClick={handleSignOut}><IoLogOutOutline size={25} /></button>;
}