import "./loading.scss";

const Loading = () => {
    return (
        <div className="loading">
            <img className="loading__img" src="assets/ico/loading/loading.png" alt="Logo loading" />
            <p className="loading__paragraph">Por Favor, Espere!!!</p>
        </div>
    );
};

export default Loading;