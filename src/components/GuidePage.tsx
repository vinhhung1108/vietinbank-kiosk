"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowLeft,
  CreditCard,
  GraduationCap,
  Calculator,
  FileText,
  UserPlus,
  Building2,
} from "lucide-react";

interface GuidePageProps {
  onBack: () => void;
}

export default function GuidePage({ onBack }: GuidePageProps) {
  const services = [
    {
      title: "HƯỚNG DẪN THANH TOÁN VIỆN PHÍ",
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "HƯỚNG DẪN THANH TOÁN HỌC PHÍ",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    },
    {
      title: "CÔNG CỤ TÍNH TOÁN GỐC LÃI VAY",
      icon: <Calculator className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "TRA CỨU BIỂU PHÍ",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "MỞ TÀI KHOẢN ONLINE",
      icon: <UserPlus className="w-8 h-8 text-red-600" />,
    },
    {
      title: "GIỚI THIỆU VỀ VIETINBANK SÔNG HÀN",
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative">
      {/* Logo */}
      <div className="absolute top-3 right-3 md:top-8 md:right-8">
        <Image
          src="/vietinbank.png"
          alt="VietinBank Logo"
          width={192}
          height={80}
          className="h-auto w-28 md:w-40 lg:w-48"
        />
      </div>

      {/* Back */}
      <div className="absolute top-3 left-3 md:top-8 md:left-8 z-10">
        <Button
          onClick={onBack}
          variant="outline"
          className="bg-white/80 hover:bg-white border-blue-300 text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại
        </Button>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {" "}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              HƯỚNG DẪN DỊCH VỤ
            </h1>
            <p className="text-lg text-gray-600">
              Chọn dịch vụ bạn muốn tìm hiểu
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 mx-auto md:max-w-[720px]">
            {" "}
            {services.map((service, i) => (
              <Card
                key={i}
                className="w-full max-w-[720px] p-6 lg:p-7 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 bg-gray-50 p-4 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-[20px] font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {" "}
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowLeft className="w-6 h-6 text-gray-400 rotate-180 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/30 to-transparent" />
    </div>
  );
}
