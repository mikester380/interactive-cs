import { useContext, useState, useRef } from "react"
import { ctx as global } from "../../context/global"

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
    comments.find((c) => c.id === props.id).content = current.value

    setComments([...comments])
    setShowEditForm(false)
  }

  function controlDelete() {
    setComments([
      ...comments.filter(
        (comment) =>
          comment !== comments.find((comment) => comment.id === props.id)
      ),
    ])
  }

  return (
    <>
      <Poster
        content={props.content}
        created={props.createdAt}
        username={props.user.username}
        image={props.user.image.png}
        score={props.score}
        signed={true}
        showEditForm={showEditForm}
        toggleEditForm={() => setShowEditForm(!showEditForm)}
        showModal={() => setShowModal(true)}
        controlEdit={controlEdit}
        controlScore={props.controlScore}
        controlUnscore={props.controlUnscore}
        formRef={formRef}
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
