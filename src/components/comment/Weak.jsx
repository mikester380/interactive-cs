import { useRef, useContext, useState } from "react"
import { ctx as global } from "../../context/global/index"
import { ID, removeUsername } from "../../../utils/helpers"

import PosterAndForm from "../posterandform"

function Weak(props) {
  const { comments, setComments, currentUser } = useContext(global)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const formRef = useRef()

  function controlReply(e) {
    e.preventDefault()
    const { current } = formRef

    if (!current.value) {
      return
    }

    const reply = {
      content: removeUsername(current.value),
      createdAt: Date.now(),
      score: 0,
      id: ID(comments),
      replyingTo: props.user.username,
      user: currentUser,
    }

    comments.find((comment) => comment.id === props.id).replies.push(reply)

    setComments([...comments])
    setShowReplyForm(false)
  }

  return (
    <PosterAndForm
      created={props.createdAt}
      content={props.content}
      username={props.user.username}
      image={props.user.image.png}
      score={props.score}
      formHandler={controlReply}
      valueRef={formRef}
      controlScore={props.controlScore}
      controlUnscore={props.controlUnscore}
      showReplyForm={showReplyForm}
      toggleReplyForm={() => setShowReplyForm(!showReplyForm)}
    />
  )
}

export default Weak
