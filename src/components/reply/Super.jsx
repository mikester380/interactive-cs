import { useContext, useRef, useState } from "react"

import { ctx as global } from "../../context/global"
import { removeUsername } from "../../../utils/helpers"

import Poster from "../poster"
import Modal from "../modal"

function Super(props) {
  const { comments, setComments } = useContext(global)
  const [showEditForm, setShowEditForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const formRef = useRef()

  function controlEdit(e) {
    e.preventDefault()

    const { current } = formRef

    const host = comments.find((comment) => comment.id === props.hostId)
    const target = host.replies.find((reply) => reply.id === props.id)

    //cut out the username before updating the reply
    target.content = removeUsername(current.value)

    setComments([...comments])
    setShowEditForm(false)
  }

  function controlDelete() {
    const host = comments.find((comment) => comment.id === props.hostId)
    const target = host.replies.find((reply) => reply.id === props.id)

    host.replies = host.replies.filter((reply) => reply !== target)

    setComments([...comments])
  }

  return (
    <>
      <Poster
        content={props.content}
        created={props.createdAt}
        score={props.score}
        username={props.user.username}
        image={props.user.image.png}
        to={props.replyingTo}
        signed={true}
        showModal={() => setShowModal(true)}
        showEditForm={showEditForm}
        controlScore={props.controlScore}
        controlUnscore={props.controlUnscore}
        toggleEditForm={() => setShowEditForm(!showEditForm)}
        formRef={formRef}
        controlEdit={controlEdit}
      />
      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          controlDelete={controlDelete}
        />
      )}
    </>
  )
}

export default Super
