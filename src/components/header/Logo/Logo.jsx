import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import css from './Logo.module.css'

const Logo = () => {
  return (
    <Link href={'/'} className={css.logo}>
        <Image src='/images/logo/logo-solidaria-tv.webp' alt="Logo de Solidaria Media" width={112} height={70} /> 
    </Link>
  )
}

export default Logo