import { useContext, useState } from "react"
import { useTime } from "../../hooks/useTime"

import { ctx as global } from "../../context/global"

import Super from "./Super"
import Weak from "./Weak"

function Reply(props) {
  const { currentUser, comments, setComments } = useContext(global)
  const [time] = useTime(props.reply.createdAt)
  const [scored, setScored] = useState(false)

  const signed = props.reply.user.username === currentUser.username

  function controlScore() {
    //only allowed to score once
    if (!scored) {
      setComments((props.reply.score++, [...comments]))
      setScored(true)
    }
  }

  function controlUnscore() {
    //only allowed to unscore once
    if (scored) {
      setComments((props.reply.score--, [...comments]))
      setScored(false)
    }
  }

  return signed ? (
    <Super
      {...props.reply}
      createdAt={time}
      hostId={props.hostId}
      controlScore={controlScore}
      controlUnscore={controlUnscore}
    />
  ) : (
    <Weak
      {...props.reply}
      createdAt={time}
      hostId={props.hostId}
      controlScore={controlScore}
      controlUnscore={controlUnscore}
    />
  )
}

export default Reply
