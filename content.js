import React,{useEffect,useState} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './content.module.css';
export default function Content(props){
  useEffect(()=>{console.log(props)})
  const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
return(
   <ImageGallery originalClass={`${styles.image}`} useTranslate3D infinite showNav={false} useTranslate3D autoPlay={true} slideDuration={600} fullscreen items={images} />
)
}
