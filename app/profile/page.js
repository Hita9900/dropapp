"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <main>
      <h1>Profile</h1>

      <button onClick={logout}>
        Log out
      </button>
    </main>
  );
}