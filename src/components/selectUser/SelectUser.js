import "./selectUser.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const SelectUser = () => {
    const
        { userData, setUserData, getUser, localUser } = useContext(UserContext),
        { name, user } = userData;

    useEffect(() => {
        getUser()
            .then((res) => { setUserData(res) })
            .catch(() => { })
            .finally(() => { })
    }, [localUser]);
    
    return (
        <div>
            <h1>seleccione usuario</h1>
            <p>nombre: {name}</p>
            <p>usuario: {user}</p>
        </div>
    );
};

export default SelectUser;