"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HomePageProps {
  onNavigateToGuide: () => void;
}

export default function HomePage({ onNavigateToGuide }: HomePageProps) {
  return (
    <main className="relative">
      {/* Hero: full-bleed background */}
      <section
        className="
          relative w-full
          min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-80px)]
          overflow-hidden
        "
      >
        {/* Ảnh nền phủ toàn bộ */}
        <Image
          src="/background_songhan.webp"
          alt="Đà Nẵng"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Overlay nhẹ để chữ/nút nổi hơn */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

        {/* Nội dung giữa ảnh – nhích lên để tránh mảng họa tiết */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center
                     gap-6 sm:gap-7 translate-y-[-24%] md:translate-y-[-28%] lg:translate-y-[-32%]"
        >
          <h1 className="font-bold leading-tight text-blue-800 drop-shadow-sm text-2xl sm:text-3xl md:text-5xl">
            VIETINBANK SÔNG HÀN
            <span className="block">KÍNH CHÀO QUÝ KHÁCH</span>
          </h1>

          <Button
            aria-label="Xem hướng dẫn dịch vụ"
            onClick={onNavigateToGuide}
            className="bg-green-600 hover:bg-green-700 text-white
                       px-8 sm:px-8 md:px-10 py-4 md:py-6
                       text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl transition"
          >
            HƯỚNG DẪN DỊCH VỤ
          </Button>
        </div>
      </section>
    </main>
  );
}
