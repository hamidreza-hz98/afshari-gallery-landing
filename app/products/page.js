import ProductsOverviewPageWrapper from '@/components/wrappers/ProductsOverviewPageWrapper'
import React from 'react'

export const metadata = {
  title: "محصولات - فروشگاه گالری ساعت افشاری",
  description: "مرور کلی محصولات فروشگاه گالری ساعت افشاری، نمایندگی رسمی ساعت‌های برند روز.",
  keywords: "محصولات, فروشگاه گالری ساعت افشاری, ساعت, برند روز, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <ProductsOverviewPageWrapper />
  )
}

export default page