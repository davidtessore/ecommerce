import "./error404.scss"

const Error404 = () => {
    return (
        <section className="error404">
            <div className="error404__containerImg">
                <img className="error404__img1" src="assets/ico/error/error4041.png" alt="Imagen error" />
                <img className="error404__img2" src="assets/ico/error/error4042.png" alt="Imagen error" />
            </div>
            <div className="error404__containerTitle">
                <p className="error404__title">Error 404!!!<br />Page... not Found?</p>
            </div>
        </section>
    );
};

export default Error404;