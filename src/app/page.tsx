"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const profile = useAuthStore((state) => state.profile);

  const handleAccessDashboard = () => {
    if (!profile?.role) return;

    if (profile.role === "Admin" || profile.role === "Guru") {
      router.push("/admin");
    } else if (profile.role === "Siswa") {
      router.push("/dashboard-siswa");
    }
  };

  return (
    <div className="bg-muted flex justify-center items-center h-screen flex-col space-y-4">
      <h1 className="text-4xl font-semibold">Welcome {profile?.name}</h1>

      <Button onClick={handleAccessDashboard} className="bg-teal-500 text-white">
        Access Dashboard
      </Button>
    </div>
  );
}
