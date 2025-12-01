import CustomerOrdersOverviewPageWrapper from '@/components/wrappers/CustomerOrdersOverviewPageWrapper'
import React from 'react'

export const metadata = {
  title: "سفارش‌های من - فروشگاه گالری ساعت افشاری",
  description: "مشاهده و مدیریت سفارش‌های ثبت شده مشتری در فروشگاه گالری ساعت افشاری.",
  keywords: "سفارش‌ها, پروفایل, فروشگاه گالری ساعت افشاری, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerOrdersOverviewPageWrapper />
  )
}

export default page