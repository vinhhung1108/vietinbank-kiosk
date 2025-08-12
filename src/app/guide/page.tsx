"use client";
import { useRouter } from "next/navigation";
import GuidePage from "@/components/GuidePage";

export default function Guide() {
  const router = useRouter();
  return <GuidePage onBack={() => router.push("/")} />;
}
