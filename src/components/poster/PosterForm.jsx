import GButton from "../gbutton"

import s from './form.module.css'

function PosterForm(props) {
  return (
    <form className={s.form}>
      <textarea className={s.input} ref={props.formRef} defaultValue={props.to ? `@${props.to}, ${props.content}` : `${props.content}`} />
      <GButton title='Update' className={s.btn} onClick={props.handler} />
    </form>
  )
}

export default  PosterForm