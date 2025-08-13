import Image from "next/image";
import { Phone } from "lucide-react"; // thêm dòng này

interface HeaderProps {
  phoneDisplay?: string; // hiển thị
  phoneDial?: string; // dùng cho tel:
}
export default function Header({
  phoneDisplay = "02363.666.130",
  phoneDial = "02363666130",
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b h-16 md:h-20">
      <div className="mx-auto max-w-6xl h-full px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo bên trái */}
        <div className="flex items-center">
          <Image
            src="/vietinbank.png"
            alt="VietinBank Logo"
            width={160}
            height={60}
            className="h-auto w-28 md:w-36 lg:w-40"
            priority
          />
        </div>

        {/* Số điện thoại bên phải */}
        <a
          href={`tel:${phoneDial}`}
          aria-label={`Gọi ${phoneDisplay}`}
          className="group inline-flex items-center gap-2 rounded-full
             bg-blue-600 text-white
             px-4 py-2.5 md:px-5 md:py-3 min-h-[44px]
             shadow-sm hover:bg-blue-700 active:bg-blue-800
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <span className="inline-flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/10">
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
          </span>
          <span className="font-semibold tracking-wide tabular-nums">
            {phoneDisplay}
          </span>
        </a>
      </div>
    </header>
  );
}
