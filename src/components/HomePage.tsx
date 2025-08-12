"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HomePageProps {
  onNavigateToGuide: () => void;
}

export default function HomePage({ onNavigateToGuide }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative">
      {/* Logo */}
      <div className="absolute top-8 right-8">
        <Image
          src="/vietinbank.png"
          alt="VietinBank Logo"
          width={192}
          height={80}
          className="h-auto w-48"
          priority
        />
      </div>

      {/* Nội dung */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
            VIETINBANK SÔNG HÀN
            <br />
            KÍNH CHÀO QUÝ KHÁCH
          </h1>

          <Button
            onClick={onNavigateToGuide}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            HƯỚNG DẪN SỬ DỤNG DỊCH VỤ
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/30 to-transparent" />
      </div>
    </div>
  );
}
