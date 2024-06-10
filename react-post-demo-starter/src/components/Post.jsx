import './Post.css';

function Post({name, content, numLikes}) {
  return (
    <div className="post">
      <p className="post-name">{name}</p>
      <p className="post-content">{content}</p>
      <div className="post-likes">&#x2764;&#xfe0f; {numLikes}</div>
    </div>
  )
}

export default Post;
