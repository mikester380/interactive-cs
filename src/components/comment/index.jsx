import { useContext, useState } from "react"
import { useTime } from "../../hooks/useTime"

import { ctx as global } from "../../context/global"

import Super from "./Super"
import Weak from "./Weak"
import Reply from "../reply"
import s from "./comment.module.css"

function Comment(props) {
  const { currentUser, comments, setComments } = useContext(global)
  const [time] = useTime(props.comment.createdAt)

  const [scored, setScored] = useState(false)
  const signed = props.comment.user.username === currentUser.username

  function controlScore() {
    //only allowed to score once
    if (!scored) {
      setComments((props.comment.score++, [...comments]))
      setScored(true)
    }
  }

  function controlUnscore() {
    //only allowed to unscore once
    if (scored) {
      setComments((props.comment.score--, [...comments]))
      setScored(false)
    }
  }

  return (
    <div className={s.comment}>
      {signed ? (
        <Super
          {...props.comment}
          createdAt={time}
          controlScore={controlScore}
          controlUnscore={controlUnscore}
        />
      ) : (
        <Weak
          {...props.comment}
          createdAt={time}
          controlScore={controlScore}
          controlUnscore={controlUnscore}
        />
      )}
      {props.comment.replies.length > 0 && (
        <div className={s.replies}>
          {props.comment.replies.map((reply) => (
            <Reply
              key={reply.id}
              reply={reply}
              hostId={props.comment.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment
