import "./logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo">
            <Link to={"/"}><img className="logo__img" src="/assets/ico/logo.png" alt="logo"/></Link>
            <h1 className="logo__title">Technology Center</h1>
        </div>
    );
};

export default Logo;