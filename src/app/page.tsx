"use client";
import { useRouter } from "next/navigation";
import HomePage from "@/components/HomePage";

export default function Page() {
  const router = useRouter();
  return <HomePage onNavigateToGuide={() => router.push("/guide")} />;
}
