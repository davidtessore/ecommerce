const ProductCard = ({img, title, price}) => {
    return(
        <div>
            <img src={`/assets/images/${img}`} alt="Imagen Producto"/>
            <h3>{title}</h3>
            <span>$ {price}</span>
            <button>Comprar</button>
        </div>
    );
};

export default ProductCard