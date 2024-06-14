import './GalleryCard.css'

const GalleryCard = (info) => {
  return (
    <>
    <div className="gallery-box">
          <img src={info.image} alt="" />
        </div>
    </>
  )
}

export default GalleryCard