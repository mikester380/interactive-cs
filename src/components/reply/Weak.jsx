import { useContext, useRef, useState } from "react"
import { globalStore } from "../../App"
import { getnextid, removeUsername, saveLocally } from "../../../utils/helpers"

import PosterAndForm from "../posterandform"

function Weak(props) {
  const { comments, setComments, loggedInUser } = useContext(globalStore)
  const [ showReplyForm, setShowReplyForm ] = useState(false)
  const formRef = useRef()

  function controlReply(event) {
    event.preventDefault()

    if (!formRef.current.value) return

    const target = comments.find(comment => comment.id === props.hostId)

    const reply = {
      content: removeUsername(formRef.current.value),
      createdAt: Date.now(),
      score: 0,
      id: getnextid(comments),
      replyingTo: props.user.username,
      user: loggedInUser
    }

    target.replies.push(reply)

    const current = [...comments]

    saveLocally('comments', current)

    setComments(current)
    setShowReplyForm(false)
  }
  
  return (
    <PosterAndForm
      created={props.createdAt}
      content={props.content}
      username={props.user.username}
      image={props.user.image.png}
      score={props.score}
      to={props.replyingTo}
      valueRef={formRef}
      showReplyForm={showReplyForm}
      toggleReplyForm={() => setShowReplyForm(!showReplyForm)}
      formHandler={controlReply}
      controlScore={props.controlScore}
      controlUnscore={props.controlUnscore}
    />
  )
}

export default Weak