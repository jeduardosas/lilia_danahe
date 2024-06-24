import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [
    {
      original:'/img/originals/1.webp',
      thumbnail:'/img/thumbnails/small_1.webp'
    },
    {
      original:'/img/originals/2.webp',
      thumbnail:'/img/thumbnails/small_2.webp'
    },
    {
      original:'/img/originals/3.webp',
      thumbnail:'/img/thumbnails/small_3.webp'
    },
    {
      original:'/img/originals/4.webp',
      thumbnail:'/img/thumbnails/small_4.webp'
    },
    {
      original:'/img/originals/5.webp',
      thumbnail:'/img/thumbnails/small_5.webp'
    },
    {
      original:'/img/originals/6.webp',
      thumbnail:'/img/thumbnails/small_6.webp'
    },
    {
      original:'/img/originals/7.webp',
      thumbnail:'/img/thumbnails/small_7.webp'
    },
    {
      original:'/img/originals/8.webp',
      thumbnail:'/img/thumbnails/small_8.webp'
    },
  ];

  

  return(
    <div style={{width:'95vw',margin:'auto'}}>
      <h3 className='slider-title'>Galeria </h3>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={false}
        showNav={false}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  )
};

export default Slider;
