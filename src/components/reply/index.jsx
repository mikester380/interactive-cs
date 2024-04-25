import { useContext, useState } from "react"
import { useTime } from "../../hooks/useTime"
import { globalStore } from "../../App"
import { saveLocally } from "../../../utils/helpers"

import Super from "./Super"
import Weak from "./Weak"

function Reply(props) {
  const { loggedInUser, comments } = useContext(globalStore)
  const [ time ] = useTime(props.reply.createdAt)
  const [scored, setScored] = useState(false)
  const signed = props.reply.user.username === loggedInUser.username

  function controlScore() {
    if (!scored) {
      props.reply.score++

      saveLocally('comments', comments)
      setScored(true)
    }
  }

  function controlUnscore() {
    if (scored) {
      props.reply.score--

      saveLocally('comments', comments)
      setScored(false)
    }
  }

  return (signed ?
    <Super {...props.reply} createdAt={time} hostId={props.hostId} controlScore={controlScore} controlUnscore={controlUnscore} /> :
    <Weak {...props.reply} createdAt={time} hostId={props.hostId} controlScore={controlScore} controlUnscore={controlUnscore} />
  )
}

export default Reply