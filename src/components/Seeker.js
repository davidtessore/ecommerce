const Seeker = () => {
    return(
        <div className="seeker">
            <input className="seeker__search" type="search" name="search" placeholder=" Buscar..."></input>
            <button className="seeker__button" type="submit">Buscar</button>
        </div>
    );
};

export default Seeker