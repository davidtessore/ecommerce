import "./status.scss";

const Status = ({ data, messaje }) => {
    return (
        <div className="status">
            <img className="status__img" src={
                data === false
                    ? "/assets/ico/status/approved.png"
                    : "/assets/ico/status/denied.png"
            } alt="Icono status" />
            <p className="status__paragraph">{
                data === false
                    ? "¡¡¡Listo!!!"
                    : "¡¡¡Error!!!"
            }</p>
            <p className="status__paragraph">{messaje}</p>
        </div>
    );
};

export default Status;