import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    btnClick: false,
    enterName: '',
    enterComm: '',
    commentList: [],
    commCount: 0,
  }

  onNameChange = event => {
    this.setState({enterName: event.target.value})
  }

  onCommentChange = event => {
    this.setState({enterComm: event.target.value})
  }

  onAddcomment = event => {
    event.preventDefault()
    const {enterName, enterComm} = this.state
    const l = initialContainerBackgroundClassNames.length - 1
    const index = Math.ceil(Math.random() * l)
    const colorbg = initialContainerBackgroundClassNames[index]
    const newComment = {
      id: uuidv4(),
      username: enterName,
      userComment: enterComm,
      randommbgC: colorbg,
      likeBtn: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      btnClick: true,
      enterName: '',
      enterComm: '',
      commCount: prevState.commCount + 1,
    }))
  }

  onLikeClick = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, likeBtn: !eachComment.likeBtn}
        }
        return eachComment
      }),
    }))
  }

  ondeleteClick = id => {
    const {commentList} = this.state
    const updatedList = commentList.filter(eachone => eachone.id !== id)
    this.setState({commentList: updatedList})
  }

  render() {
    const {btnClick, commentList, enterName, enterComm, commCount} = this.state

    return (
      <div className="commentapp-container">
        <div className="comment-card">
          <div className="container-1">
            <h1 className="main-heading">Comments</h1>
            <p>say something about 4.0 technologies</p>
            <form onSubmit={this.onAddcomment}>
              <input
                type="text"
                className="text-input-ele"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={enterName}
              />
              <div className="textarea-con">
                <textarea
                  cols="50"
                  rows="8"
                  className="text-area-ele"
                  placeholder="Your Comment"
                  onChange={this.onCommentChange}
                  value={enterComm}
                />
              </div>

              <button type="submit" className="add-button">
                Add Comments
              </button>
            </form>
          </div>
          <div className="container-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <div className="comment-box">
          <div className="num-comments-con">
            <p className="count-para">{commCount}</p>
          </div>
          <p className="comment-para">comments</p>
        </div>
        <div>
          <ul>
            {btnClick
              ? commentList.map(eachitem => (
                  <CommentItem
                    eachitem={eachitem}
                    key={eachitem.id}
                    onLikeClick={this.onLikeClick}
                    ondeleteClick={this.ondeleteClick}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
