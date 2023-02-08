import './index.css'

const CommentItem = props => {
  const {eachitem, onLikeClick, ondeleteClick} = props
  const {id, username, userComment, likeBtn, randommbgC} = eachitem

  const likedUrl = likeBtn
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const toggileLike = likeBtn ? 'like-para' : ''

  const onlikeclickBtn = () => {
    onLikeClick(id)
  }

  const ondelBtnclick = () => {
    ondeleteClick(id)
  }

  return (
    <li className="comment-item-container">
      <div className="comment-inform-con">
        <div className={`name-symbol ${randommbgC}`}>
          <p className="para-symbol">{username[0]}</p>
        </div>
        <div className="name-container">
          <div className="name-time">
            <div>
              <h1 className="username-style">{username}</h1>
            </div>
            <div>
              <p>less than a minute ago</p>
            </div>
          </div>
          <p>{userComment}</p>
        </div>
      </div>
      <div className="like-del-container">
        <div className="like-con">
          <button type="button" className="like-btn" onClick={onlikeclickBtn}>
            <img src={likedUrl} alt="like" />
          </button>
          <p className={toggileLike}>Like</p>
        </div>

        <div className="del-con">
          <button
            type="button"
            className="del-btn"
            onClick={ondelBtnclick}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
