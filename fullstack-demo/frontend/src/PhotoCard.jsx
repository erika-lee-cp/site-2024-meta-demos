
function PhotoCard({imgUrl, caption}) {

  return (
    <div>
      <img src={imgUrl}/>
      <p>{caption}</p>
    </div>
  )
}

export default PhotoCard
