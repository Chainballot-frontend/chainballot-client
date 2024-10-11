import HomeWrapper from '@/components/Home/HomeWrapper'
import React from 'react'
import Elections from './_components/Elections'
import { Navbar } from './_components/Navbar'

export default function page() {
  return (
   <HomeWrapper>
    <Navbar/>
    <Elections/>
   </HomeWrapper>
  )
}
