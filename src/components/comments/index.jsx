import { useContext } from "react"

import { ctx as global } from "../../context/global"
import { sortComments } from "../../../utils/helpers"

import Comment from "../comment"
import s from "./comments.module.css"

function Comments() {
  const { comments } = useContext(global)

  return (
    <div className={s.comments}>
      {sortComments(comments).map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  )
}

export default Comments
