import s from "./header.module.css"

import PosterAction from "./PosterAction"

import update from "../../../assets/images/icon-edit.svg"
import trash from "../../../assets/images/icon-delete.svg"
import reply from "../../../assets/images/icon-reply.svg"

function PosterHeader(props) {
  return (
    <div className={s.header}>
      <img
        src={props.image}
        alt=""
        className={s.img}
      />
      <p className={s.username}>
        <span>{props.username}</span>
        {props.signed && <span className={s.tag}>you</span>}
      </p>
      <p className={s.created}>{props.created}</p>
      <div className={s.actions}>
        {props.signed && (
          <PosterAction
            title="Edit"
            icon={update}
            handler={props.toggleEditForm}
          />
        )}
        {props.signed && (
          <PosterAction
            title="Delete"
            icon={trash}
            danger={true}
            handler={props.showDeleteModal}
          />
        )}
        {!props.signed && (
          <PosterAction
            title="Reply"
            icon={reply}
            handler={props.toggleReply}
          />
        )}
      </div>
    </div>
  )
}

export default PosterHeader
