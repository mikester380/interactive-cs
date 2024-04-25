import { useContext } from 'react'
import { globalStore } from '../../App'

import Comment from '../comment'

import { sortComments } from '../../../utils/helpers'

import s from './comments.module.css'

function Comments() {
  const { comments } = useContext(globalStore)

  return (
    <div className={s.comments}>
      { sortComments(comments).map(comment => <Comment key={comment.id} comment={comment} />) }
    </div>
  )
}

export default Comments
