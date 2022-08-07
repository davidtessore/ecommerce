import "./gallery.scss";

const Gallery = ({ data }) => {
    const { img1, img2, img3, img4, img5, } = data;

    return (
        <div className="gallery">
            <img className="gallery__img" src={`/assets/images/${img1}`} alt="Imagen Producto" />
            <img className="gallery__img" src={`/assets/images/${img2}`} alt="Imagen Producto" />
            <img className="gallery__img" src={`/assets/images/${img3}`} alt="Imagen Producto" />
            <img className="gallery__img" src={`/assets/images/${img4}`} alt="Imagen Producto" />
            <img className="gallery__img" src={`/assets/images/${img5}`} alt="Imagen Producto" />
        </div>
    );
};

export default Gallery;