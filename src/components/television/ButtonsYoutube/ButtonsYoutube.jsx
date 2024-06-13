import React from 'react'
import Link from 'next/link'
import { buttons } from '@/app/lib/buttonsYoutube'
import css from './ButtonsYoutube.module.css'

const ButtonsYoutube = () => {
  return (
    <div className={css.listLinks}>
      {buttons?.map(btn => (<Link href={btn.path} key={btn.id} className={css.linkBtn}>{btn.name}</Link>))}
    </div>
  )
}

export default ButtonsYoutube
