"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HospitalFeeClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="mx-auto max-w-4xl px-6 pt-6 md:pt-8">
        <Button
          asChild
          variant="outline"
          className="bg-white/80 hover:bg-white border-blue-300 text-blue-700"
        >
          <Link href="/guide">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại
          </Link>
        </Button>
      </div>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <header className="text-center my-10 md:my-14">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            HƯỚNG DẪN THANH TOÁN VIỆN PHÍ
          </h1>
          <p className="text-gray-700 mt-3">
            Các bước thực hiện nhanh tại quầy/online.
          </p>
        </header>

        <ol className="space-y-4 text-gray-800 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow">
          <li>
            <span className="font-semibold">Bước 1:</span> Chuẩn bị mã hồ sơ/hoá
            đơn và CMND/CCCD.
          </li>
          <li>
            <span className="font-semibold">Bước 2:</span> Chọn phương thức
            thanh toán (thẻ, QR, chuyển khoản).
          </li>
          <li>
            <span className="font-semibold">Bước 3:</span> Xác nhận số tiền và
            thực hiện giao dịch.
          </li>
          <li>
            <span className="font-semibold">Bước 4:</span> Nhận biên lai điện tử
            hoặc in giấy.
          </li>
        </ol>
      </section>
    </main>
  );
}
