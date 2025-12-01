import CustomerInformationPageWrapper from '@/components/wrappers/CustomerInformationPageWrapper'
import React from 'react'

export const metadata = {
  title: "اطلاعات مشتری - فروشگاه گالری ساعت افشاری",
  description: "مدیریت اطلاعات شخصی و پروفایل مشتری در فروشگاه گالری ساعت افشاری.",
  keywords: "پروفایل, اطلاعات مشتری, فروشگاه گالری ساعت افشاری, نمایندگی رسمی, ساعت",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerInformationPageWrapper />
  )
}

export default page