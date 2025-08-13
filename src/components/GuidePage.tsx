"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  CreditCard,
  GraduationCap,
  Calculator,
  FileText,
  UserPlus,
  Building2,
} from "lucide-react";
import Image from "next/image";

interface GuidePageProps {
  onBack: () => void;
}

export default function GuidePage({ onBack }: GuidePageProps) {
  const services = [
    {
      title: "HƯỚNG DẪN THANH TOÁN VIỆN PHÍ",
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      href: "/guide/hospital-fee",
    },
    {
      title: "HƯỚNG DẪN THANH TOÁN HỌC PHÍ",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      href: "/guide/tuition-fee",
    },
    {
      title: "CÔNG CỤ TÍNH TOÁN GỐC LÃI VAY",
      icon: <Calculator className="w-8 h-8 text-purple-600" />,
      href: "/guide/loan-calculator",
    },
    {
      title: "TRA CỨU BIỂU PHÍ",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      href: "/guide/fees",
    },
    {
      title: "MỞ TÀI KHOẢN ONLINE",
      icon: <UserPlus className="w-8 h-8 text-red-600" />,
      href: "/guide/open-account",
    },
    {
      title: "GIỚI THIỆU VỀ VIETINBANK SÔNG HÀN",
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      href: "/guide/about",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Nền ảnh mờ + lớp phủ sáng để tăng tương phản */}
      <Image
        src="/background_songhan.webp"
        alt=""
        fill
        sizes="100vw"
        draggable={false}
        className="pointer-events-none select-none object-cover blur-sm md:blur lg:blur-lg scale-105 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/45 to-white/25" />

      {/* Hàng nút Back (không absolute, không chồng Header) */}
      <div className="mx-auto max-w-6xl px-6 pt-6 md:pt-8 mb-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="bg-white/80 hover:bg-white border-blue-300 text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại
        </Button>
      </div>

      {/* Phần tiêu đề */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            HƯỚNG DẪN DỊCH VỤ
          </h1>
          <p className="text-lg text-gray-700">
            Chọn dịch vụ bạn muốn tìm hiểu
          </p>
        </div>

        {/* Danh sách dịch vụ – gọn trên desktop */}
        <div className="grid gap-6 md:gap-8 mx-auto w-full md:max-w-[720px] lg:max-w-[840px]">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              aria-label={service.title}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded-2xl"
            >
              <Card
                className="w-full rounded-2xl p-6 lg:p-7 bg-white/80 backdrop-blur-sm border-0 shadow-lg
                           transition duration-300 hover:shadow-xl hover:scale-[1.01]
                           cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 bg-gray-50 p-3 md:p-4 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-[20px] font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowLeft className="w-6 h-6 text-gray-400 rotate-180 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* khoảng đệm đáy nhỏ */}
      <div className="h-10 md:h-16" />
    </main>
  );
}
