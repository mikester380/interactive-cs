import { useContext } from "react"
import { ctx as global } from "../../context/global/index"

import GButton from "../gbutton"

import s from "./superform.module.css"
import { v_pc } from "../../App.module.css"

function SuperForm(props) {
  const { currentUser } = useContext(global)
  return (
    <form
      className={s.form}
      onSubmit={props.onSubmit}
    >
      <div className={s.form_main}>
        <img
          src={currentUser.image.png}
          alt=""
          className={`
          ${s.form_img} ${s.form_img_pc}
        `}
        />
        <textarea
          defaultValue={props.defaultValue || ""}
          className={s.form_input}
          ref={props.valueRef}
          placeholder={props.placeholder}
        />
        <GButton
          title={props.formTitle}
          className={v_pc}
          onClick={props.handler}
        />
      </div>
      <div className={s.form_footer}>
        <img
          src={currentUser.image.png}
          alt=""
          className={s.form_img}
        />
        <GButton
          title={props.formTitle}
          onClick={props.handler}
        />
      </div>
    </form>
  )
}

export default SuperForm
