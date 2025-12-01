import PaymentResultPageWrapper from '@/components/wrappers/PaymentResultPageWrapper'
import React from 'react'

export const metadata = {
  title: "نتیجه پرداخت - فروشگاه گالری ساعت افشاری",
  description: "نمایش نتیجه تراکنش و پرداخت مشتری در فروشگاه گالری ساعت افشاری.",
  keywords: "پرداخت, نتیجه تراکنش, فروشگاه گالری ساعت افشاری, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <PaymentResultPageWrapper />
  )
}

export default page