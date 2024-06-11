import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import css from './Logo.module.css'

const Logo = () => {
  return (
    <Link href={'/'} className={css.logo}>
        <Image src='/images/logo/logo-solidaria-media.webp' alt="Logo de Solidaria Media" width={92} height={92} /> 
    </Link>
  )
}

export default Logo