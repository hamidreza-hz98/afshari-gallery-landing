import CartPageWrapper from '@/components/wrappers/CartPageWrapper'
import React from 'react'

export const metadata = {
  title: "سبد خرید - فروشگاه گالری ساعت افشاری",
  description: "مشاهده و مدیریت محصولات موجود در سبد خرید مشتری در فروشگاه گالری ساعت افشاری.",
  keywords: "سبد خرید, فروشگاه گالری ساعت افشاری, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CartPageWrapper />
  )
}

export default page