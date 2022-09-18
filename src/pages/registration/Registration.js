import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import FormUser from "../../components/forms/FormUser";
import SelectUser from "../../components/selectUser/SelectUser";

const Registration = () => {
    const { localUser } = useContext(UserContext);

    return (
        <>
            {
                localUser === false
                    ? <FormUser />
                    : <SelectUser />
            }
        </>
    );
};

export default Registration;