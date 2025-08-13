import type { Metadata } from "next";
import HospitalFeeClient from "./HospitalFeeClient";

export const metadata: Metadata = { title: "Hướng dẫn thanh toán viện phí" };

export default function Page() {
  return <HospitalFeeClient />;
}
