import { useEffect, useState } from 'react'
import './App.css'
import PhotoCard from './PhotoCard'

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);


  const fetchPhotos = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/photos`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setPhotos(data);
    })
    .catch(error => {
      console.error('Error fetching photo:', error);
    });
  };

  const cards = photos.map(photo => {
    return (
    <PhotoCard
      imgUrl={photo.imgUrl}
      caption={photo.caption}
      />)
  })

  const handleCreatePhoto = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/photos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imgUrl: "https://picsum.photos/200/300?random=3",
          caption: "a brand new photo"
        }),
      }
    )
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      fetchPhotos();
    })
    .catch(error => {
      console.error('Error fetching photo:', error);
    });
  }
  return (
    <div>
      <button onClick={handleCreatePhoto}>Create</button>
      {cards}
    </div>
  )
}

export default App
