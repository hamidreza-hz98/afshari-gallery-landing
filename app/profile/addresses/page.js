import CustomerAddressPageWrapper from '@/components/wrappers/CustomerAddressPageWrapper'
import React from 'react'

export const metadata = {
  title: "آدرس‌های من - فروشگاه گالری ساعت افشاری",
  description: "مدیریت و ویرایش آدرس‌های ثبت شده مشتری در فروشگاه گالری ساعت افشاری.",
  keywords: "آدرس‌ها, پروفایل, فروشگاه گالری ساعت افشاری, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerAddressPageWrapper />
  )
}

export default page