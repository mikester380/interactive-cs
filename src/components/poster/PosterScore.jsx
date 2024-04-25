import { useState } from 'react'

import plus from '../../../assets/images/icon-plus.svg'
import minus from '../../../assets/images/icon-minus.svg'

import s from './score.module.css'

function PosterScore(props) {
  return (
    <div className={`${s.score} ${props.v ? s.v : ''}`}>
      <button className={s.btn} onClick={props.controlScore}>
        <img src={plus} alt='' />
      </button>
      <p className={s.num}>{ props.score }</p>
      <button className={s.btn} onClick={props.controlUnscore}>
        <img src={minus} alt='' />
      </button>
    </div>
  )
}

export default PosterScore