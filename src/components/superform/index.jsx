import { useContext } from 'react'
import { globalStore } from '../../App'

import GButton from '../gbutton'

import s from './superform.module.css'
import { v_pc } from '../../App.module.css'

function SuperForm(props) {
  const { loggedInUser } = useContext(globalStore)
  return (
    <form className={s.form} onSubmit={props.onSubmit}>
      <div className={s.form_main}>
        <img src={ loggedInUser.image.png } alt="" className={`
          ${s.form_img} ${s.form_img_pc}
        `}/>
        <textarea defaultValue={props.defaultValue || ''} className={s.form_input} ref={props.valueRef} placeholder={props.placeholder} />
        <GButton title={props.formTitle} className={v_pc} onClick={props.handler} />
      </div>
      <div className={s.form_footer}>
        <img src={ loggedInUser.image.png } alt="" className={s.form_img}/>
        <GButton title={props.formTitle} onClick={props.handler} />
      </div>
    </form>
  )
}

export default SuperForm