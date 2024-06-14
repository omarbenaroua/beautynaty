import './Gallery.css'
import {Title, GalleryCard} from "../../components/index"
import GalleryImg from '../../Data/GalleryData'

const Gallery = () => {
  const GalleryInfo = GalleryImg.map((info)=>{
    return(
    <GalleryCard   
    key ={info.id}
    image ={info.image}
    />
  )})
  return (
    <>
    <Title>Gallery</Title>
    <div className="gallery" id="gallery">
      <div className="imgs-container">
        {GalleryInfo}
      </div>
    </div>
    </>
  )
}
export default Gallery