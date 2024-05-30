import { createPortal } from "react-dom"

import Layer from "../layer"
import GButton from "../gbutton"

import s from "./modal.module.css"

function Modal(props) {
  return createPortal(
    <Layer>
      <div className={s.modal}>
        <h2 className={s.title}>Delete comment</h2>
        <p className={s.caution}>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className={s.footer}>
          <GButton
            title="no, cancel"
            type="none"
            onClick={props.closeModal}
            className={s.action}
          />
          <GButton
            title="yes, delete"
            type="warn"
            className={s.action}
            onClick={props.controlDelete}
          />
        </div>
      </div>
    </Layer>,
    document.querySelector("#modal")
  )
}

export default Modal
